import React from "react";
import VideoEmbed from "./VideoEmbed";
import PorqueNos_Chart from "./PorqueNos_Chart";



export default function CustomBarChart() {
  return (
    <div id="impacto" className="p-8 max-w-full overflow-x-hidden"> {/* Ensure no overflow */}
      <div className="flex items-center justify-center mb-4">
        <h2 className="text-4xl md:text-6xl font-normal text-blue p-2 font-serif max-w-full">
          ¿Por qué nosotros?
        </h2>
      </div>
      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 max-w-full">
        <div className="flex-1 flex justify-center mb-4 md:mb-0 max-w-full">
          <VideoEmbed />
        </div>
        <div className="flex-1 flex flex-col justify-start max-w-full">
         <PorqueNos_Chart />
        </div>
      </div>
    </div>
  );
}
