import Image from "next/image";
import React from "react";

export default function Wellcome() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="p-6 mx-auto max-w-lg">
        {/* Header */}
        <h1 className="text-center text-black text-5xl mt-10 font-serif mb-6">
          Welcome
        </h1>

        {/* Image Section */}
        <div className="mb-4 ">
          <Image
            src="/images/DSCF0514.jpg"
            alt="A couple standing in a room with large windows"
            width={600}
            height={400}
            className="w-full h-auto md:-mx-96"
          />
        </div>

        {/* Description Text */}
        <p className="text-center text-gray-700 text-xl mt-5 leading-relaxed mb-6">
          Two souls meet beneath starlight, bound by a quiet promise. Hand in
          hand, they walk a path of shared dreams, wrapped in love&apos;s gentle
          glow.
        </p>

        {/* Additional Image */}
        <div className="mt-10">
          <Image
            src="/images/DSCF0487 (1).jpg"
            alt="A couple silhouette against a bright window"
            width={800}
            height={100}
            className="w-full md:mx-96 h-auto object-cover rounded-md"
          />
        </div>
      </div>
    </div>
  );
}
