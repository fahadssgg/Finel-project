import { useNavigate } from "react-router-dom";
import logo from "../Assets/logo (2).png";
import user from "../Assets/user (1).png";

export default function NavPar() {
  const active = localStorage.getItem("active");

  const nav = useNavigate();

  return (
    <div>
      {active === "true" && (
        <ul className=" text-white flex justify-between py-4 text-xl cursor-pointer">
          <li
            className="ml-10 w-9"
            onClick={() => {
              nav("/Profile");
            }}
          >
            <img src={user} alt="" />
          </li>
          <div className="flex gap-3">
            <li className="mr-10 w-12">
              <img src={logo} alt="" />
            </li>
          </div>
        </ul>
      )}

      {(!active || active === "false") && (
        <ul className=" text-white flex justify-between py-4 text-xl cursor-pointer">
          <div className="flex ml-20">
            <li
              className="mr-8  mt-1 bg-[#B2E0E0] w-20 h-7 rounded-xl text-center hover:text-[#5c7676] text-base"
              onClick={() => {
                nav("/LogIn");
              }}
            >
              Log-In
            </li>

            <li
              className="mr-8 mt-1 bg-[#B2E0E0] w-20 h-7 rounded-xl text-center hover:text-[#5c7676] text-base"
              onClick={() => {
                nav("/SignUp");
              }}
            >
              Sign-up
            </li>
          </div>
          <li className="mr-10 w-12">
            <img src={logo} alt="" />
          </li>
        </ul>
      )}
    </div>
  );
}
