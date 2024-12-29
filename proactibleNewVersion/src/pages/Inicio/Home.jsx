import React from "react";
import Banner from "./home_components/Banner";
import Nosotros from "./home_components/Nosotros";
import ServiceRow from "./home_components/ServiceRow";
import DataCounter from "./home_components/DataCounter";
import Notas_y_Testimonios from "./home_components/Notas_y_Testimonios";
import Contacto from "../../Footer";

export default function Home() {
    return (
        <><div className="px-8">
            <Banner />
            <Nosotros />
            <ServiceRow />
            <DataCounter />
            <Notas_y_Testimonios />
            {/* <Map />  */}
        </div>
            <Contacto/>
        </>
    );
}
