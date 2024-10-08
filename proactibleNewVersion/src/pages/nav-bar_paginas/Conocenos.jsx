import Staff from "./conocenos_componentes/Staff";
import Testimonios from "./conocenos_componentes/Testimonios";
import Noticias from "./impacto_componentes/Noticias.jsx";
import Historia from "./conocenos_componentes/Historia";
import Equipo from "./conocenos_componentes/Equipo.jsx"
export default function Conocenos() {
  return (
    <div id="/Conocenos" className="flex flex-col items-center justify-center py-8">
      <div>
        <h2 className="text-4xl md:text-6xl font-normal text-blue p-4 font-serif max-w-4xl text-center">
           Conoce nuestra Historia
        </h2>
      </div>
        <Historia />
      <div>
      <h2 className="text-4xl md:text-6xl font-normal text-blue p-4 font-serif max-w-4xl text-center">
            Conoce a nuestro equipo
        </h2>
      </div>
      <div className="p-6">

      <Staff />
      <Equipo/>
      </div>
      <div id="Testimonios">
        <h2 className="text-4xl md:text-6xl font-normal text-blue p-4 font-serif max-w-4xl text-center">
        Conoce Testimonios
        </h2>   
      </div>
      <Testimonios />
      </div>
    

  );
}
