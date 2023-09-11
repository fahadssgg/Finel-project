import overview from "../assets/overview.png";
import profile from "../assets/profile.png";
import Logout from "../assets/logout.png";
import Report from "../assets/report.png";
import home from "../assets/home.png";
import WiseWall from "../assets/Grouptest.png";

export default function SidePar() {
  return (
    <div className=" border-r-4  border-t h-screen rounded-l-full bg-[#d9d9d9] bg-opacity-5">
      <div className="  w-full">
        <div className="flex justify-center">
          <img className="h-16 my-10" src={WiseWall} />
        </div>
        <nav className="mt-5 ml-4 px-2 ">
          <a
            href="/"
            className="group flex items-center px-2 py-2 text-base leading-6 font-semibold   hover:bg-black/10"
          >
            <img className="mr-3" src={home} />
            Home
          </a>
          <a
            href="/InfoPage"
            className="mt-1 group flex items-center px-2 py-2 text-base leading-6 font-medium  hover:bg-black/10"
          >
            <img className="mr-3" src={overview} />
            Overview
          </a>

          <a
            href="/InfoPage2"
            className="mt-1 group flex items-center px-2 py-2 text-base leading-6 font-medium  hover:bg-black/10"
          >
            <img className="mr-3" src={overview} />
            Overview2
          </a>

          <a
            href="/Profile"
            className="mt-1 group flex items-center px-2 py-2 text-base leading-6 font-medium  hover:bg-black/10"
          >
            <img className="mr-3" src={Report} />
            Report
          </a>

          <a
            href="/Profile"
            className="mt-1 group flex items-center px-2 py-2 text-base leading-6 font-medium   hover:bg-black/10"
          >
            <img className="mr-3" src={profile} />
            Profile
          </a>
          <a
            href="/"
            className="mt-1 text-red-600 group  flex items-center px-2 py-2 text-base leading-6 font-medium  hover:bg-black/10"
            onClick={() => localStorage.removeItem("active")}
          >
            <img className="mr-3" src={Logout} />
            Sign-Out
          </a>
        </nav>
      </div>
    </div>
  );
}
