import React, { useEffect, useState } from 'react';

const AdminBookings = () => {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    const fetchBookings = async () => {
      // Example data, replace with API call to your backend
      const bookingsData = [
        { 
          id: 1, 
          model: 'Tesla Model S', 
          date: '2024-11-12', 
          status: 'Confirmed', 
          customerName: 'John Doe', 
          contact: '1234567890' 
        },
        { 
          id: 2, 
          model: 'Ford Mustang', 
          date: '2024-11-15', 
          status: 'Pending', 
          customerName: 'Jane Smith', 
          contact: '0987654321' 
        },
        { 
          id: 3, 
          model: 'BMW X5', 
          date: '2024-11-18', 
          status: 'Cancelled', 
          customerName: 'Mike Johnson', 
          contact: '1122334455' 
        },
      ];
      setBookings(bookingsData);
    };

    fetchBookings();
  }, []);

  return (
    <div className="admin-bookings">
      <h2>All Bookings</h2>
      <table>
        <thead>
          <tr>
            <th>Booking ID</th>
            <th>Vehicle Model</th>
            <th>Booking Date</th>
            <th>Status</th>
            <th>Customer Name</th>
            <th>Contact</th>
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
                <td>{booking.customerName}</td>
                <td>{booking.contact}</td>
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
  );
};

export default AdminBookings;
