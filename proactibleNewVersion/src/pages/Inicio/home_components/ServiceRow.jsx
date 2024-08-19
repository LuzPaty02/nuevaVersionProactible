import React from "react";
import { Link } from "react-router-dom";
import protesis from "../../../assets/images/images/gallery/protesis.jpg";
import ortesis from "../../../assets/images/images/gallery/ortesis.jpg";
import rehabilitacion from "../../../assets/images/images/gallery/rehabilitacion.jpg";
import ventaComponentes from "../../../assets/images/images/gallery/ventaComponentes.png";

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
  "/venta-componentes": ventaComponentes,
};

export default function ServiceRow() {
  return (
    <div className="grid grid-cols-1 gap-4 p-4 sm:grid-cols-2 lg:grid-cols-4 ">
      {Object.entries(pathMapping).map(([text, path], index) => (
        <div
          key={index}
          className="flex flex-col items-center justify-center p-4 mb-4 group"
        >
          <div className="w-full h-48 rounded-lg overflow-hidden mb-4 shadow-lg transition-transform duration-300">
            <img
              src={imageMapping[path]} // Use the imageMapping to get the correct image
              alt={text}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="text-center p-2 font-sans text-base sm:text-lg">
            <Link to={path}>
              <button className="w-full bg-blue-950 text-white px-6 py-3 rounded-lg transition-transform duration-300 transform active:scale-95 focus:outline-none hover:bg-blue-600 active:bg-blue-700 hover:scale-105 ease-in-out">
                {text}
              </button>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}
