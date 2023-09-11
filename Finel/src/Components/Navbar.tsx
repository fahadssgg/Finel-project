import { useNavigate } from "react-router-dom";
import logo from "../Assets/logo (2).png";
import user from "../Assets/user (1).png";

export default function NavPar() {
  const active = localStorage.getItem("active");

  const nav = useNavigate();

  return (
    <div>
      {active === "true" && (
        <ul className="flex justify-between py-4 cursor-pointer">
          <li
            className="lg:ml-10 lg:mt-2 lg:w-12 sm:ml-20 sm:w-8"
            onClick={() => {
              nav("/Profile");
            }}
          >
            <img src={user} alt="" />
          </li>
          <li className="lg:mr-10 lg:w-16 sm:mr-20 sm:w-10">
            <img src={logo} alt="" />
          </li>
        </ul>
      )}

      {(!active || active === "false") && (
        <ul className=" text-white flex justify-between lg:py-4 sm:py-2 text-xl cursor-pointer">
          <div className="flex ml-20 mt-1">
            <li
              className="mr-8  lg:mt-1 sm:mt-0 bg-[#B2E0E0] lg:w-32 lg:h-10 sm:h-9 sm:w-20 rounded-3xl hover:text-[#5c7676] "
              onClick={() => {
                nav("/LogIn");
              }}
            >
              <p className=" text-center sm:text-sm mt-2 lg:text-base font-bold">
                LOG-IN
              </p> 
            </li>

            <li
              className="mr-8 lg:mt-1 sm:mt-0 bg-[#B2E0E0] lg:w-32 lg:h-10 sm:h-9 sm:w-20 rounded-3xl hover:text-[#5c7676] "
              onClick={() => {
                nav("/SignUp");
              }}
            >
              <p className=" text-center sm:text-sm mt-2 lg:text-base font-bold">
                SIGN-UP
              </p>
            </li>
          </div>
          <li className="mr-10 w-16">
            <img src={logo} alt="" />
          </li>
        </ul>
      )}
    </div>
  );
}
