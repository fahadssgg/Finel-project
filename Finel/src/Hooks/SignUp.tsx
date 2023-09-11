import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import background from "../Assets/Background.png";

type IuserInfo = {
  Name: string;
  Password: string;
  email: string;
};

export default function SingUp() {
  const [error, seterror] = React.useState("");
  const [emailerror, setEmailerror] = React.useState("");
  const [passerror, setPaaerror] = React.useState("");
  const [inputValue, setInputValue] = React.useState<IuserInfo>({
    Name: "",
    Password: "",
    email: "",
  });
  const nav = useNavigate();
  localStorage.setItem("active", "false");

  const back = () => {
    nav("/");
  };

  const Signup = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegex = /^[a-zA-Z0-9]{4,}$/;
    localStorage.setItem("active", "true");
    if (inputValue.Name != "" && inputValue.Password != "" && inputValue.email!="" ){
          
      if(!emailRegex.test(inputValue.email)){
            setEmailerror("Invalid email must be ex: nouf@gmail.com");
          }
      if (!passwordRegex.test(inputValue.Password)) {
            setPaaerror("Invalid password must at least 4 digit");
          }
      if (emailRegex.test(inputValue.email) && passwordRegex.test(inputValue.Password)){
        axios
        .post("https://64f3989fedfa0459f6c6b193.mockapi.io/Userinfo", {
          Name: inputValue.Name,
          Password: inputValue.Password,
          email: inputValue.email,
        })

        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
      alert("Signup successful!");
      seterror("");
      setEmailerror("");
      setPaaerror("");
      nav("/LogIn");
      }
      
    } else {
      seterror("Invalid must be filled");
    }
  };

  return (
    <div>
      <div className=" absolute">
        <img className=" w-screen h-[35rem]" src={background} alt="" />
      </div>
      <div className=" ml-20 absolute justify-center items-start h-screen w-1/2">
        <div className="mt-32 w-[40rem] h-fit flex flex-col">
          <p className="text-center text-6xl font-mono text-[#3E68AE] mt-10 mb-20">
            Sign-Up
          </p>

          <div className="w-full transform  mb-5 border-b-2 bg-transparent flex flex-col text-lg duration-300 focus-within:border-black">
            <label className="text-xl font-semibold mb-5 text-left">
              Full Name
            </label>
            <input
              type="text"
              placeholder="Full Name"
              className="w-full border-noneml-2 mb-5 bg-transparent outline-none placeholder:italic focus:outline-none"
              onChange={(e) => {
                setInputValue({ ...inputValue, Name: e.target.value });
              }}
            />
          </div>
          <div className="ml-[20rem] m-2 text-red-600">{error}</div>

          <div className="w-full transform  mb-5 border-b-2  bg-transparent flex flex-col text-lg duration-300 focus-within:border-black">
            <label className="text-xl font-semibold mb-5 text-left">
              Email Address
            </label>
            <input
              type="text"
              placeholder="Email@gmail.com"
              className="w-full border-none mb-5 ml-2 bg-transparent outline-none placeholder:italic focus:outline-none"
              onChange={(e) => {
                setInputValue({ ...inputValue, email: e.target.value });
              }}
            />
          </div>
          <div className="ml-[20rem] m-2 text-red-600">{error} </div>
          <div className="ml-[20rem] m-2 text-red-600">{emailerror}</div>

          <div className="w-full transform  mb-5 border-b-2 bg-transparent flex flex-col text-lg duration-300 focus-within:border-black">
            <label className="text-xl font-semibold mb-5 text-left">
              Password
            </label>
            <input
              type="text"
              placeholder="................................"
              className="w-full border-none mb-5 ml-2 bg-transparent outline-none placeholder:italic focus:outline-none"
              onChange={(e) => {
                setInputValue({ ...inputValue, Password: e.target.value });
              }}
            />
          </div>
          <div className="ml-[20rem] m-2 text-red-600">{error}</div>
          <div className="ml-[20rem] m-2 text-red-600">{passerror}</div>

          <div className="flex flex-row justify-evenly mb-20 mt-10">
            <button
              className="hover:bg-teal-600 hover:scale-90 bg-[#B2E0E0] w-1/4 h-12 text-white font-bold text-xl py-1 px-5 rounded-3xl"
              onClick={back}
            >
              Back
            </button>

            <button
              className="hover:bg-teal-600 hover:scale-90 bg-[#B2E0E0] w-1/4 h-12 text-white font-bold text-xl py-1 px-5 rounded-3xl"
              onClick={Signup}
            >
              Sign up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
