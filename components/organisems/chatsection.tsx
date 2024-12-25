"use client";
import React from "react";
import Image from "next/image";

const ChatSection: React.FC = () => {
  return (
    <section className="bg-white text-black py-10 px-4 md:px-8 flex flex-col md:flex-row items-center justify-center gap-8">
      {/* Bagian Teks */}
      <div className="flex flex-col items-center text-center md:text-left md:items-start max-w-lg">
        <h2 className="text-2xl md:text-4xl font-bold mb-4 leading-tight">
          Dokumentasi Prewedding?
        </h2>
        <p className="text-lg md:text-2xl font-medium text-gray-600">
          FoxoWedding <span className="text-red-500 font-semibold">BISA!!</span>
        </p>
      </div>

      {/* Gambar HP */}
      <div className="relative w-[250px] sm:w-[300px] md:w-[400px] h-[500px] sm:h-[600px] md:h-[700px] rounded-2xl overflow-hidden ">
        <Image
          src="/images/hp.png"
          alt="HP Mockup"
          layout="fill"
          objectFit="cover"
          className="absolute z-0"
        />
      </div>
    </section>
  );
};

export default ChatSection;
