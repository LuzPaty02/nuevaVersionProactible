import Staff from "./conocenos_componentes/Staff";
import Testimonios from "./conocenos_componentes/Testimonios";
import Historia from "./conocenos_componentes/Historia";
import Equipo from "./conocenos_componentes/Equipo.jsx";
import Mision from "./conocenos_componentes/mision.jsx";
import Propuesta from "./conocenos_componentes/propuesta.jsx";

export default function Conocenos() {
  return (
    <div>
      {/* Historia Section */}
      <div id="/Conocenos" className="flex flex-col items-center justify-center py-8">
        <h2 className="text-4xl md:text-6xl font-normal text-blue p-4 font-serif max-w-4xl text-center">
          Conoce nuestra Historia
        </h2>
        <Historia />
      </div>

      {/* Misión and Propuesta Section */}
      <div>
        <Mision />
        <Propuesta />
      </div>

      {/* Equipo Section */}
      <div className="flex flex-col items-center justify-center py-8">
        <h2 className="text-4xl md:text-6xl font-normal text-blue p-4 font-serif max-w-4xl text-center">
          Conoce a nuestro equipo
        </h2>
        <div className="w-full">
        <Staff />
        <Equipo />
        </div>
          
      </div>

      {/* Testimonios Section */}
      <div id="Testimonios" className="flex flex-col items-center justify-center py-8">
        <h2 className="text-4xl md:text-6xl font-normal text-blue p-4 font-serif max-w-4xl text-center">
          Conoce Testimonios
        </h2>
        <Testimonios />
      </div>
    </div>
  );
}
