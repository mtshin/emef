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
          dataKey="value"
          label={({
            cx,
            cy,
            midAngle,
            innerRadius,
            outerRadius,
            value,
            index
          }) => {
            const RADIAN = Math.PI / 180;
            // eslint-disable-next-line
            const radius = 25 + innerRadius + (outerRadius - innerRadius);
            // eslint-disable-next-line
            const x = cx + radius * Math.cos(-midAngle * RADIAN);
            // eslint-disable-next-line
            const y = cy + radius * Math.sin(-midAngle * RADIAN);

            return (
              <text
                x={x}
                y={y}
                fill="#a132ac"
                textAnchor={x > cx ? "start" : "end"}
                dominantBaseline="central"
              >
                {data[index].name} ({value}%)
              </text>
            );
          }}
        />
        <Tooltip formatter={(value) => value + "%"} />
      </PieChart>
    </ResponsiveContainer>
  );
}
