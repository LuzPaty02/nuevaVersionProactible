import React from "react";
import VideoEmbed from "./impacto_componentes/VideoEmbed.jsx";
import Chart from "./impacto_componentes/Chart.jsx";
import Noticias from "./impacto_componentes/Noticias.jsx";
import Copa from "./impacto_componentes/Copa.jsx";

export default function Impacto() {
  return (
    <div id="/Impacto" className="pt-4 max-w-full md:m-8 overflow-x-hidden">
      {/* Title */}
      <div className="flex items-center justify-center mb-4">
        <h2 className="text-4xl md:text-6xl justify-center font-normal pb-8 text-blue font-serif max-w-full">
          Impacto
        </h2>
      </div>
      <div className="text-base p-2 sm:text-lg md:text-xl lg:text-2xl font-normal font-serif mb-4 sm:mb-6 md:mb-8 lg:mb-10">
        texto
      </div>
      {/* Responsive layout for Chart, Text, Video, and Text */}
      <div className="flex flex-col md:grid md:grid-cols-2 md:grid-rows-1 gap-4 max-w-full">
        {/* Chart in upper-left (first on mobile view) */}
        <div className="md:row-start-1 md:col-start-1 w-full md:0"></div>

        {/* Video (third on mobile view) */}
        <div className="md:row-start-2 md:col-start-2 p-4">
          <Chart />
        </div>

        {/* Second text (fourth on mobile view) */}
        <div className="md:row-start-2 md:col-start-1 ">
          <VideoEmbed url="https://www.youtube.com/embed/FYLRWGH0eO8" />
        </div>
      </div>
      <div></div>

      <div>
        <h2 className="text-4xl md:text-6xl justify-center font-normal p-8 text-blue font-serif max-w-full">
          Noticias de Proactible
        </h2>
        <Noticias />
      </div>
      <div>
        <Copa />
      </div>
    </div>
  );
}
