// src/Pages/MyBookings.js
import React, { useEffect, useState } from 'react';
import '../styles/MyBookingsStyles/MyBookings.css';

const MyBookings = () => {
  const [bookings, setBookings] = useState([]);
  const { vehicle,handleBookNowClick,handleMore,close } = useViewContext(); // Access context values

  useEffect(() => {
    const fetchBookings = async () => {
      // Example data, replace with API call to your backend
      const bookingsData = [
        { id: 1, model: 'Tesla Model S', date: '2024-11-12', status: 'Confirmed' },
        { id: 2, model: 'Ford Mustang', date: '2024-11-15', status: 'Pending' },
        { id: 3, model: 'BMW X5', date: '2024-11-18', status: 'Cancelled' },
      ];
      setBookings(bookingsData);
    };

    fetchBookings();
  }, []);

  return (
    <>
    <h1 className='megh-title'>My Bookings</h1>
    <div className="my-bookings">
      <table>
        <thead>
          <tr>
            <th>Booking ID</th>
            <th>Vehicle Model</th>
            <th>Booking Date</th>
            <th>Status</th>
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
        <td style={{
          color: booking.status === "Confirmed" ? "green" : 
                 booking.status === "Pending" ? "orange" : 
                 booking.status === "Cancelled" ? "red" : "black",
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
