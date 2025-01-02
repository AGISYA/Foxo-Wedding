import Image from "next/image";
import React from "react";

export default function FifthGalery() {
  return (
    <div>
      {" "}
      <h1 className="text-center md:mt-48 mt-44 text-black md:text-9xl text-5xl font-serif mb-6">
        Thank You
      </h1>
      <p className="text-center text-gray-700 md:text-2xl text-xl font-serif mt-5 leading-relaxed mb-6">
        Connect with us for more information.
      </p>{" "}
      <h1 className="text-center md:mt-40 mt-20 text-black md:text-6xl text-4xl font-serif mb-6">
        Lest&apos;s Conect
      </h1>
      <p className="text-center text-gray-700 md:text-2xl text-lg font-serif mt-5 leading-relaxed mb-6">
        Phone: +62 895-0589-5274
      </p>
      <div className="sm:block bento-section mt-60">
        <Image
          src="https://drive.google.com/uc?export=view&id=11sqUgMVeusYPXTw_dnGoXQqJ1RQgokMo"
          alt="Full Screen Image"
          width={1200}
          height={800}
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
}
