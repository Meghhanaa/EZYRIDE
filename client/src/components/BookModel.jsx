import React, { useState, useEffect } from "react";
import "../styles/BookStyles/BookModel.css";
import Navbar from "./Navbar";
import { useViewContext } from "../Context_api/contextApi";

const BookModel = () => {
  const {BookformData,BookData,handleBookChange,handleBookSubmit,custNumber}=useViewContext();
  const handlePayLater = () => {
    {console.log(BookformData.v_pay)}; // Add ₹50 extra for Pay Later option
  };

  const [isDriverRequired, setIsDriverRequired] = useState(false);

  const handleCheckboxChange = (event) => {
    setIsDriverRequired(event.target.checked);
  };

  return (
    <>
    <Navbar/>
    <div className="booking-modal active-modal">
      <div className="booking-modal__content">
        <h2 className="book-title-1">Complete Reservation for {BookData.v_name}</h2><br></br>
        <img src={BookData.v_image} alt={BookData.v_name} className="booking-image" /><br></br><br></br><br></br>
        <p className="booking-description">{BookData.v_desp}</p>
        <h3>Price: ₹{BookData.v_pay}</h3>
        <form onSubmit={(e) => handleBookSubmit(e, false)} className="booking-form">
        {/* driver required */}
         <center><div className="flex items-center">
      <input 
        type="checkbox" 
        id="driver-required" 
        checked={isDriverRequired} 
        onChange={handleCheckboxChange} 
      />
      <label htmlFor="driver-required" className="text-lg">Driver Required</label>
    </div></center>
          {/* Form fields */}
          <div className="megh-1">
            <label>Booking Location</label>
            <input 
              type="text" 
              name="b_location "
              value={BookData.o_street} 
              onChange={handleBookChange} 
              readOnly 
            />
          </div>
          <div className="megh-1">
            <label>Contact Number</label>
            <input type="tel" name="c_no" value={custNumber} onChange={handleBookChange} readOnly />
          </div>
          {isDriverRequired && (
             <div className="megh-1">
             <label>Driver Number</label>
             <input 
               type="text" 
               name="d_no" 
               value={BookData.d_no} 
               onChange={handleBookChange} 
               readOnly 
             />
            </div>
          )}
          <div className="megh-1">
            <label>Vehicle RTO</label>
            <input type="text" name="v_insurance" value={BookData.v_rto} onChange={handleBookChange} readOnly />
          </div>
          <div className="megh-1">
            <label>Booking Date</label>
            <input type="date" name="b_date" value={BookformData.b_date} onChange={handleBookChange} required />
          </div>
          <div className="megh-1">
            <label>Booking Time</label>
            <input type="time" name="b_time" value={BookformData.b_time} onChange={handleBookChange} required />
          </div>
          <div className="megh-1">
            <label>Payment Method</label>
            <select name="b_pay" value={BookformData.b_method} onChange={handleBookChange} required>
              <option value="">Select Payment Method</option>
              <option value="Credit Card">Credit Card</option>
              <option value="Debit Card">Debit Card</option>
              <option value="PayPal">PayPal</option>
              <option value="Cash on Delivery">Cash on Delivery</option>
            </select>
          </div>
          <div className="megh-1">
            <label>Return Date</label>
            <input type="date" name="b_return_date" value={BookformData.b_return_date} onChange={handleBookChange} required />
          </div>
          <div className="megh-1">
            <label>Return Time</label>
            <input type="time" name="b_return_time" value={BookformData.b_return_time} onChange={handleBookChange} required />
          </div>
          <div className="megh-1">
            <label>Pick-Up Location</label>
            <input 
              type="text" 
              name="b_pickup" 
              value={BookData.o_street} 
              onChange={handleBookChange}  
              readOnly 
            />
          </div>

          {/* Payment Buttons */}
          <div className="megh-pay">
            <button type="submit" className="submit-button">Pay Now</button>
            <button 
              type="submit" 
              className="submit-button pay-later-button"  
              onChange={handlePayLater}
            >
              Pay Later (₹50 Extra)
            </button>
          </div>
        </form>
      </div>
    </div>
    </>
  );
};

export default BookModel;
