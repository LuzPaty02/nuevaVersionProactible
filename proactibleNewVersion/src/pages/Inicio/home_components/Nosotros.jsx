import React from "react";

export default function Nosotros() {
  return (
    <div className="flex flex-col items-center justify-center space-y-4 p-1">
      <div className="text-center">
        <h1 className="text-4xl md:text-6xl font-normal text-blue p-2 font-serif">
          Conoce nuestros servicios
        </h1>
      </div>
      <div className="px-4 sm:px-6 md:px-10 lg:px-20">
        <p className="text-xl sm:text-lg md:text-xl lg:text-2xl font-normal font-serif text-center mb-4 sm:mb-6 md:mb-8 lg:mb-10">
          Nos especializamos en ofrecer una atención integral a las personas que
          han experimentado una{" "}
          <span className="hidden sm:inline">
            <br />
          </span>
          amputación de{" "}
          <span className="bg-yellow-200">
            miembro inferior (pierna)
          </span>
          , desde la{" "}
          <span className="underline">
            valoración prótesica
          </span>{" "}
          hasta la{" "}
          <span className="underline">rehabilitación completa</span>.{" "}
          <span className="hidden sm:inline">
            <br />
          </span>
          Trabajamos para que cada paciente recupere su movilidad de
          forma accesible y con la mejor calidad posible.
        </p>
      </div>
    </div>
  );
}
