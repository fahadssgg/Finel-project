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
        <img className=" w-screen h-[35rem]" src={background} alt="" />
      </div>
      <div className=" ml-20 absolute justify-center items-start h-screen w-1/3 ">
        <div className="mt-32 w-[30rem] h-fit flex flex-col">
          <p className="text-center text-6xl font-mono text-[#3E68AE] mt-10 mb-5">
            Log In
          </p>

          <div className="w-full transform mb-5 border-b-2 bg-transparent flex flex-col text-lg duration-300 focus-within:border-black">
            <label className="text-xl font-semibold text-left mb-5">
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

          <div className="ml-[20rem] m-2 text-red-600">{error} </div>

          <div className="w-full transform mb-5 border-b-2 bg-transparent flex flex-col text-lg duration-300 focus-within:border-black">
            <label className="text-xl mb-5 font-semibold text-left">
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

          <div className="ml-[20rem] m-2 text-red-600">{error}</div>

          <div className="flex flex-row justify-evenly mb-20 mt-10">
            <button
              className=" bg-[#B2E0E0] w-1/3 h-12 text-white font-bold text-xl py-1 px-5 rounded-3xl"
              onClick={back}
            >
              Back
            </button>

            <button
              className=" bg-[#B2E0E0] w-1/3 h-12 text-white font-bold text-xl py-1 px-5 rounded-3xl"
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
