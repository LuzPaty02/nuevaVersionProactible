import React from "react";
import Banner from "./home_components/Banner";
import Nosotros from "./home_components/Nosotros";
import ServiceRow from "./home_components/ServiceRow";
import DataCounter from "./home_components/DataCounter";
import Notas_y_Testimonios from "./home_components/Notas_y_Testimonios";
import Contacto from "./home_components/Contacto";

export default function Home() {
    return (
        <><div className="px-8">
            <Banner />
            <Nosotros />
            <ServiceRow />
            <Notas_y_Testimonios />
            <h2 className="p-4 text-4xl md:text-6xl justify-center font-normal pb-8 text-blue font-serif max-w-full">
                Titulo
            </h2>
            <DataCounter />
            {/* <Map />  */}
            <Contacto/>
        </div>
        </>
    );
}
