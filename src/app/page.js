"use client";

import Image from "next/image";
import gantsAccueil from "../../public/assets/gants-cadrés.jpg";
import kitsAccueil from "../../public/assets/kits-cadrés.jpg";
import sandalesAccueil from "../../public/assets/new-sandales.jpg";

import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    Aos.init({
      once: true,
      offset: 100,
      duration: 1000,
      easing: "ease-in-out",
      // delay: 100,
    });
  });

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "instant",
    });
  };

  return (
    <section className="max-lg: mx-5 mt-2 grid grid-cols-[1.7fr,1fr] grid-rows-[395px,200px] gap-3 max-lg:mt-5 max-lg:flex max-lg:flex-col max-lg:gap-5">
      <div className="row-span-2 max-lg:h-[340px]">
        <Image
          src={gantsAccueil}
          alt="Gants de gommage pour Hammam"
          className="h-full w-full cursor-pointer rounded-[20px] object-fill"
          data-aos="zoom-in"
          onClick={scrollToTop}
        />
      </div>

      <div className="max-lg:h-[290px]">
        <Image
          src={kitsAccueil}
          alt="Gants de gommage pour Hammam"
          className="h-full w-full cursor-pointer rounded-[20px] object-fill"
          data-aos="zoom-in"
          onClick={scrollToTop}
          
        />
      </div>

      <div className="max-lg:h-[200px]">
        <Image
          src={sandalesAccueil}
          alt="Gants de gommage pour Hammam"
          className="w-full cursor-pointer rounded-[20px] object-fill max-md:h-[200px] md:h-[500px] lg:h-full"
          data-aos="zoom-in"
          onClick={scrollToTop}
        />
      </div>
    </section>
  );
}
