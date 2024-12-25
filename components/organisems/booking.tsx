import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

export default function Booking() {
  return (
    <div className="bg-white text-black flex flex-col items-center -mt-20 md:-mt-36 min-h-screen justify-center p-4">
      <Head>
        <title>Booking Page</title>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
        />
      </Head>
      <div className="text-center space-y-8">
        <div className="flex flex-col md:flex-row items-center md:space-x-8">
          <p className="text-xl md:text-2xl lg:text-4xl font-light text-center md:text-left">
            Untuk mengamankan <span className="font-bold">tanggalmu</span>
            <br />
            siapkan uang cukup <span className="font-bold">100 ribu</span>
            <br />
            Booking ini berakhir
            <br />
            <span className="font-bold">sampai hari besok!</span>
          </p>
          <div className="mt-4 md:mt-0">
            <Image
              src="/images/uang.png"
              alt="Hands holding a 100,000 Indonesian Rupiah note"
              className="mx-auto max-w-full h-auto"
              width={300}
              height={150}
            />
          </div>
        </div>

        <p className="text-xl md:text-2xl lg:text-4xl font-light">
          Buruan <span className="font-bold">Booking</span>
          <br />
          sekarang juga!
        </p>
      </div>
      <Link
        href="https://wa.me/+6289505895274?text=Hallo FoxoWedding"
        target="_blank"
        rel="noopener noreferrer"
        className="mt-16 bg-red-700 text-white text-xs md:text-2xl lg:text-2xl font-bold py-3 px-6 lg:py-4 lg:px-8 rounded-full transition-transform transform hover:scale-105"
      >
        BOOK NOW!
      </Link>
    </div>
  );
}
