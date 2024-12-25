"use client";
import Head from "next/head";
import Image from "next/image";

export default function WeddingPrices() {
  return (
    <div>
      <Head>
        <title>Wedding Prices</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <div className="bg-white text-black min-h-screen flex flex-col items-center justify-center">
        <div className="container mx-auto p-4">
          <h1 className="text-2xl md:text-5xl font-bold mb-8 md:mx-24 ">
            Setelah melihat semuanya
            <br /> pasti kalian penasaran sama <br /> harganya!
          </h1>
          <div className="md:flex md:justify-center">
            <div className=" justify-center gap-16 ">
              {/* Prewedding Price Tag */}
              <div className="relative w-[30rem]  md:w-[40rem] h-64 -mt-20 md:-mt-16 -mx-32 md:-mx-20   ">
                <Image
                  alt="Prewedding price tag"
                  className="w-full h-full object-cover rounded-lg"
                  src="/images/hargakekiri.png"
                  width={5000}
                  height={5000}
                />
                <div className=" mx-8 absolute inset-0 flex flex-col items-center justify-center">
                  <p className="text-xl md:text-2xl font-bold">Prewedding</p>
                  <p className="text-xl md:text-2xl font-bold">Rp4.000.000</p>
                </div>
              </div>

              {/* Wedding Price Tag */}
              <div className="relative w-[30rem] md:w-[40rem] h-64 md:-mx-0 -mx-32 -mt-36  md:-mt-24 z-10  ">
                <Image
                  alt="Wedding price tag"
                  className="w-full h-full object-cover rounded-lg"
                  src="/images/hargakekanan.png"
                  width={5000}
                  height={5000}
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <p className="text-xl md:text-2xl font-bold">Wedding</p>
                  <p className="text-xl md:text-2xl font-bold">Rp6.000.000</p>
                </div>
              </div>

              {/* Photobooth Price Tag */}
              <div className="relative w-[30rem]  md:w-[40rem] h-64  -mt-36 md:-mt-20 -mx-32 md:-mx-20 ">
                <Image
                  alt="Photobooth price tag"
                  className="w-full h-full object-cover rounded-lg"
                  src="/images/hargakekiri.png"
                  width={5000}
                  height={5000}
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <p className="text-xl md:text-2xl font-bold">Photobooth</p>
                  <p className="text-xl md:text-2xl font-bold">Rp4.000.000</p>
                </div>
              </div>
            </div>
            <div className="mt-32 text-center">
              <p className="text-2xl -mt-44 md:-mt-0 md:text-5xl font-bold">
                Mahal banget ya?
                <br /> Tenang, lanjut dulu <br /> biar ga panik!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
