import React, { useState } from "react";
import "../src/dist/styles.css";
import Home from "./Pages/Home";
// import Navbar from "../src/components/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main_customer from "./Pages/Main_customer";
import Main_owner from "./Pages/Main_owner";
import Reg_customer from "./Pages/Reg_customer";
import Reg_owner from "./Pages/Reg_owner";
import Models from "./Pages/Models";
import AboutSection from "./Pages/About";
import ContactEzy from "./Pages/Contact";
import OurTeam from "./Pages/OurTeam";
import AddVehicle from "./components/AddVehicle";
import Safety from "./Pages/SafetyPage";
import BookModel from "./components/BookModel";
import { ViewProvider } from "./Context_api/contextApi";
import AdminLogin from "./components/adminLogin";
import DummyCom from "./components/dummyCom";
import Profile from "./components/Profile";
// import dummyCom from "./components/dummyCom";

function App() {
  const [properties, setProperties] = useState([]);

  const addVehicle = (vehicle) => {
    setProperties([...properties, vehicle]);
  };

  return (
    <>
      <ViewProvider>
      {/* <Navbar /> */}
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route index path="/Models" element={<Models properties={properties} />} />
        <Route index path="/main_customer" element={<Main_customer />} />
        <Route index path="/main_owner" element={<Main_owner />} />
        <Route path="/custRegister" element={<Reg_customer />} />
        <Route path="/ownRegister" element={<Reg_owner />} />     
        <Route path="/contactEzy" element={<ContactEzy/>}/>  
        <Route path="/ownRegister" element={<Reg_owner />} />
        <Route path="/About" element={<AboutSection/>} />
        <Route path="/OurTeam" element={<OurTeam />} />
        <Route path="/Safety" element={<Safety></Safety>} />
        <Route path="/AddVehicle" element={<AddVehicle addVehicle={addVehicle} />} />
        <Route path="/bookModel" element={<BookModel/>} />
        <Route path="/Profile" element={<Profile/>} />
        <Route path="/adminLogin" element={<AdminLogin></AdminLogin>} />
        {/* <Route path="/ContactEzy" element={<ContactEzy />} /> */} 
      </Routes>
      </ViewProvider>
    </>
  );
}

export default App;