import React from "react";

const VideoSection = () => {
  return (
    <div className="relative w-full h-screen">
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-10 px-5">
        <h1
          className="responsive-video-section"
          style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.4)" }}
        >
          No competitivo mundo dos negócios, o sucesso está diretamente ligado à
          eficácia do seu planejamento financeiro.
        </h1>
        <h1
          className="responsive-video-section"
          style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.4)" }}
        >
          É por isso que estamos animados em apresentar a vocês o nosso mais
          recente serviço de Planejamento e Controle Financeiro, desenvolvido
          para dar suporte a empresas como a sua!
        </h1>
      </div>
      <div className="absolute inset-0 flex items-center justify-center z-[1]">
        <div className="bg-black opacity-60 w-full h-full"></div>
      </div>

      <div className="absolute inset-0">
        <iframe
          src="https://player.vimeo.com/video/927190772?autoplay=1&loop=1&controls=0"
          width="100%"
          height="100%"
          frameBorder="0"
          allow="autoplay; fullscreen"
          allowFullScreen
          title="Vimeo video"
        ></iframe>
      </div>
    </div>
  );
};

export default VideoSection;
