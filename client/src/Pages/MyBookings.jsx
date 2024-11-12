// src/Pages/MyBookings.js
import React, { useEffect, useState } from 'react';
import '../styles/MyBookingsStyles/MyBookings.css';
import { useViewContext } from '../Context_api/contextApi';

const MyBookings = () => {
  const [bookings, setBookings] = useState([]);
  const { vehicle,handleBookNowClick,handleMore,close } = useViewContext(); // Access context values

  useEffect(() => {
    const fetchBookings = async () => {
      // Example data, replace with API call to your backend
      const bookingsData = [
        { id: 1, model: 'Tesla Model S', b_pay:100,date: '2024-11-12', status: 'Paid' },
        { id: 2, model: 'Ford Mustang',b_pay:100, date: '2024-11-15', status: 'Not Paid' },
        { id: 3, model: 'BMW X5',b_pay:100, date: '2024-11-18', status: 'Not Paid' },
      ];
      setBookings(bookingsData);
    };

    fetchBookings();
  }, []);

  return (
    <>
    <h1 className='h1'>My Bookings</h1>
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
  {bookings.length > 0 ? (
    bookings.map((booking) => (
      <tr key={booking.id}>
        <td>{booking.id}</td>
        <td>{booking.model}</td>
        <td>{booking.date}</td>
        <td>{booking.b_pay}</td>
        <td style={{
          color: booking.status === "Paid" ? "green" : 
                 booking.status === "Not Paid" ? "red" : "black",
          fontWeight: "bold"
        }}>
          {booking.status}
        </td>
        <td><button className='button'>View More</button></td>
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
  </>
  );
};

export default MyBookings;
