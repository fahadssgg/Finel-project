import React from "react";

import { PieChart, Pie, Tooltip, ResponsiveContainer } from "recharts";

export default function Chart() {
  const salary: number | null = parseFloat(
    localStorage.getItem("salary") || "0"
  );
  const rest: number | null = parseFloat(localStorage.getItem("rest") || "0");
  const saving: number | null = parseFloat(
    localStorage.getItem("saving") || "0"
  );
  const data2 = [
    { name: "Salary", value: salary },
    { name: "Rest", value: rest },
    { name: "Saving", value: saving },
  ];

  const data = [
    { name: "Facebook", users: 2000000000 },
    { name: "Instagram", users: 1500000000 },
    { name: "Twiter", users: 1000000000 },
    { name: "Telegram", users: 500000000 },
  ];

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Socail Media Users</h1>
      <div className="App">
        <PieChart width={400} height={400}>
          <Pie
            dataKey="users"
            isAnimationActive={false}
            data={data}
            cx={200}
            cy={200}
            outerRadius={80}
            fill="#8884d8"
            label
          />
          <Tooltip />
        </PieChart>
      </div>

      <div>
        <h1>Salary Charts </h1>
        <div className="App">
          <PieChart width={400} height={400}>
            <Pie
              dataKey="value"
              isAnimationActive={false}
              data={data2}
              cx={200}
              cy={200}
              outerRadius={80}
              fill="#8884d8"
              label
            />
            <Tooltip />
          </PieChart>
        </div>
      </div>
    </div>
  );
}
