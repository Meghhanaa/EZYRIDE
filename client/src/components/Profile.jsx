import React from 'react';
import '../styles/ProfileStyles/Profile.css';
import Navbar from '../components/Navbar';

const customer = {
  c_image: 'https://www.goodfreephotos.com/albums/people/pretty-young-women-smiling.jpg',
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
     <Navbar/>
      <div className="profile-container">
          <img src={customer.c_image} alt={`${customer.c_name}'s profile`} className="profile-image" />
          <h1>{customer.c_name}</h1>
        <div className="profile-info">
          <form>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="contactNumber"><strong>Contact Number:</strong></label>
                <input type="text" id="contactNumber" name="contactNumber" defaultValue={customer.c_no} required readOnly />
              </div>
              <div className="form-group">
                <label htmlFor="licenseNumber"><strong>License Number:</strong></label>
                <input type="text" id="licenseNumber" name="licenseNumber" defaultValue={customer.c_lic_no} required readOnly/>
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="dob"><strong>Date of Birth:</strong></label>
                <input type="date" id="dob" name="dob" defaultValue={customer.c_DOB} required readOnly/>
              </div>
              <div className="form-group">
                <label htmlFor="aadhar"><strong>Aadhar:</strong></label>
                <input type="text" id="aadhar" name="aadhar" defaultValue={customer.c_aadhar} required readOnly/>
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="email"><strong>Email:</strong></label>
                <input type="email" id="email" name="email" defaultValue={customer.c_email} required readOnly/>
              </div>
              <div className="form-group">
                <label htmlFor="state"><strong>State:</strong></label>
                <input type="text" id="state" name="state" defaultValue={customer.c_state} required readOnly/>
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="city"><strong>City:</strong></label>
                <input type="text" id="city" name="city" defaultValue={customer.c_city} required readOnly/>
              </div>
              <div className="form-group">
                <label htmlFor="street"><strong>Street:</strong></label>
                <input type="text" id="street" name="street" defaultValue={customer.c_street} required readOnly/>
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="pin"><strong>PIN:</strong></label>
                <input type="text" id="pin" name="pin" defaultValue={customer.c_pin} required readOnly/>
              </div>
              <div className="form-group">
                <label htmlFor="gender"><strong>Gender:</strong></label>
                <input type="text" id="gender" name="gender" defaultValue={customer.c_gender} required readOnly />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="password"><strong>Password:</strong></label>
                <input type="text" id="password" name="password" defaultValue={customer.c_password} required />
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};


export default Profile;
