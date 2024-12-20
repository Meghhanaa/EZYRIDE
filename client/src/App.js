// src/App.js
import React, { useState } from "react";
import "../src/dist/styles.css";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Models from "./Pages/Models";
import Main_customer from "./Pages/Main_customer";
import Main_owner from "./Pages/Main_owner";
import Reg_customer from "./Pages/Reg_customer";
import Reg_owner from "./Pages/Reg_owner";
import AboutSection from "./Pages/About";
import ContactEzy from "./Pages/Contact";
import OurTeam from "./Pages/OurTeam";
import AddVehicle from "./components/AddVehicle";
import Safety from "./Pages/SafetyPage";
import BookModel from "./components/BookModel";
import Profile from "./components/Profile";
import InfoModal from "./components/InfoModal";
import AdminLogin from "./components/adminLogin";
import { ViewProvider, useViewContext } from "./Context_api/contextApi";
import OwnerLayout from "../src/modules/OwnerLayout";
import CustomerLayout from "../src/modules/CustomerLayout";
import AdminLayout from "../src/modules/AdminLayout"
import MyBookings from "./Pages/MyBookings";
import VehiclePage from "./Pages/VehiclePage";
// import MyBookings from "./Pages/MyBookings";
import AddDriver from "./components/AddDriver";
// import MyBookings from "./components/MyBookings";
import AdminVehicles from "./Pages/AdminVehicles";
import AdminBookings from "./Pages/AdminBookings";
import AdminCust from "./Pages/AdminCust";
import AdminOwner from "./Pages/AdminOwner";
import AdminOwnerInfo from "./Pages/AdminOwnerInfo";
import AdminCustInfo from "./Pages/AdminCustInfo";
import MyDrivers from "./Pages/MyDrivers";

function App() {
   // Set to "customer" or "owner" based on app logic
   const{role} = useViewContext();

  // const addVehicle = (vehicle) => {
  //   setProperties([...properties, vehicle]);
  // };

  // Choose layout based on user role
  const Layout = 
    role === "admin" ? AdminLayout : 
    role === "owner" ? OwnerLayout : 
    CustomerLayout;

    console.log(role)

  return (
        <Layout>
        {/* <MyBookings></MyBookings> */}
        {/* <AdminCust></AdminCust>
        <AdminBookings></AdminBookings>
        <AddVehicle/> */}
        {/* <MyBookings></MyBookings> */}
        {/* <AdminCust></AdminCust> */}
        {/* <AdminBookings></AdminBookings> */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Models" element={<Models/>} />
            <Route path="/main_customer" element={<Main_customer />} />
            <Route path="/main_owner" element={<Main_owner />} />
            <Route path="/custRegister" element={<Reg_customer />} />
            <Route path="/ownRegister" element={<Reg_owner />} />
            <Route path="/contactEzy" element={<ContactEzy />} />
            <Route path="/About" element={<AboutSection user={role} />} />
            <Route path="/OurTeam" element={<OurTeam />} />
            <Route path="/Safety" element={<Safety />} />
            <Route path="/AddVehicle" element={<AddVehicle/>} />
            <Route path="/bookModel" element={<BookModel />} />
            <Route path="/Profile" element={<Profile />} />
            <Route path="/InfoModal" element={<InfoModal />} />
            <Route path="/adminLogin" element={<AdminLogin />} />
            <Route path="/AddDriver" element={<AddDriver></AddDriver>} />
            <Route path="/MyBookings" element={<MyBookings></MyBookings>} />
            <Route path="/VehiclePage" element={<VehiclePage></VehiclePage>} />
            <Route path="/AdminVehicles" element={<AdminVehicles></AdminVehicles>} />
            <Route path="/AdminBookings" element={<AdminBookings></AdminBookings>} />
            <Route path="/AdminCust" element={<AdminCust></AdminCust>} />
            <Route path="/AdminOwner" element={<AdminOwner></AdminOwner>} />
            <Route path="/AdminCustInfo" element={<AdminCustInfo></AdminCustInfo>} />
            <Route path="/AdminOwnerInfo" element={<AdminOwnerInfo></AdminOwnerInfo>} />
            <Route path="/MyDrivers" element={<MyDrivers></MyDrivers>}/>
            {/* <Route path="/HomeOwner" element={<HomeOwner />} /> */}
          </Routes>
        </Layout>
  );
}

export default App;
