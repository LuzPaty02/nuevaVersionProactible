import protesis_portada from "../../assets/images/images/protesis/protesis_portada.jpg";
import protesis_transfemoral from "../../assets/images/images/protesis/protesis_transfemoral.jpg";
import protesis_transtibial from "../../assets/images/images/protesis/protesis_transtibial.jpg";
import protesis_bilateral from "../../assets/images/images/protesis/protesis_bilateral.jpg";
import { whatsappIcon } from "../../assets/iconPaths.jsx";
import { WHATSAPP_LINK } from "../../assets/whatsapp";

export default function Protesis() {
  return (
    <div className="flex flex-col items-center justify-start py-8 px-4">
      <div className="w-full max-w-7xl mx-auto space-y-8">
        {/* First Section */}
        <div className="flex flex-col md:flex-row items-stretch gap-6">
          {/* Large Image */}
          <div className="w-full md:w-1/3">
            <img
              src={protesis_portada}
              alt="Prótesis general"
              className="w-full h-auto object-cover rounded-lg md:shadow-lg"
            />
          </div>
          {/* Text */}
          <div className="w-full md:w-1/2 flex flex-col justify-center md:m-10">
            <h2 className="text-4xl md:text-6xl font-serif text-blue mb-4">
              Prótesis
            </h2>
            <p className="text-lg leading-relaxed mb-4">
              Nos especializamos en la fabricación de prótesis diseñadas para
              mejorar la movilidad y la calidad de vida de nuestros pacientes.
            </p>
            <p className="text-lg leading-relaxed">
              Con un enfoque personalizado, cada prótesis se adapta a las
              necesidades de cada individuo, para brindar comodidad,
              funcionalidad y durabilidad para que puedan volver a caminar y
              recuperar su autonomía.
            </p>
            {/* Button Section */}
            <div className="w-full flex justify-center md:justify-start mt-8">
              <button className="bg-green-500 text-white font-bold py-3 px-6 rounded-full shadow-md transition-transform transform hover:scale-105 ease-in-out duration-300">
                <a
                  href={WHATSAPP_LINK}
                  className="flex items-center justify-center"
                >
                  {whatsappIcon}
                  <span className="ml-2 text-sm md:text-base">
                    ¡Agenda Gratis Aquí!
                  </span>
                </a>
              </button>
            </div>
          </div>
        </div>

        {/* Second Section */}
        <div className="flex flex-col-reverse md:flex-row items-stretch gap-3">
          {/* Text */}
          <div className="w-full md:w-2/3 flex flex-col justify-center md:bg-slate-100 md:bg-opacity-40 md:shadow-md md:p-10 md:rounded-l-lg">
            <h3 className="text-3xl font-medium font-serif text-blue mb-2">
              Amputación transtibial
            </h3>
            <p className="text-lg leading-relaxed">
              La prótesis transtibial se diseña para personas con amputaciones
              por debajo de la rodilla, proporcionando funcionalidad y
              estabilidad.
            </p>
          </div>
          {/* Smaller Image */}
          <div className="w-full md:w-1/3 relative overflow-hidden md:overflow-visible">
            <img
              src={protesis_transtibial}
              alt="Prótesis transtibial"
              className="w-full h-[150px] object-cover object-bottom md:object-center md:h-auto rounded-lg md:shadow-md"
            />
          </div>
        </div>

        {/* Third Section */}
        <div className="flex flex-col md:flex-row items-stretch gap-3">
          {/* Smaller Image */}
          <div className="w-full md:w-1/3 relative overflow-hidden md:overflow-visible">
            <img
              src={protesis_transfemoral}
              alt="Prótesis transfemoral"
              className="w-full h-[150px] object-cover object-bottom md:object-center md:h-auto rounded-lg md:shadow-md"
            />
          </div>
          {/* Text */}
          <div className="w-full md:w-2/3 flex flex-col justify-center md:p-10">
            <h3 className="text-3xl font-medium font-serif text-blue mb-2">
              Amputación transfemoral
            </h3>
            <p className="text-lg leading-relaxed">
              La prótesis transfemoral está diseñada para personas con
              amputaciones por encima de la rodilla. Cuentan con un sistema de
              articulación que permite la flexión y extensión.
            </p>
          </div>
        </div>

        {/* Fourth Section */}
        <div className="flex flex-col-reverse md:flex-row items-stretch gap-3">
          {/* Text */}
          <div className="w-full md:w-2/3 flex flex-col justify-center md:bg-slate-100 md:bg-opacity-40 md:shadow-md md:p-10 md:rounded-l-lg">
            <h3 className="text-3xl font-medium font-serif text-blue mb-2">
              Bilateral
            </h3>
            <p className="text-lg leading-relaxed">
              Para quienes enfrentan amputaciones en ambas piernas, nuestras
              prótesis bilaterales son clave para recuperar movilidad,
              independencia y confianza.
            </p>
          </div>
          {/* Smaller Image */}
          <div className="w-full md:w-1/3 relative overflow-hidden md:overflow-visible">
            <img
              src={protesis_bilateral}
              alt="Prótesis bilateral"
              className="w-full h-[150px] object-cover object-bottom md:object-center md:h-auto rounded-lg md:shadow-md"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
