import overview from "../assets/abstract.png";
import profile from "../assets/user.png";
import Logout from "../assets/sign-out.png";
import Report from "../assets/folder.png";
import home from "../assets/thehome.png";
import Salary from "../assets/money.png";
import WiseWall from "../assets/Grouptest.png";

export default function SidePar() {
  return (
    <div className=" border-r-4   h-screen max-sm:h-auto max-sm:border-r-0 max-sm:border-b-4 max-sm:rounded-l-none rounded-l-full bg-[#d9d9d9] bg-opacity-5">
      <div className="  w-full">
        <div className="flex justify-center">
          <img className="h-16 my-10 max-sm:my-0 max-sm:mt-4" src={WiseWall} />
        </div>
        <nav className="mt-5 ml-4 px-2 max-sm:flex max-sm:justify-around max-sm:flex-wrap ">
          <a
            href="/"
            className="group flex items-center px-2 py-2 text-base leading-6 hover:scale-110 hover:bg-black/10"
          >
            <img className="mr-3 w-6" src={home} />
            Home
          </a>
          <a
            href="/Overview"
            className="mt-1 group max-sm:ml-2  flex items-center px-2  py-2 text-base leading-6 hover:scale-110 hover:bg-black/10"
          >
            <img className="mr-3 w-6" src={Salary} />
            Salary
          </a>

          <a
            href="/InfoPage"
            className="mt-1 group flex items-center px-2 py-2 text-base leading-6 hover:scale-110 hover:bg-black/10"
          >
            <img className="mr-3 w-5" src={overview} />
            Overview
          </a>

          <a
            href="/InfoPage2"
            className="mt-1 group max-sm:ml-1  flex items-center px-2 py-2 text-base leading-6 hover:scale-110 hover:bg-black/10"
          >
            <img className="mr-3 w-5" src={Report} />
            Budget
          </a>

          <a
            href="/Profile"
            className="mt-1 group flex max-sm:ml-2 items-center px-2 py-2 text-base leading-6 hover:scale-110 hover:bg-black/10"
          >
            <img className="mr-3 w-5" src={profile} />
            Profile
          </a>
          <a
            href="/"
            className="mt-1 text-red-600 group  flex items-center px-2 py-2 text-base leading-6 hover:scale-110 hover:bg-black/10"
            onClick={() => localStorage.removeItem("active")}
          >
            <img className="mr-3 w-5" src={Logout} />
            Sign-Out
          </a>
        </nav>
      </div>
    </div>
  );
}
