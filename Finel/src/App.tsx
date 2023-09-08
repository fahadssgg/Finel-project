import "./App.css";
import InfoPage from "./Pages/InfoPage";
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element=""></Route>
        <Route path="/InfoPage" element={<InfoPage />}></Route>
      </Routes>
    </>
  );
}

export default App;
