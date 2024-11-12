import React, { useState } from 'react';
import '../styles/DriverAddStyles/Driver.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useViewContext } from '../Context_api/contextApi';

const AddDriver = () => {
  const [driver, setDriver] = useState({
    d_image: '',
    d_no: '',
    d_name: '',
    d_lic_no: '',
    d_DOB: '',
    d_aadhar: '',
    d_email: '',
    d_state: '',
    d_city: '',
    d_street: '',
    d_pin: '',
    d_gender: '',
  });
  const {formownerData,handleAllOwnerdriver}=useViewContext();
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value,} = e.target;
    setDriver({ ...driver, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formDataToSend = new FormData();
    formDataToSend.append('d_image', driver.d_image); // Corrected
    formDataToSend.append('d_no', driver.d_no);
    formDataToSend.append('d_name', driver.d_name);
    formDataToSend.append('d_aadhar', driver.d_aadhar);
    formDataToSend.append('d_lic_no', driver.d_lic_no);
    formDataToSend.append('d_DOB', driver.d_DOB);
    formDataToSend.append('d_state', driver.d_state);
    formDataToSend.append('d_city', driver.d_city);
    formDataToSend.append('d_street', driver.d_street);
    formDataToSend.append('d_pin', driver.d_pin);
    formDataToSend.append('d_email', driver.d_email);
    formDataToSend.append('d_gender', driver.d_gender);
    formDataToSend.append('o_no',formownerData.o_no);
    for (const [key, value] of formDataToSend.entries()) { console.log(`${key}: ${value}`); }
    // console.log(AddDriver);
    try {
      const response = await axios.post('http://localhost:3001/adddriverowner', formDataToSend);
      console.log(response.data);
      handleAllOwnerdriver();
      navigate('/MyDrivers');
    } catch (error) {
      if (error.response) {
        console.log(error.response.data.message || 'An error occurred. Please try again.');
      } else {
        console.log('An error occurred. Please try again.');
      }
    }
  };

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file && file.size > 2000000) { // Example: Limit file size to 2MB
      setErrors((prevErrors) => ({
        ...prevErrors,
        d_image: 'File size should be less than 2MB.',
      }));
    } else {
      setDriver((prevData) => ({
        ...prevData,
        d_image: file,
      }));
      setErrors((prevErrors) => ({
        ...prevErrors,
        d_image: null, // Clear error if file is valid
      }));
    }
  };

  return (
    <>
      <h1 className='h1'>Add Driver</h1>
      <div className="add-driver-container">
        <form onSubmit={handleSubmit} encType="multipart/form-data">
          <label>
            Image URL:
            <input
              type="file"
              name="d_image"
              accept="image/*"
              onChange={handleImageUpload}
            />
          </label>
          {errors.d_image && <span className="error">{errors.d_image}</span>}
          <label>
            Driver No:
            <input type="text" name="d_no" value={driver.d_no} onChange={handleChange} />
          </label>
          <label>
            Name:
            <input type="text" name="d_name" value={driver.d_name} onChange={handleChange} />
          </label>
          <label>
            License No:
            <input type="text" name="d_lic_no" value={driver.d_lic_no} onChange={handleChange} />
          </label>
          <label>
            Date of Birth:
            <input type="date" name="d_DOB" value={driver.d_DOB} onChange={handleChange} />
          </label>
          <label>
            Aadhar:
            <input type="text" name="d_aadhar" value={driver.d_aadhar} onChange={handleChange} />
          </label>
          <label>
            Email:
            <input type="email" name="d_email" value={driver.d_email} onChange={handleChange} />
          </label>
          <label>
            State:
            <input type="text" name="d_state" value={driver.d_state} onChange={handleChange} />
          </label>
          <label>
            City:
            <input type="text" name="d_city" value={driver.d_city} onChange={handleChange} />
          </label>
          <label>
            Street:
            <input type="text" name="d_street" value={driver.d_street} onChange={handleChange} />
          </label>
          <label>
            PIN:
            <input type="text" name="d_pin" value={driver.d_pin} onChange={handleChange} />
          </label>
          <label>
            Gender:
            <select name="d_gender" value={driver.d_gender} onChange={handleChange}>
              <option value="">Select</option>
              <option value="M">Male</option>
              <option value="F">Female</option>
              <option value="O">Other</option>
            </select>
          </label>
          <button type="submit">Add Driver</button>
        </form>
      </div>
    </>
  );
};

export default AddDriver;
