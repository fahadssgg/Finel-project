import "./App.css";
import { Routes, Route } from "react-router-dom";
import InfoPage from "./Pages/InfoPage";
import Home from "./Pages/Home";
import Login from "./Hooks/LogIn";
import Signup from "./Hooks/SignUp";
import Profile from "./Pages/Profile";
import Salary from "./Pages/Salary";
import Chart from "./Components/Chart";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/LogIn" element={<Login />}></Route>
        <Route path="/SignUp" element={<Signup />}></Route>
        <Route path="/Profile" element={<Profile />}></Route>
        <Route path="/InfoPage" element={<InfoPage />}></Route>
        <Route path="/Salary" element={<Salary />}></Route>
        <Route path="/Chart" element={<Chart />}></Route>

      </Routes>
    </>
  );
}

export default App;
