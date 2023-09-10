import React from "react";
import { useNavigate } from "react-router-dom";
interface Info {
  Salary: any;
  Saving: any;
}
export default function Salary() {
  const [salary, setSalary] = React.useState<Info>({
    Salary: "",
    Saving: "",
  });
  const nav = useNavigate();
  const Add = () => {
    const sum: any = salary.Salary - salary.Saving;
    localStorage.setItem("rest", sum);
    localStorage.setItem("salary", salary.Salary);
    localStorage.setItem("saving", salary.Saving);
    nav("/InfoPage");
  };
  return (
    <div>
      <div>
        <input
          onChange={(e) => {
            setSalary({ ...salary, Salary: e.target.value });
          }}
          placeholder="Salary"
          type="number"
        />
        <input
          onChange={(e) => {
            setSalary({ ...salary, Saving: e.target.value });
          }}
          placeholder="Saving"
          type="number"
        />
        <button onClick={Add} className="border-2">
          Add
        </button>
      </div>
    </div>
  );
}
