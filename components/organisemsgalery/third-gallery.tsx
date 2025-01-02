import Image from "next/image";
import React from "react";

export default function ThirdGallery() {
  return (
    <div>
      {" "}
      <h1 className="text-center md:-mt-0 mt-20 text-black text-6xl font-serif mb-6">
        Galery:
      </h1>
      <p className="text-center text-gray-700 text-2xl font-serif mt-5 leading-relaxed mb-6">
        See the love and joy through our lens.
      </p>
      {/* Full Gallery Section */}
      <section className="relative md:-mt-[3800px] -mt-[4650px] min-h-[10000px] h-[1000px] bento-hero">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="https://drive.google.com/uc?export=view&id=10x-w5FfDyphDSTfIfQ6JCp_oe3XGkLGU"
            alt="Hero Image"
            layout="fill"
            objectFit="contain"
            priority
          />
        </div>

        {/* Overlay Content */}
        <div className="absolute inset-0 flex flex-col justify-center px-4"></div>
      </section>
    </div>
  );
}
