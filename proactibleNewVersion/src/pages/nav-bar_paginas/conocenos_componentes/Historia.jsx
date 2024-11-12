import portadaHistoria from "../../../assets/images/images/gallery/proactible12.jpg";
export default function Historia() {
  return (
    <div className="flex flex-col md:flex-row justify-start gap-8">
      {/* Text Column */}
      <div className="text-lg leading-relaxed md:w-2/3">
        <p className="mb-4">
          Inició en 2014 como un proyecto escolar en el Laboratorio de
          Mecatrónica del Tecnológico de Monterrey, el cual más adelante se
          convertiría en una asociación civil con el objetivo de ayudar en la
          recuperación de la autonomía de personas con una amputación de miembro
          inferior.
        </p>
        <p className="mb-4">
          En el 2017 se fundó <strong className="text-blue">Proactible</strong>,
          una empresa social enfocada en brindar servicios de fabricación de
          prótesis y rehabilitación física a un precio accesible para personas
          con una amputación de miembro inferior.
        </p>

        <p className="mb-4">
          En el 2018, la empresa debutó en cadena nacional, atrayendo nuevos
          clientes y la oportunidad de atender a personas de otras entidades de
          la República. A lo largo de su trayectoria, Proactible ha recibido
          múltiples premios y reconocimientos, como el{" "}
          <span className="font-semibold text-blue">
            Premio Jalisco al Emprendimiento
          </span>{" "}
          otorgado por el Gobierno del Estado, el{" "}
          <span className="font-semibold text-blue">
            Exitus Shape Prize LATAM
          </span>{" "}
          por Global Shapers y Exitus Capital, y el{" "}
          <span className="font-semibold text-blue">
            Premio a la Empresa con Alto Impacto Social
          </span>{" "}
          otorgado por Grupo Aeroportuario del Pacífico y COPARMEX.
        </p>
      </div>

      {/* Image Column */}
      <div className="md:w-1/3 flex items-center justify-center">
        <img
          src={portadaHistoria}
          alt="Historia Image"
          className="w-full h-auto rounded-lg shadow-md object-cover"
        />
      </div>
    </div>
  );
}

