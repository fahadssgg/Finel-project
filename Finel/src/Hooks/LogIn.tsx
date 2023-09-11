import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import background from "../Assets/Background.png";
export default function LogIn() {
  localStorage.setItem("active", "false");

  const [email, setEmail] = React.useState("");
  const [Password, setPassword] = React.useState("");
  const [loggedIn, setLoggedIn] = React.useState(false);
  const [error, seterror] = React.useState("");

  const nav = useNavigate();
  {
    loggedIn;
  }

  const LogIn = () => {
    localStorage.setItem("active", "true");
    axios
      .get("https://64f3989fedfa0459f6c6b193.mockapi.io/Userinfo")
      .then((res) => {
        const User = res.data.find(
          (User: any) => User.email === email && User.Password === Password
        );

        if (User) {
          setLoggedIn(true);
          localStorage.setItem("userId", User.id);
          localStorage.setItem("userName", User.Name);
          alert("Login successful!");
          nav("/Overview");
        } else {
          seterror("Invalid must be filled");
        }
      });
  };

  const back = () => {
    nav("/");
  };
  return (
    <div>
      <div className=" absolute">
        <img
          className=" w-screen h-[35rem] max-sm:h-[20rem]"
          src={background}
          alt=""
        />
      </div>
      <div className=" ml-20 absolute justify-center items-start h-screen w-1/3 max-sm:ml-5">
        <div className="mt-32 w-[30rem] h-fit flex flex-col max-sm:w-[20rem]">
          <p className="text-left text-6xl font-mono text-[#3E68AE] mt-10 mb-10 max-sm:mb-20 max-sm:text-5xl max-sm:text-left">
            Log In
          </p>

          <div className="w-full transform mb-5 border-b-2 bg-transparent flex flex-col text-lg duration-300 focus-within:border-black">
            <label className="text-xl max-sm:text-lg  font-semibold text-left mb-5">
              Email Address
            </label>
            <input
              type="text"
              placeholder="Email@gmail.com"
              className="w-full border-none mb-5 ml-2 bg-transparent outline-none placeholder:italic focus:outline-none"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </div>

          <div className="ml-[20rem] m-2 max-sm:ml-0 text-red-600">
            {error}{" "}
          </div>

          <div className="w-full transform mb-5 border-b-2 bg-transparent flex flex-col text-lg duration-300 focus-within:border-black">
            <label className="text-xl max-sm:text-lg  mb-5 font-semibold text-left">
              Password
            </label>
            <input
              type="text"
              placeholder="................................"
              className="w-full border-none mb-5 ml-2 bg-transparent outline-none placeholder:italic focus:outline-none"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </div>

          <div className="ml-[20rem] m-2 max-sm:ml-0 text-red-600">{error}</div>

          <div className="flex flex-row justify-evenly mb-20 mt-10">
            <button
              className="hover:scale-90 hover:bg-teal-600 bg-[#B2E0E0] w-1/3 h-12 text-white font-bold text-xl max-sm:text-lg max-sm:w-2/5 py-1 px-5 rounded-3xl"
              onClick={back}
            >
              Back
            </button>

            <button
              className=" bg-[#B2E0E0] hover:bg-teal-600 hover:scale-90 w-1/3 h-12 text-white font-bold text-xl max-sm:text-lg max-sm:w-2/5 py-1 px-5 rounded-3xl"
              onClick={LogIn}
            >
              Log in
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
