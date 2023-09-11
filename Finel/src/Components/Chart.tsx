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
    <div className="h-auto bg-white  rounded-3xl"  style={{ textAlign: "center" }}>

      <div className=" h-auto">
        <div className="App ">
        {/* <h1>Salary Chart</h1> */}

          <PieChart width={400} height={400}>
            <Pie
              dataKey="value"
              isAnimationActive={false}
              data={data2}
              cx={200}
              cy={200}
              outerRadius={130}
              fill="#7399db"
              label
            />
            <Tooltip />
          </PieChart>
        </div>
      </div>
    </div>
  );
}
