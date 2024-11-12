import React from 'react';

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
    <div className="admin-vehicles-container">
      <h1>Vehicle Information</h1>

      <div className="vehicle-profile">
        {/* Vehicle Image */}
        <div className="vehicle-image">
          <img src={vehicleData.v_image} alt={vehicleData.v_name} />
        </div>

        {/* Vehicle Details */}
        <div className="vehicle-details">
          <ul>
            <li><strong>Vehicle Name:</strong> {vehicleData.v_name}</li>
            <li><strong>Vehicle Type:</strong> {vehicleData.v_type}</li>
            <li><strong>Description:</strong> {vehicleData.v_desp}</li>
            <li><strong>RTO Registration:</strong> {vehicleData.v_rto}</li>
            <li><strong>Color:</strong> {vehicleData.v_color}</li>
            <li><strong>Mileage:</strong> {vehicleData.v_mileage}</li>
            <li><strong>Engine Type:</strong> {vehicleData.v_engine_type}</li>
            <li><strong>Owner Contact:</strong> {vehicleData.o_no}</li>
            <li><strong>Insurance Expiry Date:</strong> {vehicleData.v_insurance}</li>
            <li><strong>Price:</strong> {vehicleData.v_pay}</li>
            <li><strong>Booked:</strong> {vehicleData.v_booked}</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AdminVehicles;
