import { useNavigate } from "react-router-dom";
import logo from "../Assets/logo (2).png";
import user from "../Assets/user (1).png";

export default function NavPar() {
  const active = localStorage.getItem("active");
  const Name = localStorage.getItem("userName");

  const nav = useNavigate();

  return (
    <div>
      {active === "true" && (
        <ul className=" flex justify-between py-4 cursor-pointer">
          <li
            className="lg:ml-0 lg:w-9 ml-0 h-10 w-10"
            onClick={() => {
              nav("/Overview");
            }}
          >
            <div className="flex justify-start ml-4 gap-4 w-40  md:w-80 lg:w-80">
              <img className="lg:w-10 w-8 md:w-12 hover:scale-90" src={user} alt="" />
              <p className="text-lg w-40 mt-2">{Name}</p>
            </div>
          </li>
          <li className="lg:mr-5 lg:w-16  md:w-16 mr-4  w-12">
            <img src={logo} alt="" />
          </li>
        </ul>
      )}

      {(!active || active === "false") && (
        <ul className=" text-white flex justify-between lg:py-4 py-2 text-xl cursor-pointer">
          <div className="flex ml-20 mt-1 max-sm:ml-0">
            <li
              className="mr-8 hover:scale-90 ml-10 lg:mt-1 px-5 md:px-7 md:w-32 md:h-10 bg-[#B2E0E0] lg:w-32 lg:h-10 h-10 mt-3  rounded-3xl hover:text-[#5c7676] "
              onClick={() => {
                nav("/LogIn");
              }}
            >
              <p className=" text-center text-base mt-2 lg:text-base font-bold">
                LOG-IN
              </p>
            </li>

            <li
              className="mr-8 hover:scale-90 lg:mt-1 px-5 bg-[#B2E0E0] md:px-7 md:w-32 md:h-10 lg:w-32 lg:h-10 h-10 mt-3 rounded-3xl hover:text-[#5c7676] "
              onClick={() => {
                nav("/SignUp");
              }}
            >
              <p className=" text-center text-base mt-2 lg:text-base font-bold">
                SIGN-UP
              </p>
            </li>
          </div>
          <li className="lg:mr-10 mr-10 w-16 md:mr-12">
            <img src={logo} alt="" />
          </li>
        </ul>
      )}
    </div>
  );
}
