import portadaHistoria from "../../../assets/images/conocenos/conocenos_portada.jpg";
export default function Historia() {
  return (
    <div className="flex flex-col md:flex-row justify-start gap-8">
      {/* Text Column */}
      <div className="text-lg leading-relaxed md:w-2/3">
        <p className="mb-4">
          Iniciamos hace 10 años como un proyecto universitario del Tecnológico
          de Monterrey en Campus Guadalajara, el cual más adelante se
          convertiría en un centro de atención especializado para que las
          personas con amputación de miembro inferior puedan tener acceso a
          servicios de fabricación de prótesis y rehabilitación física de
          calidad para volver a caminar.
        </p>
        <p className="mb-4">
          Somos una empresa social en salud, nuestra visión es duplicar la
          atención de calidad para la recuperación de la autonomía de las
          personas con amputación en México. Contamos con Distintivo de Buenas
          Prácticas Laborales, Pro Integridad, Pactemos por la Igualdad,
          Empresas por la Igualdad, Empresa Socialmente Responsable y Empresa
          Comprometida con los Derechos Humanos.
        </p>

        <p className="mb-4">
          A lo largo de nuestra trayectoria hemos tenido múltiples premios y
          reconocimientos como el {" "}
          <span className="font-semibold text-blue">Premio Jalisco al Emprendimiento </span>{" "} otorgado por
          el Gobierno del Estado, el {" "}
          <span className="font-semibold text-blue"> Exitus Shape Prize LATAM   </span>{" "} por Global Shapers
          y Exitus Capital, y el {" "}
          <span className="font-semibold text-blue"> Premio a la Empresa con Alto Impacto Social   </span>{" "}
          otorgado por Grupo Aeroportuario del Pacífico y COPARMEX, las 140
          Empresas de Impacto por Fomento Social Banamex e Impact
          Hub, entre otros. 
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
