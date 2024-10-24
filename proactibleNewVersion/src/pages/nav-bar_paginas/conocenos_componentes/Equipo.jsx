import Protesistas from "../../../assets/images/images/protesistas.jpg";
import Fisios from "../../../assets/images/images/fisios1.jpg";
export default function Equipo() {
    return (
      <div className="mt-5 flex w-full justify-center items-center gap-6 md:gap-10 lg:gap-16 font-serif">
        {/* Protesistas*/}
        <div className="flex flex-col justify-center items-center w-1/3">
          <div className="w-20 h-20 sm:w-40 sm:h-40 md:w-48 md:h-48 rounded-full overflow-hidden flex-shrink-0">
            <img
              className="w-full h-full object-cover"
              src={Protesistas}
              alt="Protesistas"
            />
          </div>
          <h2 className="text-lg text-blue font-bold mt-4">Protesistas</h2>
        </div>
  
        {/* Fisios */}
        <div className="flex flex-col justify-center items-center w-1/3">
          <div className="w-20 h-20 sm:w-40 sm:h-40 md:w-48 md:h-48 rounded-full overflow-hidden flex-shrink-0">
            <img
              className="w-full h-full object-cover"
              src={Fisios}
              alt="Fisios"
            />
          </div>
          <h2 className="text-lg text-blue font-bold mt-4">Fisioterapeutas</h2>
        </div>
      </div>
    );
  }
  