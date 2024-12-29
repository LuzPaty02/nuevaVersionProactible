import React, { useState, useEffect } from "react";
import {
  ComposedChart,
  Bar,
  XAxis,
  YAxis,
  ResponsiveContainer,
  Cell,
} from "recharts";

const data = [
  {
    name: "Precio en comparación con el mercado",
    value: 70,
  },
  {
    name: "Personas que se atienden con nosotros",
    value: 70,
  },
  {
    name: "Personas que mejoran su movilidad",
    value: 99,
  },
  {
    name: "Personas que se reincorporan a su vida laboral",
    value: 72,
  },
];

// Custom hook to detect mobile view
const useMobileView = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth <= 768); // Mobile if width <= 768px
    };
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  return isMobile;
};

export default function Chart() {
  const isMobile = useMobileView();

  const CustomBarLabel = (props) => {
    const { x, y, value, index } = props;
    let barLabel = data[index].name;

    // Apply a line break specifically for the long label on mobile
    if (barLabel === "Personas que se reincorporan a su vida laboral") {
      barLabel = (
        <>
          Personas que se <br className="sm:hidden" /> reincorporan a su vida laboral
        </>
      );
    }

    return (
      <>
        <text
          x={x +10}
          y={y - 20}
          fill="#000"
          textAnchor="start"
          dominantBaseline="middle"
          className="text-xs sm:text-base whitespace-nowrap overflow-hidden text-ellipsis"
        >
          {barLabel}
        </text>
        <text
          x={x + 5}
          y={y + 10}
          fill="#fff"
          textAnchor="start"
          dominantBaseline="middle"
          className="text-xs sm:text-base"
        >
          {`${value}%`}
        </text>
      </>
    );
  };

  return (
    <ResponsiveContainer width="100%" height={400}>
      <ComposedChart
        layout="vertical"
        data={data}
        margin={{
          top: 10,
          right: 60, // Adjust for mobile
          bottom: 10,
          left: 0, // Add margin for axis labels
        }}
      >
        {/* Show X and Y axes on mobile */}
        <XAxis
          type="number"
          // hide={!isMobile} // Only show on mobile
        />
        <YAxis
          type="category"
          tick={false}
          // hide={!isMobile} // Only show on mobile
          axisLine={true} // Show axis line on mobile
        />
        <Bar
          dataKey="value"
          barSize={20}
          radius={[0, 0, 0, 0]}
          label={<CustomBarLabel />}
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill="#091766" />
          ))}
        </Bar>
      </ComposedChart>
    </ResponsiveContainer>
  );
}
