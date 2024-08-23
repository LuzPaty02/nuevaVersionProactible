import React from "react";
import CountUp from "react-countup";

export default function DataCounter() {
  return (
    <div className="grid grid-cols-1 p-4 sm:grid-cols-2 lg:grid-cols-4">
      <div className="flex flex-col items-center bg-white p-4 shadow-md rounded-none">
        <CountUp start={0} end={300} duration={2} className="text-2xl font-bold" />
        <p className="mt-2 text-sm text-gray-600">Personas Atendidas</p>
      </div>
      <div className="flex flex-col items-center bg-white p-4 shadow-md rounded-none">
        <CountUp start={0} end={900} duration={2} className="text-2xl font-bold" />
        <p className="mt-2 text-sm text-gray-600">Familias Beneficiadas</p>
      </div>
      <div className="flex flex-col items-center bg-white p-4 shadow-md rounded-none">
        <CountUp start={0} end={30} duration={2} suffix=" M" className="text-2xl font-bold" />
        <p className="mt-2 text-sm text-gray-600">Dinero ahorrado</p>
      </div>
      <div className="flex flex-col items-center bg-white p-4 shadow-md rounded-none">
        <CountUp start={0} end={80} duration={2} suffix=" M" className="text-2xl font-bold" />
        <p className="mt-2 text-sm text-gray-600">Pasos dados</p>
      </div>
    </div>
  );
}