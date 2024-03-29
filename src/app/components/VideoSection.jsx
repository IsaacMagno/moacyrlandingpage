import React from "react";

const VideoSection = () => {
  return (
    <div className="relative w-full h-full">
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-12 px-5">
        <h1
          className="responsive-video-section text-2xl lg:text-4xl lmd:text-5xl"
          style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.4)" }}
        >
          Invista no futuro financeiro da sua empresa!
        </h1>
        <h1
          className="responsive-video-section"
          style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.4)" }}
        >
          No competitivo mundo dos negócios, o sucesso de sua empresa está
          diretamente ligado à eficácia de um bom planejamento financeiro.
        </h1>
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
