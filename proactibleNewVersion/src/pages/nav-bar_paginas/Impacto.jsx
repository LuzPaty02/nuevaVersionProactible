import React from "react";
import VideoEmbed from "./VideoEmbed.jsx";
import Chart from "./impacto_componentes/Chart.jsx";
import Noticias from "./impacto_componentes/Noticias.jsx";
import Copa from "./impacto_componentes/Copa.jsx";
import Footer from "../../Footer.jsx";

export default function Impacto() {
  return (
    <div className="bg-gray-50">
      <div id="/Impacto" className="md:p-8 max-w-full overflow-x-hidden">
        {/* Title */}
        <div className="flex items-center justify-center mb-4">
          <h2 className="text-4xl md:text-6xl font-normal pt-8 text-blue font-serif max-w-full">
            Impacto
          </h2>
        </div>

        {/* Responsive layout for Chart, Video, and Text */}
        <div className="flex flex-col md:grid md:grid-cols-2 gap-4 max-w-full p-4">
          {/* Chart */}
          <div className="md:col-span-1 md:m-4 py-6 border border-gray-200 rounded-xl bg-white shadow-md">
            <Chart />
          </div>

          {/* Video */}
          <div className="md:col-span-1 md:m-4">
            <VideoEmbed url="https://www.youtube.com/embed/FYLRWGH0eO8" />
            <p className="mt-2 p-4 border border-gray-200 rounded-xl bg-white shadow-md">
            Te compartimos un poco del trabajo que realizamos en proactible, cómo iniciamos y cómo hemos ido evolucionando a fin de brindar lo mejor para la sociedad y nuestros pacientes.
            </p>
          </div>
        </div>

        {/* Noticias Section */}
        <div id="Noticias" className="p-8">
          <h2 className="text-4xl md:text-6xl font-normal py-2 md:p-8 text-blue font-serif max-w-full">
            Noticias de Proactible
          </h2>
          <Noticias />
        </div>

        {/* Community Section */}
        <div className="p-8">
          <h2 className="px-4 text-4xl md:text-6xl font-serif font-medium text-blue mb-4 text-center">
            Proactible para la comunidad
          </h2>
          <p>
            Organización sin ánimo de lucro con la misión de impulsar la
            inclusión de personas con una amputación de miembro inferior en
            México para la recuperación de su autonomía. A través de sus
            iniciativas
          </p>
          <Copa />
        </div>
        {/* Footer Section */}
      </div>
      <Footer />
    </div>
  );
}
