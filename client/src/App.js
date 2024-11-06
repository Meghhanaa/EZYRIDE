import "../src/dist/styles.css";
import Home from "./Pages/Home";
import Navbar from "../src/components/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main_customer from "./Pages/Main_customer";
import Main_owner from "./Pages/Main_owner";
import Reg_customer from "./Pages/Reg_customer";
import Reg_owner from "./Pages/Reg_owner";
import ContactEzy from "./Pages/Contact";
import OurTeam from "./Pages/OurTeam";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route index path="/main_customer" element={<Main_customer />} />
        <Route index path="/main_owner" element={<Main_owner />} />
        <Route path="/custRegister" element={<Reg_customer />} />
        <Route path="/ownRegister" element={<Reg_owner />} />   
        <Route path="/contactEzy" element={<ContactEzy/>}/>  
        <Route path="/ownRegister" element={<Reg_owner />} />
        <Route path="/OurTeam" element={<OurTeam />} />
      </Routes>
    </>
  );
}

export default App;
