import React, { useState } from "react";  // Import useState
import { useNavigate } from "react-router-dom";  // Import useNavigate
import { useViewContext } from "../Context_api/contextApi";

function DummyCom() {
  const { searchData, handleInputChange, handleSearch } = useViewContext();
  const [vehicleType, setVehicleType] = useState("");  // State for vehicle type
  const [carType, setCarType] = useState("");  // State for car type
  const [carImg, setCarImg] = useState("");  // State for car image

  const navigate = useNavigate();  // Initialize useNavigate

  const carOptions = {
    Car: ["Audi A1 S-Line", "VW Golf 6", "Toyota Camry", "BMW 320 ModernLine", "Mercedes-Benz GLK", "VW Passat CC"],
    Scooty: ["Honda Activa", "TVS Jupiter", "Hero Maestro", "Suzuki Access"],
    Bike: ["Yamaha R15", "Kawasaki Ninja", "Bajaj Pulsar", "Royal Enfield Classic"]
  };

  // Handle form submission and prevent the default behavior (page reload)
  const handleSubmit = (e) => {
    e.preventDefault();
    handleSearch();  // Assuming handleSearch handles the logic for searching
  };

  const handleChange = (e, setter) => setter(e.target.value);

  const handleVehicleTypeChange = (e) => {
    const selectedType = e.target.value;
    setVehicleType(selectedType);
    setCarType("");
    setCarImg("");  // Reset car image when vehicle type changes
  };

  const handleCarTypeChange = (e) => {
    setCarType(e.target.value);
    setCarImg(e.target.value);
  };

  return (
    <section id="booking-section" className="book-section">
      <div className="container">
        <div className="book-content">
          <div className="book-content__box">
            <h2>Book a car</h2>
            <form className="box-form" onSubmit={handleSubmit}>
              <div className="box-form__car-type">
                <label><i className="fa-solid fa-motorcycle"></i> &nbsp; Select Vehicle Type </label>
                <select name="vehicleType" value={vehicleType} onChange={handleVehicleTypeChange}>
                  <option>Vehicle type</option>
                  <option value="Car">Car</option>
                  <option value="Scooty">Scooty</option>
                  <option value="Bike">Bike</option>
                </select>
              </div>

              <div className="box-form__car-type">
                <label><i className="fa-solid fa-car"></i> &nbsp; Select Vehicle Preference </label>
                <select
                  name="carType"
                  value={carType}
                  onChange={handleCarTypeChange}
                  disabled={!vehicleType}
                >
                  <option>Select</option>
                  {vehicleType && carOptions[vehicleType].map((type, index) => (
                    <option key={index} value={type}>{type}</option>
                  ))}
                </select>
              </div>

              <div className="box-form__car-type">
                <label><i className="fa-solid fa-palette"></i> &nbsp; Color </label>
                <select name="color" value={searchData.color} onChange={handleInputChange}>
                  <option>Select car color</option>
                  <option>Any Color</option>
                  <option value="Red">Red</option>
                  <option value="White">White</option>
                  <option value="Black">Black</option>
                  <option value="Blue">Blue</option>
                </select>
              </div>

              {/* Additional fields like priceRange, pickUp, dropOff, dates, etc. */}

              <div className="box-form__car-type">
                <label><i className="fa-solid fa-dollar-sign"></i> &nbsp; Required Driver <b>*</b></label>
                <select name="driverRequired" value={searchData.driverRequired} onChange={handleInputChange}>
                  <option>Select</option>
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                </select>
              </div>

              <button type="submit" className="form-btn">SEARCH</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default DummyCom;
