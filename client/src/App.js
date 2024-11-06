import React, { useState } from "react";
import "../src/dist/styles.css";
import Home from "./Pages/Home";
import Navbar from "../src/components/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main_customer from "./Pages/Main_customer";
import Main_owner from "./Pages/Main_owner";
import Reg_customer from "./Pages/Reg_customer";
import Reg_owner from "./Pages/Reg_owner";
<<<<<<< HEAD
// import Vehicles from "./Pages/Vehicles";
import Models from "./Pages/Models";
=======
import AboutSection from "./Pages/About";
import ContactEzy from "./Pages/Contact";
>>>>>>> 53ef7a6560591c3ac74eaac1d1b024e13a61e8b5
import OurTeam from "./Pages/OurTeam";
import AddVehicle from "./components/AddVehicle";
import Safety from "./Pages/Safety";
// import ContactEzy from "./Pages/Contact";

function App() {
  // Initialize properties state
  const [properties, setProperties] = useState([]);

  // Define addVehicle function to add a new vehicle to properties
  const addVehicle = (vehicle) => {
    setProperties([...properties, vehicle]);
  };

  return (
    <>
      
      <Navbar />
      <Routes>
        <Route index path="/" element={<Home />} />
        {/* <Route index path="/Vehicles" element={<Vehicles />} /> */}
        <Route index path="/Models" element={<Models properties={properties} />} />
        <Route index path="/main_customer" element={<Main_customer />} />
        <Route index path="/main_owner" element={<Main_owner />} />
        <Route path="/custRegister" element={<Reg_customer />} />
<<<<<<< HEAD
        <Route path="/ownRegister" element={<Reg_owner />} />        
=======
        <Route path="/ownRegister" element={<Reg_owner />} />   
        <Route path="/contactEzy" element={<ContactEzy/>}/>  
        <Route path="/ownRegister" element={<Reg_owner />} />
        <Route path="/About" element={<AboutSection/>} />
>>>>>>> 53ef7a6560591c3ac74eaac1d1b024e13a61e8b5
        <Route path="/OurTeam" element={<OurTeam />} />
        <Route path="/Safety" element={<Safety></Safety>} />
        <Route path="/AddVehicle" element={<AddVehicle addVehicle={addVehicle} />} />
        {/* <Route path="/ContactEzy" element={<ContactEzy />} /> */}
      </Routes>
    </>
  );
}

export default App;
