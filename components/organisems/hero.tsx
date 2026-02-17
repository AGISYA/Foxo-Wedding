import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <main className="bg-wedding-light text-wedding-dark">
      {/* Hero Section */}
      <section className="relative min-h-screen w-full">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/images/bghero.png" // Ganti dengan path gambar di folder public
            alt="Hero Image"
            layout="fill" // Memastikan gambar memenuhi seluruh area
            objectFit="cover" // Menjaga rasio gambar
            priority
          />
        </div>

        {/* Overlay Content */}
        <div className="absolute inset-0 flex flex-col justify-center text-white bg-black bg-opacity-50 px-4">
          {/* Logo */}
          <div className="mb-6 mt-8">
            <Image
              src="/images/logowhite.png"
              alt="Logo Wedding"
              width={100}
              height={100}
              className="mx-auto"
            />
          </div>

          {/* Teks di Atas Gambar */}
          <h1 className="text-3xl mt-44 mx-10 md:text-5xl font-bold  mb-4 drop-shadow-lg">
            Foxo Vendor <br /> Terbaik Di Acara <br /> Wedding-mu
          </h1>
          <p className="text-base mx-10 md:text-xl  drop-shadow-lg">
            Kami hadir untuk memastikan kisah cinta kalian terekam sempurna
          </p>

          <div className="mx-10 mt-6">
            <Link
              href="/booking"
              className="inline-block bg-white text-black px-8 py-3 rounded-full font-bold text-lg hover:bg-gray-200 transition-all transform hover:scale-105 shadow-lg"
            >
              Booking Now
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
