import "../src/dist/styles.css";
import Home from "./Pages/Home";
import Navbar from "../src/components/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main_customer from "./Pages/Main_customer";
import Main_owner from "./Pages/Main_owner";
import Reg_customer from "./Pages/Reg_customer";
import Reg_owner from "./Pages/Reg_owner";
// import Vehicles from "./Pages/Vehicles";
import Models from "./Pages/Models";
// import Vehicles from "./Pages/Vehicles";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route index path="/" element={<Home />} />
        {/* <Route index path="/Vehicles" element={<Vehicles />} /> */}
        <Route index path="/Models" element={<Models />} />
        <Route index path="/main_customer" element={<Main_customer />} />
        <Route index path="/main_owner" element={<Main_owner />} />
        <Route path="/custRegister" element={<Reg_customer />} />
        <Route path="/ownRegister" element={<Reg_owner />} />
      </Routes>
    </>
  );
}

export default App;
