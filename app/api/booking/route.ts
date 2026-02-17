import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

// Define the path to the JSON file
const dataFilePath = path.join(process.cwd(), "data", "bookings.json");

// Helper to read bookings
const getBookings = () => {
    if (!fs.existsSync(dataFilePath)) {
        return [];
    }
    const fileContent = fs.readFileSync(dataFilePath, "utf8");
    try {
        return JSON.parse(fileContent);
    } catch (error) {
        return [];
    }
};

// Helper to save bookings
const saveBooking = (booking: any) => {
    const bookings = getBookings();
    bookings.push(booking);

    // Ensure directory exists
    const dir = path.dirname(dataFilePath);
    if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
    }

    fs.writeFileSync(dataFilePath, JSON.stringify(bookings, null, 2));
};

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { name, date, startTime, endTime, venue } = body;

        // Basic Validation
        if (!name || !date || !startTime || !endTime || !venue) {
            return NextResponse.json(
                { message: "Semua field harus diisi." },
                { status: 400 }
            );
        }

        // Availability Logic
        const requestedStart = new Date(`${date}T${startTime}`);
        const requestedEnd = new Date(`${date}T${endTime}`);

        if (requestedStart >= requestedEnd) {
            return NextResponse.json(
                { message: "Waktu selesai harus setelah waktu mulai." },
                { status: 400 }
            );
        }

        const currentBookings = getBookings();

        const isConflict = currentBookings.some((booking: any) => {
            if (booking.date !== date) return false; // Different date, no conflict

            const existingStart = new Date(`${booking.date}T${booking.startTime}`);
            const existingEnd = new Date(`${booking.date}T${booking.endTime}`);

            // Check overlap
            // (StartA < EndB) and (EndA > StartB)
            return requestedStart < existingEnd && requestedEnd > existingStart;
        });

        if (isConflict) {
            return NextResponse.json(
                { message: "Jadwal bentrok dengan acara lain. Silakan pilih waktu lain." },
                { status: 409 }
            );
        }

        // Generate Voucher Code
        // Format: FOXO-DATE-RANDOM
        const dateStr = date.replace(/-/g, "");
        const randomStr = Math.random().toString(36).substring(2, 7).toUpperCase();
        const voucherCode = `FOXO-${dateStr}-${randomStr}`;

        const newBooking = {
            id: Date.now().toString(),
            name,
            date,
            startTime,
            endTime,
            venue,
            voucherCode,
            createdAt: new Date().toISOString(),
        };

        saveBooking(newBooking);

        return NextResponse.json(
            {
                message: "Booking berhasil!",
                voucherCode: voucherCode
            },
            { status: 201 }
        );
    } catch (error) {
        console.error("Booking error:", error);
        return NextResponse.json(
            { message: "Terjadi kesalahan pada server." },
            { status: 500 }
        );
    }
}
