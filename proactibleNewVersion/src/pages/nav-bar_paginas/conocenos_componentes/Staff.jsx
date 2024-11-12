import carlos from "../../../assets/images/images/team/carlos.jpg";
import paulina from "../../../assets/images/images/team/paulina.jpg";
import rigoberto from "../../../assets/images/images/team/rigoberto.jpg";

export default function Staff() {
  return (
    <div className="flex flex-row justify-center items-center mt-10 gap-4 md:gap-12 lg:gap-16 font-serif">
      {/* Paulina */}
      <div className="flex flex-col justify-center items-center w-1/3">
        <div className="w-24 h-24 sm:w-48 sm:h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 rounded-lg overflow-hidden flex-shrink-0 shadow-md">
          <img
            className="w-full h-full object-cover"
            src={paulina}
            alt="Paulina avatar"
          />
        </div>
        <h2 className="text-xl text-blue font-bold mt-3 mb-2">Paulina</h2>
        <p className="text-base text-gray-600 text-center">
          Directora de operaciones
        </p>
      </div>

      {/* Carlos */}
      <div className="flex flex-col justify-center items-center w-1/3">
        <div className="w-24 h-24 sm:w-48 sm:h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 rounded-lg overflow-hidden flex-shrink-0 shadow-md">
          <img
            className="w-full h-full object-cover"
            src={carlos}
            alt="Carlos avatar"
          />
        </div>
        <h2 className="text-xl text-blue font-bold mt-3 mb-2">Carlos C.</h2>
        <p className="text-base text-gray-600 text-center">Director General</p>
      </div>

      {/* Rigoberto */}
      <div className="flex flex-col justify-center items-center w-1/3">
        <div className="w-24 h-24 sm:w-48 sm:h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 rounded-lg overflow-hidden flex-shrink-0 shadow-md">
          <img
            className="w-full h-full object-cover"
            src={rigoberto}
            alt="Rigoberto avatar"
          />
        </div>
        <h2 className="text-xl text-blue font-bold mt-3 mb-2">Rigoberto</h2>
        <p className="text-base text-gray-600 text-center">
          Director de Cálidad
        </p>
      </div>
    </div>
  );
}
