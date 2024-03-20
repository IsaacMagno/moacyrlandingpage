"use client";
import { useState } from "react";
import { ArrowDown } from "lucide-react";

const MainSection = () => {
  const [hover, setHover] = useState(false);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center relative gap-20 px-5">
      <div className="text-center flex flex-col gap-4">
        <h1 className="responsive-title">Invista no futuro</h1>
        <h2 className="responsive-title">financeiro da sua empresa!</h2>
      </div>
      <div className="text-center">
        <p>Como está a saúde financeira da sua empresa hoje?</p>
        <span>
          Você até possui o controle das contas, mas sabe como fazer um
          planejamento financeiro?
        </span>
      </div>
      <div
        className="absolute bottom-10 flex flex-col items-center cursor-pointer transition-all duration-500 text-yellow-500"
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
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
