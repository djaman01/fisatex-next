"use client";

import Image from "next/image";
import gantsAccueil from "../../public/assets/gants-cadrés.jpg";
import kitsAccueil from "../../public/assets/kits-cadrés.jpg";
import sandalesAccueil from "../../public/assets/new-sandales.jpg";
import peauxMortes from "../../public/assets/peau-morte.jpg";
import kitFemme from "../../public/assets/kit2visage.jpg";

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
    <>
      <section className="mx-10 mt-2 grid grid-cols-[1.7fr,1fr] grid-rows-[395px,200px] gap-3 max-lg:mx-5 max-lg:mt-7 max-lg:flex max-lg:flex-col max-lg:gap-5">
        <div className="row-span-2 max-lg:h-[340px]">
          <Image
            src={gantsAccueil}
            alt="Gants de gommage pour Hammam"
            className="h-full w-full cursor-pointer rounded-[20px] object-fill"
            data-aos="zoom-in"
            onClick={scrollToTop}
            priority
          />
        </div>

        <div className="max-lg:h-[290px]">
          <Image
            src={kitsAccueil}
            alt="Gants de gommage pour Hammam"
            className="h-full w-full cursor-pointer rounded-[20px] object-fill"
            data-aos="zoom-in"
            onClick={scrollToTop}
            priority
          />
        </div>

        <div className="max-lg:h-[200px]">
          <Image
            src={sandalesAccueil}
            alt="Gants de gommage pour Hammam"
            className="w-full cursor-pointer rounded-[20px] object-fill max-md:h-[200px] md:h-[500px] lg:h-full"
            data-aos="zoom-in"
            onClick={scrollToTop}
            priority
          />
        </div>
      </section>

      <section className="mx-2 mt-10">
        <h2 className="pb-7 text-center font-palanquin text-3xl font-bold lg:text-[40px]">
          Les <span className="text-coral-red">Bienfaits</span> de notre{" "}
          <span className="text-coral-red">Gant</span> de gommage
        </h2>
        <div className="grid grid-cols-[350px,250px,500px] grid-rows-[500px] justify-center gap-10 border-none max-lg:mt-5 max-lg:grid max-lg:grid-cols-[1fr,1fr] max-lg:grid-rows-[350px]">
          <Image
            src={peauxMortes}
            alt="peaux mortes"
            data-aos="fade-up"
            className="h-full w-full cursor-pointer rounded-xl "
          />
          <Image
            src={kitFemme}
            alt="Kit Visage"
            data-aos="fade-down"
            className="h-full w-full cursor-pointer rounded-xl object-cover lg:h-full lg:object-contain"
          />

          <div className="prose col-span-2 rounded-lg shadow-2xl max-lg:min-w-full lg:col-span-1">
            <h2 className="pt-4 text-center font-palanquin font-bold lg:pt-5 lg:text-3xl">
              Refaites vous une <span className="text-coral-red">Nouvelle</span>{" "}
              peau !
            </h2>

            <ul className="font-palanquin text-xl lg:text-[22px]">
            <li> Nettoie la peau en profondeur </li>
            <li> Elimine les cellules mortes</li>
            <li> Libère les pores </li>
            <li> Stimule la circulation sanguine </li>
            <li>
              Disponible en <b>version visage</b> et <b>corps</b> pour un
              meilleur Confort
            </li>
          </ul>

            <div className="flex flex-col items-center justify-center max-lg:mb-[15px] max-lg:mt-[-50px] lg:mt-[-40px]">
            <h2 className="font-palanquin font-bold max-lg:mb-[15px] lg:text-2xl">
              Intéressés ?
            </h2>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
