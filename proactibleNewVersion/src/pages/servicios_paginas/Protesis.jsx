import protesisImage from '../../assets/images/images/gallery/protesis.jpg';
import { whatsappIcon } from '../../assets/iconPaths.jsx';
import { WHATSAPP_LINK } from "../../assets/whatsapp";

export default function Protesis() {
  return (
    <div className="flex flex-col items-center justify-start py-8">
      <div className="flex flex-col md:flex-row w-full max-w-7xl mx-auto">
        {/* Column for Image */}
        <div className="w-full md:w-2/5 p-4 md:mr-6"> 
          <img
            src={protesisImage}
            alt="Prótesis"
            className="w-full h-auto object-cover"
          />
        </div>
        
        {/* Column for Text */}
        <div className="w-full md:w-3/5 p-4 flex flex-col justify-center">
          <h2 className="text-4xl md:text-6xl font-normal text-blue p-2 font-serif">
            Prótesis
          </h2>
          <p className="mt-4 text-lg">
            Nos especializamos en la fabricación de prótesis diseñadas para mejorar la movilidad y la calidad de vida de nuestros pacientes.
          </p>
          <p className="mt-2 text-lg">
            Con un enfoque personalizado, cada prótesis se adapta a las necesidades de cada individuo, para brindar comodidad, funcionalidad y durabilidad para que puedan volver a caminar y recuperar su autonomía.
          </p>
          <ul className="mt-4 list-disc list-inside text-lg">
            <li>Amputación transtibial</li>
            <li>Amputación transfemoral</li>
            <li>Bilateral</li>
          </ul>
        </div>
      </div>

      {/* Button Below Everything */}
      <div className="w-full flex justify-center md:justify-end pr-8 mt-4"> {/* Centered on mobile, right-aligned on larger screens */}
        <button 
          className="bg-green-500 text-white font-bold py-2 px-4 rounded-full border-none transition-transform transform hover:scale-105 ease-in-out duration-300 text-xs"
        >
          <a href={WHATSAPP_LINK} className="flex items-center justify-center">
            {whatsappIcon}
            <span className="ml-1 text-xs md:text-sm">¡Agenda Gratis Aquí!</span>
          </a>
        </button>
      </div>
    </div>
  );
}
