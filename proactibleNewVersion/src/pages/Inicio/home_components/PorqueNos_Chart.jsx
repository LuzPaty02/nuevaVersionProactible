import React from "react";
import {
  ComposedChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
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

export default function PorqueNos_Chart() {
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
          x={x - 20}
          y={y - 20}
          fill="#000"
          textAnchor="start"
          dominantBaseline="middle"
          className="text-xs sm:text-sm whitespace-nowrap overflow-hidden text-ellipsis"
        >
          {barLabel}
        </text>
        <text
          x={x + 10}
          y={y + 10}
          fill="#fff"
          textAnchor="start"
          dominantBaseline="middle"
          className="text-xs"
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
          right: 20, // Avoid right margin to prevent overflow
          bottom: 10,
          left: 0, // Avoid left margin to prevent overflow
        }}
      >
        <XAxis type="number" hide />
        <YAxis type="category" tickLine={false} axisLine={false} tick={false} />
        <Tooltip />
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
