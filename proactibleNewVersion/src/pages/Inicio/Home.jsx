import React from "react";
import Banner from "./home_components/Banner";
import Nosotros from "./home_components/Nosotros";
import ServiceRow from "./home_components/ServiceRow";
import PorqueNosotros from "./home_components/PorqueNosotros";
import DataCounter from "./home_components/DataCounter";

export default function Home() {
    return (
        <>
            <Banner />
            <Nosotros />
            <ServiceRow />
            <PorqueNosotros />
            <DataCounter />
        </>
    );
}
