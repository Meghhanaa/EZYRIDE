import React from 'react';
import '../styles/ProfileStyles/Profile.css';
import Navbar from '../components/Navbar';
import { useViewContext } from '../Context_api/contextApi';
const Profile = () => {
  const{profileData,role}=useViewContext();
  return (
    <>
     {/* <Navbar/> */}
     {role==='customer'&&(
        <div className="profile-container">
          <img src={profileData.c_image} alt={`${profileData.c_name}'s profile`} className="profile-image" />
          <h1 className='megh-pro'>{profileData.c_name}</h1>
        <div className="profile-info">
          <form>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="contactNumber"><strong>Contact Number:</strong></label>
                <input type="text" id="contactNumber" name="contactNumber" defaultValue={profileData.c_no} required readOnly />
              </div>
              <div className="form-group">
                <label htmlFor="licenseNumber"><strong>License Number:</strong></label>
                <input type="text" id="licenseNumber" name="licenseNumber" defaultValue={profileData.c_lic_no} required readOnly/>
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="dob"><strong>Date of Birth:</strong></label>
                <input type="text" id="dob" name="dob" defaultValue={profileData.c_DOB} required readOnly/>
              </div>
              <div className="form-group">
                <label htmlFor="aadhar"><strong>Aadhar:</strong></label>
                <input type="text" id="aadhar" name="aadhar" defaultValue={profileData.c_aadhar} required readOnly/>
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="email"><strong>Email:</strong></label>
                <input type="email" id="email" name="email" defaultValue={profileData.c_email} required readOnly/>
              </div>
              <div className="form-group">
                <label htmlFor="state"><strong>State:</strong></label>
                <input type="text" id="state" name="state" defaultValue={profileData.c_state} required readOnly/>
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="city"><strong>City:</strong></label>
                <input type="text" id="city" name="city" defaultValue={profileData.c_city} required readOnly/>
              </div>
              <div className="form-group">
                <label htmlFor="street"><strong>Street:</strong></label>
                <input type="text" id="street" name="street" defaultValue={profileData.c_street} required readOnly/>
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="pin"><strong>PIN:</strong></label>
                <input type="text" id="pin" name="pin" defaultValue={profileData.c_pin} required readOnly/>
              </div>
              <div className="form-group">
                <label htmlFor="gender"><strong>Gender:</strong></label>
                <input type="text" id="gender" name="gender" defaultValue={profileData.c_gender} required readOnly />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="password"><strong>Password:</strong></label>
                <input type="text" id="password" name="password" defaultValue={profileData.c_password} required />
              </div>
            </div>
          </form>
        </div>
      </div>
     )}
     {role==='owner'&&(
      <div className="profile-container">
          <img src={profileData.o_image} alt={`${profileData.o_name}'s profile`} className="profile-image" />
          <h1>{profileData.o_name}</h1>
        <div className="profile-info">
          <form>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="contactNumber"><strong>Contact Number:</strong></label>
                <input type="text" id="contactNumber" name="contactNumber" defaultValue={profileData.o_no} required readOnly />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="dob"><strong>Date of Birth:</strong></label>
                <input type="text" id="dob" name="dob" defaultValue={profileData.o_DOB} required readOnly/>
              </div>
              <div className="form-group">
                <label htmlFor="aadhar"><strong>Aadhar:</strong></label>
                <input type="text" id="aadhar" name="aadhar" defaultValue={profileData.o_aadhar} required readOnly/>
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="email"><strong>Email:</strong></label>
                <input type="email" id="email" name="email" defaultValue={profileData.o_email} required readOnly/>
              </div>
              <div className="form-group">
                <label htmlFor="state"><strong>State:</strong></label>
                <input type="text" id="state" name="state" defaultValue={profileData.o_state} required readOnly/>
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="city"><strong>City:</strong></label>
                <input type="text" id="city" name="city" defaultValue={profileData.o_city} required readOnly/>
              </div>
              <div className="form-group">
                <label htmlFor="street"><strong>Street:</strong></label>
                <input type="text" id="street" name="street" defaultValue={profileData.o_street} required readOnly/>
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="pin"><strong>PIN:</strong></label>
                <input type="text" id="pin" name="pin" defaultValue={profileData.o_pin} required readOnly/>
              </div>
              <div className="form-group">
                <label htmlFor="gender"><strong>Gender:</strong></label>
                <input type="text" id="gender" name="gender" defaultValue={profileData.o_gender} required readOnly />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="password"><strong>Password:</strong></label>
                <input type="text" id="password" name="password" defaultValue={profileData.o_password} required />
              </div>
            </div>

            {/* <button type="submit" className='button'>Update Profile</button> */}
          </form>
        </div>
      </div>
     )}
      
    </>
  );
};


export default Profile;
