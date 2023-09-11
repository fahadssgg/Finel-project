import React from "react";
import { useNavigate } from "react-router-dom";
import image5 from "../Assets/image_processing20210903-16890-gqy7t.gif"
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
    <div className=" h-screen bg-[#00AEB1] flex justify-center items-center">
      <div className=" h-[45rem] w-[90rem] bg-white justify-center flex flex-col items-center">
      <div className="">

        <img src="" alt="" />

      </div>
      
      <div className="w-9/12 justify-center flex flex-row gap-40  items-center">
      <div className="w-1/2 transform  mb-5 border-b-2 bg-transparent flex flex-col text-lg duration-300 focus-within:border-black">
      <label className="text-xl font-semibold mb-5 text-left">
              Salary
      </label>
            <input
          className="w-full border-noneml-2 mb-5 bg-transparent outline-none placeholder:italic focus:outline-none"
          onChange={(e) => {
            setSalary({ ...salary, Salary: e.target.value });
          }}
          placeholder="ex:10000"
          type="number"
        />
        </div>

        <div className="w-1/2 transform  mb-5 border-b-2 bg-transparent flex flex-col text-lg duration-300 focus-within:border-black">
        <label className="text-xl font-semibold mb-5 text-left">
             Saving Amount
        </label>
        <input
          onChange={(e) => {
            setSalary({ ...salary, Saving: e.target.value });
          }}
          placeholder="ex:500"
          type="number"
        />
        </div>

        </div>
        <button onClick={Add} className="border-2 mt-40">
          Add
        </button>


      </div>
    </div>
  );
}
