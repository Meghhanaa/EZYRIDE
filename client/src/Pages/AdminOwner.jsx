import React, { useEffect, useState } from 'react';
import "../styles/AdminOwner/AdminOwner.css";
import Footer from "../components/Footer";
import { useViewContext } from '../Context_api/contextApi';

const AdminOwner = () => {
  const { AdminOwners } = useViewContext(); // Access context values

  return (
    <>
    <h1 className='h2'>All Owners</h1>
    <div className="admin-owner-container"> 
      <table>
        <thead>
          <tr>
            <th>Owner Image</th>
            <th>Owner No</th>
            <th>Name</th>
            <th>Aadhar</th>
            <th>State</th>
            <th>Gender</th>
            <th>Role</th>
            <th>Driver Count</th>
            {/* <th>More Information</th> */}
          </tr>
        </thead>
        <tbody>
          {AdminOwners.length > 0 ? (
            AdminOwners.map((owner) => (
              <tr key={owner.o_no}>
                <td><img src={owner.o_image} alt={owner.o_name} className="owner-image" /></td>
                <td>{owner.o_no}</td>
                <td>{owner.o_name}</td>
                <td>{owner.o_aadhar}</td>
                <td>{owner.o_state}</td>
                <td>{owner.o_gender}</td>
                <td>{owner.o_role}</td>
                <td>{owner.o_driver_count}</td>
                {/* <td><button>View More</button></td> */}
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="14">No owners found</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
    <Footer/>
    </>
  );
};

export default AdminOwner;