import Image from "next/image";

export default function GaleryFoto() {
  return (
    <main className="bento-container bg-wedding-light text-wedding-dark bg-white overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen bento-hero overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 ">
          <Image
            src="/images/1 (1).jpg"
            alt="Hero Image"
            layout="fill" // Memastikan gambar memenuhi seluruh area
            objectFit="cover" // Menjaga rasio gambar
            priority
          />
        </div>

        {/* Overlay Content */}
        <div className="absolute inset-0 flex flex-col justify-center text-white bg-black bg-opacity-50 px-4"></div>
      </section>
      {/* Welcome Section */}
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
            hand, they walk a path of shared dreams, wrapped in love&apos;s
            gentle glow.
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
      {/* Gallery Section */}
      <div className="flex flex-col">
        {/* Gambar yang hanya muncul di perangkat mobile */}
        <div className="block sm:hidden overflow-hidden">
          <Image
            src="/images/2 (1).jpg"
            alt="Mobile Image"
            width={800}
            height={800}
            className="w-full h-screen object-contain max-w-full"
          />
        </div>

        {/* Gambar Full Screen */}
        <div className="hidden sm:block bento-section overflow-hidden">
          <Image
            src="/images/documentation3.jpg"
            alt="Full Screen Image"
            width={1200}
            height={800}
            className="w-full h-screen object-cover"
          />
        </div>

        {/* Dua Gambar di Bawah */}
        <div className="hidden sm:grid sm:grid-cols-2 bento-gallery overflow-hidden">
          <div className="bento-image-wrapper">
            <Image
              src="/images/DSCF9365.jpg"
              alt="Left Image"
              width={600}
              height={400}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="bento-image-wrapper">
            <Image
              src="/images/SCF9215 (1).jpg"
              alt="Right Image"
              width={600}
              height={400}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="hidden sm:grid sm:grid-cols-2 bento-gallery overflow-hidden">
          <div className="bento-image-wrapper">
            <Image
              src="/images/SCF9423 (1).jpg"
              alt="Left Image"
              width={600}
              height={400}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="bento-image-wrapper">
            <Image
              src="/images/DSCF9856.jpg"
              alt="Right Image"
              width={600}
              height={400}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="hidden sm:block bento-section overflow-hidden">
          <Image
            src="/images/DSCF9842.jpg"
            alt="Full Screen Image"
            width={1200}
            height={800}
            className="w-full h-screen object-cover"
          />
        </div>
      </div>
      <section className="relative md:flex min-h-screen bento-hero mt-20 overflow-hidden">
        {/* Background Image */}
        <div className="relative w-full h-[900px]">
          <Image
            src="/images/4.jpg"
            alt="Hero Image"
            layout="fill"
            objectFit="contain"
            priority
            className="-mt-72 md:-mt-0"
          />
        </div>
        <div className="relative md:-mt-16 -mt-80 w-full h-[1200px]">
          <Image
            src="/images/5.jpg"
            alt="Hero Image"
            layout="fill"
            objectFit="contain"
            priority
            className="-mt-72 md:-mt-0"
          />
        </div>
      </section>
      <section className="relative md:flex min-h-screen bento-hero -mt-[600px] md:-mt-0 overflow-hidden">
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
      {/* Gallery Header */}
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
            src="/images/SCF9461.jpg"
            alt="Hero Image"
            layout="fill"
            objectFit="contain"
            priority
          />
        </div>

        {/* Overlay Content */}
        <div className="absolute inset-0 flex flex-col justify-center px-4"></div>
      </section>
      {/* Additional Images */}
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
          src="/images/DSCF9687.jpg"
          alt="Full Screen Image"
          width={1200}
          height={800}
          className="w-full h-full object-cover"
        />
      </div>
    </main>
  );
}
