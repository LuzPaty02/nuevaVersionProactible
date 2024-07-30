import React from "react";

export default function Nosotros() {
  return (
    <div className="bg-blue-700 flex flex-col items-center justify-center space-y-4 p-1">
      <div className="bg-green-400 text-center">
        <h1 className="text-5xl sm:text-3xl md:text-4xl lg:text-5xl font-normal text-blue pb-2 font-serif">
          Conoce nuestros servicios
        </h1>
      </div>
      <div className="bg-orange-400 p-5 px-20">
        <p className="text-3xl md:text-xl font-normal text-darkGray font-serif text-center">
          Nos enfocamos en la atención integral de las personas con una amputación de miembro inferior
          (pierna) para que la recuperación de su movilidad sea económicamente accesible.
        </p>
      </div>
    </div>
  );
}
