import React from "react";
import { Link } from "react-router-dom";
import protesis from "../../../assets/images/protesis/protesis_boton.jpg";
import ortesis from "../../../assets/images/ortesis/boton_ortesis.jpg";
import rehabilitacion from "../../../assets/images/pagina_inicio/rehabilitacion_boton1.jpg";
import ventaComponentesBoton from "../../../assets/images/pagina_inicio/ventaComponentesBoton.jpg";

// Define mapping between text and paths
const pathMapping = {
  "Fabricación de prótesis": "/protesis",
  "Fabricación de órtesis": "/ortesis",
  "Rehabilitación física": "/rehabilitacion",
  "Venta de componentes": "/venta-componentes",
};

// Map text to image imports
const imageMapping = {
  "/protesis": protesis,
  "/ortesis": ortesis,
  "/rehabilitacion": rehabilitacion,
  "/venta-componentes": ventaComponentesBoton,
};

export default function ServiceRow() {
  return (
    <div className="grid grid-cols-1 gap-2 mb-16 sm:grid-cols-2 lg:grid-cols-4">
      {Object.entries(pathMapping).map(([text, path], index) => (
        <div
          key={index}
          className="flex flex-col items-center justify-center p-2 group"
        >
          {/* On desktop, wrap the image and button inside a single link */}
          <Link
            to={path}
            className="hidden lg:block w-full h-auto transition-transform duration-300 transform hover:scale-105 ease-in-out"
          >
            <div className="relative w-full h-64 rounded-lg overflow-hidden shadow-lg">
              <img
                src={imageMapping[path]} // Use the imageMapping to get the correct image
                alt={text}
                className="w-full h-full object-cover"
              />
              <button className="absolute bottom-0 left-0 w-full bg-white bg-opacity-50 text-black font-semibold px-6 py-3 rounded-b-lg transition-transform duration-300 transform active:scale-95 focus:outline-none hover:bg-blue-900 hover:bg-opacity-80 hover:text-white">
                {text}
              </button>
            </div>
          </Link>

          {/* On mobile, keep image and button separated */}
          <div className="lg:hidden w-full">
            <div className="w-full h-48 rounded-lg overflow-hidden shadow-lg mb-2">
              <img
                src={imageMapping[path]} // Use the imageMapping to get the correct image
                alt={text}
                className="w-full h-full object-cover"
              />
            </div>
            <Link to={path}>
              <button className="w-full bg-blue-950 text-white font-semibold px-6 py-3 rounded-lg transition-transform duration-300 transform active:scale-95 focus:outline-none hover:bg-blue-600 active:bg-blue-700">
                {text}
              </button>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}
