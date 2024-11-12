import React from 'react';
import { useViewContext } from '../Context_api/contextApi';

const AdminLogin = () => {
  const { handleadminInputChange, handleadminSubmit, formadminData, errors, mess } = useViewContext();

  return (
    <>
      {/* <Navbar></Navbar> */}
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
            maxWidth: '1100px',
            display: 'flex',
            backgroundColor: '#fff',
            boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)',
            borderRadius: '10px',
            overflow: 'hidden',
          }}
        >
          {/* Left Side - Sign In */}
          <div
            style={{
              width: '50%',
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
              Sign In As Admin
            </h2>
            <form onSubmit={handleadminSubmit}>
              <div style={{ marginBottom: '16px' }}>
                <input
                  type="text"
                  name="a_no"
                  placeholder="Contact"
                  value={formadminData.a_no}
                  onChange={handleadminInputChange}
                  style={{
                    width: '100%',
                    padding: '12px',
                    border: '1px solid #ccc',
                    borderRadius: '5px',
                    outline: 'none',
                    marginBottom: '10px',
                  }}
                />
                {errors.a_no && <p style={{ color: 'red' }}>{errors.a_no}</p>}
              </div>
              <div style={{ marginBottom: '16px' }}>
                <input
                  type="password"
                  name="a_password"
                  placeholder="Password"
                  value={formadminData.a_password}
                  onChange={handleadminInputChange}
                  style={{
                    width: '100%',
                    padding: '12px',
                    border: '1px solid #ccc',
                    borderRadius: '5px',
                    outline: 'none',
                    marginBottom: '10px',
                  }}
                />
                {errors.a_password && <p style={{ color: 'red' }}>{errors.a_password}</p>}
              </div>
              <div style={{ textAlign: 'right', marginBottom: '16px' }}>
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
              {mess && (
                <p
                  style={{
                    color: mess.includes('successful') ? 'green' : 'red',
                    padding: '10px',
                    marginTop: '10px',
                  }}
                >
                  <center>{mess}</center>
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminLogin;