import copaImage from "../../../assets/images/impacto/copa.jpg";

export default function Copa() {
  return (
    <section >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Text Section */}
        <article
          className="col-span-1 flex flex-col justify-center"
          aria-label="Copa and Proactible Event Details"
        >
          <div className="w-full py-4 md:px-8 md:bg-white md:shadow-md rounded-lg mt-8">
            <h3 className=" text-4xl md:text-4xl font-serif font-medium text-blue mb-4 text-center">
              Un paso adelante
            </h3>
            <p className="mt-2 md:px-10 leading-relaxed text-start">
              Para facilitar el acceso a la atención de calidad con apoyos
              económicos y en especie para que las personas puedan volver a
              caminar mediante servicios de fabricación de prótesis, así como
              rehabilitación física y acompañamiento psicológico.
            </p>
          </div>

          <div className="w-full py-4 md:bg-white md:shadow-md rounded-lg mt-8">
            <h2 className="text-4xl md:text-4xl font-serif font-medium text-blue mb-4 text-center">
              Copa
            </h2>
            <p className="mt-4 md:px-10 leading-relaxed text-start">
              Evento enfocado en la Comunidad de Personas con Amputación en
              México. Con el fin de sensibilizar sobre la situación de las
              personas con amputación de miembro inferior en México y las
              diferentes alternativas existentes para una adecuada recuperación
              de la autonomía.
            </p>
          </div>

          <div className="w-full py-4 sm:px-8 md:bg-white md:shadow-md rounded-lg mt-8">
            <h3 className="px-4 text-4xl md:text-4xl font-serif font-medium text-blue mb-4 text-center">
              PIA
            </h3>
            <p className="mt-2 leading-relaxed text-start">
              Asistente de soporte a través de WhatsApp en temas como
              rehabilitación, primeros cuidados, acceso a fondos y apoyo
              emocional para la comunidad de personas con amputación de miembro
              inferior en México.
            </p>
          </div>
        </article>

        {/* Image Section */}
        <div
          className="col-span-1 flex justify-center items-center"
          aria-label="Copa Event Image"
        >
          <img
            src={copaImage}
            alt="Copa Event illustration featuring community engagement"
            className="w-90% h-auto object-cover rounded-xl shadow-lg"
          />
        </div>
      </div>
    </section>
  );
}
