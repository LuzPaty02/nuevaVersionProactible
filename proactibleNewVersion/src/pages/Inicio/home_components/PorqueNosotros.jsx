import React from "react";
import VideoEmbed from "./VideoEmbed";
import PorqueNos_Chart from "./PorqueNos_Chart";

export default function CustomBarChart() {
  return (
    <div id="impacto" className="pt-8 max-w-full md:m-8 overflow-x-hidden">
      {/* Title */}
      <div className="flex items-center justify-center mb-4">
        <h2 className="text-4xl md:text-6xl justify-center font-normal text-blue p-2 font-serif max-w-full">
          ¿Por qué nosotros?
        </h2>
      </div>

      {/* Video and Chart Section */}
      <div className="flex flex-col md:flex-row p-2 md:p-4 space-y-4 md:space-y-0 md:space-x-4 max-w-full">
        
        {/* Video Embed */}
        <div className="flex-1 flex justify-center mx-2 mb-4 md:mb-0 max-w-full">
          <VideoEmbed />
        </div>
        
        {/* Chart */}
        <div className="flex-1 flex flex-col justify-start items-start max-w-full">
          {/* Removed 'justify-center' to avoid centering on mobile */}
          <PorqueNos_Chart />
        </div>
      </div>
    </div>
  );
}
