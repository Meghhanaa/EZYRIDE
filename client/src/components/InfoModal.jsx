// InfoModal.jsx
import React from 'react';
import '../styles/Vehicles/infoModal.css';

const InfoModal = ({ vehicle, onClose }) => {
  if (!vehicle) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>X</button>
        <img src={vehicle.v_image} alt={vehicle.v_name} className="modal-image" />
        <h2>{vehicle.v_name}</h2>
        <p><strong>Type:</strong> {vehicle.v_type}</p>
        <p><strong>Description:</strong> {vehicle.v_desp}</p>
        <p><strong>RTO:</strong> {vehicle.v_rto}</p>
        <p><strong>Color:</strong> {vehicle.v_color}</p>
        <p><strong>Mileage:</strong> {vehicle.v_mileage}</p>
        <p><strong>Engine Type:</strong> {vehicle.v_engine_type}</p>
        <p><strong>Owner Number:</strong> {vehicle.o_no}</p>
        <p><strong>Price:</strong> ${vehicle.v_price}</p>
        <p><strong>Booked:</strong> {vehicle.v_booked ? 'Yes' : 'No'}</p>
        <p><strong>Payment:</strong> ${vehicle.v_pay}</p>
      </div>
    </div>
  );
};

export default InfoModal;
