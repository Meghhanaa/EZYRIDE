import React from 'react';
import '../styles/ProfileStyles/Profile.css';
import Navbar from '../components/Navbar';

const customer = {
  c_image: 'https://via.placeholder.com/150',
  c_no: '123456',
  c_name: 'John Doe',
  c_lic_no: 'DL123456789',
  c_DOB: '1990-01-01',
  c_aadhar: '1234-5678-9012',
  c_email: 'john.doe@example.com',
  c_state: 'Madhya Pradesh',
  c_city: 'Raun',
  c_street: '123 Main Street',
  c_pin: '123456',
  c_gender: 'Male',
  c_password: 'password123'
};

const Profile = () => {
  return (
    <>
    <Navbar></Navbar>
    <div className="profile-container">
      <img src={customer.c_image} alt={`${customer.c_name}'s profile`} className="profile-image" />
      <h1>{customer.c_name}</h1>
      <div className="profile-info">
        <p><strong>Customer No:</strong> {customer.c_no}</p>
        <p><strong>License No:</strong> {customer.c_lic_no}</p>
        <p><strong>Date of Birth:</strong> {customer.c_DOB}</p>
        <p><strong>Aadhar:</strong> {customer.c_aadhar}</p>
        <p><strong>Email:</strong> {customer.c_email}</p>
        <p><strong>State:</strong> {customer.c_state}</p>
        <p><strong>City:</strong> {customer.c_city}</p>
        <p><strong>Street:</strong> {customer.c_street}</p>
        <p><strong>PIN:</strong> {customer.c_pin}</p>
        <p><strong>Gender:</strong> {customer.c_gender}</p>
        <p><strong>Password:</strong> {customer.c_password}</p>
      </div>
    </div>
    </>
  );
};

export default Profile;
