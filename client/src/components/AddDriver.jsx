import React, { useState } from 'react';
import '../styles/DriverAddStyles/Driver.css'; // Create and import the CSS for styling the form

const AddDriver = () => {
  const [driver, setDriver] = useState({
    d_image: '',
    d_no: '',
    o_no: '',
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
    d_password: '',
    d_booked: false,
    d_role: '',
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setDriver({
      ...driver,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Driver Data:', driver);
    // Add logic to submit the form data to your backend or API here
  };

  return (
    <div className="add-driver-container">
      <h1>Add Driver</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Image URL:
          <input type="text" name="d_image" value={driver.d_image} onChange={handleChange} />
        </label>
        <label>
          Driver No:
          <input type="text" name="d_no" value={driver.d_no} onChange={handleChange} />
        </label>
        <label>
          Owner No:
          <input type="text" name="o_no" value={driver.o_no} onChange={handleChange} />
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
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
        </label>
        <label>
          Password:
          <input type="password" name="d_password" value={driver.d_password} onChange={handleChange} />
        </label>
        <label>
          Booked:
          <input type="checkbox" name="d_booked" checked={driver.d_booked} onChange={handleChange} />
        </label>
        <label>
          Role:
          <select name="d_role" value={driver.d_role} onChange={handleChange}>
            <option value="">Select</option>
            <option value="Driver">Driver</option>
            <option value="Admin">Admin</option>
          </select>
        </label>
        <button type="submit">Add Driver</button>
      </form>
    </div>
  );
};

export default AddDriver;
