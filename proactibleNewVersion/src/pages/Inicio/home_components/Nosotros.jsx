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
        <p className="text-xl sm:text-lg md:text-xl lg:text-2xl font-normal text-darkGray font-serif text-center">
          Nos enfocamos en la atención integral de las personas con una amputación de miembro inferior
          (pierna) para que la recuperación de su movilidad sea económicamente accesible.
        </p>
      </div>
    </div>
  );
}
