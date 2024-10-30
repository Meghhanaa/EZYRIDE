import axios from 'axios';
import bigInt from 'big-integer';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Import Link from react-router-dom

const RegCustomer = () => {
  const [formData, setFormData] = useState({
  c_no: '',   // Rename this to match the backend column
  c_name: '',
  c_aadhar: '',
  c_lic_no: '',
  c_DOB: '',
  c_state: '',
  c_city: '',
  c_street: '',
  c_pin: '',
  c_email: '',
  c_gender: '',
  c_password: '',
});


  const [passwordVisible, setPasswordVisible] = useState(false);
  // const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);
  // const [alreadyCustomer, setAlreadyCustomer] = useState(false);
  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
  const { name, value } = e.target;

  if (name === 'c_no') {
    // Convert contactNo to BigInt
    setFormData({ ...formData, [name]: bigInt(value) });
  } else {
    setFormData({ ...formData, [name]: value });
  }
};


  const validateForm = () => {
    let tempErrors = {};
  if (!formData.c_no || isNaN(formData.c_no)) tempErrors.c_no = 'Contact No. is required and should be a valid number';
    if (!formData.c_name) tempErrors.c_name = 'Name is required';
    if (!formData.c_aadhar) tempErrors.c_aadhar = 'Adhar No. is required';
    if (!formData.c_lic_no) tempErrors.c_lic_no = 'License No. is required';
    if (!formData.c_DOB) tempErrors.c_DOB= 'Date of Birth is required';
    if (!formData.c_state) tempErrors.c_state = 'State is required';
    if (!formData.c_city) tempErrors.c_city = 'City is required';
    if (!formData.c_street) tempErrors.c_street = 'Street is required';
    if (!formData.c_pin) tempErrors.c_pin = 'Pin is required';
    if (!formData.c_email) tempErrors.c_email = 'Email is required';
    if (!formData.c_gender) tempErrors.c_gender = 'Gender is required';
    if (!formData.c_password) tempErrors.c_password = 'Password is required';
    // if (formData.password !== formData.confirmPassword)
    //   tempErrors.confirmPassword = 'Passwords do not match';
    // setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (validateForm()) {
      try {
        console.log('Form Data:', formData);
        const response = await axios.post('http://localhost:3000/customer_register', formData, {
        headers: { 'Content-Type': 'application/json' }
      });
        // setMessage(response.data.message);
        console.log(response.data.message);
        navigate('/main_customer');
        console.log(response.data.message) // You might want to save this token in localStorage or context
        // localStorage.setItem('token', response.data.token);
      } catch (error) {
        if (error.response) {
          console.log(error.response.data.message || 'An error occurred. Please try again.');
        } else {
          console.log('An error occurred. Please try again.');
        }
      }
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <div
      style={{
        // marginTop: '120px',
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f3f3f3',
        fontFamily: 'Arial, sans-serif',
      }}
    >
      <div
        style={{
          marginTop: '120px',
          width: '100%',
          maxWidth: '1100px',
          display: 'flex',
          backgroundColor: '#fff',
          boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)',
          borderRadius: '10px',
          overflow: 'hidden',
        }}
      >
        {/* Registration Form */}
        <div
          style={{
            width: '100%',
            padding: '40px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
          }}
        >
          <h2
            style={{
              fontSize: '2rem',
              fontWeight: 'bold',
              marginBottom: '20px',
              color: '#750E21',
            }}
          >
            Register as Customer
          </h2>
          <form onSubmit={handleSubmit}>
            {/* Form Fields */}
            <div style={{ marginBottom: '16px' }}>
              <input
                type="text"
                name="c_no"
                placeholder="Contact No."
                value={formData.c_no}
                onChange={handleInputChange}
                style={{
                  width: '100%',
                  padding: '12px',
                  border: '1px solid #ccc',
                  borderRadius: '5px',
                  outline: 'none',
                  marginBottom: '10px',
                }}
              />
              {errors.contactNo && <p style={{ color: 'red' }}>{errors.contactNo}</p>}
            </div>

            <div style={{ marginBottom: '16px' }}>
              <input
                type="text"
                name="c_name"
                placeholder="Name"
                value={formData.c_name}
                onChange={handleInputChange}
                style={{
                  width: '100%',
                  padding: '12px',
                  border: '1px solid #ccc',
                  borderRadius: '5px',
                  outline: 'none',
                  marginBottom: '10px',
                }}
              />
              {errors.name && <p style={{ color: 'red' }}>{errors.name}</p>}
            </div>

            {/* Adhar No. */}
            <div style={{ marginBottom: '16px' }}>
              <input
                type="text"
                name="c_aadhar"
                placeholder="Adhar No."
                value={formData.c_aadhar}
                onChange={handleInputChange}
                style={{
                  width: '100%',
                  padding: '12px',
                  border: '1px solid #ccc',
                  borderRadius: '5px',
                  outline: 'none',
                  marginBottom: '10px',
                }}
              />
              {errors.adharNo && <p style={{ color: 'red' }}>{errors.adharNo}</p>}
            </div>

            {/* License No. */}
            <div style={{ marginBottom: '16px' }}>
              <input
                type="text"
                name="c_lic_no"
                placeholder="License No."
                value={formData.c_lic_no}
                onChange={handleInputChange}
                style={{
                  width: '100%',
                  padding: '12px',
                  border: '1px solid #ccc',
                  borderRadius: '5px',
                  outline: 'none',
                  marginBottom: '10px',
                }}
              />
              {errors.licenseNo && <p style={{ color: 'red' }}>{errors.licenseNo}</p>}
            </div>

            {/* Date of Birth */}
            <div style={{ marginBottom: '16px' }}>
              <input
                type="date"
                name="c_DOB"
                value={formData.c_DOB}
                onChange={handleInputChange}
                style={{
                  width: '100%',
                  padding: '12px',
                  border: '1px solid #ccc',
                  borderRadius: '5px',
                  outline: 'none',
                  marginBottom: '10px',
                }}
              />
              {errors.dob && <p style={{ color: 'red' }}>{errors.dob}</p>}
            </div>

            {/* Gender */}
            <div style={{ marginBottom: '16px' }}>
              <select
                type='text'
                name="c_gender"
                value={formData.c_gender}
                onChange={handleInputChange}
                style={{
                  width: '100%',
                  padding: '12px',
                  border: '1px solid #ccc',
                  borderRadius: '5px',
                  outline: 'none',
                  marginBottom: '10px',
                }}
              >
                <option value="">Select Gender</option>
                <option value="M">Male</option>
                <option value="F">Female</option>
                <option value="O">Other</option>
              </select>
              {errors.gender && <p style={{ color: 'red' }}>{errors.gender}</p>}
            </div>

            {/* Address Fields */}
            <div style={{ marginBottom: '16px' }}>
              <input
                type="text"
                name="c_state"
                placeholder="State"
                value={formData.c_state}
                onChange={handleInputChange}
                style={{
                  width: '100%',
                  padding: '12px',
                  border: '1px solid #ccc',
                  borderRadius: '5px',
                  outline: 'none',
                  marginBottom: '10px',
                }}
              />
              {errors.state && <p style={{ color: 'red' }}>{errors.state}</p>}
            </div>

            <div style={{ marginBottom: '16px' }}>
              <input
                type="text"
                name="c_city"
                placeholder="City"
                value={formData.c_city}
                onChange={handleInputChange}
                style={{
                  width: '100%',
                  padding: '12px',
                  border: '1px solid #ccc',
                  borderRadius: '5px',
                  outline: 'none',
                  marginBottom: '10px',
                }}
              />
              {errors.city && <p style={{ color: 'red' }}>{errors.city}</p>}
            </div>

            <div style={{ marginBottom: '16px' }}>
              <input
                type="text"
                name="c_street"
                placeholder="Street"
                value={formData.c_street}
                onChange={handleInputChange}
                style={{
                  width: '100%',
                  padding: '12px',
                  border: '1px solid #ccc',
                  borderRadius: '5px',
                  outline: 'none',
                  marginBottom: '10px',
                }}
              />
              {errors.street && <p style={{ color: 'red' }}>{errors.street}</p>}
            </div>

            <div style={{ marginBottom: '16px' }}>
              <input
                type="text"
                name="c_pin"
                placeholder="Pin"
                value={formData.c_pin}
                onChange={handleInputChange}
                style={{
                  width: '100%',
                  padding: '12px',
                  border: '1px solid #ccc',
                  borderRadius: '5px',
                  outline: 'none',
                  marginBottom: '10px',
                }}
              />
              {errors.pin && <p style={{ color: 'red' }}>{errors.pin}</p>}
            </div>

            {/* Email */}
            <div style={{ marginBottom: '16px' }}>
              <input
                type="text"
                name="c_email"
                placeholder="Email"
                value={formData.c_email}
                onChange={handleInputChange}
                style={{
                  width: '100%',
                  padding: '12px',
                  border: '1px solid #ccc',
                  borderRadius: '5px',
                  outline: 'none',
                  marginBottom: '10px',
                }}
              />
              {errors.email && <p style={{ color: 'red' }}>{errors.email}</p>}
            </div>

            {/* Password */}
  
            <div style={{ marginBottom: '16px', position: 'relative' }}>
              <input
                type={passwordVisible ? 'text' : 'password'}
                name="c_password"
                placeholder="Password"
                value={formData.c_password}
                onChange={handleInputChange}
                style={{
                  width: '100%',
                  padding: '12px',
                  border: '1px solid #ccc',
                  borderRadius: '5px',
                  outline: 'none',
                  marginBottom: '10px',
                }}
              />
              <span
                onClick={() => setPasswordVisible(!passwordVisible)}
                style={{
                  position: 'absolute',
                  right: '10px',
                  top: '15px',
                  cursor: 'pointer',
                }}
              >
                {passwordVisible ? '🙈' : '👁'}
              </span>
              {errors.password && <p style={{ color: 'red' }}>{errors.password}</p>}
            </div>

             {/* Confirm Password
            <div style={{ marginBottom: '16px', position: 'relative' }}>
              <input
                type={confirmPasswordVisible ? 'text' : 'password'}
                name="confirmPassword"
                placeholder="Confirm Password"
                value={formData.confirmPassword}
                onChange={handleInputChange}
                style={{
                  width: '100%',
                  padding: '12px',
                  border: '1px solid #ccc',
                  borderRadius: '5px',
                  outline: 'none',
                  marginBottom: '10px',
                }} 
              />
              <span
                onClick={() => setConfirmPasswordVisible(!confirmPasswordVisible)}
                style={{
                  position: 'absolute',
                  right: '10px',
                  top: '15px',
                  cursor: 'pointer',
                }}
              >
                {confirmPasswordVisible ? '🙈' : '👁'}
              </span>
              {errors.confirmPassword && (
                <p style={{ color: 'red' }}>{errors.confirmPassword}</p>
              )}
            </div> */}

            <button
              type="submit"
              style={{
                padding: '12px 20px',
                backgroundColor: '#750E21',
                color: '#fff',
                border: 'none',
                borderRadius: '5px',
                cursor: 'pointer',
                fontSize: '16px',
                fontWeight: 'bold',
              }}
            >
              Register
            </button>

            <div style={{ marginTop: '20px'}}>
              <p>Already a customer?</p>
              <Link to="/main_customer" style={{ color: '#750E21' }}>
                Login here
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegCustomer;