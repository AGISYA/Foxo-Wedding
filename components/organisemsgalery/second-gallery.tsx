import Image from "next/image";
import React from "react";

export default function SecondGallery() {
  return (
    <section className="relative md:flex min-h-screen bento-hero -mt-[600px] md:mt-20 overflow-hidden">
      {/* Background Image 1 */}
      <div className="relative md:mt-0 mt-10 w-full h-[500px] sm:h-[600px] md:h-[1200px]">
        <Image
          src="/images/7.jpg"
          alt="Hero Image"
          layout="fill"
          objectFit="cover"
          priority
          className="w-full h-full object-cover"
        />
      </div>
      {/* Background Image 2 */}
      <div className="relative md:mt-0 mt-20 w-full h-[500px] sm:h-[600px] md:h-[900px]">
        <Image
          src="/images/6.jpg"
          alt="Hero Image"
          layout="fill"
          objectFit="cover"
          priority
          className="w-full h-full object-cover"
        />
      </div>
    </section>
  );
}
