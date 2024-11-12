// src/Pages/MyBookings.js
import React, { useEffect, useState } from 'react';
import '../styles/MyBookingsStyles/MyBookings.css';
import { useViewContext } from '../Context_api/contextApi';
import InfoModal from '../components/InfoModal';

const MyBookings = () => {
  const {custbookingdetail,close,handleMore} = useViewContext();

  return (
    <>
    {console.log(custbookingdetail)}
    <h1 className='megh-title'>My Bookings</h1>
    <div className="my-bookings">
      <table>
        <thead>
          <tr>
            <th>Booking ID</th>
            <th>Vehicle Model</th>
            <th>Booking Date</th>
            <th>Total Amount</th>
            <th>Payment Status</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
{custbookingdetail.length > 0 ? (
  custbookingdetail.map((booking) => (
    <tr key={booking.book_id}>
      <td>{booking.book_id}</td>
      <td>{booking.v_name}</td>
      <td>{booking.b_date}</td>
      <td>
        {booking.b_pay}
      </td>
      <td><button className='button' onClick={() => handleMore(booking.v_insurance)}>View More</button></td>
    </tr>
  ))
) : (
  <tr>
    <td colSpan="5">No bookings found</td>
  </tr>
)}

</tbody>
      </table>
    </div>
    {
      close&&(
        <InfoModal/>
      )
    }
  </>
  );
};

export default MyBookings;