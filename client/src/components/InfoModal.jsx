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

      {/* Overlay within the section, clicking on it will close the modal */}
      {/* <div className="section-overlay" onClick={handleClose}></div> */}

      {/* Modal content container */}
      <div className="modal-container">
        {/* Close icon to close the modal */}
        {/* <ImCross className="close-icon" onClick={handleClose} /> */}


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
               <center><button className="close-icon" onClick={handleClose}>Close</button></center>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default InfoModal;
