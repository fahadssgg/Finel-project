import emailimg from "../Assets/email-img.png"
import twittimg from "../Assets//twitter.png"
export default function 
() {
  return (
    <div>
       <footer className="bg-[#dedde0] flex flex-col justify-center ">
        <div className="sm:pt-3 pt-6 flex flex-col justify-center">
             <div className="p-4 mb-5  lg:text-2xl sm:text-lg font-bold text-center">Contact Us</div>

          <div className="flex justify-center gap-5 mb-5 ">
          <a href=""> <img  className="lg:w-12 sm:w-10" src={emailimg} alt="" />  </a>          
          <a href=""> <img  className="lg:w-12 sm:w-10" src={twittimg} alt="" /> </a>
          </div>
        </div>
      </footer> 
    </div>
  )
}
