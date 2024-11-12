import React, { useEffect, useState } from 'react';
import "../styles/AdminBooking/AdminBooking.css";
import { useViewContext } from '../Context_api/contextApi';

const AdminBookings = () => {
  const { AdminBooking } = useViewContext(); // Access context values

  return (
    <>
    <h2 className='h2'>All Bookings</h2>
    <div className="admin-bookings">
      <table>
        <thead>
          <tr>
            <th>Booking ID</th>
            <th>Vehicle Model</th>
            <th>Booking Date</th>
            <th>Status</th>
            <th>Customer number</th>
            <th>driver number</th>
          </tr>
        </thead>
        <tbody>
          {AdminBooking.length > 0 ? (
            AdminBooking.map((booking) => (
              <tr key={booking.book_id}>
                <td>{booking.book_id}</td>
                <td>{booking.v_insurance}</td>
                <td>{booking.b_date}</td>
                <td style={{
                  color: booking.status === "Paid" ? "green" : 
                        booking.status === "Not Paid" ? "red" : "black",
                  fontWeight: "bold"
                }}>
                 {booking.b_payment_status}
                </td>
                <td>{booking.c_no}</td>
                <td>{booking.d_no}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="6">No bookings found</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
    </>
  );
};

export default AdminBookings;
