import React, { useEffect, useRef, useState } from "react";
import CountUp from "react-countup";

export default function DataCounter() {
  const [isVisible, setIsVisible] = useState(false);
  const counterRef = useRef(null); // Reference to the counter component

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        console.log("Is intersecting:", entry.isIntersecting); // Debugging visibility
        if (entry.isIntersecting) {
          setIsVisible(true); // Trigger the count when visible
        } else {
          setIsVisible(false); // Reset when not visible
        }
      },
      {
        threshold: 0.5, // Trigger when 50% of the component is visible
      }
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => {
      if (counterRef.current) {
        observer.unobserve(counterRef.current);
      }
    };
  }, []);

  return (
    <div ref={counterRef} className="grid grid-cols-1 p-1 sm:grid-cols-2 lg:grid-cols-4">
      <div className="flex flex-col items-center bg-white p-4 shadow-md rounded-none">
        {isVisible && <CountUp start={0} end={300} duration={2} className="text-2xl font-bold" />}
        <p className="mt-2 text-sm text-gray-600">Personas Atendidas</p>
      </div>
      <div className="flex flex-col items-center bg-white p-4 shadow-md rounded-none">
        {isVisible && <CountUp start={0} end={900} duration={2} className="text-2xl font-bold" />}
        <p className="mt-2 text-sm text-gray-600">Familias Beneficiadas</p>
      </div>
      <div className="flex flex-col items-center bg-white p-4 shadow-md rounded-none">
        {isVisible && <CountUp start={0} end={30} duration={2} suffix=" M" className="text-2xl font-bold" />}
        <p className="mt-2 text-sm text-gray-600">Dinero ahorrado</p>
      </div>
      <div className="flex flex-col items-center bg-white p-4 shadow-md rounded-none">
        {isVisible && <CountUp start={0} end={80} duration={2} suffix=" M" className="text-2xl font-bold" />}
        <p className="mt-2 text-sm text-gray-600">Pasos dados</p>
      </div>
    </div>
  );
}
