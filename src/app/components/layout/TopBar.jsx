"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import logoIcon from "/public/logoIcon.png";
import logoText from "/public/logoText.png";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const TopBar = () => {
  const [noTopo, setNoTopo] = useState(true);
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    function handleScroll() {
      const position = window.scrollY;
      setScrollPosition(position);
      setNoTopo(position === 0);
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`h-10 lg:h-16 xlg:h-20 py-1 lg:py-2 px-5 lg:px-14 lmd:px-24 flex justify-between items-center ${
        !noTopo ? "backdrop-filter backdrop-blur-lg" : ""
      }`}
      style={{ position: "fixed", top: 0, width: "100%", zIndex: 1 }}
    >
      <Link
        className="h-full w-[6.7rem] lg:w-[9.3rem] lmd:w-[9rem] xlg:w-[13.5rem] relative flex gap-2"
        href="https://moacyrcontabil.com.br/inicio"
        target="blank"
      >
        <div>
          <Image
            src={logoText}
            className={`w-16 lg:w-24 lmd:w-26 xlg:w-36 pt-1  ${
              scrollPosition > 150
                ? "transform transition ease-out duration-700 opacity-0"
                : "transform transition ease-in duration-1000 delay-[400ms] opacity-1"
            }`}
          />
        </div>
        <div>
          <Image
            src={logoIcon}
            className={`w-8 lg:w-12 lmd:w-11 xlg:w-16
            `}
            style={{
              animation: noTopo
                ? "moveLeftToRight 1s linear forwards"
                : "moveRightToLeft 1s linear forwards",
              position: "absolute",
              transition: "right 0.3s ease",
            }}
          />
        </div>
      </Link>

      <div className="flex items-center gap-2 lg:gap-6 lmd:gap-12">
        <Link
          href="https://moacyrcontabil.com.br/inicio"
          className="flex items-center lmd:items-end text-yellow-500 gap-2"
          target="blank"
        >
          <p className="hidden lg:block text-right lg:text-left hover:text-white">
            Conheça nossas soluções
          </p>
          <p className="lg:hidden text-right lg:text-left hover:text-white">
            Nossas soluções
          </p>
          {/* <ArrowRight className="w-4 lmd:w-6" /> */}
        </Link>

        <Link
          href="https://api.whatsapp.com/send?phone=551938932236&text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20os%20serviços%20da%20contabilidade."
          className="lg:py-1 lmd:py-2 px-2 lmd:px-3 border border-yellow-500 text-yellow-500 rounded-2xl hover:bg-yellow-500 hover:text-black hidden lg:block"
          target="blank"
        >
          Solicitar Orçamento
        </Link>
      </div>
    </div>
  );
};

export default TopBar;
