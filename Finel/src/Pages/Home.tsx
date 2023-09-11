import NavPar from "../Components/Navbar";
import Footer from "../Components/Footer";
import imag1 from "../Assets/image-1.png";
import imag2logo from "../Assets/image-logo.png";
import icon1 from "../Assets/icon1.png";
import icon2 from "../Assets/icon2.png";
import icon3 from "../Assets/icon3.png";
import gitimg from "../Assets/github.png";
import linkimg from "../Assets/linkedin (1).png";

//md: max-sm

export default function Home() {
  return (
    <div>
      <NavPar />

      <div className="h-fit flex flex-row-reverse lg:gap-20 max-sm:gap-5 md:gap-10 max-lg:gap-10 justify-center  ">
        <img
          className="lg:w-[30rem] max-sm:w-[13rem] max-sm: md:w-[15rem]"
          src={imag1}
          alt=""
        />
        <div className="w-1/3 text-center flex justify-center items-center">
          <h1 className=" lg:text-6xl md:text-4xl max-sm:text-xl max-sm: font-bold">
            Control Your <p className="text-[#3E68AE]">Budget</p>
          </h1>
        </div>
      </div>

      <div className="flex flex-col justify-center items-center gap-10 mb-20 max-sm:mb-5  ">
        <div className="mt-20 flex gap-3 justify-center">
          <h1 className=" lg:text-5xl md:text-3xl max-sm:text-xl font-bold">
            Take Control Of Your
          </h1>
          <p className="lg:text-5xl md:text-3xl max-sm:text-xl font-bold text-[#00AEB1]">
            Money
          </p>
        </div>

        <p className="lg:text-2xl md:text-lg max-sm:text-base ">
          With Wise Wallet you can have
        </p>

        <div className=" flex flex-row justify-center gap-10 lg:w-10/12 md:w-9/12 max-sm:flex-col max-sm:items-center  max-sm:gap-5 h-fit">
          <div className="flex flex-col justify-center items-center text-center bg-[#3E68AE] lg:w-1/6 max-sm:w-full h-5/6 max-sm:gap-5 md:w-1/4  md:gap-5 lg:gap-20 rounded-2xl">
            <img className="lg:w-40 mt-10 max-sm:w-20" src={icon1} alt="" />
            <p className="lg:text-2xl w-20 mb-10 max-sm:text-lg font-bold ">
              Expense Track
            </p>
          </div>

          <div className="flex flex-col justify-center items-center text-center bg-[#00AEB1] lg:w-1/6  max-sm:w-full h-5/6 max-sm:gap-5 lg:gap-20 rounded-2xl">
            <img className="lg:w-40 mt-10 max-sm:w-20" src={icon2} alt="" />
            <p className="lg:text-2xl w-40 mb-10 max-sm:text-lg font-bold">
              {" "}
              Money Management
            </p>
          </div>

          <div className="flex flex-col justify-center items-center text-center bg-[#F7F5FA] lg:w-1/6  max-sm:w-full h-5/6 max-sm:gap-5 lg:gap-20 rounded-2xl">
            <img className="lg:w-40 mt-10 max-sm:w-20" src={icon3} alt="" />
            <p className="lg:text-2xl w-20 mb-10 max-sm:text-lg font-bold">
              Wisdom Spending
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-row max-sm:flex-col justify-center items-center ">
        <div className="lg:w-1/3 max-sm:w-2/5 mt-20 max-sm:mb-16">
          <img src={imag2logo} alt="" />
        </div>

        <div className="w-1/2 flex flex-col justify-center items-center lg:gap-10 max-sm:gap-5">
          <h1 className=" lg:text-5xl md:text-3xl max-sm:text-xl font-extrabold w-80 text-center">
            What is{" "}
            <b className="lg:text-5xl md:text-3xl max-sm:text-xl text-[#C1CFE5]">
              Wise Wallet
            </b>
          </h1>

          <p className=" text-center w-9/12 lg:text-2xl md:text-lg max-sm:text-sm max-sm:text-left max-sm:w-screen max-sm:px-16">
            <b>Wise Wallet </b>is a website designed to help you make max-smart
            financial decisions and manage your money effectively. It provides
            tips to help you save, manage your budget, and track your expenses.{" "}
          </p>
        </div>
      </div>

      <div className="bg-[#C0E6E6] flex flex-col justify-center items-center my-10  max-sm:w-screen">
        <p className=" lg:w-1/4  max-sm:w-4/5 text-center lg:text-3xl max-sm:text-lg m-24 max-sm:mb-2 max-sm:mt-12 lg:mb-6">
          Start your journey towards financial wisdom with{" "}
        </p>
        <br />
        <b className="text-center max-sm:text-lg lg:text-3xl max-sm:mb-10 lg:mb-20">
          Wise Wallet!
        </b>
      </div>

      <div className=" flex flex-col justify-center items-center mt-32 max-sm:mb-5 max-sm:mt-20 lg:mb-20 ">
        <p className="text-center font-extrabold max-sm:text-xl lg:text-5xl mb-20">
          Website{" "}
          <b className="text-center lg:text-5xl max-sm:text-xl mb-20 text-[#B2E0E0]">
            Developer{" "}
          </b>
        </p>

        <div className="flex flex-row max-sm:flex-col max-sm:items-center  justify-center w-full lg:gap-9 max-sm:gap-5 mb-10">
          <div className=" flex flex-col justify-center items-center text-center bg-[#3E68AE] max-sm:w-3/6 lg:w-1/6 h-5/6 lg:gap-5 max-sm:gap-1 rounded-3xl">
            <p className="text-white lg:text-3xl max-sm:text-xl w-20 mt-10 mb-10 font-bold">
              Nouf Jafari
            </p>

            <div className="flex flex-row justify-center gap-5 mb-12">
              <a href="https://github.com/noufjafari">
                {" "}
                <img className="lg:w-12 max-sm:w-10" src={gitimg} alt="" />{" "}
              </a>
              <a href="https://www.linkedin.com/in/nouf-jafari/">
                {" "}
                <img
                  className="lg:w-12 max-sm:w-10"
                  src={linkimg}
                  alt=""
                />{" "}
              </a>
            </div>
          </div>

          <div className=" flex flex-col justify-center items-center text-center bg-[#00AEB1] max-sm:w-3/6 lg:w-1/6  h-5/6 lg:gap-5 max-sm:gap-1 rounded-3xl">
            <p className=" text-white lg:text-3xl max-sm:text-xl max-sm:w-20 lg:w-40  mt-10 mb-10 font-bold">
              Fahad Alghamdi
            </p>

            <div className="flex flex-row justify-center gap-5 mb-12">
              <a href="">
                {" "}
                <img className="lg:w-12 max-sm:w-10" src={gitimg} alt="" />{" "}
              </a>
              <a href="">
                {" "}
                <img
                  className="lg:w-12 max-sm:w-10"
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
