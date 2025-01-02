import Image from "next/image";
import React from "react";

export default function FirstGalery() {
  return (
    <div className="flex flex-col">
      {/* Gambar yang hanya muncul di perangkat mobile */}
      <div className="block sm:hidden overflow-hidden">
        <Image
          src="https://drive.google.com/uc?export=view&id=1HrnGoUqYnMnr4sI_4aBd4p6_I5zKihZN"
          alt="Mobile Image"
          width={800}
          height={800}
          className="w-full h-screen object-contain max-w-full"
        />
      </div>

      {/* Gambar Full Screen */}
      <div className="hidden sm:block bento-section overflow-hidden">
        <Image
          src="https://drive.google.com/uc?export=view&id=1JKyMxx8TjzLjLDbzRYDIj-ekjIXJ-S49"
          alt="Full Screen Image"
          width={1200}
          height={800}
          className="w-full h-screen object-cover"
        />
      </div>

      {/* Dua Gambar di Bawah */}
      <div className="hidden sm:grid sm:grid-cols-2 bento-gallery overflow-hidden">
        <div className="bento-image-wrapper">
          <Image
            src="https://drive.google.com/uc?export=view&id=1J6qOrNuzNK1GDY1E3lytldrDnvM1sYTN"
            alt="Left Image"
            width={6000}
            height={4000}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="bento-image-wrapper">
          <Image
            src="https://drive.google.com/uc?export=view&id=15TxvBfEkSVtyDwVsPJlLI28xp1Mz0d9F"
            alt="Right Image"
            width={6000}
            height={4000}
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      <div className="hidden sm:grid sm:grid-cols-2 bento-gallery overflow-hidden">
        <div className="bento-image-wrapper">
          <Image
            src="https://drive.google.com/uc?export=view&id=1DpdUodYsoor9Wp5iuB9woqu6jyyW3cw5"
            alt="Left Image"
            width={6000}
            height={4000}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="bento-image-wrapper">
          <Image
            src="https://drive.google.com/uc?export=view&id=1FCcnVhEOKLngpDrtvzDmyP85ZFaAr7hQ"
            alt="Right Image"
            width={6000}
            height={4000}
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      <div className="hidden sm:block bento-section overflow-hidden">
        <Image
          src="https://drive.google.com/uc?export=view&id=1PUN17kELuKut3f2O7Vucq-zBHg2DHyog"
          alt="Full Screen Image"
          width={1200}
          height={800}
          className="w-full h-screen object-cover"
        />
      </div>
    </div>
  );
}
