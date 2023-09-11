import NavPar from "../Components/Navbar";
import Footer from "../Components/Footer";
import header from "../Assets/headerImg.png";
import imag2logo from "../Assets/image-logo.png";
import icon1 from "../Assets/icon1.png";
import icon2 from "../Assets/icon2.png";
import icon3 from "../Assets/icon3.png";
import gitimg from "../Assets/github.png";

import linkimg from "../Assets/linkedin (1).png";

//md: sm 

export default function Home() {
  return (
    <div>
      <NavPar />

      <div className="h-fit flex flex-row-reverse lg:gap-20 sm:gap-5 md:gap-10 max-lg:gap-10 justify-center">
        <img className="lg:w-[70rem] lg:w-[70rem] sm:w-[15rem] md:w-[15rem]" src={header} alt="" />
      </div>

      <div className="flex flex-col justify-center items-center gap-10 mb-20">
        <div className="mt-20 flex gap-3 justify-center">
          <h1 className=" lg:text-5xl md:text-3xl sm:text-2xl font-bold">Take Control Of Your </h1>
          <p className="lg:text-5xl md:text-3xl sm:text-2xl font-bold text-[#00AEB1]">Money</p>
        </div>

        <p className="lg:text-2xl md:text-lg sm:text-base ">With Wise Wallet you can have</p>

        <div className=" flex flex-row justify-center gap-10 lg:w-10/12 md:w-9/12 sm:w-3/4  sm:gap-5 h-fit">
          <div className=" hover:scale-110 flex flex-col justify-center items-center text-center bg-[#3E68AE] lg:w-1/6 sm:w-1/4 h-5/6 sm:gap-5 md:w-1/4  md:gap-5 lg:gap-20 rounded-2xl">
            <img className="lg:w-40 mt-10 sm:w-20" src={icon1} alt="" />
            <p className="lg:text-2xl w-20 mb-10 sm:text-lg font-bold ">Expense Track</p>
          </div>

          <div className=" hover:scale-110 flex flex-col justify-center items-center text-center bg-[#00AEB1] lg:w-1/6 sm:w-1/4 h-5/6 sm:gap-5 lg:gap-20 rounded-2xl">
            <img className="lg:w-40 mt-10 sm:w-20" src={icon2} alt="" />
            <p className="lg:text-2xl w-40 mb-10 sm:text-lg font-bold"> Money Management</p>
          </div>

          <div className=" hover:scale-110 flex flex-col justify-center items-center text-center bg-[#F7F5FA] lg:w-1/6 sm:w-1/4 h-5/6 sm:gap-5 lg:gap-20 rounded-2xl">
            <img className="lg:w-40 mt-10 sm:w-20" src={icon3} alt="" />
            <p className="lg:text-2xl w-20 mb-10 sm:text-lg font-bold">Wisdom Spending</p>
          </div>
        </div>
      </div>

      <div className="flex flex-row justify-center items-center ">
        <div className="lg:w-1/3 sm:w-2/5 mt-20 sm:mb-16">
          <img src={imag2logo} alt="" />
        </div>

        <div className="w-1/2 flex flex-col justify-center items-center lg:gap-10 sm:gap-5">
          <h1 className=" lg:text-5xl md:text-3xl sm:text-2xl font-extrabold w-80 text-center">
            What is <b className="lg:text-5xl md:text-3xl sm:text-2xl text-[#C1CFE5]">Wise Wallet</b>
          </h1>

          <p className=" text-center w-9/12 lg:text-2xl md:text-lg sm:text-sm">
            <b>Wise Wallet </b>is a website designed to help you make smart
            financial decisions and manage your money effectively. It provides
            tips to help you save, manage your budget, and track your expenses.{" "}
          </p>
        </div>
      </div>

      <div className="bg-[#C0E6E6] flex flex-col justify-center items-center my-10">
        <p className=" lg:w-1/4 sm:w-1/2 text-center lg:text-3xl sm:text-lg m-24 sm:mb-2 sm:mt-12 lg:mb-6">
          Start your journey towards financial wisdom with{" "}
        </p>
        <br />
        <b className="text-center sm:text-lg lg:text-3xl sm:mb-10 lg:mb-20">Wise Wallet!</b>
      </div>

      <div className=" flex flex-col justify-center items-center mt-32 sm:mb-5 sm:mt-20 lg:mb-20 ">
        <p className="text-center font-extrabold sm:text-2xl lg:text-5xl mb-20">
          Website{" "}
          <b className="text-center lg:text-5xl sm:text-2xl mb-20 text-[#B2E0E0]">
            Developer{" "}
          </b>
        </p>

        <div className="flex flex-row justify-center w-full lg:gap-9 sm:gap-5 mb-10">
          <div className=" hover:scale-90  flex flex-col justify-center items-center text-center bg-[#3E68AE] sm:w-1/4 lg:w-1/6 h-5/6 lg:gap-5 sm:gap-1 rounded-3xl">
            <p className="text-white lg:text-3xl sm:text-xl w-20 mt-10 mb-10 font-bold">
              Nouf Jafari
            </p>

            <div className="flex flex-row justify-center gap-5 mb-12">
              <a href="https://github.com/noufjafari">
                {" "}
                <img className="lg:w-12 sm:w-10" src={gitimg} alt="" />{" "}
              </a>
              <a href="https://www.linkedin.com/in/nouf-jafari/">
                {" "}
                <img className="lg:w-12 sm:w-10" src={linkimg} alt="" />{" "}
              </a>
            </div>
          </div>

          <div className=" flex flex-col justify-center items-center text-center bg-[#00AEB1] lg:w-1/6 sm:w-1/4 h-5/6 lg:gap-5 sm:gap-1 rounded-3xl">
            <p className=" text-white lg:text-3xl sm:text-xl sm:w-20 lg:w-40 mt-10 mb-10 font-bold">
              Fahad Alghamdi
            </p>

            <div className="flex flex-row justify-center gap-5 mb-12">
              <a href="">
                {" "}
                <img className="lg:w-12 sm:w-10" src={gitimg} alt="" />{" "}
              </a>
              <a href="">
                {" "}
                <img className="lg:w-12 sm:w-10" src={linkimg} alt="" />{" "}
              </a>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
