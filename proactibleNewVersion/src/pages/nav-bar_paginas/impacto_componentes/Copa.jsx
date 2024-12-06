import copaImage from "../../../assets/images/images/impacto/copa.jpg";

export default function Copa() {
  return (
    <section className="p-6 rounded-xl shadow-md">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Text Section */}
        <article
          className="col-span-1 flex flex-col items-center justify-center text-center"
          aria-label="Copa Event Details"
        >
          <h2 className="px-4 text-4xl md:text-6xl font-serif font-medium text-blue">
            Copa
          </h2>
          <div className="p-6 space-y-12">
            <p className="mt-4 px-6 md:px-10 text-gray-700 leading-relaxed">
              Evento enfocado en la Comunidad de Personas con Amputación en
              México, al cual concebimos como COPA. Con el fin de sensibilizar
              sobre la situación de las personas con amputación de miembro
              inferior en México y las diferentes alternativas existentes para
              una adecuada recuperación de la autonomía.
            </p>
            <div className="mt-12">
              <h3 className="px-4 text-2xl md:text-4xl font-serif font-medium text-blue">
                Proactible para la comunidad
              </h3>
              <p className="mt-2 px-6 md:px-10 text-gray-700 leading-relaxed">
                Organización sin fines de lucro dedicada a dar acompañamiento a
                las personas con discapacidad por amputación de miembro inferior
                para que puedan volver a caminar, reinsertarse socialmente y
                recuperar su autonomía.
              </p>
            </div>
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
            className="w-2/3 md:w-full h-auto object-cover rounded-xl shadow-lg"
          />
        </div>
      </div>
    </section>
  );
}
