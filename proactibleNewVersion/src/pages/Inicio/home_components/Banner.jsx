import React from "react";
import Carreraproactible from "../../../assets/images/images/Carreraproactible.jpg";
import { WHATSAPP_LINK } from "../../../assets/whatsapp";
import { whatsappIcon } from "../../../assets/iconPaths";

export default function Banner() {
  return (
    <div className="bg-white h-65 flex flex-col md:flex-row">
      <div className="flex flex-col md:flex-row flex-1">
        <div className="bg-white flex-1 flex flex-col items-center justify-center text-center p-2 md:px-8 md:py-12">
          <div className="bg-white mb-4 p-2 md:p-4">
            <h1 className="font-serif text-4xl md:text-6xl font-bold text-blue rounded-lg max-w-full">
              Laboratorio de <br />prótesis y órtesis
            </h1>
          </div>  
          <div className="bg-white mb-4 p-2 md:p-4">
            <p className="text-blue font-serif italic text-xl md:text-3xl">
              Para volver a caminar
            </p>
          </div>
          {/* Button hidden on small screens */}
          <div className="hidden md:flex bg-white justify-center p-2 md:p-4">
            <button className="bg-green-500 flex items-center text-white font-bold py-2 px-4 rounded-full border-none transition-transform transform  hover:bg-green-600 active:bg-green-700 hover:scale-105 ease-in-out duration-300">
              <a href={WHATSAPP_LINK} className="flex items-center">
                {whatsappIcon}
                <span className="ml-2 text-sm md:text-base">¡Agenda tu cita aquí!</span>
              </a>
            </button>
          </div>
        </div>
        <div className="bg-white flex-1 flex flex-col items-center justify-center p-2 md:p-4 mr-6">
          <div className="bg-white flex items-center justify-center">
            <img
              src={Carreraproactible}
              alt="vector join"
              className="w-3/4 md:w-auto h-auto object-contain  rounded-lg"
            />
          </div>
          {/* Button visible on small screens */}
          <div className="md:hidden flex justify-center mt-4 z-10">
            <button className="bg-green-500 flex items-center text-white font-bold py-2 px-4 rounded-full border-none transition-transform transform hover:scale-105 ease-in-out duration-300">
              <a href={WHATSAPP_LINK} className="flex items-center">
                {whatsappIcon}
                <span className="ml-2 text-base md:text-lg">¡Agenda tu cita aquí!</span>
              </a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
