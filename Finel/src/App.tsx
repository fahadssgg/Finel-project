import "./App.css";
import { Routes, Route } from "react-router-dom";
import InfoPage from "./Pages/InfoPage";
import InfoPage2 from "./Pages/InfoPage2";
import Home from "./Pages/Home";
import Login from "./Hooks/LogIn";
import Signup from "./Hooks/SignUp";
import Profile from "./Pages/Profile";
import Salary from "./Pages/Salary";
import Chart from "./Components/Chart";
import Overview from "./Pages/Overview";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/LogIn" element={<Login />}></Route>
        <Route path="/SignUp" element={<Signup />}></Route>
        <Route path="/Profile" element={<Profile />}></Route>
        <Route path="/InfoPage" element={<InfoPage />}></Route>
        <Route path="/InfoPage2" element={<InfoPage2 />}></Route>
        <Route path="/Overview" element={<Overview />}></Route>
        <Route path="/Salary" element={<Salary />}></Route>
        <Route path="/Chart" element={<Chart />}></Route>

      </Routes>
    </>
  );
}

export default App;
