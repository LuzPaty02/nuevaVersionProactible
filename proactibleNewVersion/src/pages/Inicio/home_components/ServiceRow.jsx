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
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 p-2">
      {Object.entries(pathMapping).map(([text, path], index) => (
        <div key={index} className="flex flex-col items-center justify-center p-2 group">
          <div className="w-64 h-64 rounded-full overflow-hidden mb-2 transition-transform duration-300 transform group-hover:scale-105">
            <img
              src={imageMapping[path]} // Use the imageMapping to get the correct image
              alt={text}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="p-4 font-sans text-lg">
            <Link to={path}>
              <button className="bg-blue-950 text-white px-4 py-2 rounded transition-transform duration-300 transform group-hover:scale-105 focus:outline-none hover:bg-blue-600 active:bg-blue-700">
                {text}
              </button>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}
