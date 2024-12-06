import Staff from "./conocenos_componentes/Staff";
import Testimonios from "./conocenos_componentes/Testimonios";
import Historia from "./conocenos_componentes/Historia";
import Equipo from "./conocenos_componentes/Equipo.jsx";
import Mision from "./conocenos_componentes/mision.jsx";
import Propuesta from "./conocenos_componentes/propuesta.jsx";

export default function Conocenos() {
  return (
    <div className="bg-gray-50">
      {/* Historia Section */}
      <div
        id="/Conocenos"
        className="flex flex-col items-center justify-center p-4 w-full max-w-screen-full mx-auto"
      >
        <h2 className="text-4xl md:text-6xl font-normal text-blue p-4 font-serif max-w-4xl text-center">
          Conoce nuestra Historia
        </h2>
        <div className="p-8 rounded-lg w-full">
          <Historia />
        </div>
      </div>

      {/* Misión and Propuesta Section */}
      <div className="flex flex-col md:flex-row gap-6 items-stretch p-8 w-full mx-auto">
        <div className="w-full md:w-1/2 flex flex-col">
          <h2 className="px-8 text-4xl mb-2 md:text-5xl font-normal text-blue font-serif text-center">
            Nuestra Misión
          </h2>
          <div className="p-8 md:bg-white md:shadow-md rounded-lg flex-1">
            <Mision />
          </div>
        </div>
        <div className="w-full md:w-1/2 flex flex-col">
          <h2 className="px-8 text-4xl mb-2 md:text-5xl font-normal text-blue font-serif text-center">
            Nuestra Propuesta
          </h2>
          <div className="p-8 md:bg-white md:shadow-md rounded-lg flex-1">
            <Propuesta />
          </div>
        </div>
      </div>

      {/* Testimonios Section */}
      <div
        id="Testimonios"
        className="flex flex-col items-center justify-center p-4 w-full mx-auto"
      >
        <h2 className="text-4xl md:text-6xl font-normal text-blue p-4 font-serif max-w-4xl text-center">
          Conoce Testimonios
        </h2>
        <div className="w-full px-4">
          <Testimonios />
        </div>
      </div>

      {/* Equipo Section */}
      <div className="flex flex-col items-center justify-center p-6 sm:p-8 w-full mx-auto">
        <h2 className="text-3xl sm:text-4xl md:text-6xl font-normal text-blue p-4 font-serif max-w-4xl text-center">
          Conoce a nuestro equipo
        </h2>
        <div className="w-full px-4 sm:px-8 md:bg-white md:shadow-md rounded-lg">
          <Staff />
          <div className="my-6">
            <Equipo />
          </div>
        </div>
      </div>
    </div>
  );
}
