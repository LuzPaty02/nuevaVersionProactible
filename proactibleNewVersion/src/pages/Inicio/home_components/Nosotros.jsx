import React from "react";

export default function Nosotros() {
  return (
    <div className="flex flex-col items-center justify-center mt-4 md:mt-16 space-y-2">
      <div className="text-center">
        <h1 className="text-3xl md:text-6xl font-normal text-blue p-2 font-serif">
          Conoce nuestros servicios
        </h1>
      </div>
      <div className="w-full">
      <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-normal font-serif text-center mb-4 sm:mb-6 md:mb-8 lg:mb-10">
          Nos enfocamos en la atención integral de las personas con una amputación de miembro inferior (pierna). 
          {/* The line break that is hidden on small screens and visible on larger screens */}
          <span className="hidden sm:inline">
            <br />
          </span>
          {" "}Trabajamos para que cada paciente recupere su movilidad de forma accesible y con la mejor calidad posible.
        </p>
      </div>
    </div>
  );
}
