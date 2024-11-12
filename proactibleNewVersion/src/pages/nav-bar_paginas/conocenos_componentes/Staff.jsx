import carlos from "../../../assets/images/images/team/carlos.jpg";
import paulina from "../../../assets/images/images/team/paulina.jpg";
import rigoberto from "../../../assets/images/images/team/rigoberto.jpg";

export default function Staff() {
  return (
    <div className="flex flex-row justify-center items-center mt-10 gap-6 md:gap-10 lg:gap-12 font-serif">
      {/* Paulina */}
      <div className="flex flex-col justify-center items-center w-1/3">
        <div className="w-24 h-24 sm:w-40 sm:h-40 md:w-48 md:h-48 md:rounded-lg overflow-hidden flex-shrink-0">
          <img
            className="w-full h-full object-cover"
            src={paulina}
            alt="Paulina avatar"
          />
        </div>
        <h2 className="text-lg text-blue font-bold mt-2 mb-1">Paulina L.</h2>
        <p className="text-sm text-gray-600 text-center">Directora de operaciones</p>
      </div>

      {/* Carlos */}
      <div className="flex flex-col justify-center items-center w-1/3">
        <div className="w-24 h-24 sm:w-40 sm:h-40 md:w-48 md:h-48 md:rounded-lg overflow-hidden flex-shrink-0">
          <img
            className="w-full h-full object-cover"
            src={carlos}
            alt="Carlos avatar"
          />
        </div>
        <h2 className="text-lg text-blue font-bold mt-2 mb-1">Carlos C.</h2>
        <p className="text-sm text-gray-600 text-center">Director General</p>
      </div>

      {/* Rigoberto */}
      <div className="flex flex-col justify-center items-center w-1/3">
        <div className="w-24 h-24 sm:w-40 sm:h-40 md:w-48 md:h-48 md:rounded-lg overflow-hidden flex-shrink-0">
          <img
            className="w-full h-full object-cover"
            src={rigoberto}
            alt="Rigoberto avatar"
          />
        </div>
        <h2 className="text-lg text-blue font-bold mt-2 mb-1">Rigoberto C.</h2>
        <p className="text-sm text-gray-600 text-center">Director de Cálidad</p>
      </div>
    </div>
  );
}
