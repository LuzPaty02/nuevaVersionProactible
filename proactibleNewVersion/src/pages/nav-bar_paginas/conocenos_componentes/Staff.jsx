import carlos from "../../../assets/images/images/team/carlos.jpg";
import paulina from "../../../assets/images/images/team/paulina.jpg";
import rigoberto from "../../../assets/images/images/team/rigoberto.jpg";

export default function Staff() {
  return (
    <div className="flex w-full justify-center items-center mt-10 gap-6 md:gap-8 lg:gap-8 font-serif">
      {/* Paulina */}
      <div className="flex flex-col justify-center items-center w-1/3">
        <div className="w-20 h-20 sm:w-40 sm:h-40 md:w-48 md:h-48 rounded-full overflow-hidden flex-shrink-0">
          <img
            className="w-full h-full object-cover"
            src={paulina}
            alt="Paulina avatar"
          />
        </div>
        <h2 className="text-lg text-blue font-bold mt-4">Paulina</h2>
        <p className="text-sm text-gray-600 text-center">Role </p>
      </div>

      {/* Carlos */}
      <div className="flex flex-col justify-center items-center w-1/3">
        <div className="w-20 h-20 sm:w-40 sm:h-40 md:w-48 md:h-48 rounded-full overflow-hidden flex-shrink-0">
          <img
            className="w-full h-full object-cover"
            src={carlos}
            alt="Carlos avatar"
          />
        </div>
        <h2 className="text-lg text-blue font-bold mt-4">Carlos</h2>
        <p className="text-sm text-gray-600 text-center">Director</p>
      </div>

      {/* Rigoberto */}
      <div className="flex flex-col justify-center items-center w-1/3">
        <div className="w-20 h-20 sm:w-40 sm:h-40 md:w-48 md:h-48 rounded-full overflow-hidden flex-shrink-0">
          <img
            className="w-full h-full object-cover"
            src={rigoberto}
            alt="Rigoberto avatar"
          />
        </div>
        <h2 className="text-lg text-blue font-bold mt-4">Rigoberto</h2>
        <p className="text-sm text-gray-600 text-center">Role </p>
      </div>
    </div>
  );
}
