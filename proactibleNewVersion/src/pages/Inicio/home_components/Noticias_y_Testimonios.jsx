import Noticias_Card from "./Noticias_Card";
import Testimonios_Card from "./Testimonios_Card";

export default function Noticias_y_Testimonios() {
    return (
        <div className="flex flex-col sm:flex-row w-full sm:space-x-4 space-y-4 sm:space-y-0">
             <div className="w-full sm:w-1/3">
                <Noticias_Card />
             </div>
             <div className="w-full sm:w-2/3">
                <Testimonios_Card />
             </div>
        </div>
    );
}
