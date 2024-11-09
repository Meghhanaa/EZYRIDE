import React, { useState } from 'react';

const AdminLogin = () => {
  const [formData, setFormData] = useState({
    contact: '',
    password: '',
  });
  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.contact) {
      newErrors.contact = 'Contact number is required';
    } else if (!/^\d{10}$/.test(formData.contact)) {
      newErrors.contact = 'Contact number must be 10 digits';
    }

    if (!formData.password) {
      newErrors.password = 'Password is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log('Admin Data:', formData);
      // Perform login API call here
      setFormData({ contact: '', password: '' });
      setErrors({});
    }
  };

  return (
    <div
      style={{
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
          width: '100%',
          maxWidth: '500px',
          padding: '40px',
          backgroundColor: '#fff',
          boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)',
          borderRadius: '10px',
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
          Admin Login
        </h2>
        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: '16px' }}>
            <input
              type="text"
              name="contact"
              placeholder="Admin Contact Number"
              value={formData.contact}
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
            {errors.contact && <p style={{ color: 'red' }}>{errors.contact}</p>}
          </div>
          <div style={{ marginBottom: '16px' }}>
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
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
            {errors.password && <p style={{ color: 'red' }}>{errors.password}</p>}
          </div>
          <div
            style={{
              textAlign: 'right',
              marginBottom: '16px',
            }}
          >
            <a
              href="#"
              style={{
                fontSize: '0.875rem',
                color: '#888',
                textDecoration: 'none',
              }}
            >
              Forgot your password?
            </a>
          </div>
          <button
            type="submit"
            style={{
              width: '100%',
              backgroundColor: '#750E21',
              color: '#fff',
              padding: '12px',
              borderRadius: '5px',
              border: 'none',
              cursor: 'pointer',
              fontSize: '1rem',
              transition: 'background-color 0.3s ease',
            }}
          >
            SIGN IN
          </button>
        </form>
      </div>
    </div>
  );
};

export default AdminLogin;
