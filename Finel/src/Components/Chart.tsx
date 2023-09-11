import React from 'react'

import {
    PieChart,
    Pie,
    Tooltip,
    ResponsiveContainer,
  } from "recharts";

export default function Chart() {

  const Rest = localStorage.getItem("rest")
  const Salary = localStorage.getItem("salary")
  const Saving = localStorage.getItem("saving")

  const data2 = [
        {name : "Salary", value: Salary},
        {name : "Rest", value:  Rest },
        {name : "Saving", value: Saving},

    ]

    const data = [
        { name: "Facebook", users: {Rest} },
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
        <ResponsiveContainer width="100%" height="100%">

        <PieChart width={400} height={400}>
          <Pie
            dataKey="value"
            isAnimationActive={false}
            data={data2}
            cx="50%"
            cy="50%"
            outerRadius={80}
            fill="#8884d8"
            label
          />
          <Tooltip />
        </PieChart>
        </ResponsiveContainer>

    </div>
  </div>

  )
}
