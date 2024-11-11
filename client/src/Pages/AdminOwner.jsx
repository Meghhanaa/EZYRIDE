import React, { useEffect, useState } from 'react';

const AdminOwner = () => {
  const [owners, setOwners] = useState([]);

  useEffect(() => {
    const fetchOwners = async () => {
      // Example data, replace with API call to your backend
      const ownersData = [
        { 
          o_image: 'https://via.placeholder.com/150',
          o_no: '001',
          o_name: 'John Doe',
          o_DOB: '1980-01-01',
          o_aadhar: '1234-5678-9101',
          o_email: 'john.doe@example.com',
          o_state: 'State1',
          o_city: 'City1',
          o_street: '123 Main St',
          o_pin: '123456',
          o_gender: 'Male',
          o_password: 'password123',
          o_role: 'Owner',
          o_driver_count: 5
        },
        { 
          o_image: 'https://via.placeholder.com/150',
          o_no: '002',
          o_name: 'Jane Smith',
          o_DOB: '1985-05-05',
          o_aadhar: '2234-5678-9101',
          o_email: 'jane.smith@example.com',
          o_state: 'State2',
          o_city: 'City2',
          o_street: '456 Elm St',
          o_pin: '654321',
          o_gender: 'Female',
          o_password: 'password456',
          o_role: 'Owner',
          o_driver_count: 3
        },
        { 
          o_image: 'https://via.placeholder.com/150',
          o_no: '003',
          o_name: 'Mike Johnson',
          o_DOB: '1990-10-10',
          o_aadhar: '3234-5678-9101',
          o_email: 'mike.johnson@example.com',
          o_state: 'State3',
          o_city: 'City3',
          o_street: '789 Oak St',
          o_pin: '789012',
          o_gender: 'Male',
          o_password: 'password789',
          o_role: 'Owner',
          o_driver_count: 7
        }
      ];
      setOwners(ownersData);
    };

    fetchOwners();
  }, []);

  return (
    <div className="admin-owner">
      <h2>All Owners</h2>
      <table>
        <thead>
          <tr>
            <th>Owner Image</th>
            <th>Owner No</th>
            <th>Name</th>
            <th>DOB</th>
            <th>Aadhar</th>
            <th>Email</th>
            <th>State</th>
            <th>City</th>
            <th>Street</th>
            <th>PIN</th>
            <th>Gender</th>
            <th>Password</th>
            <th>Role</th>
            <th>Driver Count</th>
          </tr>
        </thead>
        <tbody>
          {owners.length > 0 ? (
            owners.map((owner) => (
              <tr key={owner.o_no}>
                <td><img src={owner.o_image} alt={owner.o_name} className="owner-image" /></td>
                <td>{owner.o_no}</td>
                <td>{owner.o_name}</td>
                <td>{owner.o_DOB}</td>
                <td>{owner.o_aadhar}</td>
                <td>{owner.o_email}</td>
                <td>{owner.o_state}</td>
                <td>{owner.o_city}</td>
                <td>{owner.o_street}</td>
                <td>{owner.o_pin}</td>
                <td>{owner.o_gender}</td>
                <td>{owner.o_password}</td>
                <td>{owner.o_role}</td>
                <td>{owner.o_driver_count}</td>
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
  );
};

export default AdminOwner;
