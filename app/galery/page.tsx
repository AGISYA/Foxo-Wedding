"use client";
import FifthGalery from "@/components/organisemsgalery/fifth-gallery";
import FirstGalery from "@/components/organisemsgalery/first-galery";
import FourthGallery from "@/components/organisemsgalery/fourth-gallery";
import Hero from "@/components/organisemsgalery/hero";
import SecondGallery from "@/components/organisemsgalery/second-gallery";
import ThirdGallery from "@/components/organisemsgalery/third-gallery";
import Wellcome from "@/components/organisemsgalery/wellcome";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { FaArrowUp } from "react-icons/fa";
export default function GaleryFoto() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);

  const menuItems = [
    { name: "Home", href: "#home" },
    { name: "Photos", href: "/galery" },
    { name: "Videos", href: "#videos" },
    { name: "Booking", href: "#booking" },
    { name: "Contact", href: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsScrolled(!entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      if (heroRef.current) {
        observer.unobserve(heroRef.current);
      }
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <main className="bento-container bg-wedding-light text-wedding-dark bg-white overflow-hidden">
      <nav
        className={`fixed w-full top-0 z-50 transition-all ${
          isScrolled ? "bg-amber-950 shadow-lg" : "bg-transparent"
        }`}
      >
        <div className="container mx-auto flex justify-between items-center p-4">
          {/* Desktop Menu */}
          <ul className="hidden md:flex space-x-6">
            {menuItems.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.href}
                  className="text-white hover:underline hover:decoration-white hover:decoration-2 transition-colors"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle navigation menu"
              className="text-white text-2xl"
            >
              {isMenuOpen ? "✖" : "☰"}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden p-4 bg-amber-950 text-white">
            <ul>
              {menuItems.map((item) => (
                <li key={item.name} className="my-2">
                  <Link
                    href={item.href}
                    className="block hover:underline hover:decoration-white hover:decoration-2 transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </nav>
      <div ref={heroRef}>
        <Hero />
      </div>
      <Wellcome />
      <FirstGalery />
      <SecondGallery />
      <ThirdGallery />
      <FourthGallery />
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 bg-amber-950 text-white p-3 rounded-full shadow-lg hover:bg-amber-600 transition-all"
        >
          <FaArrowUp size={20} />
        </button>
      )}
      <FifthGalery />
    </main>
  );
}
