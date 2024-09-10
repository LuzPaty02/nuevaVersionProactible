import React from "react";
import Carreraproactible1 from "../../../assets/images/images/Carreraproactible1.jpg";
import { WHATSAPP_LINK } from "../../../assets/whatsapp";
import { whatsappIcon } from "../../../assets/iconPaths";

export default function Banner() {
  return (
    <div id="home" className="bg-white h-auto flex flex-col md:flex-row">
      <div className="flex flex-col md:flex-row flex-1">
        {/* Left Side */}
        <div className="bg-white flex-1 flex flex-col items-center justify-center text-center md:px-6 md:py-12">
          <div className="bg-white mt-12 md:mt-16 mb-2 md:mb-4 md:p-4">
          <h1 className="font-serif text-4xl md:text-6xl font-bold text-blue rounded-lg max-w-full">
                <span className="inline md:hidden">Laboratorio de prótesis y órtesis</span> {/* Mobile view */}
    <span className="hidden md:inline">
      Laboratorio de <br />prótesis y órtesis
    </span> {/* Desktop and larger screens */}
            </h1>
          </div>  
          <div className="bg-white mb-2 md:mb-4 p-2 md:p-4">
            <p className="text-blue font-serif italic text-lg md:text-3xl">
              Para volver a caminar
            </p>
          </div>
          {/* Button hidden on small screens */}
          <div className="hidden md:flex bg-white justify-center p-2 md:p-4 md:my-10">
            <button className="bg-green-500 flex items-center text-white font-bold py-2 px-4 rounded-full border-none transition-transform transform hover:bg-green-600 active:bg-green-700 hover:scale-105 ease-in-out duration-300">
              <a href={WHATSAPP_LINK} className="flex items-center">
                {whatsappIcon}
                <span className="ml-2 text-sm md:text-base">¡Agenda tu cita aquí!</span>
              </a>
            </button>
          </div>
        </div>
        {/* Right Side */}
        <div className="bg-white flex-1 flex flex-col items-center justify-center md:p-4">
          <div className="bg-white flex items-center justify-center mt-4 md:mt-10">
            <img
              src={Carreraproactible1}
              className="w-full h-auto object-cover rounded-lg"
            />
          </div>
          {/* Button visible on small screens */}
          <div className="md:hidden flex justify-center mt-6 z-10">
            <button className="bg-green-500 flex items-center text-white font-bold py-2 px-4 rounded-full border-none transition-transform transform hover:scale-105 ease-in-out duration-300">
              <a href={WHATSAPP_LINK} className="flex items-center">
                {whatsappIcon}
                <span className="ml-2 text-sm md:text-lg">¡Agenda tu cita aquí!</span>
              </a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
