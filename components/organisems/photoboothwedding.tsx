import Image from "next/image";

export default function PhotoboothWedding() {
  return (
    <div className="bg-white flex  items-center justify-center min-h-screen">
      <div className="text-center">
        <h1 className="text-5xl font-bold text-black -mt-32 md:-mt-56">
          Photobooth wedding?
        </h1>
        <div className="flex justify-center mb-4 md:-mt-24">
          <Image
            src="/images/photobooth.png"
            alt="Group of people posing in a photobooth at a wedding"
            className="rounded-lg "
            height={700}
            width={700}
          />
        </div>
        <p className="md:text-base text-black italic -mt-20">
          Kita expert banget nih, pokoknya paketan kita sampe acara kamu beres.
        </p>
      </div>
    </div>
  );
}
