import Image from "next/image";
import React from "react";

export default function FirstGalery() {
  return (
    <div className="flex flex-col">
      {/* Gambar yang hanya muncul di perangkat mobile */}
      <div className="block sm:hidden overflow-hidden">
        <Image
          src="/images/2 (1).jpg"
          alt="Mobile Image"
          width={800}
          height={800}
          className="w-full h-screen object-contain max-w-full"
        />
      </div>

      {/* Gambar Full Screen */}
      <div className="hidden sm:block bento-section overflow-hidden">
        <Image
          src="/images/documentation3.jpg"
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
            src="/images/DSCF9365.jpg"
            alt="Left Image"
            width={6000}
            height={4000}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="bento-image-wrapper">
          <Image
            src="/images/SCF9215 (1).jpg"
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
            src="/images/SCF9423 (1).jpg"
            alt="Left Image"
            width={6000}
            height={4000}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="bento-image-wrapper">
          <Image
            src="/images/DSCF9856.jpg"
            alt="Right Image"
            width={6000}
            height={4000}
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      <div className="hidden sm:block bento-section overflow-hidden">
        <Image
          src="/images/DSCF9842.jpg"
          alt="Full Screen Image"
          width={1200}
          height={800}
          className="w-full h-screen object-cover"
        />
      </div>
    </div>
  );
}
