import Image from "next/image";
import React from "react";

export default function HeroGalery() {
  return (
    <section className="relative min-h-screen bento-hero overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 ">
        <Image
          src="https://drive.google.com/uc?id=1Iu1AAZ80y-tiDxBGLVNS0fZ8x_B-QHf2"
          alt="Hero Image"
          layout="fill" // Memastikan gambar memenuhi seluruh area
          objectFit="cover" // Menjaga rasio gambar
          priority
        />
      </div>

      {/* Overlay Content */}
      <div className="absolute inset-0 flex flex-col justify-center text-white bg-black bg-opacity-50 px-4"></div>
    </section>
  );
}
