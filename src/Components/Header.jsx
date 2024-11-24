import Image from "next/image";
import Link from "next/link";

import fisatexLogo from "../../public/assets/logo-fisatex.jpg";

const Header = () => {
  return (
    <header className="padding-x w-full">
      <nav className="flex justify-between">
        <Image src={fisatexLogo} alt="Logo Fisatex" width={130} priority />

        <div className="font-montserrat text-slate-gray mr-32 flex flex-1 items-center justify-center gap-16 text-lg leading-normal max-lg:hidden">
          <p className="cursor-pointer hover:text-green-500">Accueil</p>

          <div className="group relative">
            <p className="cursor-pointer hover:text-green-500">Produits</p>

            <div className="absolute left-[-50px] z-10 hidden w-[180px] cursor-pointer rounded-lg bg-white px-2 py-5 font-serif text-gray-500 shadow-xl ring-1 ring-slate-900/5 group-hover:block">
              <p className="text-left hover:text-green-500">Gants de Gommage</p>
              <p className="py-2 text-left hover:text-green-500">
                Kit Visage <br /> Et <br /> Frotte-Dos
              </p>
              <p className="text-left hover:text-green-500">Sandales Hammam</p>
            </div>
          </div>
          <p className="cursor-pointer hover:text-green-500">À propos</p>
          <p className="cursor-pointer hover:text-green-500">Contact</p>
        </div>
      </nav>
    </header>
  );
};

export default Header;
