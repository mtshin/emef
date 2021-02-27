import React from "react";

import { PieChart, Pie, ResponsiveContainer, Tooltip } from "recharts";

const data = [
  {
    name: "Schools & Students",
    value: 35
  },
  { name: "Local Churches", value: 35 },
  { name: "EMEF", value: 25 },
  { name: "Local Food Pantry", value: 5 }
];

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

export default function DonationChart() {

  return (
    <ResponsiveContainer height={250} width="100%">
      <PieChart>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          outerRadius={100}
          fill="#a132ac"
          labelLine={true}
          dataKey="value"
          label={({ cx, cy, midAngle, innerRadius, outerRadius, value, index }) => {
            const RADIAN = Math.PI / 180;
            // eslint-disable-next-line
            const radius = 25 + innerRadius + (outerRadius - innerRadius);
            // eslint-disable-next-line
            const x = cx + radius * Math.cos(-midAngle * RADIAN);
            // eslint-disable-next-line
            const y = cy + radius * Math.sin(-midAngle * RADIAN);

            return (
              <text x={x} y={y} fill="white" textAnchor={x > cx ? "start" : "end"} dominantBaseline="central">
                ({value}%)
              </text>
            );
          }}
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip formatter={(value) => value + "%"} />
        <Legend />
      </PieChart>
    </ResponsiveContainer>
  )
}
