import React from 'react';
import { useViewContext } from '../Context_api/contextApi';

const AdminLogin = () => {
  const { handleadminInputChange, handleadminSubmit, formadminData, errors, mess } = useViewContext();
  return (
    <>
      <div className="admin-login-container">
        <div className="admin-login-content">
          <div className="admin-login-form">
            <h2>Sign In As admin</h2>
            <form onSubmit={handleadminSubmit}>
              <div className="input-group">
                <input
                  type="text"
                  name="a_no"
                  placeholder="Contact"
                  value={formadminData.a_no}
                  onChange={handleadminInputChange}
                  className={errors.a_no ? 'input-error' : ''}
                />
                {errors.a_no && <p className="error-message">{errors.a_no}</p>}
              </div>
              <div className="input-group">
                <input
                  type="password"
                  name="a_password"
                  placeholder="Password"
                  value={formadminData.a_password}
                  onChange={handleadminInputChange}
                  className={errors.a_password ? 'input-error' : ''}
                />
                {errors.a_password && <p className="error-message">{errors.a_password}</p>}
              </div>
              <div className="forgot-password">
                <a href="#">Forgot your password?</a>
              </div>
              <button type="submit" className="submit-button">SIGN IN</button>
              {mess && (
                <p className={mess.includes('successful') ? 'success-message' : 'error-message'}>
                  <center>{mess}</center>
                </p>
              )}
            </form>
          </div>
        </div>
      </div>

      {/* CSS Styles */}
      <style jsx>{`
        .admin-login-container {
          min-height: 100vh;
          display: flex;
          justify-content: center;
          align-items: center;
          background-color: #f3f3f3;
          font-family: Arial, sans-serif;
        }

        .admin-login-content {
          width: 100%;
          max-width: 600px;
          display: flex;
          background-color: #fff;
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
          border-radius: 10px;
          overflow: hidden;
        }

        .admin-login-form {
          width: 100%;
          padding: 40px;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .admin-login-form h2 {
          font-size: 2rem;
          font-weight: bold;
          margin-bottom: 20px;
          color: #750E21;
        }

        .input-group {
          margin-bottom: 16px;
        }

        .input-group input {
          width: 100%;
          padding: 12px;
          border: 1px solid #ccc;
          border-radius: 5px;
          outline: none;
          margin-bottom: 10px;
        }

        .input-error {
          border-color: red;
        }

        .error-message {
          color: red;
          font-size: 0.875rem;
          margin-top: -10px;
          margin-bottom: 10px;
        }

        .forgot-password {
          text-align: right;
          margin-bottom: 16px;
        }

        .forgot-password a {
          font-size: 0.875rem;
          color: #888;
          text-decoration: none;
        }

        .submit-button {
          width: 100%;
          background-color: #750E21;
          color: #fff;
          padding: 12px;
          border-radius: 5px;
          border: none;
          cursor: pointer;
          font-size: 1rem;
          transition: background-color 0.3s ease;
        }

        .submit-button:hover {
          background-color: #5a0e19;
        }

        .success-message {
          color: green;
          padding: 10px;
          margin-top: 10px;
        }

        @media (max-width: 768px) {
          .admin-login-content {
            flex-direction: column;
          }

          .admin-login-form {
            width: 100%;
            padding: 20px;
          }

          .admin-login-form h2 {
            font-size: 1.5rem;
          }
        }

        @media (max-width: 480px) {
          .admin-login-form h2 {
            font-size: 1.25rem;
          }

          .input-group input {
            padding: 10px;
            font-size: 0.875rem;
          }

          .submit-button {
            padding: 10px;
            font-size: 0.875rem;
          }
        }
      `}</style>
    </>
  );
};

export default AdminLogin;
