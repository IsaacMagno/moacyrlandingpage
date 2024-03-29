"use client";
import { useState } from "react";
import { ArrowDown } from "lucide-react";
import Image from "next/image";
import Vector from "/public/Vector.png";

const CallSection = () => {
  const [hover, setHover] = useState(false);

  const scrollToBottom = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center relative gap-20 px-5">
      <Image src={Vector} className="absolute -z-50 opacity-55" />

      <div
        className="flex flex-col items-center cursor-pointer transition-all duration-500 text-white mt-12"
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        onClick={() => scrollToBottom()}
      >
        <span
          style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.4)" }}
          className={`text-3xl lg:text-4xl lmd:text-6xl text-center transform ${
            hover ? "transition duration-700 -translate-y-1 ease-in-out" : ""
          } `}
        >
          Veja como podemos te ajudar
        </span>
        <ArrowDown
          className={`w-8 h-8 lg:w-11 lmd:w-16 lg:h-11 lmd:h-16 stroke-[3] transform ${
            hover ? "transition duration-700 translate-y-1 ease-in-out" : ""
          }`}
        />
      </div>
    </div>
  );
};

export default CallSection;
