import NavPar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Header1 from "../Assets/headerImg1.png";
import Header2 from "../Assets/headerImg2.png";
import imag2logo from "../Assets/image-logo.png";
import icon1 from "../Assets/icon1.png";
import icon2 from "../Assets/icon2.png";
import icon3 from "../Assets/icon3.png";
import gitimg from "../Assets/github.png";

import linkimg from "../Assets/linkedin (1).png";

// md: max-sm

export default function Home() {
  return (
    <div>
      <div className=" mb-10 ">
        <NavPar />
      </div>
      <div className="h-fit flex flex-row-reverse lg:gap-20 gap-5  md:gap-10 max-lg:gap-10 mb-5 justify-center">
        <img
          className="lg:h-[40rem] lg:w-[40rem] w-[15rem] h-[15rem] md:w-[20rem] md:h-[20rem]"
          src={Header2}
          alt=""
        />
        <img
          className="lg:h-[30rem] lg:w-[40rem] w-[5 rem] h-[10rem] mt-5  md:w-[20rem]  md:h-[20rem] lg:mt-20"
          src={Header1}
          alt=""
        />
      </div>

      <div className="bg-[#dff6f6] flex flex-col justify-center items-center lg:gap-10 lg:mb-10 lg:mt-10 mb-5">
        <div className="mt-20 flex gap-3 justify-center">
          <h1 className=" lg:text-5xl md:text-3xl max-sm:text-xl font-bold">
            Take Control Of Your
          </h1>
          <p className="lg:text-5xl  md:mb-5 md:text-3xl text-xl font-bold text-[#00AEB1]">
            Money
          </p>
        </div>

        <p className="lg:text-2xl  md:text-lg text-base mb-10 ">
          With Wise Wallet you can have
        </p>

        <div className=" flex md:flex-row md:justify-center md:gap-2 lg:flex-row lg:justify-center lg:gap-2 lg:w-10/12  md:w-9/12 w-1/3 flex-col items-center  gap-5 h-fit mb-20">
          <div className=" hover:scale-110 flex flex-col justify-center items-center text-center bg-[#3E68AE] h-fit lg:w-1/5 sm:w-1/4 gap-5 w-full   md:w-1/4   md:gap-5 lg:gap-10 rounded-2xl">
            <img className="lg:w-32 mt-10 max-sm:w-20 md:w-24" src={icon1} alt="" />
            <p className="lg:text-2xl w-20 mb-10 max-sm:text-lg font-bold ">
              Expense Track
            </p>
          </div>

          <div className=" hover:scale-110 flex flex-col justify-center items-center text-center bg-[#00AEB1] h-fit lg:w-1/5  max-sm:gap-5  max-sm:w-full  md:w-1/4   md:gap-5 lg:gap-10 rounded-2xl">
            <img className="lg:w-32 mt-10 max-sm:w-20  md:w-24" src={icon2} alt="" />
            <p className="lg:text-2xl w-40 md:w-24 mb-10 max-sm:text-lg font-bold">
              {" "}
              Money Management
            </p>
          </div>

          <div className=" hover:scale-110 flex flex-col justify-center items-center text-center bg-[#F7F5FA] h-fit lg:w-1/5 max-sm:w-full max-sm:gap-5  md:w-1/4   md:gap-5  lg:gap-10 rounded-2xl">
            <img className="lg:w-32 mt-10 max-sm:w-20  md:w-24" src={icon3} alt="" />
            <p className="lg:text-2xl w-20 mb-10 max-sm:text-lg font-bold">
              Wisdom Spending
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-row max-sm:flex-col justify-center items-center ">
        <div className="hover:scale-90 lg:w-1/3 max-sm:w-2/5 md:w-2/5 mt-20 max-sm:my-10">
          <img src={imag2logo} alt="" />
        </div>

        <div className="w-1/2 flex flex-col justify-center items-center lg:gap-10 md:gap-7 max-sm:gap-5">
          <h1 className=" lg:text-5xl  md:text-3xl max-sm:text-xl font-extrabold w-80 text-center">
            What is{" "}
            <b className="lg:text-5xl  md:text-3xl max-sm:text-xl text-[#C1CFE5]">
              Wise Wallet
            </b>
          </h1>

          <p className=" lg:text-center lg:w-9/12 lg:text-2xl md:w-[20rem] md:text-lg text-sm text-center w-[25rem] max-sm:px-16">
            <b>Wise Wallet </b>is a website designed to help you make max-smart
            financial decisions and manage your money effectively. It provides
            tips to help you save, manage your budget, and track your expenses.{" "}
          </p>
        </div>
      </div>

      <div className="bg-[#C0E6E6] flex flex-col justify-center items-center my-10 lg:w-full w-screen">
        <p className=" lg:w-1/4  w-4/5 text-center lg:text-3xl max-sm:text-lg m-24 max-sm:mb-2 md:text-xl md:m-20  md:mb-9 max-sm:mt-12 lg:mb-6">
          Start your journey towards financial wisdom with{" "}
        </p>
        <br />
        <b className="text-center text-lg md:text-2xl lg:text-3xl mb-10 lg:mb-20">
          Wise Wallet!
        </b>
      </div>


      <div className=" flex flex-col justify-center items-center lg:mt-32 mb-5 mt-20 lg:mb-20 ">
        <p className="text-center font-extrabold md:text-3xl text-xl lg:text-5xl mb-20">
          Website{" "}
          <b className="text-center lg:text-5xl md:text-3xl text-xl mb-20 text-[#B2E0E0]">
            Developer{" "}
          </b>
        </p>

        <div className="flex flex-row max-sm:flex-col max-sm:items-center  justify-center w-screen lg:w-full lg:gap-9 gap-5 mb-10">
          <div className="hover:scale-90 flex flex-col justify-center items-center text-center bg-[#3E68AE] w-2/5 lg:w-1/6 h-5/6 lg:gap-5 gap-1 rounded-3xl">
            <p className="text-white lg:text-3xl  md:text-2xl  text-xl w-20 mt-10 mb-10 font-bold">
              Nouf Jafari
            </p>

            <div className="flex flex-row justify-center gap-5 mb-12">
              <a href="https://github.com/noufjafari">
                {" "}
                <img className="lg:w-12 max-sm:w-10 md:w-12" src={gitimg} alt="" />{" "}
              </a>
              <a href="https://www.linkedin.com/in/nouf-jafari/">
                {" "}
                <img
                  className="lg:w-12 max-sm:w-10 md:w-12"
                  src={linkimg}
                  alt=""
                />{" "}
              </a>
            </div>
          </div>

          <div className="hover:scale-90 flex flex-col justify-center items-center text-center bg-[#00AEB1] w-2/5 lg:w-1/6  h-5/6 lg:gap-5 gap-1 rounded-3xl">
            <p className=" text-white lg:text-3xl md:text-2xl text-xl w-20 lg:w-40  mt-10 mb-10 font-bold">
              Fahad Alghamdi
            </p>

            <div className="flex flex-row justify-center gap-5 mb-12">
              <a href="https://github.com/fahadssgg">
                {" "}
                <img className="lg:w-12 w-9 md:w-12" src={gitimg} alt="" />{" "}
              </a>
              <a href="https://www.linkedin.com/in/fahad-saad-alghamdi/">
                {" "}
                <img
                  className="lg:w-12 w-9 md:w-12 "
                  src={linkimg}
                  alt=""
                />{" "}
              </a>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
