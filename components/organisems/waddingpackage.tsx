import Head from "next/head";
import Image from "next/image";

export default function WeddingPackage() {
  return (
    <div className="bg-white text-black min-h-screen">
      <Head>
        <title>Wedding Package</title>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
        />
      </Head>

      {/* Container utama */}
      <div className="container mx-auto px-6 py-12">
        {/* Section Header dengan Gambar Promo */}
        <div className="text-center mb-12 -mt-20 md:-mt-60">
          <Image
            alt="News article about lost wedding photos"
            className="w-full max-w-3xl h-auto mx-auto rounded-lg "
            src="/images/promo.png"
            width={1000}
            height={1000}
          />
        </div>

        {/* Section Paket */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 -mt-20 md:-mt-48">
          {/* Paket Wedding */}
          <div className=" bg-gray-800 text-white p-6 rounded-lg shadow-xl transition-transform transform hover:scale-105 text-sm md:text-base">
            <h2 className="text-xl md:text-2xl font-bold mb-4 text-center">
              Wedding
            </h2>
            <ul className="list-none space-y-3">
              <li className="flex items-center">
                <i className="fas fa-clock text-yellow-500 mr-2"></i>8 Hours
                Session
              </li>
              <li className="flex items-center">
                <i className="fas fa-camera text-yellow-500 mr-2"></i>2
                Photographer
              </li>
              <li className="flex items-center">
                <i className="fas fa-video text-yellow-500 mr-2"></i>1
                Videographer
              </li>
              <li className="flex items-center">
                <i className="fas fa-images text-yellow-500 mr-2"></i>
                250+ Edited Photo
              </li>
              <li className="flex items-center">
                <i className="fas fa-film text-yellow-500 mr-2"></i>
                3-5 Min. Wedding Video
              </li>
              <li className="flex items-center">
                <i className="fas fa-share text-yellow-500 mr-2"></i>1 min.
                Wedding Short Video for Socmed
              </li>
              <li className="flex items-center">
                <i className="fas fa-book text-yellow-500 mr-2"></i>1 Album
                Magazine + 1 Box Package
              </li>
              <li className="flex items-center">
                <i className="fas fa-cloud text-yellow-500 mr-2"></i>
                All Photo on Google Drive & Flashdisk
              </li>
            </ul>
          </div>

          {/* Paket Prewedding */}
          <div className="bg-gray-800 text-white p-6 rounded-lg shadow-xl transition-transform transform hover:scale-105 text-sm md:text-base">
            <h2 className="text-xl md:text-2xl font-bold mb-4 text-center">
              Prewedding
            </h2>
            <ul className="list-none space-y-3">
              <li className="flex items-center">
                <i className="fas fa-clock text-pink-500 mr-2"></i>4 Hours
                Session
              </li>
              <li className="flex items-center">
                <i className="fas fa-camera text-pink-500 mr-2"></i>1
                Photographer
              </li>
              <li className="flex items-center">
                <i className="fas fa-images text-pink-500 mr-2"></i>
                100+ Edited Photo
              </li>
              <li className="flex items-center">
                <i className="fas fa-map-marker-alt text-pink-500 mr-2"></i>1
                Location for 2 outfit
              </li>
              <li className="flex items-center">
                <i className="fas fa-cloud text-pink-500 mr-2"></i>
                All Photo on Google Drive
              </li>
              <li className="flex items-center">
                <i className="fas fa-lightbulb text-pink-500 mr-2"></i>
                Special Include (Concept & Mood Board)
              </li>
            </ul>
          </div>

          {/* Paket Photobooth */}
          <div className="bg-gray-800 text-white p-6 rounded-lg shadow-xl transition-transform transform hover:scale-105 text-sm md:text-base">
            <h2 className="text-xl md:text-2xl font-bold mb-4 text-center">
              Photobooth
            </h2>
            <ul className="list-none space-y-3">
              <li className="flex items-center">
                <i className="fas fa-palette text-green-500 mr-2"></i>
                Free design twibbon sesuai tema yang diinginkan
              </li>
              <li className="flex items-center">
                <i className="fas fa-file-image text-green-500 mr-2"></i>
                Free semua softfile (file foto & GIF)
              </li>
              <li className="flex items-center">
                <i className="fas fa-cloud-upload-alt text-green-500 mr-2"></i>
                Semua file di-upload di hari yang sama
              </li>
              <li className="flex items-center">
                <i className="fas fa-print text-green-500 mr-2"></i>
                Cetak ukuran 4R langsung jadi
              </li>
              <li className="flex items-center">
                <i className="fas fa-map-marker-alt text-green-500 mr-2"></i>
                Harga hanya untuk wilayah Bandung & Garut
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
