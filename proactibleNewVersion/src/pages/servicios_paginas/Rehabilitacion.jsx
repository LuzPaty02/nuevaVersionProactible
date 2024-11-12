import post1 from "../../assets/images/images/gallery/post1.jpeg"
import rehabilitacion from "../../assets/images/images/pagina_inicio/rehabilitacion.jpg";
import { whatsappIcon } from "../../assets/iconPaths.jsx";
import { WHATSAPP_LINK } from "../../assets/whatsapp";

export default function Rehabilitacion() {
  return (
    <div className="flex flex-col items-center justify-start py-8">
      <h2 className="text-4xl md:text-6xl font-normal text-blue p-2 font-serif">
        Rehabilitación Física
      </h2>
      <div className="w-full max-w-7xl p-4 flex flex-col md:flex-row">
        {/* Column for Text */}
        <div className="w-full md:w-3/5 p-4">

          <p className="mt-4 text-lg">Valoración física incluye la evaluación de:</p>
          <ul className="mt-2 list-disc list-inside text-lg">
            <li>Muñón</li>
            <li>Cicatriz</li>
            <li>Sensibilidad</li>
            <li>Postura</li>
            <li>Uso de vendaje</li>
            <li>Fuerza</li>
            <li>Equilibrio</li>
          </ul>
          <p className="mt-4 text-lg">
            El objetivo es crear un plan de rehabilitación física personalizado.
          </p>
          {/* Centered Button */}
          <div className="w-full flex justify-center items-center mt-6"> {/* Centered on all screen sizes */}
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

        {/* Column for Image */}
        <div className="w-full md:w-3/5 p-4">
          <img
            src={rehabilitacion}
            alt="Rehabilitación Física"
            className="w-auto h-96"
          />
        </div>
      </div>

      <div className="w-full max-w-7xl p-4 flex flex-col md:flex-row">
        {/* Column 1 - Rehabilitación Preprotésica */}
        <div className="w-full md:w-1/2 p-4">
          <h3 className="text-2xl md:text-4xl font-normal text-blue p-2 font-serif">
            Rehabilitación Preprotésica
          </h3>
          <p className="mt-4 text-lg">
            Nos dedicamos a preparar y fortalecer las áreas del cuerpo necesarias
            para el uso eficaz de la prótesis. Mejoramos el equilibrio, la
            propiocepción, aumentamos la fuerza, corregimos posturas, y
            disminuimos contracturas. Trabajamos con el dolor y la sensibilidad
            en caso necesario, facilitando los traslados autónomos.
          </p>
        </div>

        {/* Column 2 - Rehabilitación Postprotésica */}
        <div className="w-full md:w-1/2 p-4">
          <h3 className="text-2xl md:text-4xl font-normal text-blue p-2 font-serif">
            Rehabilitación Postprotésica
          </h3>
          <p className="mt-4 text-lg">
            En este proceso nos enfocamos en la reeducación de la marcha,
            reducción de errores posturales, y adquisición de confianza para
            realizar actividades diarias de manera autónoma. El número de
            sesiones se determina durante la valoración inicial.
          </p>
        </div>
      </div>
    </div>
  );
}
