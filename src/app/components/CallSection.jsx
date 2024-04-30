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
    <div className="relative">
      <div className="min-h-screen flex items-center">
        <Image
          src={Vector}
          className="absolute lg:left-[-100px] -z-50 opacity-55 lg:w-[25rem] lmd:w-[30rem]"
        />
        <Image
          src={Vector}
          className="hidden lg:block absolute right-[-200px] -z-50 opacity-55 lg:w-[45rem] lmd:w-[50rem]"
        />
      </div>

      <div className="absolute z-50 lg:px-24 inset-0 flex items-center">
        <span
          style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.4)" }}
          className={`text-2xl lg:text-2xl lmd:text-4xl xlg:text-5xl text-center transform ${
            hover ? "transition duration-700 -translate-y-1 ease-in-out" : ""
          }`}
        >
          Veja como podemos te ajudar
        </span>
      </div>
      <div className="absolute z-50 px-5 lg:px-24 inset-0 flex items-end mb-32 lg:mb-0 lg:items-center justify-end rounded  ">
        <video
          className="lg:w-[25rem] lg:h-[15rem] lmd:w-[35rem] lmd:h-[20rem] xlg:w-[50rem] xlg:h-[30rem] opacity-95"
          controls
        >
          <source
            src="https://ia904701.us.archive.org/32/items/lv_0_20240426164236/lv_0_20240426164236.mp4"
            type="video/mp4"
          />
        </video>
      </div>
    </div>
  );
};

export default CallSection;
