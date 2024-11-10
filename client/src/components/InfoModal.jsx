import React from 'react';
import Navbar from '../components/Navbar';
import { useViewContext } from '../Context_api/contextApi';
import '../styles/ModelsStyles/modal.css';
import { ImCross } from 'react-icons/im';

const InfoModal = () => {
  const { dummyVehicle, handleClose } = useViewContext();

  return (
    <>
      <Navbar />
<<<<<<< HEAD
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
=======
>>>>>>> 89289670d3e876bac5900ce63c82597e0d159a6c

      {/* Overlay within the section, clicking on it will close the modal */}
      <div className="section-overlay" onClick={handleClose}></div>

      {/* Modal content container */}
      <div className="modal-container">
        {/* Close icon to close the modal */}
        <ImCross className="close-icon" onClick={handleClose} />

        <div className="vehicle-info-container">
          <img src={dummyVehicle.v_image} alt={`${dummyVehicle.v_name}`} className="vehicle-info-image" />
          <h1 style={{color:'maroon'}}>{dummyVehicle.v_name}</h1>
          
          <div className="vehicle-info">
            <form>
              {/* Insurance and Vehicle Type */}
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="insuranceNumber"><strong>Insurance Number:</strong></label>
                  <span className="span">{dummyVehicle.v_insurance}</span>
                </div>
                <div className="form-group">
                  <label htmlFor="vehicleType"><strong>Vehicle Type:</strong></label>
                  <span className="span">{dummyVehicle.v_type}</span>
                </div>
              </div>

              {/* Description and RTO */}
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="description"><strong>Description:</strong></label>
                  <textarea 
                    id="description" 
                    name="description" 
                    defaultValue={dummyVehicle.v_desp} 
                    required 
                    readOnly 
                    rows="3" 
                    cols="50" 
                    style={{ resize: 'none', fontSize: '15px', padding: '10px' }}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="rto"><strong>RTO:</strong></label>
                  <span className="span">{dummyVehicle.v_rto}</span>
                </div>
              </div>

              {/* Color and Mileage */}
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="color"><strong>Color:</strong></label>
                  <span className="span">{dummyVehicle.v_color}</span>
                </div>
                <div className="form-group">
                  <label htmlFor="mileage"><strong>Mileage:</strong></label>
                  <span className="span">{dummyVehicle.v_mileage}</span>
                </div>
              </div>

              {/* Engine Type and Owner Number */}
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="engineType"><strong>Engine Type:</strong></label>
                  <span className="span">{dummyVehicle.v_engine_type}</span>
                </div>
                <div className="form-group">
                  <label htmlFor="ownerNumber"><strong>Owner Number:</strong></label>
                  <span className="span">{dummyVehicle.o_no}</span>
                </div>
              </div>

<<<<<<< HEAD
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
=======
              {/* Payment Amount and Booked Status */}
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="paymentAmount"><strong>Payment Amount:</strong></label>
                  <span className="span">{dummyVehicle.v_pay}</span>
                </div>
                <div className="form-group">
                  <label htmlFor="booked"><strong>Booked:</strong></label>
                  <span className="span">{dummyVehicle.v_booked ? 'Yes' : 'No'}</span>
                </div>
              </div>
            </form>
          </div>
>>>>>>> 89289670d3e876bac5900ce63c82597e0d159a6c
        </div>
      </div>
    </>
  );
};

export default InfoModal;
