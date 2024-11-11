import React, { useEffect, useState } from 'react';
import "../styles/AdminOwner/AdminOwnerInfo.css";

// Sample owner data
const ownerData = [
  { 
    o_image: 'https://via.placeholder.com/150',
    o_no: '001',
    o_name: 'John Doe',
    o_DOB: '1980-01-01',
    o_aadhar: '1234-5678-9101',
    o_email: 'john.doe@example.com',
    o_state: 'State1',
    o_city: 'City1',
    o_street: '123 Main St',
    o_pin: '123456',
    o_gender: 'Male',
    o_password: 'password123',
    o_role: 'Owner',
    o_driver_count: 5
  },
];

const AdminOwnerInfo = () => {
  const [owners, setOwners] = useState(ownerData);

  return (
    <>
      <h1 className="h2">Owner Information</h1>
      <div className="admin-owner-container">
        {owners.length > 0 ? (
          owners.map((owner) => (
            <div className="owner-profile" key={owner.o_no}>
              <div className="image">
                <img src={owner.o_image} alt="Owner" />
              </div>
              <div className="owner-details">
                <ul>
                  <li><strong>Name:</strong> {owner.o_name}</li>
                  <li><strong>Owner Number:</strong> {owner.o_no}</li>
                  <li><strong>Date of Birth:</strong> {owner.o_DOB}</li>
                  <li><strong>Aadhar Number:</strong> {owner.o_aadhar}</li>
                  <li><strong>Email:</strong> {owner.o_email}</li>
                  <li><strong>State:</strong> {owner.o_state}</li>
                  <li><strong>City:</strong> {owner.o_city}</li>
                  <li><strong>Street Address:</strong> {owner.o_street}</li>
                  <li><strong>PIN Code:</strong> {owner.o_pin}</li>
                  <li><strong>Gender:</strong> {owner.o_gender}</li>
                  <li><strong>Password:</strong> {owner.o_password}</li>
                  <li><strong>Role:</strong> {owner.o_role}</li>
                  <li><strong>Driver Count:</strong> {owner.o_driver_count}</li>
                </ul>
              </div>
            </div>
          ))
        ) : (
          <div>No owners found</div>
        )}
      </div>
    </>
  );
};

export default AdminOwnerInfo;

