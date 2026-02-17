"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { FaArrowLeft, FaMapMarkerAlt, FaUser, FaCheckCircle, FaClock, FaPhone, FaCalendarAlt, FaEdit, FaPaperPlane, FaTag, FaMoneyBillWave } from "react-icons/fa";
import { DayPicker } from "react-day-picker";
import { format } from "date-fns";
import { id } from "date-fns/locale";

// URL API Dashboard
const DASHBOARD_API_URL = "http://localhost:3001/api/bookings";
const PACKAGES_API_URL = "http://localhost:3001/api/packages";
const VOUCHER_CHECK_URL = "http://localhost:3001/api/vouchers/check";

interface Package {
    id: string;
    name: string;
    price: number;
    description?: string;
}

interface Voucher {
    code: string;
    discountType: "PERCENTAGE" | "FIXED";
    discountValue: number;
}

export default function BookingPage() {
    const [formData, setFormData] = useState({
        name: "",
        date: "",
        startTime: "",
        endTime: "",
        venue: "",
        phoneNumber: "",
    });

    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState("");
    const [isSuccess, setIsSuccess] = useState(false);
    const [isReviewing, setIsReviewing] = useState(false);
    const [showConfirmDialog, setShowConfirmDialog] = useState(false);
    const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined);

    // Pricing & Voucher State
    const [selectedPackage, setSelectedPackage] = useState<Package | null>(null);
    const [voucherCode, setVoucherCode] = useState("");
    const [appliedVoucher, setAppliedVoucher] = useState<Voucher | null>(null);
    const [checkingVoucher, setCheckingVoucher] = useState(false);
    const [voucherError, setVoucherError] = useState("");

    // Fetch Default Package on Mount
    useEffect(() => {
        const fetchPackages = async () => {
            try {
                const res = await fetch(PACKAGES_API_URL);
                if (res.ok) {
                    const packages: Package[] = await res.json();
                    // Find default or take the first one
                    const defaultPkg = packages.find((p: any) => p.isDefault) || packages[0];
                    if (defaultPkg) setSelectedPackage(defaultPkg);
                }
            } catch (err) {
                console.error("Failed to fetch packages:", err);
            }
        };
        fetchPackages();
    }, []);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
        setError("");
    };

    const handleDateSelect = (date: Date | undefined) => {
        setSelectedDate(date);
        if (date) {
            setFormData({ ...formData, date: format(date, "yyyy-MM-dd") });
        }
    };

    const handleVoucherCheck = async () => {
        if (!voucherCode.trim()) return;
        setCheckingVoucher(true);
        setVoucherError("");
        setAppliedVoucher(null);

        try {
            const res = await fetch(VOUCHER_CHECK_URL, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ code: voucherCode }),
            });

            if (!res.ok) {
                const data = await res.json();
                throw new Error(data.message || "Voucher tidak valid");
            }

            const voucher = await res.json();
            setAppliedVoucher(voucher);
        } catch (err: any) {
            setVoucherError(err.message);
        } finally {
            setCheckingVoucher(false);
        }
    };

    // Calculate Totals
    const basePrice = selectedPackage?.price || 0;
    let discountAmount = 0;
    if (appliedVoucher) {
        if (appliedVoucher.discountType === "PERCENTAGE") {
            discountAmount = (basePrice * appliedVoucher.discountValue) / 100;
        } else {
            discountAmount = appliedVoucher.discountValue;
        }
    }
    const finalPrice = Math.max(0, basePrice - discountAmount);

    const handleReview = (e: React.FormEvent) => {
        e.preventDefault();

        // Basic Validation
        if (!formData.name || !formData.date || !formData.startTime || !formData.endTime || !formData.venue || !formData.phoneNumber) {
            setError("Mohon lengkapi semua kolom.");
            return;
        }

        setError("");
        setIsReviewing(true);
    };

    const handleProcessBooking = async () => {
        setIsLoading(true);
        setError("");
        setShowConfirmDialog(false);

        try {
            const payload = {
                ...formData,
                packageId: selectedPackage?.id,
                voucherCode: appliedVoucher?.code,
                totalPrice: finalPrice,
            };

            const response = await fetch(DASHBOARD_API_URL, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(payload),
            });

            if (!response.ok) {
                let errorMessage = "Gagal melakukan booking";
                try {
                    const data = await response.json();
                    errorMessage = data.message || errorMessage;
                } catch (e) {
                    console.error("Failed to parse error response:", e);
                    errorMessage = `Terjadi kesalahan pada server (${response.status}). Pastikan server Dashboard berjalan.`;
                }
                throw new Error(errorMessage);
            }

            setIsSuccess(true);
        } catch (err: any) {
            console.error(err);
            setError(err.message || "Gagal terhubung ke server.");
            setIsReviewing(false);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-stone-50 py-8 px-2 sm:px-6 lg:px-8 flex items-center justify-center font-sans">
            <div className="max-w-6xl w-full bg-white p-6 sm:p-8 rounded-3xl shadow-2xl overflow-hidden relative">
                {/* Header */}
                <div className="flex flex-col md:flex-row items-center justify-between border-b pb-6 mb-8 gap-4">
                    <Link href="/" className="text-amber-950 hover:text-amber-700 flex items-center gap-2 font-medium self-start md:self-center transition-colors">
                        <FaArrowLeft /> Kembali
                    </Link>
                    <div className="text-center">
                        <h1 className="text-3xl font-extrabold text-gray-900 tracking-tight">
                            Foxo Wedding
                        </h1>
                        <p className="mt-1 text-sm text-gray-500">
                            Booking jadwal pernikahan impianmu.
                        </p>
                    </div>
                    <div className="w-20 hidden md:block"></div>
                </div>

                {error && !isSuccess && !showConfirmDialog && (
                    <div className="bg-red-50 text-red-700 p-4 rounded-xl text-sm border border-red-200 shadow-sm mb-6">
                        {error}
                    </div>
                )}

                {/* Main Content Area */}
                {!isReviewing ? (
                    /* FORM VIEW */
                    <form onSubmit={handleReview}>
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                            {/* Left Column: Calendar */}
                            <div className="lg:col-span-5 flex flex-col">
                                <div className="bg-amber-50/50 rounded-2xl p-6 border border-amber-100 h-full flex flex-col justify-center items-center">
                                    <label className="block text-xl font-bold text-amber-900 mb-6 text-center">
                                        Pilih Tanggal Acara
                                    </label>
                                    <div className="bg-white rounded-xl p-4 text-black shadow-sm w-full flex justify-center">
                                        <DayPicker
                                            mode="single"
                                            selected={selectedDate}
                                            onSelect={handleDateSelect}
                                            locale={id}
                                            showOutsideDays
                                            captionLayout="dropdown"
                                            fromYear={new Date().getFullYear()}
                                            toYear={new Date().getFullYear() + 5}
                                            disabled={{ before: new Date() }}
                                            modifiersClassNames={{
                                                selected: 'bg-amber-900 text-white rounded-full hover:bg-amber-800 font-bold',
                                                today: 'text-amber-600 font-bold underline decoration-2',
                                            }}
                                            style={{
                                                '--rdp-accent-color': '#000000',
                                                '--rdp-background-color': '#f3f4f6',
                                            } as React.CSSProperties}
                                            styles={{
                                                caption: { color: '#000000', fontWeight: '800', fontSize: '1.2rem' },
                                                caption_label: { color: '#000000' },
                                                head_cell: { color: '#000000', fontWeight: "700", fontSize: '1rem' },
                                                day: { color: '#000000', margin: "2px", width: "40px", height: "40px", fontSize: "1rem" },
                                                table: { fontSize: '1rem' },
                                                nav_button: { color: '#000000' },
                                                nav_icon: { color: '#000000' }
                                            }}
                                            className="p-2"
                                        />
                                    </div>
                                    {selectedDate ? (
                                        <div className="mt-6 text-center w-full">
                                            <p className="text-xs text-amber-800 uppercase tracking-widest font-semibold mb-1">Tanggal Dipilih</p>
                                            <p className="text-lg text-amber-900 font-bold bg-amber-100 py-3 px-4 rounded-xl shadow-sm inline-block">
                                                {format(selectedDate, "eeee, dd MMMM yyyy", { locale: id })}
                                            </p>
                                        </div>
                                    ) : (
                                        <p className="mt-6 text-amber-700/60 text-sm italic">
                                            *Silakan pilih tanggal pada kalender
                                        </p>
                                    )}
                                </div>
                            </div>

                            {/* Right Column: Inputs */}
                            <div className="lg:col-span-7 flex flex-col justify-center space-y-6">
                                {/* Nama */}
                                <div>
                                    <label htmlFor="name" className="block text-sm font-bold text-gray-700 mb-2">Nama Calon Pengantin</label>
                                    <div className="relative group">
                                        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                            <FaUser className="text-gray-400 group-focus-within:text-amber-600 transition-colors" />
                                        </div>
                                        <input
                                            id="name"
                                            name="name"
                                            type="text"
                                            required
                                            className="block w-full pl-11 px-4 py-3.5 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 placeholder-gray-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-amber-500/50 focus:border-amber-500 transition-all duration-200"
                                            placeholder="Nama Lengkap Pasangan"
                                            value={formData.name}
                                            onChange={handleChange}
                                        />
                                    </div>
                                </div>

                                {/* No. WhatsApp */}
                                <div>
                                    <label htmlFor="phoneNumber" className="block text-sm font-bold text-gray-700 mb-2">No. WhatsApp (Aktif)</label>
                                    <div className="relative group">
                                        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                            <FaPhone className="text-gray-400 group-focus-within:text-amber-600 transition-colors" />
                                        </div>
                                        <input
                                            id="phoneNumber"
                                            name="phoneNumber"
                                            type="tel"
                                            required
                                            className="block w-full pl-11 px-4 py-3.5 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 placeholder-gray-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-amber-500/50 focus:border-amber-500 transition-all duration-200"
                                            placeholder="Contoh: 081234567890"
                                            value={formData.phoneNumber}
                                            onChange={handleChange}
                                        />
                                    </div>
                                </div>

                                {/* Jam Mulai & Selesai */}
                                <div className="grid grid-cols-2 gap-4 sm:gap-6">
                                    <div>
                                        <label className="block text-sm font-bold text-gray-700 mb-2">Jam Mulai</label>
                                        <div className="relative group">
                                            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none z-10">
                                                <FaClock className="text-gray-400 group-focus-within:text-amber-600 transition-colors" />
                                            </div>
                                            <input
                                                type="time"
                                                name="startTime"
                                                value={formData.startTime}
                                                onChange={handleChange}
                                                required
                                                className="block w-full pl-11 px-4 py-3.5 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 text-lg font-bold focus:bg-white focus:outline-none focus:ring-2 focus:ring-amber-500/50 focus:border-amber-500 transition-all shadow-sm cursor-pointer"
                                            />
                                        </div>
                                    </div>
                                    <div>
                                        <label className="block text-sm font-bold text-gray-700 mb-2">Jam Selesai</label>
                                        <div className="relative group">
                                            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none z-10">
                                                <FaClock className="text-gray-400 group-focus-within:text-amber-600 transition-colors" />
                                            </div>
                                            <input
                                                type="time"
                                                name="endTime"
                                                value={formData.endTime}
                                                onChange={handleChange}
                                                required
                                                className="block w-full pl-11 px-4 py-3.5 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 text-lg font-bold focus:bg-white focus:outline-none focus:ring-2 focus:ring-amber-500/50 focus:border-amber-500 transition-all shadow-sm cursor-pointer"
                                            />
                                        </div>
                                    </div>
                                </div>

                                {/* Venue */}
                                <div>
                                    <label htmlFor="venue" className="block text-sm font-bold text-gray-700 mb-2">Lokasi / Venue</label>
                                    <div className="relative group">
                                        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                            <FaMapMarkerAlt className="text-gray-400 group-focus-within:text-amber-600 transition-colors" />
                                        </div>
                                        <input
                                            id="venue"
                                            name="venue"
                                            type="text"
                                            required
                                            className="block w-full pl-11 px-4 py-3.5 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 placeholder-gray-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-amber-500/50 focus:border-amber-500 transition-all duration-200"
                                            placeholder="Nama Gedung / Alamat Lengkap"
                                            value={formData.venue}
                                            onChange={handleChange}
                                        />
                                    </div>
                                </div>

                                {/* Submit Button */}
                                <div className="pt-2">
                                    <button
                                        type="submit"
                                        className="w-full flex justify-center py-4 px-6 border border-transparent text-lg font-bold rounded-xl text-white shadow-lg shadow-amber-900/20 transform transition-all duration-200 hover:-translate-y-1 active:scale-[0.98] bg-gradient-to-r from-amber-900 to-amber-800 hover:from-amber-800 hover:to-amber-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500"
                                    >
                                        LANJUT KE PEMBAYARAN
                                    </button>
                                </div>
                            </div>
                        </div>
                    </form>
                ) : (
                    /* REVIEW & PAYMENT VIEW */
                    <div className="animate-fade-in-up w-full">
                        <div className="text-center mb-8">
                            <h2 className="text-2xl font-bold text-amber-950">Detail & Pembayaran</h2>
                            <p className="text-gray-500">Periksa detail booking dan total pembayaran Anda.</p>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                            {/* Booking Details */}
                            <div className="bg-amber-50 rounded-2xl p-6 border border-amber-100 shadow-sm h-full">
                                <h3 className="text-lg font-bold text-amber-900 mb-4 flex items-center gap-2">
                                    <FaCalendarAlt /> Data Pemesan
                                </h3>
                                <div className="space-y-4 text-gray-800">
                                    <div className="flex justify-between border-b border-amber-200/50 pb-2">
                                        <span className="text-sm text-gray-500">Nama</span>
                                        <span className="font-semibold">{formData.name}</span>
                                    </div>
                                    <div className="flex justify-between border-b border-amber-200/50 pb-2">
                                        <span className="text-sm text-gray-500">Tanggal</span>
                                        <span className="font-semibold">{selectedDate ? format(selectedDate, "dd MMM yyyy", { locale: id }) : formData.date}</span>
                                    </div>
                                    <div className="flex justify-between border-b border-amber-200/50 pb-2">
                                        <span className="text-sm text-gray-500">Waktu</span>
                                        <span className="font-semibold">{formData.startTime} - {formData.endTime}</span>
                                    </div>
                                    <div className="flex justify-between border-b border-amber-200/50 pb-2">
                                        <span className="text-sm text-gray-500">WhatsApp</span>
                                        <span className="font-semibold">{formData.phoneNumber}</span>
                                    </div>
                                    <div className="flex justify-between border-b border-amber-200/50 pb-2">
                                        <span className="text-sm text-gray-500">Lokasi</span>
                                        <span className="font-semibold text-right max-w-[60%]">{formData.venue}</span>
                                    </div>
                                </div>
                            </div>

                            {/* Payment Details */}
                            <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-lg h-full flex flex-col">
                                <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                                    <FaMoneyBillWave className="text-green-600" /> Rincian Biaya
                                </h3>

                                <div className="space-y-4 flex-grow">
                                    <div className="flex justify-between items-center">
                                        <span className="text-gray-600">Paket Wedding</span>
                                        <span className="font-bold text-gray-800">
                                            {selectedPackage ? selectedPackage.name : "Custom"}
                                        </span>
                                    </div>
                                    <div className="flex justify-between text-gray-800 items-center">
                                        <span className="text-gray-600">Harga Dasar</span>
                                        <span className="font-medium text-gray-800">
                                            Rp {basePrice.toLocaleString("id-ID")}
                                        </span>
                                    </div>

                                    {/* Voucher Section */}
                                    <div className="py-4 border-t text-gray-800 border-b border-dashed border-gray-200">
                                        <label className="block text-xs font-bold text-gray-500 uppercase tracking-wide mb-2">Kode Voucher</label>
                                        <div className="flex gap-2">
                                            <input
                                                type="text"
                                                value={voucherCode}
                                                onChange={(e) => setVoucherCode(e.target.value.toUpperCase())}
                                                placeholder="Masukan Kode"
                                                disabled={!!appliedVoucher}
                                                className="flex-1 bg-gray-50 border border-gray-300 rounded-lg px-3 py-2 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-amber-500 uppercase"
                                            />
                                            {appliedVoucher ? (
                                                <button
                                                    onClick={() => { setAppliedVoucher(null); setVoucherCode(""); }}
                                                    className="bg-red-100 text-red-600 px-3 py-2 rounded-lg text-sm font-bold hover:bg-red-200 transition-colors"
                                                >
                                                    Hapus
                                                </button>
                                            ) : (
                                                <button
                                                    onClick={handleVoucherCheck}
                                                    disabled={checkingVoucher || !voucherCode}
                                                    className="bg-gray-900 text-white px-4 py-2 rounded-lg text-sm font-bold hover:bg-gray-800 disabled:bg-gray-300 transition-colors"
                                                >
                                                    {checkingVoucher ? "..." : "Cek"}
                                                </button>
                                            )}
                                        </div>
                                        {voucherError && <p className="text-red-500 text-xs mt-1">{voucherError}</p>}
                                        {appliedVoucher && (
                                            <div className="mt-2 text-sm text-green-600 font-medium flex items-center gap-1">
                                                <FaTag className="text-xs" /> Voucher Berhasil! Hemat Rp {discountAmount.toLocaleString("id-ID")}
                                            </div>
                                        )}
                                    </div>

                                    <div className="flex justify-between items-end pt-2">
                                        <span className="text-gray-900 font-bold text-lg">Total Pembayaran</span>
                                        <span className="text-2xl font-extrabold text-amber-900">
                                            Rp {finalPrice.toLocaleString("id-ID")}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col md:flex-row gap-4 justify-center max-w-xl mx-auto mt-8">
                            <button
                                onClick={() => setIsReviewing(false)}
                                className="px-8 py-3.5 rounded-xl border-2 border-amber-200 text-amber-900 font-bold hover:bg-amber-50 transition-colors flex items-center justify-center gap-2"
                            >
                                <FaEdit />
                                Edit Data
                            </button>
                            <button
                                onClick={() => setShowConfirmDialog(true)}
                                className="px-8 py-3.5 rounded-xl bg-amber-900 text-white font-bold hover:bg-amber-800 transition-all flex items-center justify-center gap-2 shadow-lg shadow-amber-900/20"
                            >
                                <FaPaperPlane />
                                Konfirmasi & Kirim
                            </button>
                        </div>
                    </div>
                )}

                {/* Confirmation Modal */}
                {showConfirmDialog && (
                    <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 transition-all duration-300">
                        <div className="bg-white rounded-3xl shadow-2xl p-8 max-w-sm w-full text-center relative animate-bounce-in ring-1 ring-gray-100">
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">Konfirmasi Kirim?</h3>
                            <p className="text-gray-500 mb-6 text-sm">
                                Pastikan data dan nominal pembayaran sudah sesuai. Admin akan menghubungi Anda untuk proses selanjutnya.
                            </p>
                            <div className="bg-amber-50 p-4 rounded-xl mb-6">
                                <p className="text-xs text-amber-800 uppercase font-bold">Total yang harus kamu bayar </p>
                                <p className="text-2xl font-extrabold text-amber-900">Rp {finalPrice.toLocaleString("id-ID")}</p>
                            </div>
                            <div className="flex gap-3">
                                <button
                                    onClick={() => setShowConfirmDialog(false)}
                                    className="flex-1 py-3 px-4 rounded-xl font-bold text-gray-700 bg-gray-100 hover:bg-gray-200 transition-colors"
                                >
                                    Batal
                                </button>
                                <button
                                    onClick={handleProcessBooking}
                                    disabled={isLoading}
                                    className="flex-1 py-3 px-4 rounded-xl font-bold text-white bg-amber-900 hover:bg-amber-800 transition-colors shadow-lg flex justify-center items-center"
                                >
                                    {isLoading ? (
                                        <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                        </svg>
                                    ) : (
                                        "Ya, Kirim"
                                    )}
                                </button>
                            </div>
                        </div>
                    </div>
                )}

                {/* Success Modal */}
                {isSuccess && (
                    <div className="fixed inset-0 z-[70] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 transition-all duration-300">
                        <div className="bg-white rounded-3xl shadow-2xl p-10 max-w-sm w-full text-center relative animate-bounce-in ring-1 ring-gray-100">
                            <div className="mb-6 flex justify-center text-green-500 bg-green-50 w-24 h-24 rounded-full items-center mx-auto shadow-sm">
                                <FaCheckCircle size={48} />
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-3">Booking Berhasil!</h3>
                            <p className="text-gray-500 mb-8 leading-relaxed">
                                Terima kasih telah melakukan booking. Admin kami akan segera memproses dan mengkonfirmasi Anda dalam waktu 24 jam lewat WA.
                            </p>
                            <button
                                onClick={() => window.location.href = "/"}
                                className="w-full bg-amber-950 text-white py-4 px-6 rounded-xl font-bold hover:bg-amber-800 transition-all shadow-lg hover:shadow-xl active:scale-95"
                            >
                                Kembali ke Beranda
                            </button>
                        </div>
                    </div>
                )}
            </div>
            <style jsx>{`
              .animate-fade-in-up {
                animation: fadeInUp 0.5s ease-out;
              }
              .animate-bounce-in {
                animation: bounceIn 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55);
              }
              @keyframes fadeInUp {
                from { opacity: 0; transform: translateY(20px); }
                to { opacity: 1; transform: translateY(0); }
              }
              @keyframes bounceIn {
                0% { transform: scale(0.3); opacity: 0; }
                50% { transform: scale(1.05); opacity: 1; }
                70% { transform: scale(0.9); }
                100% { transform: scale(1); }
              }
            `}</style>
        </div>
    );
}
