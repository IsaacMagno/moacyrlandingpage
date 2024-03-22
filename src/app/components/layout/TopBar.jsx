"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import logoIcon from "/public/logoIcon.png";
import logoText from "/public/logoText.png";
import BudgetButton from "./budgetButton";
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
      className="h-10 lmd:h-14 xlg:h-20 pt-2 lmd:pt-5 px-5 lg:px-14 lmd:px-24 flex justify-between items-center"
      style={{ position: "fixed", top: 0, width: "100%", zIndex: 1 }}
    >
      <Link
        className="h-full w-[6.7rem]  lg:w-[11rem] lmd:w-[15.5rem] relative flex gap-2"
        href="https://moacyrcontabil.com.br/inicio"
        target="blank"
      >
        <div>
          <Image
            src={logoText}
            className={`w-16 lg:w-28 py-2 lmd:min-h-full lmd:w-auto  ${
              scrollPosition > 150
                ? "transform transition ease-out duration-700 opacity-0"
                : "transform transition ease-in duration-1000 delay-[400ms] opacity-1"
            }`}
          />
        </div>
        <div>
          <Image
            src={logoIcon}
            className={`w-10 lg:w-14 lmd:min-h-full lmd:w-auto
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
          <p className="max-w-[9rem] text-right lg:text-left lg:max-w-full">
            Conheça nossas soluções
          </p>
          <ArrowRight className="w-4 lmd:w-6" />
        </Link>

        <Link
          href="https://moacyrcontabil.com.br/inicio"
          className="lg:py-1 lmd:py-3 px-2 border border-yellow-500 text-yellow-500 rounded-2xl hover:bg-yellow-500 hover:text-black hidden lg:block"
          target="blank"
        >
          Solicitar Orçamento
        </Link>
      </div>
    </div>
  );
};

export default TopBar;
