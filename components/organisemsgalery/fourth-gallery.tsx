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
          src="https://drive.google.com/uc?export=view&id=1agUvEWdpqvfkZUCKNNn6cjz4_4w43qDp"
          alt="Full Screen Image"
          width={1200}
          height={800}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="sm:block bento-section">
        <Image
          src="https://drive.google.com/uc?export=view&id=1RIB0owv7W2retCBKIa05JoPrtSAY1sRA"
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
            src="https://drive.google.com/uc?export=view&id=1o9kf6uP-vq_BSLxjU_p0TMb-VHAkkY8h"
            alt="Full Screen Image"
            width={1200}
            height={800}
            className="object-cover w-full h-full"
          />
        </div>

        {/* Gambar kanan dengan lebar lebih besar */}
        <div className="flex-grow w-1/2 h-full overflow-hidden relative">
          <Image
            src="https://drive.google.com/uc?export=view&id=1JUqNJmVZMsbXIt24izeY8BchjJAcdzng"
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
          src="https://drive.google.com/uc?export=view&id=1NsffLqfDP0-CGM5T0GPuSmpcG2J3kzA7"
          alt="Full Screen Image"
          width={1200}
          height={800}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="sm:block bento-section">
        <Image
          src="https://drive.google.com/uc?export=view&id=1O9O0jSLhHynNv2Q6ULj2H3YXT8bv6B59"
          alt="Full Screen Image"
          width={1200}
          height={800}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="sm:block bento-section">
        <Image
          src="https://drive.google.com/uc?export=view&id=18ZzwPcCG-OVcxxZoTOi2NrxctI4vmH1s"
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
            src="https://drive.google.com/uc?export=view&id=1xCUQPTA7HJP2xVyNCkpWaxrjfEGZNzom"
            alt="Full Screen Image"
            width={1200}
            height={800}
            className="object-cover w-full h-full"
          />
        </div>

        {/* Gambar kanan dengan lebar lebih besar */}
        <div className="flex-grow w-1/2 h-full overflow-hidden relative">
          <Image
            src="https://drive.google.com/uc?export=view&id=1qlKp2bEfXfepII8imMcR0BfMtB-qofMS"
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
            src="https://drive.google.com/uc?export=view&id=1FCcnVhEOKLngpDrtvzDmyP85ZFaAr7hQ"
            alt="Full Screen Image"
            width={1200}
            height={800}
            className="object-cover w-full h-full"
          />
        </div>

        {/* Gambar kanan dengan lebar lebih besar */}
        <div className="flex-grow w-full h-full overflow-hidden relative ">
          <Image
            src="https://drive.google.com/uc?export=view&id=11sqUgMVeusYPXTw_dnGoXQqJ1RQgokMo"
            alt="Full Screen Image"
            width={1200}
            height={800}
            className="object-cover w-full h-[311px] md:h-[1140px]"
          />
        </div>
      </section>{" "}
      <div className="sm:block bento-section">
        <Image
          src="https://drive.google.com/uc?export=view&id=10EVgOPRrzzVrT0lZt_I2u8ZsKtqb0Fu1"
          alt="Full Screen Image"
          width={1200}
          height={800}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="sm:block bento-section">
        <Image
          src="https://drive.google.com/uc?export=view&id=1zA6aZ2qrBX8KbBEqbg3-aTt5GHFw2dTn"
          alt="Full Screen Image"
          width={1200}
          height={800}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="sm:block bento-section">
        <Image
          src="https://drive.google.com/uc?export=view&id=17axtQl7vELmP-fMN4Oe0EQMLuGnhZAM_"
          alt="Full Screen Image"
          width={1200}
          height={800}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="sm:block bento-section">
        <Image
          src="https://drive.google.com/uc?export=view&id=1AzEIG5MOEe7yhxfL6ydmt3EVl4JRjXlr"
          alt="Full Screen Image"
          width={1200}
          height={800}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="sm:block bento-section">
        <Image
          src="https://drive.google.com/uc?export=view&id=1yFZCEUMNEx16HhNzNYr_CqGAUFEGiY3D"
          alt="Full Screen Image"
          width={1200}
          height={800}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="sm:block bento-section">
        <Image
          src="https://drive.google.com/uc?export=view&id=1PUN17kELuKut3f2O7Vucq-zBHg2DHyog"
          alt="Full Screen Image"
          width={1200}
          height={800}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="sm:block bento-section">
        <Image
          src="https://drive.google.com/uc?export=view&id=1p7BP48KyrWFFTc5uxA6wqNpZKA7GsZHK"
          alt="Full Screen Image"
          width={1200}
          height={800}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="sm:block bento-section">
        <Image
          src="https://drive.google.com/uc?export=view&id=1JKyMxx8TjzLjLDbzRYDIj-ekjIXJ-S49"
          alt="Full Screen Image"
          width={1200}
          height={800}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="sm:block bento-section">
        <Image
          src="https://drive.google.com/uc?export=view&id=1Y2UjnY19luF3HBAigBUyXDuuO-XjrAbi"
          alt="Full Screen Image"
          width={1200}
          height={800}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="sm:block bento-section">
        <Image
          src="https://drive.google.com/uc?export=view&id=1q2l6turugryTdH3Kf0F93gMPUrV8rKpY"
          alt="Full Screen Image"
          width={1200}
          height={800}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="sm:block bento-section">
        <Image
          src="https://drive.google.com/uc?export=view&id=1mH5_QmFg5U3_x2aOH6HQPeuOAu27b_8i"
          alt="Full Screen Image"
          width={1200}
          height={800}
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
}
