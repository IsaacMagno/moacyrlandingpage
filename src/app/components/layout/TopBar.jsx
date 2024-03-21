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
      className="h-20 pt-5 px-24 flex  justify-between"
      style={{ position: "fixed", top: 0, width: "100%", zIndex: 1 }}
    >
      <div className="h-full w-[15.5rem] relative flex gap-2">
        <div>
          <Image
            src={logoText}
            className={`min-h-full w-auto py-2 staticDiv ${
              scrollPosition > 150
                ? "transform transition ease-out duration-700 opacity-0"
                : "transform transition ease-in duration-1000 delay-[400ms] opacity-1"
            }`}
          />
        </div>
        <div>
          <Image
            src={logoIcon}
            className={`min-h-full w-auto`}
            style={{
              animation: noTopo
                ? "moveLeftToRight 1s linear forwards"
                : "moveRightToLeft 1s linear forwards",
              position: "absolute",
              transition: "right 0.3s ease",
            }}
          />
        </div>
      </div>

      <div className="flex items-center gap-12">
        <Link
          href="https://moacyrcontabil.com.br/inicio"
          className="flex items-end text-yellow-500 gap-2"
          target="blank"
        >
          <p>Conheça nossas soluções</p>
          <ArrowRight className="w-6" />
        </Link>

        <Link
          href="https://moacyrcontabil.com.br/inicio"
          className="py-3 px-2 border border-yellow-500 text-yellow-500 rounded-2xl hover:bg-yellow-500 hover:text-black"
          target="blank"
        >
          Solicitar Orçamento
        </Link>
      </div>
    </div>
  );
};

export default TopBar;
