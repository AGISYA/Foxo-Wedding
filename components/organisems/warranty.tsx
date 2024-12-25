// import Head from "next/head";

import Image from "next/image";

export default function Warranty() {
  return (
    <div className="bg-white text-black">
      <div className="container mx-auto p-4">
        <div className="flex flex-col md:flex-row justify-between items-start">
          {/* Section 1: GARANSI KEAMANAN */}
          <div className="w-full md:w-1/2 p-4 md:mx-10">
            <h1 className="text-3xl md:mx-52 md:text-4xl font-bold mb-4">
              GARANSI KEAMANAN
            </h1>
            <div className="mb-4">
              <Image
                alt="News article about lost wedding photos"
                className="w-72 md:mx-52 h-auto"
                height={300}
                src="/images/garansi (1).png"
                width={400}
              />
            </div>
            <p className="text-base md:text-lg mt-4">
              Ada yang pernah melihat berita ini? Kami melakukan
              <span className="font-bold"> Back Up</span> sampai
              <span className="text-red-500 font-bold"> 5 kali</span> untuk
              mengantisipasi terjadinya kehilangan file.
            </p>
          </div>

          {/* Section 2: KEPUASAN HASIL AKHIR */}
          <div className="w-full md:w-1/2 p-4">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              KEPUASAN HASIL AKHIR
            </h1>
            <div className="flex flex-wrap justify-center">
              <div className="w-full p-2">
                <Image
                  alt="Wedding photo with satisfied customers"
                  className="w-96 max-w-full h-auto rounded-lg"
                  height="300"
                  src="/images/garansi (2).png"
                  width="400"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
