import Image from "next/image";
import React from "react";

export default function FourthGallery() {
  return (
    <div>
      <section className="md:-mt-[3800px] bg-white -mt-[4650px] overflow-hidden">
        <div className="sm:block bento-section">
          <Image
            src="/images/SCF9423.jpg"
            alt="Full Screen Image"
            width={1200}
            height={800}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="sm:block bento-section">
          <Image
            src="/images/SCF9146 (1).jpg"
            alt="Full Screen Image"
            width={1200}
            height={800}
            className="w-full h-full object-cover"
          />
        </div>
      </section>
      {/* Side-by-Side Images */}
      <section className="flex mt-10 h-screen">
        {/* Gambar kiri dengan lebar lebih kecil */}
        <div className="flex-shrink-0 w-1/3 h-full overflow-hidden relative">
          <Image
            src="/images/DSCF0123.jpg"
            alt="Full Screen Image"
            width={1200}
            height={800}
            className="object-cover w-full h-full"
          />
        </div>

        {/* Gambar kanan dengan lebar lebih besar */}
        <div className="flex-grow w-2/3 h-full overflow-hidden relative">
          <Image
            src="/images/DSCF0141 (2).jpg"
            alt="Full Screen Image"
            width={1200}
            height={800}
            className="object-cover w-full h-full"
          />
        </div>
      </section>
      {/* Additional Images */}
      <div className="sm:block bento-section">
        <Image
          src="/images/DSCF0312.jpg"
          alt="Full Screen Image"
          width={1200}
          height={800}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="sm:block bento-section">
        <Image
          src="/images/DSCF0650.jpg"
          alt="Full Screen Image"
          width={1200}
          height={800}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="sm:block bento-section">
        <Image
          src="/images/DSCF0422 (2).jpg"
          alt="Full Screen Image"
          width={1200}
          height={800}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="sm:block bento-section">
        <Image
          src="/images/DSCF9764.jpg"
          alt="Full Screen Image"
          width={1200}
          height={800}
          className="w-full h-full object-cover"
        />
      </div>
      <section className="flex h-full">
        {/* Gambar kiri dengan lebar lebih kecil */}
        <div className="flex-shrink-0 w-1/2 h-full overflow-hidden relative">
          <Image
            src="/images/DSCF9554.jpg"
            alt="Full Screen Image"
            width={1200}
            height={800}
            className="object-cover w-full h-full"
          />
        </div>

        {/* Gambar kanan dengan lebar lebih besar */}
        <div className="flex-grow w-1/2 h-full overflow-hidden relative">
          <Image
            src="/images/DSCF9746.jpg"
            alt="Full Screen Image"
            width={1200}
            height={800}
            className="object-cover w-full h-full"
            style={{ objectPosition: "top" }} // Fokus ke bagian atas gambar
          />
        </div>
      </section>
      <div className="sm:block bento-section">
        <Image
          src="/images/DSCF0577.jpg"
          alt="Full Screen Image"
          width={1200}
          height={800}
          className="w-full h-full object-cover"
        />
      </div>
      <section className="flex h-full">
        {/* Gambar kiri dengan lebar lebih kecil */}
        <div className="flex-shrink-0 w-1/2 h-full overflow-hidden relative">
          <Image
            src="/images/DSCF9802.jpg"
            alt="Full Screen Image"
            width={1200}
            height={800}
            className="object-cover w-full h-full"
          />
        </div>

        {/* Gambar kanan dengan lebar lebih besar */}
        <div className="flex-grow w-1/2 h-full overflow-hidden relative">
          <Image
            src="/images/DSCF0487 (1).jpg"
            alt="Full Screen Image"
            width={1200}
            height={800}
            className="object-cover w-full h-full"
            style={{ objectPosition: "top" }} // Fokus ke bagian atas gambar
          />
        </div>
      </section>
      <div className="sm:block bento-section">
        <Image
          src="/images/DSCF0103.jpg"
          alt="Full Screen Image"
          width={1200}
          height={800}
          className="w-full h-full object-cover"
        />
      </div>
      <section className="flex h-full">
        {/* Gambar kiri dengan lebar lebih kecil */}
        <div className="flex-shrink-0 w-1/2 h-full overflow-hidden relative">
          <Image
            src="/images/DSCF0110.jpg"
            alt="Full Screen Image"
            width={1200}
            height={800}
            className="object-cover w-full h-full"
          />
        </div>

        {/* Gambar kanan dengan lebar lebih besar */}
        <div className="flex-grow w-1/2 h-full overflow-hidden relative">
          <Image
            src="/images/DSCF0309.jpg"
            alt="Full Screen Image"
            width={1200}
            height={800}
            className="object-cover w-full h-full"
            style={{ objectPosition: "top" }} // Fokus ke bagian atas gambar
          />
        </div>
      </section>
      <div className="sm:block bento-section">
        <Image
          src="/images/DSCF0300.jpg"
          alt="Full Screen Image"
          width={1200}
          height={800}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="sm:block bento-section">
        <Image
          src="/images/DSCF0342.jpg"
          alt="Full Screen Image"
          width={1200}
          height={800}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="sm:block bento-section">
        <Image
          src="/images/DSCF0395.jpg"
          alt="Full Screen Image"
          width={1200}
          height={800}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="sm:block bento-section">
        <Image
          src="/images/DSCF0422.jpg"
          alt="Full Screen Image"
          width={1200}
          height={800}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="sm:block bento-section">
        <Image
          src="/images/DSCF0482.jpg"
          alt="Full Screen Image"
          width={1200}
          height={800}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="sm:block bento-section">
        <Image
          src="/images/DSCF0556.jpg"
          alt="Full Screen Image"
          width={1200}
          height={800}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="sm:block bento-section">
        <Image
          src="/images/DSCF0490.jpg"
          alt="Full Screen Image"
          width={1200}
          height={800}
          className="w-full h-full object-cover"
        />
      </div>
      <section className="flex h-full">
        {/* Gambar kiri dengan lebar lebih kecil */}
        <div className="flex-shrink-0 w-1/2 h-full overflow-hidden relative">
          <Image
            src="/images/DSCF0546.jpg"
            alt="Full Screen Image"
            width={1200}
            height={800}
            className="object-cover w-full h-full"
          />
        </div>

        {/* Gambar kanan dengan lebar lebih besar */}
        <div className="flex-grow w-1/2 h-full overflow-hidden relative">
          <Image
            src="/images/DSCF0500.jpg"
            alt="Full Screen Image"
            width={1200}
            height={800}
            className="object-cover w-full h-full"
            style={{ objectPosition: "top" }} // Fokus ke bagian atas gambar
          />
        </div>
      </section>{" "}
      <div className="sm:block bento-section">
        <Image
          src="/images/DSCF0514.jpg"
          alt="Full Screen Image"
          width={1200}
          height={800}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="sm:block bento-section">
        <Image
          src="/images/DSCF0529.jpg"
          alt="Full Screen Image"
          width={1200}
          height={800}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="sm:block bento-section">
        <Image
          src="/images/DSCF0536.jpg"
          alt="Full Screen Image"
          width={1200}
          height={800}
          className="w-full h-full object-cover"
        />
      </div>
      <section className="flex h-full">
        {/* Gambar kiri dengan lebar lebih kecil */}
        <div className="flex-shrink-0 w-1/2 h-full overflow-hidden relative">
          <Image
            src="/images/DSCF9786.jpg"
            alt="Full Screen Image"
            width={1200}
            height={800}
            className="object-cover w-full h-full"
          />
        </div>

        {/* Gambar kanan dengan lebar lebih besar */}
        <div className="flex-grow w-1/2 h-full overflow-hidden relative">
          <Image
            src="/images/DSCF9478.jpg"
            alt="Full Screen Image"
            width={1200}
            height={800}
            className="object-cover w-full h-full"
            style={{ objectPosition: "top" }} // Fokus ke bagian atas gambar
          />
        </div>
      </section>{" "}
      <section className="flex h-full">
        {/* Gambar kiri dengan lebar lebih kecil */}
        <div className="flex-shrink-0 w-1/2 h-full overflow-hidden relative">
          <Image
            src="/images/DSCF9856.jpg"
            alt="Full Screen Image"
            width={1200}
            height={800}
            className="object-cover w-full h-full"
          />
        </div>

        {/* Gambar kanan dengan lebar lebih besar */}
        <div className="flex-grow w-full h-full overflow-hidden relative">
          <Image
            src="/images/DSCF9687 (1).jpg"
            alt="Full Screen Image"
            width={1200}
            height={800}
            className="object-cover w-full h-full"
          />
        </div>
      </section>{" "}
      <div className="sm:block bento-section">
        <Image
          src="/images/DSCF9397.jpg"
          alt="Full Screen Image"
          width={1200}
          height={800}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="sm:block bento-section">
        <Image
          src="/images/DSCF9633.jpg"
          alt="Full Screen Image"
          width={1200}
          height={800}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="sm:block bento-section">
        <Image
          src="/images/DSCF9509.jpg"
          alt="Full Screen Image"
          width={1200}
          height={800}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="sm:block bento-section">
        <Image
          src="/images/DSCF9484.jpg"
          alt="Full Screen Image"
          width={1200}
          height={800}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="sm:block bento-section">
        <Image
          src="/images/DSCF9582.jpg"
          alt="Full Screen Image"
          width={1200}
          height={800}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="sm:block bento-section">
        <Image
          src="/images/DSCF9842 (1).jpg"
          alt="Full Screen Image"
          width={1200}
          height={800}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="sm:block bento-section">
        <Image
          src="/images/DSCF1051 (1).jpg"
          alt="Full Screen Image"
          width={1200}
          height={800}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="sm:block bento-section">
        <Image
          src="/images/DSCF9817-1 (1).jpg"
          alt="Full Screen Image"
          width={1200}
          height={800}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="sm:block bento-section">
        <Image
          src="/images/DSCF1058.jpg"
          alt="Full Screen Image"
          width={1200}
          height={800}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="sm:block bento-section">
        <Image
          src="/images/DSCF1117.jpg"
          alt="Full Screen Image"
          width={1200}
          height={800}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="sm:block bento-section">
        <Image
          src="/images/Untitled-1-4 (1).jpg"
          alt="Full Screen Image"
          width={1200}
          height={800}
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
}
