import React from 'react';
import Navbar from '../components/Navbar';
import { useViewContext } from '../Context_api/contextApi';
import '../styles/ModelsStyles/modal.css';

const InfoModal = () => {
   const{dummyVehicle,handleClose}=useViewContext();
  return (
    <>
      <Navbar />
      <div className="vehicle-info-container">
        <img src={dummyVehicle.v_image} alt={`${dummyVehicle.v_name}`} className="vehicle-info-image" />
        <h1>{dummyVehicle.v_name}</h1>
        <div className="vehicle-info">
          <form>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="insuranceNumber"><strong>RTO:</strong></label>
                <input type="text" id="insuranceNumber" name="insuranceNumber" defaultValue={dummyVehicle.v_rto} required readOnly />
              </div>
              <div className="form-group">
                <label htmlFor="vehicleType"><strong>Vehicle Type:</strong></label>
                <input type="text" id="vehicleType" name="vehicleType" defaultValue={dummyVehicle.v_type} required readOnly />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="description"><strong>Description:</strong></label>
                <textarea 
                    id="description" 
                    name="description" 
                    defaultValue={dummyVehicle.v_desp} 
                    required 
                    readOnly 
                    rows="1" 
                    cols="50" 
                    style={{ resize: 'none', fontSize:'15px',padding:'10px' }}
              />
              </div>
              <div className="form-group">
                <label htmlFor="rto"><strong>RTO:</strong></label>
                <input type="text" id="rto" name="rto" defaultValue={dummyVehicle.v_rto} required readOnly />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="color"><strong>Color:</strong></label>
                <input type="text" id="color" name="color" defaultValue={dummyVehicle.v_color} required readOnly />
              </div>
              <div className="form-group">
                <label htmlFor="mileage"><strong>Mileage:</strong></label>
                <input type="text" id="mileage" name="mileage" defaultValue={dummyVehicle.v_mileage} required readOnly />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="engineType"><strong>Engine Type:</strong></label>
                <input type="text" id="engineType" name="engineType" defaultValue={dummyVehicle.v_engine_type} required readOnly />
              </div>
              <div className="form-group">
                <label htmlFor="ownerNo"><strong>Owner Number:</strong></label>
                <input type="text" id="ownerNo" name="ownerNo" defaultValue={dummyVehicle.o_no} required readOnly />
              </div>
            </div>

            <div className="form-row">
              
              <div className="form-group">
                <label htmlFor="booked"><strong>Booked:</strong></label>
                <input type="text" id="booked" name="booked" defaultValue={dummyVehicle.v_booked ? "Yes" : "No"} required readOnly />
              </div>
              <div className="form-group">
                <label htmlFor="price"><strong>Price:</strong></label>
                <input type="text" id="price" name="price" Value={dummyVehicle.v_pay} required readOnly />
              </div>
            </div>
            <button></button>
          </form>
        </div>
      </div>
    </>
  );
};

export default InfoModal;
