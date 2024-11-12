import React from 'react';
import "../styles/AdminVehicles/AdminVehicles.css";
import Navbar from '../components/Navbar';

// Sample vehicle data
const vehicleData = {
  v_image: "https://via.placeholder.com/150", // Placeholder image URL
  v_insurance: "2024-12-31", // Example expiration date
  v_name: "Toyota Corolla",
  v_type: "Sedan",
  v_desp: "A well-maintained sedan with a clean history",
  v_rto: "DL-12AB1234", // RTO Registration number
  v_color: "White",
  v_mileage: "15 km/l",
  v_engine_type: "Petrol",
  o_no: "123456789", // Owner's phone number
  v_pay: "₹500,000",
  v_booked: "Yes" // Whether the vehicle is booked or not
};

const AdminVehicles = () => {
  return (
    <>
      <Navbar />
      <h1 className='h1'>Admin Vehicles</h1>
      <div className="admin-vehicles-container">
        <img src={vehicleData.v_image} alt={vehicleData.v_name} className="v-image" />
        <h1>{vehicleData.v_name}</h1>
        
        <div className="vehicle-info">
          <form>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="vehicleName"><strong>Vehicle Name:</strong></label>
                <input type="text" id="vehicleName" name="vehicleName" defaultValue={vehicleData.v_name} required readOnly />
              </div>
              <div className="form-group">
                <label htmlFor="vehicleType"><strong>Vehicle Type:</strong></label>
                <input type="text" id="vehicleType" name="vehicleType" defaultValue={vehicleData.v_type} required readOnly/>
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="description"><strong>Description:</strong></label>
                <input type="text" id="description" name="description" defaultValue={vehicleData.v_desp} required readOnly/>
              </div>
              <div className="form-group">
                <label htmlFor="rtoNumber"><strong>RTO:</strong></label>
                <input type="text" id="rtoNumber" name="rtoNumber" defaultValue={vehicleData.v_rto} required readOnly/>
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="color"><strong>Color:</strong></label>
                <input type="text" id="color" name="color" defaultValue={vehicleData.v_color} required readOnly/>
              </div>
              <div className="form-group">
                <label htmlFor="mileage"><strong>Mileage:</strong></label>
                <input type="text" id="mileage" name="mileage" defaultValue={vehicleData.v_mileage} required readOnly/>
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="engineType"><strong>Engine Type:</strong></label>
                <input type="text" id="engineType" name="engineType" defaultValue={vehicleData.v_engine_type} required readOnly/>
              </div>
              <div className="form-group">
                <label htmlFor="ownerContact"><strong>Owner's Contact:</strong></label>
                <input type="text" id="ownerContact" name="ownerContact" defaultValue={vehicleData.o_no} required readOnly />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="insuranceExpiry"><strong>Insurance Expiry:</strong></label>
                <input type="date" id="insuranceExpiry" name="insuranceExpiry" defaultValue={vehicleData.v_insurance} required readOnly />
              </div>
              <div className="form-group">
                <label htmlFor="price"><strong>Price:</strong></label>
                <input type="text" id="price" name="price" defaultValue={vehicleData.v_pay} required readOnly />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="booked"><strong>Booked:</strong></label>
                <input type="text" id="booked" name="booked" defaultValue={vehicleData.v_booked} required readOnly />
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default AdminVehicles;
