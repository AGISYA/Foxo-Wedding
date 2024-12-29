import FifthGalery from "@/components/organisemsgalery/fifth-gallery";
import FirstGalery from "@/components/organisemsgalery/first-galery";
import FourthGallery from "@/components/organisemsgalery/fourth-gallery";
import Hero from "@/components/organisemsgalery/hero";
import SecondGallery from "@/components/organisemsgalery/second-gallery";
import ThirdGallery from "@/components/organisemsgalery/third-gallery";
import Wellcome from "@/components/organisemsgalery/wellcome";
export default function GaleryFoto() {
  return (
    <main className="bento-container bg-wedding-light text-wedding-dark bg-white overflow-hidden">
      <Hero />
      <Wellcome />
      <FirstGalery />
      <SecondGallery />
      <ThirdGallery />
      <FourthGallery />
      <FifthGalery />
    </main>
  );
}
