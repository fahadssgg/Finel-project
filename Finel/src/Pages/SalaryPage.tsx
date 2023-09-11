import SidePar from "../Components/SidePar";
import { useNavigate } from "react-router-dom";
export default function Overview() {
  const nav = useNavigate();

  const ShowBudget = () => {
    nav("/Salary");
  };

  return (
    <>
      <div className="h-[55rem] flex justify-center items-center bg-[url('https://cdn.discordapp.com/attachments/1145734750921838642/1150502190297907361/Group_86.png')] bg-white bg-cover">
        <div className="h-[50rem] w-[90rem] bg-[#d9d9d9] bg-opacity-30 rounded-3xl ">
          {" "}
          <div className=" grid grid-cols-5  h-screen">
            <div className="  h-screen ">
              <SidePar />
            </div>
            <div className=" h-screen col-start-2 col-end-6 ml-4 mb-40">
              <div className="flex">
                <h1 className="me-auto text-5xl my-10 ml-10">My Salary</h1>
              </div>

              <div className="flex flex-row justify-evenly w-[70rem] pt-40 pb-10">
                <div className=" w-[35rem]  h-[10rem] mt-4 mx-10 hover:scale-110 bg-white rounded-3xl px-10 flex justify-evenly items-center gap-5">
                  <div className="flex flex-col justify-center text-center gap-5">
                    <p className=" text-gray-500 text-lg">Your Salary</p>
                    <p className=" text-xl font-semibold">
                      {localStorage.getItem("salary")}
                    </p>
                  </div>
                </div>

                <div className=" w-[35rem]  h-[10rem] mt-4 mx-10 hover:scale-110 bg-white rounded-3xl px-10 flex justify-evenly items-center gap-5">
                  <div className="flex flex-col justify-center text-center gap-5">
                    <p className=" text-gray-500 text-lg">Your Saving</p>
                    <p className=" text-xl font-semibold">
                      {localStorage.getItem("saving")}
                    </p>
                  </div>
                </div>

                <div className=" w-[35rem]  h-[10rem] mt-4 mx-10 hover:scale-110 bg-white rounded-3xl px-10 flex justify-evenly items-center gap-5">
                  <div className="flex flex-col justify-center text-center gap-5">
                    <p className=" text-gray-500 text-lg">Rest of Salary</p>
                    <p className=" text-xl font-semibold">
                      {localStorage.getItem("rest")}
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex justify-center ">
                <button
                  className=" bg-[#3E68AE] hover:bg-[#7399db] hover:scale-90 focus:ring-4 focus:outline-none lg:w-40 lg:h-10 lg:rounded-3xl lg:text-lg font-bold text-white m-10"
                  onClick={ShowBudget}
                >
                  Add Salary
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
