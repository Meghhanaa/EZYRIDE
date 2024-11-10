import React, { useState, useEffect } from "react";
import "../styles/BookStyles/BookModel.css";
import Navbar from "./Navbar";
import { useViewContext } from "../Context_api/contextApi";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const BookModel = () => {
  const navigate = useNavigate();
  const { BookformData, setBookFormData, BookData, handleBookSubmit, custNumber,totalPay,settotalPay } = useViewContext();
  const [isDriverRequired, setIsDriverRequired] = useState(false);
  const [isConfirmed, setIsConfirmed] = useState(false); // State to manage Confirm checkbox

  const handleCheckboxChange = (event) => {
    if (event.target.id === "driver-required") {
      // settotalPay(parseFloat(totalPay) + parseFloat(100));
      setIsDriverRequired(true);
    } else if (event.target.id === "driver-not-required") {
      // settotalPay(parseFloat(totalPay) - parseFloat(100));
      setIsDriverRequired(false);
    }

    if (event.target.id === "confirm-checkbox") {
      setIsConfirmed(true);
      calculatetotalpay();
    } else {
      setIsConfirmed(false);
    }
  };

  // Update form data state
  const handleBookChange = (e) => {
    const { name, value } = e.target;
    setBookFormData({
      ...BookformData,
      [name]: value,
      ...(name === "b_location" && { b_pickup: value })
    });
  };

  // Pay Later handler
  const handlePayLater = () => {
     // Add ₹50 extra for Pay Later option
     calculatetotalpay();
     settotalPay(parseFloat(totalPay) + parseFloat(50));
     console.log("happy "+totalPay)
  };

  const calculateTimeDifferenceInMinutes = (startDateTime, endDateTime) => {
  // Create Date objects for the start and end date-times
  const startDate = new Date(startDateTime);
  const endDate = new Date(endDateTime);

  // Log the Date objects to check them
  console.log("Start Date:", startDate);
  console.log("End Date:", endDate);

  // Calculate the difference in milliseconds
  const timeDifferenceMs = endDate - startDate;

  // Log the time difference in milliseconds
  console.log("Time difference in milliseconds:", timeDifferenceMs);

  // Convert milliseconds to minutes
  const minutesDifference = timeDifferenceMs / (1000 * 60); // 1000ms = 1 second, 60 seconds = 1 minute

  // Log the result in minutes
  console.log("Time difference in minutes:", minutesDifference);

  return minutesDifference;
};

const calculatetotalpay = () => {
  // Combine b_date and b_time into a single date-time string for the start time
  const startDateTimeString = `${BookformData.b_date}T${BookformData.b_time}:00`; // Adding seconds as 00
  const endDateTimeString = `${BookformData.b_return_date}T${BookformData.b_return_time}:00`; // Adding seconds as 00

  // Log the combined date-time strings for both start and end
  console.log("Start DateTime:", startDateTimeString);
  console.log("End DateTime:", endDateTimeString);

  // Calculate the difference in minutes using the function
  const minutesDifference = calculateTimeDifferenceInMinutes(startDateTimeString, endDateTimeString);
  
  // Log the minutes difference
  console.log("Minutes Difference:", minutesDifference);

  // Now calculate total pay based on the minutes difference
  if (BookData.v_type === 'Car') {
    const pay = minutesDifference * 1; // Pay rate per minute for Car
    const total = (parseFloat(BookData.v_pay) + parseFloat(pay)).toFixed(2);
    settotalPay(parseFloat(total));
    console.log("Pay for Car:", pay);
    console.log("Total Pay for Car:", BookData.v_pay + pay);
  }
  if (BookData.v_type === 'Bike') {
    const pay = minutesDifference * 0.5; // Pay rate per minute for Bike
    const total = (parseFloat(BookData.v_pay) + parseFloat(pay)).toFixed(2);
    settotalPay(parseFloat(total));
    console.log("Pay for Bike:", pay);
    console.log("Total Pay for Bike:", BookData.v_pay + pay);
  }
  if (BookData.v_type === 'Scooty') {
    const pay = minutesDifference * 0.3; // Pay rate per minute for Scooty
    const total = (parseFloat(BookData.v_pay) + parseFloat(pay)).toFixed(2);
    settotalPay(parseFloat(total));
    console.log("Pay for Scooty:", pay);
    console.log("Total Pay for Scooty:", BookData.v_pay + pay);
  }
};
useEffect(() => {
    if (custNumber === '') {
      navigate('/main_customer');
    }
  },);

  // Submit booking form

  return (
    <>
      <Navbar />
      <div className="booking-modal active-modal">
        <div className="booking-modal__content">
          <h2 className="book-title-1">Complete Reservation for {BookData.v_name}</h2>
          <img src={BookData.v_image} alt={BookData.v_name} className="booking-image" />
          <p className="booking-description">{BookData.v_desp}</p>
          <h3>Price: ₹{BookData.v_pay}</h3>
          <form onSubmit={handleBookSubmit} className="booking-form">
            {/* Driver required checkbox */}
            <center>
            <div className="flex">
              <div className="checkbox-group">
                <input
                  type="checkbox"
                  className="check-book"
                  id="driver-required"
                  checked={isDriverRequired}
                  onChange={handleCheckboxChange}
                />
                <label htmlFor="driver-required" className="text-lg">Driver Required</label>
              </div>
              <div className="checkbox-group">
                <input
                  type="checkbox"
                  className="check-book"
                  id="driver-not-required"
                  checked={!isDriverRequired}
                  onChange={handleCheckboxChange}
                />
                <label htmlFor="driver-not-required" className="text-lg">Driver Not Required</label>
              </div>
            </div>

            </center><br />

            {/* Form fields */}
            <div className="megh-1">
              <label>Booking Location</label>
              <input type="text" value={BookData.o_street} readOnly />
            </div>
            <div className="megh-1">
              <label>Contact Number</label>
              <input type="tel" value={custNumber} readOnly />
            </div>
            {isDriverRequired && (
              <div className="megh-1">
                <label>Driver Number</label>
                <input type="text" value={BookData.d_no} readOnly />
              </div>
            )}
            {isDriverRequired && (
              <div className="megh-1">
                <label>Driver Name</label>
                <input type="text" value={BookData.d_name} readOnly />
              </div>
            )}
            <div className="megh-1">
              <label>Vehicle RTO</label>
              <input type="text" value={BookData.v_rto} readOnly />
            </div>
            <div className="megh-1">
              <label>Vehicle Owner Number</label>
              <input type="text" value={BookData.o_no} readOnly />
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
              <select name="b_method" value={BookformData.b_method} onChange={handleBookChange} required>
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
              <input type="text" value={BookData.o_street} readOnly />
            </div>

            {/* Confirm Checkbox */}
            <center>
              <div className="flex items-center">
                <input type="checkbox" className="check-book-1" id="confirm-checkbox" checked={isConfirmed} onChange={handleCheckboxChange} />
                <label htmlFor="confirm-checkbox" className="text-lg">I Confirm</label>
                <input type="checkbox" className="check-book-1" id="not-confirm-checkbox" checked={!isConfirmed} onChange={handleCheckboxChange} />
                <label htmlFor="not-confirm-checkbox" className="text-lg">Not Confirm</label>
              </div>
            </center><br /><br></br>
            {isConfirmed&&(
              <center><h3>Total_amount : {totalPay}</h3></center>
            )

            }


            {/* Payment Buttons */}
            <div className="megh-pay">
              <button type="submit" className="submit-button">Pay Now</button>
              <button
                type="button"
                className="submit-button pay-later-button"
                onClick={handlePayLater}
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
