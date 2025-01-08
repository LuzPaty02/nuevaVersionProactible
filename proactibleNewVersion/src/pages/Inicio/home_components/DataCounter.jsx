import { useEffect, useRef, useState } from "react";
import CountUp from "react-countup";

export default function DataCounter() {
  const [isVisible, setIsVisible] = useState(false);
  const counterRef = useRef(null); // Reference to the counter component

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Detect visibility changes
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

    // Start observing the component
    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    // Cleanup the observer when the component unmounts
    return () => {
      if (counterRef.current) {
        observer.unobserve(counterRef.current);
      }
    };
  }, []); // Empty dependency array ensures this effect runs once on mount

  return (
    <div>
      <h2 className="p-4 text-4xl md:text-6xl justify-center text-center font-normal pb-8 text-blue font-serif max-w-full">
        ¿Por qué elegirnos?
      </h2>
      <div ref={counterRef} className="grid grid-cols-1 p-1 sm:grid-cols-2 lg:grid-cols-4">
        <div className="flex flex-col items-center bg-white p-4 shadow-lg rounded-none">
          {isVisible && <CountUp start={0} end={700} duration={2} className="text-2xl font-bold" />}
          <p className="mt-2 text-sm text-gray-600">Personas Atendidas</p>
        </div>
        <div className="flex flex-col items-center bg-white p-4 shadow-lg rounded-none">
          {isVisible && <CountUp start={0} end={1700} duration={2} className="text-2xl font-bold" />}
          <p className="mt-2 text-sm text-gray-600">Familias Beneficiadas</p>
        </div>
        <div className="flex flex-col items-center bg-white p-4 shadow-lg rounded-none">
          {isVisible && <CountUp start={0} end={70} duration={2} suffix=" M" className="text-2xl font-bold" />}
          <p className="mt-2 text-sm text-gray-600">Dinero ahorrado</p>
        </div>
        <div className="flex flex-col items-center bg-white p-4 shadow-lg rounded-none">
          {isVisible && <CountUp start={0} end={250} duration={2} suffix=" M" className="text-2xl font-bold" />}
          <p className="mt-2 text-sm text-gray-600">Pasos dados</p>
        </div>
      </div>
    </div>
  );
}
