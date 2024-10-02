import carlos from "../../../assets/images/images/team/carlos.jpg";
import paulina from "../../../assets/images/images/team/paulina.jpg";
import rigoberto from "../../../assets/images/images/team/rigoberto.jpg";

export default function Staff() {
  return (
    <div className="flex w-full justify-center items-center gap-20 font-serif">
      {/* Paulina */}
      <div className="flex flex-col justify-center items-center w-1/6">
        <img
          className="w-full h-full object-cover rounded-full mb-4"
          src={paulina}
          alt="Paulina avatar"
        />
        <h2 className="text-lg text-blue font-bold">Paulina</h2>
        <p className="text-sm text-gray-600">Role or description here</p>
      </div>

      {/* Carlos */}
      <div className="flex flex-col justify-center items-center w-1/6">
        <img
          className="w-full h-full object-cover rounded-full mb-4"
          src={carlos}
          alt="Carlos avatar"
        />
        <h2 className="text-lg text-blue font-bold">Carlos</h2>
        <p className="text-sm text-gray-600">Director </p>
      </div>

      {/* Rigoberto */}
      <div className="flex flex-col justify-center items-center w-1/6">
        <img
          className="w-full h-full object-cover rounded-full mb-4"
          src={rigoberto}
          alt="Rigoberto avatar"
        />
        <h2 className="text-lg text-blue font-bold">Rigoberto</h2>
        <p className="text-sm text-gray-600">Role or description here</p>
      </div>
    </div>
  );
}
