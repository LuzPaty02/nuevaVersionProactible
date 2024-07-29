import React from "react";
import vectorJoin1 from "../../../assets/images/images/vectorJoin1.png";
import { WHATSAPP_LINK } from "../../../assets/whatsapp";
import { whatsappIcon } from "../../../assets/iconPaths";

export default function Banner() {
  return (
    <div className="bg-red-500 relative h-65">
      <div className="absolute inset-0">
        <svg width="400" height="441" viewBox="0 0 400 441" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" clipRule="evenodd" d="M-44.646 311.832C-83.9177 265.454 -127.622 216.271 -121.938 153.643C-116.533 94.0826 -63.4307 50.8705 -17.2162 9.5697C23.7945 -27.0806 69.3222 -54.9781 122.446 -64.7571C184.496 -76.1794 250.52 -82.4751 300.504 -48.9167C356.979 -11.0008 409.561 51.0517 398.442 120.541C387.735 187.449 297.189 205.884 251.32 258.461C200.252 316.997 195.334 425.976 120.145 439.535C45.4982 452.996 1.90526 366.807 -44.646 311.832Z" fill="#000836"/>
        </svg>
      </div>
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="flex flex-col items-center space-y-4">
          <h1 className="font-serif text-6xl font-bold text-blue p-4 rounded-lg max-w-full max-h-full text-center">
            Laboratorio de <br />prótesis y órtesis
          </h1>
          <p className="text-blue text-center font-serif italic text-3xl">
            "Para volver a caminar"
          </p>
          <button className="bg-green-500 flex items-center text-white font-bold py-2 px-4 rounded-full border-none transition-transform transform hover:scale-105 ease-in-out duration-300">
            <a href={WHATSAPP_LINK} className="flex items-center">
              {whatsappIcon}
              <span className="ml-2">¡Agenda tu cita aquí!</span>
            </a>
          </button>
        </div>
      </div>
      <img
        src={vectorJoin1}
        alt="vector join"
        className="ml-auto w-1/3 h-auto object-contain opacity-100"
      />
    </div>
  );
}