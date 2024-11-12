import React, { useEffect, useState } from 'react';
import "../styles/AdminCust/Admincust.css"; // If you want to keep the same styling
import Footer from "../components/Footer";
import { useViewContext } from '../Context_api/contextApi';

const AdminCustomer = () => {
  const { AdminCustomer } = useViewContext(); // Access context values

  return (
    <>
      <h2 className='h2'>All Customers</h2>
      <div className="admin-customer"> 
        <table>
          <thead>
            <tr>
              <th>Customer Image</th>
              <th>Phone Number</th>
              <th>Name</th>
              <th>License Number</th>
              <th>Aadhar</th>
              <th>State</th>
              <th>Gender</th>
              <th>Role</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {AdminCustomer.length > 0 ? (
              AdminCustomer.map((customer) => (
                <tr key={customer.c_no}>
                  <td><img src={customer.c_image} alt={customer.c_name} className="customer-image" /></td>
                  <td>{customer.c_no}</td>
                  <td>{customer.c_name}</td>
                  <td>{customer.c_lic_no}</td>
                  <td>{customer.c_aadhar}</td>
                  <td>{customer.c_state}</td>
                  <td>{customer.c_gender}</td>
                  <td>{customer.c_role}</td>
                  <td><button>View More</button></td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="14">No customers found</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      <Footer/>
    </>
  );
};

export default AdminCustomer;
