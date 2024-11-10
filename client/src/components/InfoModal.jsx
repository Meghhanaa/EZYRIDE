import React from 'react';
import '../styles/ModelsStyles/modal.css';
import Navbar from '../components/Navbar';
import { useViewContext } from '../Context_api/contextApi';

// const dummyVehicle = {
//   v_image: 'https://imgd.aeplcdn.com/370x208/n/cw/ec/139651/curvv-exterior-right-front-three-quarter.jpeg?isig=0&q=80', // Placeholder image URL
//   v_insurance: 'INS123456', // Example insurance number
//   v_name: 'Toyota Camry', // Vehicle name
//   v_type: 'Sedan', // Vehicle type
//   v_desp: 'A comfortable and spacious sedan with excellent fuel efficiency.', // Vehicle description
//   v_rto: 'MP07', // RTO registration
//   v_color: 'White', // Vehicle color
//   v_mileage: '25 kmpl', // Vehicle mileage
//   v_engine_type: 'Hybrid', // Engine type
//   o_no: '9876543210', // Owner number
//   v_pay: '50000', // Payment amount
//   v_booked: false, // Booking status
//   v_price: '1500000' // Vehicle price
// };


const InfoModal = () => {
   const{dummyVehicle,handleClose}=useViewContext();
  return (
    <>
      <Navbar />
      <div className="profile-container">
        <img src={dummyVehicle.v_image} alt={`${dummyVehicle.v_name}`} className="profile-image" />
        <h1>{dummyVehicle.v_name}</h1>
        <div className="profile-info">
          <p><strong>RTO:</strong> {dummyVehicle.v_rto}</p>
          <p><strong>Vehicle Type:</strong> {dummyVehicle.v_type}</p>
          <p><strong>Description:</strong> {dummyVehicle.v_desp}</p>
          <p><strong>Color:</strong> {dummyVehicle.v_color}</p>
          <p><strong>Mileage:</strong> {dummyVehicle.v_mileage}</p>
          <p><strong>Engine Type:</strong> {dummyVehicle.v_engine_type}</p>
          <p><strong>Owner No:</strong> {dummyVehicle.o_no}</p>
          <p><strong>Owner Name:</strong> {dummyVehicle.o_name}</p>
          <p><strong>Price:</strong> Rs {dummyVehicle.v_pay}</p>
          <p><strong>Booked:</strong> {dummyVehicle.v_booked ? "Yes" : "No"}</p>
          <button className="popular__button more" onClick={handleClose}>Close</button>
        </div>
      </div>
    </>
  );
};

export default InfoModal;
