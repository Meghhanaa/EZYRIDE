// src/Pages/MyBookings.js
import React, { useEffect, useState } from 'react';
import '../styles/MyBookingsStyles/MyBookings.css';

const MyBookings = () => {
  const [bookings, setBookings] = useState([]);
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
    <div className="my-bookings">
      <h2>My Bookings</h2>
      <table>
        <thead>
          <tr>
            <th>Booking ID</th>
            <th>Vehicle Model</th>
            <th>Booking Date</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {bookings.length > 0 ? (
            bookings.map((booking) => (
              <tr key={booking.id}>
                <td>{booking.id}</td>
                <td>{booking.model}</td>
                <td>{booking.date}</td>
                <td>{booking.status}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4">No bookings found</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default MyBookings;
