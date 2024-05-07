import { ArrowDown } from "lucide-react";
import React, { useState } from "react";

const VideoSection = () => {
  const [hover, setHover] = useState(false);

  const scrollToBottom = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
  };

  return (
    <div className="relative w-full h-full">
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-12 px-5">
        <h1
          className="responsive-video-section"
          style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.4)" }}
        >
          Como está a saúde financeira de sua empresa hoje?
        </h1>
        <h1
          className="responsive-video-section"
          style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.4)" }}
        >
          Você trabalha, mas não vê o lucro?
        </h1>
        <span className="responsive-video-section">
          Invista no seu futuro financeiro com nosso serviço de Planejamento e
          Controle Financeiro e dê um passo à frente na realização dos seus
          objetivos empresariais!
        </span>
        <div
          className="absolute z-50 bottom-10 flex flex-col items-center cursor-pointer transition-all duration-500 text-yellow-500"
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
          onClick={() => scrollToBottom()}
        >
          <p
            className={`transform ${
              hover ? "transition duration-700 -translate-y-1 ease-in-out" : ""
            } `}
          >
            Veja como trabalhamos
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
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="bg-black opacity-60 w-full h-full"></div>
      </div>
      <video autoPlay loop muted className="w-full h-full object-cover">
        <source
          src="https://ia600203.us.archive.org/8/items/fullvideo_202403/fullvideo.mp4"
          type="video/mp4"
        />
      </video>
    </div>
  );
};

export default VideoSection;
