import React from "react";
import vectorJoin1 from "../../../assets/images/images/vectorJoin1.png";
import { WHATSAPP_LINK } from "../../../assets/whatsapp";
import { whatsappIcon } from "../../../assets/iconPaths";

export default function Banner() {
  return (
    <div className="bg-white h-65 flex flex-col md:flex-row">
      <div className="flex flex-col md:flex-row flex-1">
        <div className="bg-white flex-1">
          <svg 
            className="hidden md:block" 
            width="400" 
            height="441" 
            viewBox="0 0 400 441" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <path 
              fillRule="evenodd" 
              clipRule="evenodd" 
              d="M-44.646 311.832C-83.9177 265.454 -127.622 216.271 -121.938 153.643C-116.533 94.0826 -63.4307 50.8705 -17.2162 9.5697C23.7945 -27.0806 69.3222 -54.9781 122.446 -64.7571C184.496 -76.1794 250.52 -82.4751 300.504 -48.9167C356.979 -11.0008 409.561 51.0517 398.442 120.541C387.735 187.449 297.189 205.884 251.32 258.461C200.252 316.997 195.334 425.976 120.145 439.535C45.4982 452.996 1.90526 366.807 -44.646 311.832Z" 
              fill="#000836"
            />
          </svg>
        </div>
        <div className="bg-white flex-1 flex flex-col items-center justify-center text-center p-2 md:px-8 md:py-12">
          <div className="bg-white mb-4 p-2 md:p-4">
            <h1 className="font-serif text-4xl md:text-6xl font-bold text-blue rounded-lg max-w-full">
              Laboratorio de <br />prótesis y órtesis
            </h1>
          </div>  
          <div className="bg-white mb-4 p-2 md:p-4">
            <p className="text-blue font-serif italic text-xl md:text-3xl">
              "Para volver a caminar"
            </p>
          </div>
          {/* Button hidden on small screens */}
          <div className="hidden md:flex bg-white justify-center p-2 md:p-4">
            <button className="bg-green-500 flex items-center text-white font-bold py-2 px-4 rounded-full border-none transition-transform transform hover:scale-105 ease-in-out duration-300">
              <a href={WHATSAPP_LINK} className="flex items-center">
                {whatsappIcon}
                <span className="ml-2 text-sm md:text-base">¡Agenda tu cita aquí!</span>
              </a>
            </button>
          </div>
        </div>
        <div className="bg-white flex-1 flex flex-col items-center justify-center p-2 md:p-4">
          <div className="bg-white flex items-center justify-center">
            <img
              src={vectorJoin1}
              alt="vector join"
              className="w-3/4 md:w-auto h-auto object-contain"
            />
          </div>
          {/* Button visible on small screens */}
          <div className="md:hidden flex justify-center mt-4">
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
