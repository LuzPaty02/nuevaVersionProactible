import Staff from "./conocenos_componentes/Staff";
import Testimonios from "./conocenos_componentes/Testimonios";
import Noticias from "./conocenos_componentes/Noticias";
import Historia from "./conocenos_componentes/Historia";
export default function Conocenos() {
  return (
    <div id="/Conocenos" className="flex flex-col items-center justify-center py-8">
      <div>
      <h2 className="text-4xl md:text-6xl font-normal text-blue p-4 font-serif max-w-4xl text-center">
            Conoce a nuestro equipo
        </h2>
      </div>
      <div className="p-6">

      <Staff />
      </div>
      <div>
        <h2 className="text-4xl md:text-6xl font-normal text-blue p-4 font-serif max-w-4xl text-center">
           Conoce nuestra Historia
        </h2>
      </div>
        <Historia />
      <div id="Testimonios">
        <h2 className="text-4xl md:text-6xl font-normal text-blue p-4 font-serif max-w-4xl text-center">
        Conoce Testimonios
        </h2>   
      </div>
      <Testimonios />
    <div>
        <h2 className="text-4xl md:text-6xl font-normal text-blue p-4 font-serif max-w-4xl text-center">
        Conoce Noticias
        </h2>  
    </div>
        <Noticias />
    </div>

    

  );
}
