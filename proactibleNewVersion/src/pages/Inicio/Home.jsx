import Banner from "./home_components/Banner";
import Nosotros from "./home_components/Nosotros";
import ServiceRow from "./home_components/ServiceRow";
import DataCounter from "./home_components/DataCounter";
import Notas_y_Testimonios from "./home_components/Noticias_y_Testimonios";
import Distintivos from "./home_components/Distintivos";
import distintivosPaths from '/src/assets/distintivosPaths.jsx';
import Footer from "../../Footer";

export default function Home() {
    return (
        <div>
        <div className="px-8">
            <Banner />
            <Nosotros />
            <ServiceRow />
            <DataCounter />
            <Distintivos distintivosPaths={distintivosPaths} />
            <Notas_y_Testimonios />
        </div>
            <Footer/>
        </div>
    );
}
