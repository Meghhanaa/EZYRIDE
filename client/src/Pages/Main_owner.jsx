import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { useViewContext } from '../Context_api/contextApi';

const MainOwner = () => {
const {handleownerInputChange,handleownerSubmit,formownerData,errors,mess}=useViewContext();
  return (
    <>
    {/* <Navbar></Navbar> */}
    <div style={{ minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: '#f3f3f3', fontFamily: 'Arial, sans-serif' }}>
      <div style={{ width: '100%', maxWidth: '1100px', display: 'flex', backgroundColor: '#fff', boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)', borderRadius: '10px', overflow: 'hidden' }}>
        {/* Left Side - Sign In */}
        <div style={{ width: '50%', padding: '40px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <h2 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '20px', color: '#750E21' }}>Sign In As Owner</h2>
          <form onSubmit={handleownerSubmit}>
            <div style={{ marginBottom: '16px' }}>
              <input
                type="text"
                name="o_no"
                placeholder="Contact"
                value={formownerData.o_no}
                onChange={handleownerInputChange}
                style={{ width: '100%', padding: '12px', border: '1px solid #ccc', borderRadius: '5px', outline: 'none', marginBottom: '10px' }}
              />
              {errors.o_no && <p style={{ color: 'red' }}>{errors.o_no}</p>}
            </div>
            <div style={{ marginBottom: '16px' }}>
              <input
                type="password"
                name="o_password"
                placeholder="Password"
                value={formownerData.o_password}
                onChange={handleownerInputChange}
                style={{ width: '100%', padding: '12px', border: '1px solid #ccc', borderRadius: '5px', outline: 'none', marginBottom: '10px' }}
              />
              {errors.o_password && <p style={{ color: 'red' }}>{errors.o_password}</p>}
            </div>
            <div style={{ textAlign: 'right', marginBottom: '16px' }}>
              <a href="#" style={{ fontSize: '0.875rem', color: '#888', textDecoration: 'none' }}>Forgot your password?</a>
            </div>
            <button type="submit" style={{ width: '100%', backgroundColor: '#750E21', color: '#fff', padding: '12px', borderRadius: '5px', border: 'none', cursor: 'pointer', fontSize: '1rem', transition: 'background-color 0.3s ease' }}>
              SIGN IN
            </button>

            {mess && (
  <p
    style={{
      color: mess.includes('successful') ? 'green' : 'red', // Green for success, red for error
      padding: '10px',
      marginTop: '10px',
    }}
  >
    <center>{mess}</center>
  </p>
)}
          </form>
        </div>

        {/* Right Side - Sign Up */}
        <div style={{ width: '50%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', background: 'linear-gradient(to right, #750E21, #ff4b2b)', padding: '40px', color: 'white' }}>
          <h2 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '20px' }}>New User?</h2>
          <p style={{ marginBottom: '30px', textAlign: 'center', fontSize: '1.5rem' }}>Register Here and start your journey with us.</p>
          <Link to="/ownRegister">
            <button style={{ backgroundColor: 'transparent', border: '2px solid white', color: 'white', padding: '10px 20px', borderRadius: '30px', cursor: 'pointer', fontSize: '1rem', transition: 'background-color 0.3s ease, color 0.3s ease' }}
              onMouseEnter={(e) => { e.target.style.backgroundColor = 'white'; e.target.style.color = '#750E21'; }}
              onMouseLeave={(e) => { e.target.style.backgroundColor = 'transparent'; e.target.style.color = 'white'; }}
            >
              REGISTER
            </button>
          </Link>
        </div>
      </div>
    </div>
    </>
  );

};

export default MainOwner;