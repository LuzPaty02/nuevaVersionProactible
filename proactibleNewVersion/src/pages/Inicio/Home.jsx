import React from "react";
import Banner from "./home_components/Banner";
import Nosotros from "./home_components/Nosotros";
import ServiceRow from "./home_components/ServiceRow";
import DataCounter from "./home_components/DataCounter";
import Map from "./home_components/Map";

export default function Home() {
    const apiKey = import.meta.env.VITE_MAPS_API_KEY; // Access the API key
    console.log("API Key:", apiKey); // Log the API key to debug

    return (
        <>
            <Banner />
            <Nosotros />
            <ServiceRow />
            <DataCounter />
            <Map 
                location={{ lat: 19.4326, lng: -99.1332 }} 
                apiKey={apiKey} // Pass the API key prop here
            /> 
        </>
    );
}
