import React from 'react';

// Sample customer data
const customerData = {
  c_image: "https://via.placeholder.com/150", // Placeholder image URL
  c_no: "9876543210",
  c_name: "Jane Smith",
  c_lic_no: "DL123456789",
  c_DOB: "1992-05-22", 
  c_aadhar: "2345-6789-1234", 
  c_email: "janesmith@example.com",
  c_state: "Texas",
  c_city: "Houston",
  c_street: "456 Elm St",
  c_pin: "77001",
  c_gender: "Female",
  c_password: "******", // Hide the password for security
  c_role: "Customer"
};

const AdminCust = () => {
  return (
    <div className="admin-customer-container">
      <h1>Customer Information</h1>
      
      <div className="customer-profile">
        {/* Customer Image */}
        <div className="customer-image">
          <img src={customerData.c_image} alt="Customer" />
        </div>

        {/* Customer Details */}
        <div className="customer-details">
          <ul>
            <li><strong>Name:</strong> {customerData.c_name}</li>
            <li><strong>Phone Number:</strong> {customerData.c_no}</li>
            <li><strong>License Number:</strong> {customerData.c_lic_no}</li>
            <li><strong>Date of Birth:</strong> {customerData.c_DOB}</li>
            <li><strong>Aadhar Number:</strong> {customerData.c_aadhar}</li>
            <li><strong>Email:</strong> {customerData.c_email}</li>
            <li><strong>State:</strong> {customerData.c_state}</li>
            <li><strong>City:</strong> {customerData.c_city}</li>
            <li><strong>Street Address:</strong> {customerData.c_street}</li>
            <li><strong>Pin Code:</strong> {customerData.c_pin}</li>
            <li><strong>Gender:</strong> {customerData.c_gender}</li>
            <li><strong>Password:</strong> {customerData.c_password}</li> {/* Hide password in real use */}
            <li><strong>Role:</strong> {customerData.c_role}</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AdminCust;
