import React, { useState } from 'react';
import "../styles/AdminCust/AdminCustInfo.css";

// Sample customer data
const customerData = [
  {
    c_image: 'https://via.placeholder.com/150',
    c_no: '9876543210',
    c_name: 'Jane Smith',
    c_lic_no: 'DL123456789',
    c_DOB: '1992-05-22',
    c_aadhar: '2345-6789-1234',
    c_email: 'janesmith@example.com',
    c_state: 'Texas',
    c_city: 'Houston',
    c_street: '456 Elm St',
    c_pin: '77001',
    c_gender: 'Female',
    c_password: '1234', // Hide the password for security
    c_role: 'Customer'
  }
];

const AdminCustInfo = () => {
  const [customers, setCustomers] = useState(customerData);

  return (
    <>
      <h1 className="h2">Customer Information</h1>
      <div className="admin-customer-container">
        {customers.length > 0 ? (
          customers.map((customer) => (
            <div className="customer-profile" key={customer.c_no}>
              <div className="image">
                <img src={customer.c_image} alt="Customer" />
              </div>
              <div className="customer-details">
                <ul>
                  <li><strong>Name:</strong> {customer.c_name}</li>
                  <li><strong>Phone Number:</strong> {customer.c_no}</li>
                  <li><strong>License Number:</strong> {customer.c_lic_no}</li>
                  <li><strong>Date of Birth:</strong> {customer.c_DOB}</li>
                  <li><strong>Aadhar Number:</strong> {customer.c_aadhar}</li>
                  <li><strong>Email:</strong> {customer.c_email}</li>
                  <li><strong>State:</strong> {customer.c_state}</li>
                  <li><strong>City:</strong> {customer.c_city}</li>
                  <li><strong>Street Address:</strong> {customer.c_street}</li>
                  <li><strong>PIN Code:</strong> {customer.c_pin}</li>
                  <li><strong>Gender:</strong> {customer.c_gender}</li>
                  <li><strong>Password:</strong> {customer.c_password}</li>
                  <li><strong>Role:</strong> {customer.c_role}</li>
                </ul>
              </div>
            </div>
          ))
        ) : (
          <div>No customers found</div>
        )}
      </div>
    </>
  );
};

export default AdminCustInfo;
