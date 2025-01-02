import Image from "next/image";
import React from "react";

export default function FourthGallery() {
  return (
    <div>
      <section className="md:-mt-[3800px] bg-white -mt-[4650px] overflow-hidden">
        <div className="sm:block bento-section">
          <Image
            src="https://drive.google.com/uc?export=view&id=1DpdUodYsoor9Wp5iuB9woqu6jyyW3cw5"
            alt="Full Screen Image"
            width={1200}
            height={800}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="sm:block bento-section">
          <Image
            src="https://drive.google.com/uc?export=view&id=1MgbbsAJzDKmSY8RatlnS-1mH4zaqsQ6v"
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
            src="https://drive.google.com/uc?export=view&id=1Ic-vZ0srTDGZ2qVPvpkB1FYWvr9HbaSX"
            alt="Full Screen Image"
            width={1200}
            height={800}
            className="object-cover w-full h-full"
          />
        </div>

        {/* Gambar kanan dengan lebar lebih besar */}
        <div className="flex-grow w-2/3 h-full overflow-hidden relative">
          <Image
            src="https://drive.google.com/uc?export=view&id=1gmPk7AglF6uUDmn_MhV-fPWKYP2ukzwc"
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
          src="https://drive.google.com/uc?export=view&id=10gtx2ZVs0dUK-XzCg15UU9QeYYRkESH8"
          alt="Full Screen Image"
          width={1200}
          height={800}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="sm:block bento-section">
        <Image
          src="https://drive.google.com/uc?export=view&id=1RB_TNl6Yi6pB5ttbDCWBfr5_iT7kQwXn"
          alt="Full Screen Image"
          width={1200}
          height={800}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="sm:block bento-section">
        <Image
          src="https://drive.google.com/uc?export=view&id=1PPa6PXB7iHXYdopplmozg8DzZTiFWHtl"
          alt="Full Screen Image"
          width={1200}
          height={800}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="sm:block bento-section">
        <Image
          src="https://drive.google.com/uc?export=view&id=1fs9YpnXRGQaDKXyc1OZe2duYznVMk5U6"
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
            src="https://drive.google.com/uc?export=view&id=1kb3o40dwtYTvgotENMZ65KYGJm1SxiT6"
            alt="Full Screen Image"
            width={1200}
            height={800}
            className="object-cover w-full h-full"
          />
        </div>

        {/* Gambar kanan dengan lebar lebih besar */}
        <div className="flex-grow w-1/2 h-full overflow-hidden relative">
          <Image
            src="https://drive.google.com/uc?export=view&id=1PZIWC_JvxIQg068oT45BZ58hhRvTZ14D"
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
          src="https://drive.google.com/uc?export=view&id=1ZWPM_x81Iuw-x6Iwjc77r1byd6g8eVni"
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
            src="https://drive.google.com/uc?export=view&id=1n3U9lJS-K3NPEmlwqWKLVON-4-fT5wLA"
            alt="Full Screen Image"
            width={1200}
            height={800}
            className="object-cover w-full h-full"
          />
        </div>

        {/* Gambar kanan dengan lebar lebih besar */}
        <div className="flex-grow w-1/2 h-full overflow-hidden relative">
          <Image
            src="https://drive.google.com/uc?export=view&id=1_4yGgqEJOIP3aoT4cpNMFFyAP-PUQRQR"
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
          src="https://drive.google.com/uc?export=view&id=1e6RIjqG3U_u6LYeDTY3Wz7pg8XXVZ5Ic"
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
            src="https://drive.google.com/uc?export=view&id=1lQ-n4LzzkpgYJ2Ks82kBWNTOq6uW7a8d"
            alt="Full Screen Image"
            width={1200}
            height={800}
            className="object-cover w-full h-full"
          />
        </div>

        {/* Gambar kanan dengan lebar lebih besar */}
        <div className="flex-grow w-1/2 h-full overflow-hidden relative">
          <Image
            src="https://drive.google.com/uc?export=view&id=1TrDoRsCTnRxm6awjwZWMTf0qv6w7-gbX"
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
          src="https://drive.google.com/uc?export=view&id=1UA2CRb17Bw1CB0OTZQgzTjyxR9uD39Af"
          alt="Full Screen Image"
          width={1200}
          height={800}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="sm:block bento-section">
        <Image
          src="https://drive.google.com/uc?export=view&id=10lxXrjSUjQwewC_sWzY64BVV0FyaumAs"
          alt="Full Screen Image"
          width={1200}
          height={800}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="sm:block bento-section">
        <Image
          src="https://drive.google.com/uc?export=view&id=1Iu1AAZ80y-tiDxBGLVNS0fZ8x_B-QHf2"
          alt="Full Screen Image"
          width={1200}
          height={800}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="sm:block bento-section">
        <Image
          src="https://drive.google.com/uc?export=view&id=1AiAhYYoEdpIM6e1mgqu6Vt_Lx_ArCd82"
          alt="Full Screen Image"
          width={1200}
          height={800}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="sm:block bento-section">
        <Image
          src="https://drive.google.com/uc?export=view&id=1HzhNoqB8lZF4UMQbeijlD11mztSRpSE8"
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
