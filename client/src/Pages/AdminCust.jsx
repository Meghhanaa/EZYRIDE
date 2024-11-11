import React, { useEffect, useState } from 'react';
import "../styles/AdminCust/Admincust.css"; // If you want to keep the same styling

const AdminCustomer = () => {
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    const fetchCustomers = async () => {
      // Example data, replace with API call to your backend
      const customersData = [
        { 
          c_image: 'https://via.placeholder.com/150',
          c_no: '9876543210',
          c_name: 'Jane Smith',
          c_lic_no: 'DL123456789',
          c_DOB: '1992-05-22',
          c_aadhar: '2345-6789-1234',
          c_email: 'janesmith@example.com',
          c_state: 'Texas',
          c_city: 'Houston',
          c_street: '456 Elm St',
          c_pin: '77001',
          c_gender: 'Female',
          c_password: '******', // Hide password for security
          c_role: 'Customer'
        },
        { 
          c_image: 'https://via.placeholder.com/150',
          c_no: '9876543211',
          c_name: 'John Doe',
          c_lic_no: 'DL987654321',
          c_DOB: '1985-07-15',
          c_aadhar: '3456-7890-1234',
          c_email: 'johndoe@example.com',
          c_state: 'California',
          c_city: 'Los Angeles',
          c_street: '789 Pine St',
          c_pin: '90001',
          c_gender: 'Male',
          c_password: '******', // Hide password for security
          c_role: 'Customer'
        },
        { 
          c_image: 'https://via.placeholder.com/150',
          c_no: '9876543212',
          c_name: 'Alice Brown',
          c_lic_no: 'DL112233445',
          c_DOB: '1990-03-10',
          c_aadhar: '4567-8901-2345',
          c_email: 'alicebrown@example.com',
          c_state: 'Florida',
          c_city: 'Miami',
          c_street: '1010 Oak St',
          c_pin: '33101',
          c_gender: 'Female',
          c_password: '******', // Hide password for security
          c_role: 'Customer'
        }
      ];
      setCustomers(customersData);
    };

    fetchCustomers();
  }, []);

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
            {customers.length > 0 ? (
              customers.map((customer) => (
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
    </>
  );
};

export default AdminCustomer;
