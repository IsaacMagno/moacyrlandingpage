import React from "react";

const VideoSection = () => {
  return (
    <div className="relative w-full h-full">
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
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="bg-black opacity-60 w-full h-full"></div>
      </div>
      <video autoPlay loop muted className="w-full h-full object-cover">
        <source src="/public/fullvideo.mp4" type="video/mp4" />
      </video>
    </div>
  );
};

export default VideoSection;
