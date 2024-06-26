"use client";
import { useState } from "react";
import { ArrowDown } from "lucide-react";
import Image from "next/image";
import Vector from "/public/Vector.png";

const MainSection = () => {
  const [hover, setHover] = useState(false);

  const scrollToBottom = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center relative gap-20 px-5">
      <Image src={Vector} className="absolute -z-50 opacity-65" />

      <div className="text-center lg:grid lg:grid-cols-3 flex flex-col justify-between gap-2 w-full h-[40vh]">
        <span className="text-xl lg:text-3xl lmd:text-4xl xlg:text-5xl">
          Como está a saúde financeira de sua empresa hoje?
        </span>
        <span className="text-xl lg:text-3xl lmd:text-4xl xlg:text-5xl flex items-center">
          Você trabalha, mas não vê o lucro?
        </span>
        <span className="text-xl lg:text-3xl lmd:text-4xl xlg:text-5xl flex items-end">
          Até possui o controle das contas, mas não sabe como planejar?
        </span>
      </div>
      <div
        className="absolute bottom-10 flex flex-col items-center cursor-pointer transition-all duration-500 text-yellow-500"
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        onClick={() => scrollToBottom()}
      >
        <p
          className={`transform ${
            hover ? "transition duration-700 -translate-y-1 ease-in-out" : ""
          } `}
        >
          Conheça nossos diferenciais!
        </p>
        <ArrowDown
          className={`stroke-[3] transform ${
            hover
              ? "transition duration-700 translate-y-1 w-5  ease-in-out"
              : "w-5"
          }`}
        />
      </div>
    </div>
  );
};

export default MainSection;
