import rehabilitacion1 from "../../assets/images/gallery/rehabilitacion1.jpg";
import rehabilitacion from "../../assets/images/pagina_inicio/rehabilitacion.jpg";
import { whatsappIcon } from "../../assets/iconPaths.jsx";
import { WHATSAPP_LINK } from "../../assets/whatsapp";
import Footer from "../../Footer.jsx";
export default function Rehabilitacion() {
  return (
    <div className="bg-gray-50">
    <div className="flex flex-col items-center justify-start py-12 px-8 ">
      {/* Title Section */}
      <h2 className="text-4xl md:text-5xl font-serif text-blue text-center mb-12">
        Rehabilitación Física
      </h2>

      {/* First Section */}
      <div className="w-full max-w-7xl grid grid-cols-1 md:grid-cols-2 gap-12 mb-12 px-4">
        {/* Text Column */}
        <div className="space-y-6 md:p-8">
          <p className="text-lg leading-relaxed">
            Valoración física incluye la evaluación de:
          </p>
          <ul className="list-disc list-inside text-lg space-y-2">
            <li>Muñón</li>
            <li>Cicatriz</li>
            <li>Sensibilidad</li>
            <li>Postura</li>
            <li>Uso de vendaje</li>
            <li>Fuerza</li>
            <li>Equilibrio</li>
          </ul>
          <p className="text-lg leading-relaxed mt-4">
            El objetivo es crear un plan de rehabilitación física personalizado.
          </p>
        </div>

        {/* Image Column */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <img
            src={rehabilitacion}
            alt="Rehabilitación Física"
            className="w-full h-full md:h-96 object-cover rounded-lg shadow-md"
          />
          <img
            src={rehabilitacion1}
            alt="Rehabilitación Física"
            className="hidden md:block w-full h-48 md:h-96 object-cover rounded-lg shadow-md"
          />
        </div>
      </div>

      {/* Button */}
      <div className="flex justify-center mt-6">
        <button className="bg-green-600 text-white font-bold py-3 px-6 mb-8 rounded-full shadow-md transition-transform transform hover:scale-105 ease-in-out duration-300">
          <a href={WHATSAPP_LINK} className="flex items-center">
            {whatsappIcon}
            <span className="ml-2">¡Agenda Gratis Aquí!</span>
          </a>
        </button>
      </div>

      {/* Second Section */}
      <div className="w-full max-w-7xl grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Rehabilitación Preprotésica */}
        <div className="p-6 bg-white rounded-lg shadow-md">
          <h3 className="text-2xl md:text-3xl font-serif text-blue mb-4">
            Rehabilitación Preprotésica
          </h3>
          <p className="text-lg leading-relaxed p-2">
            Nos dedicamos a preparar y fortalecer las áreas del cuerpo necesarias para el uso eficaz de la prótesis. Mejoramos el equilibrio, la propiocepción, aumentamos la fuerza, corregimos posturas, y disminuimos contracturas. Trabajamos con el dolor y la sensibilidad en caso necesario, facilitando los traslados autónomos.
          </p>
        </div>

        {/* Rehabilitación Postprotésica */}
        <div className="p-6 bg-white rounded-lg shadow-md">
          <h3 className="text-2xl md:text-3xl font-serif text-blue mb-4">
            Rehabilitación Postprotésica
          </h3>
          <p className="text-lg leading-relaxed p-2">
            En este proceso nos enfocamos en la reeducación de la marcha, reducción de errores posturales, y adquisición de confianza para realizar actividades diarias de manera autónoma. El número de sesiones se determina durante la valoración inicial.
          </p>
        </div>
      </div>
    </div>
    <Footer />
    </div>
  );
}
