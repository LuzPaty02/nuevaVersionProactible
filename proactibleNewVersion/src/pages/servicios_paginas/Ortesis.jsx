import portada_ortesis from "../../assets/images/ortesis/ortesis_portada.jpg";
import { whatsappIcon } from '../../assets/iconPaths.jsx';
import { WHATSAPP_LINK } from "../../assets/whatsapp";
import Footer from "../../Footer.jsx";

export default function Ortesis() {
  return (
    <div>
    <div className="flex flex-col items-center justify-start p-8">
      <div className="flex flex-col md:flex-row w-full max-w-7xl mx-auto">
        {/* Column for Image */}
        <div className="w-full md:w-1/2 p-4 md:mr-6 "> 
          <img
            src={portada_ortesis}
            alt="Ortesis"
            className="w-full h-auto object-cover rounded-xl"
          />
        </div>
        
        {/* Column for Text */}
        <div className="w-full md:w-2/5 p-4 flex flex-col justify-center">
          <h2 className="text-4xl md:text-6xl font-normal text-blue p-2 font-serif">
            Órtesis
          </h2>
          <p className="mt-4 text-lg">
            Las órtesis son dispositivos aplicados externamente con la finalidad de restaurar o mejorar la funcionalidad del sistema musculoesquelético.
            Es un aparato externo que da soporte a algún miembro del cuerpo, ayudando a mejorar la calidad de vida y funcionalidad de nuestros pacientes.
          </p>
          <p className="mt-2 text-lg font-normal">
            Nos especializamos en la fabricación de órtesis a medida, proporcionando soluciones adaptadas a las necesidades individuales de cada paciente.
          </p>
        </div>
      </div>

      <div className="w-full flex justify-center md:justify-end pr-20 "> {/* Centered on mobile, right-aligned on larger screens */}
        <button 
          className="bg-green-500 text-white font-bold py-2 px-4 rounded-full border-none transition-transform transform hover:scale-105 ease-in-out duration-300 text-xs"
        >
          <a href={WHATSAPP_LINK} className="flex items-center justify-center">
            {whatsappIcon}
            <span className="ml-1 text-xs md:text-sm">¡Agenda Gratis Aquí!</span>
          </a>
        </button>
      </div>
      {/* Button Below Everything */}
    </div>
      <Footer />
    </div>
  );
}
