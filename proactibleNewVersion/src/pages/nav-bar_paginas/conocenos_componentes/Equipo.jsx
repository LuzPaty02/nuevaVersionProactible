import Protesistas from "../../../assets/images/team/protesistas.jpg";
import Fisios from "../../../assets/images/team/fisios1.jpg";
import Administracion from "../../../assets/images/team/administracion.jpg";

export default function Equipo() {
  return (
    <div className="font-serif">
      {/* First Row: Two Columns */}
      <div className="mt-5 grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-20 justify-center items-center">
        {/* Protesistas */}
        <div className="flex flex-col justify-center items-center">
          <div className="w-full h-40 sm:h-60 md:h-80 rounded-xl overflow-hidden shadow-md">
            <img
              className="w-full h-full object-cover object-left-top"
              src={Protesistas}
              alt="Protesistas"
            />
          </div>
          <h2 className="text-lg text-blue font-bold mt-4">Protesistas</h2>
        </div>

        {/* Fisios */}
        <div className="flex flex-col justify-center items-center">
          <div className="w-full h-40 sm:h-60 md:h-80 rounded-xl overflow-hidden shadow-md">
            <img
              className="w-full h-full object-cover object-left-top"
              src={Fisios}
              alt="Fisioterapeutas"
            />
          </div>
          <h2 className="text-lg text-blue font-bold mt-4">Fisioterapeutas</h2>
        </div>
      </div>

      {/* Second Row: Single Image Below */}
      <div className="mt-8 flex justify-center">
        <div className="w-full h-40 sm:h-60 md:h-80 md:w-8/12 rounded-xl overflow-hidden shadow-md">
          <img
            className="w-full h-full object-cover object-left-top"
            src={Administracion}
            alt="Administracion"
          />
        </div>
      </div>
      <h2 className="text-lg text-blue font-bold mt-4 text-center">
        Administración
      </h2>
    </div>
  );
}
