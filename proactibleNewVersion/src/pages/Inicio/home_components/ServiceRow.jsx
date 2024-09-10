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
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {Object.entries(pathMapping).map(([text, path], index) => (
        <div key={index} className="flex flex-col items-center justify-center p-2 group">
          {/* On desktop, wrap the image and button inside a single link */}
          <Link to={path} className="hidden lg:block w-full h-auto transition-transform duration-300 transform hover:scale-105 ease-in-out">
            <div className="w-full h-48 rounded-t overflow-hidden shadow-lg">
              <img
                src={imageMapping[path]} // Use the imageMapping to get the correct image
                alt={text}
                className="w-full h-full object-cover"
              />
            </div>
            <button className="w-full bg-blue-950 text-white px-6 py-3 rounded-b transition-transform duration-300 transform active:scale-95 focus:outline-none hover:bg-blue-600 active:bg-blue-700">
              {text}
            </button>
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
              <button className="w-full bg-blue-950 text-white px-6 py-3 rounded-lg transition-transform duration-300 transform active:scale-95 focus:outline-none hover:bg-blue-600 active:bg-blue-700">
                {text}
              </button>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}
