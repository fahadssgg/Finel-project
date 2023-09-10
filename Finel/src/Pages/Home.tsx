import Nav from "../Components/Navbar";
import Footer from "../Components/Footer";

import imag1 from "../Assets/image-1.png"
import imag2logo from "../Assets/image-logo.png"
import icon1 from "../Assets/icon1.png"
import icon2 from "../Assets/icon2.png"
import icon3 from "../Assets/icon3.png"
import gitimg from "../Assets/github.png"
import linkimg from "../Assets/linkedin (1).png"


export default function Home() {

  return (
    <div>
      <Nav />

      <div className="h-fit flex flex-row-reverse gap-20 justify-center">
          <img className="w-[30rem]" src={imag1} alt="" />
        <div className="w-1/3 text-center flex justify-center items-center">
          <h1 className=" text-6xl font-bold">Control Your <p className="text-[#3E68AE]">Budget</p></h1>
        </div>
      </div>

        <div className="flex flex-col justify-center items-center gap-10 mb-20">
          <div className="mt-20 flex gap-3 justify-center">
            <h1 className=" text-5xl font-bold">Take Control Of Your </h1><p className="text-5xl font-bold text-[#00AEB1]">Money</p>
          </div>

          <p className="text-2xl ">With Wise Wallet you can have</p>

          <div className=" flex flex-row justify-center gap-10 w-11/12 h-fit">
            <div className="flex flex-col justify-center items-center text-center bg-[#3E68AE] w-1/6 h-5/6 gap-20 rounded-2xl">

            <img  className="w-40 mt-10" src={icon1} alt="" />
            <p className="text-2xl w-20 mb-10 font-bold ">Expense Track</p>

            </div>

            <div className="flex flex-col justify-center items-center text-center bg-[#00AEB1] w-1/6 h-5/6 gap-20 rounded-2xl">

            <img className="w-40 mt-10" src={icon2} alt="" />
            <p className="text-2xl w-40 mb-10 font-bold"> Money Management</p>

            </div>


            <div className="flex flex-col justify-center items-center text-center bg-[#F7F5FA] w-1/6 h-5/6 gap-20 rounded-2xl">

            <img  className="w-40 mt-10" src={icon3} alt="" />            
            <p className="text-2xl w-40 mb-10 font-bold">Wisdom Spending</p>
            </div>

          </div>
        </div>

        <div className="flex flex-row justify-center items-center ">
        <div className="w-1/3 mt-20">
          <img src={imag2logo} alt="" />
        </div>

        <div className="w-1/2 flex flex-col justify-center items-center gap-10">
        
          <h1 className=" text-5xl font-extrabold w-80 text-center">What is <b className="text-5xl text-[#C1CFE5]">Wise Wallet</b></h1>

          <p className=" text-center w-9/12 text-2xl"><b>Wise Wallet </b>is a website designed to help you make smart financial decisions and manage your money effectively. It provides tips to help you save, manage your budget, and track your expenses. </p>
        </div>

        </div>

      <div className="bg-[#C0E6E6] flex  flex-col justify-center items-center my-10">
        <p className=" w-1/4 text-center text-3xl m-24 mb-10">Start your journey towards financial wisdom with </p>
        <br/>
        <b className="text-center text-3xl mb-20">Wise Wallet!</b>
      </div>


      <div className=" flex flex-col justify-center items-center mt-32 mb-20 ">
          <p className="text-center font-extrabold text-5xl mb-20">Website <b className="text-center text-5xl mb-20 text-[#B2E0E0]">Developer </b></p>
          
          <div className="flex flex-row justify-center w-full gap-9 mb-10">

          <div className=" flex flex-col justify-center items-center text-center bg-[#3E68AE] w-1/6 h-5/6 gap-5 rounded-3xl">

              <p className="text-white text-3xl w-20 mt-10 mb-10 font-bold">Nouf Jafari</p>
              
              <div className="flex flex-row justify-center gap-5 mb-12">
              <a href="https://github.com/noufjafari"> <img  className="w-12 " src={gitimg} alt="" />    </a>        
                <a href="https://www.linkedin.com/in/nouf-jafari/"> <img  className="w-12 " src={linkimg} alt="" /> </a>
              </div>           

          </div>

          <div className=" flex flex-col justify-center items-center text-center bg-[#00AEB1] w-1/6 h-5/6 gap-5 rounded-3xl">

             <p className=" text-white text-3xl w-40 mt-10 mb-10 font-bold">Fahad Alghamdi</p>
              
              <div className="flex flex-row justify-center  gap-5 mb-12">
               <a href=""> <img  className="w-12" src={gitimg} alt="" />  </a>          
               <a href=""> <img  className="w-12 " src={linkimg} alt="" /> </a>
              </div>           


          </div>

          </div>
      </div>

      <Footer/>
        </div>

  );
}
