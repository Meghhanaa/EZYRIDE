import React, { useState, useEffect } from 'react';
import "../styles/Vehicles/vehicles.css";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useViewContext } from '../Context_api/contextApi';

function AddVehicle() {
  const [newVehicle, setNewVehicle] = useState({
    v_image: '',
    v_insurance: '',
    v_name: '',
    v_type: '',
    v_rto: '',
    v_color: '',
    v_mileage: '',
    v_engine_type: '',
    v_pay: '',
    v_desp: '',
  });

  const [errors, setErrors] = useState({});

  const {formownerData,handleAllOwnerVehicle}=useViewContext();
   const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewVehicle({...newVehicle,[name]:value})
  };     

const handleSubmit = async (e) => {
    e.preventDefault();
    const formDataToSend = new FormData();
    formDataToSend.append('v_image', newVehicle.v_image); // Corrected
    formDataToSend.append('v_insurance', newVehicle.v_insurance);
    formDataToSend.append('v_name', newVehicle.v_name);
    formDataToSend.append('v_type', newVehicle.v_type);
    formDataToSend.append('v_rto', newVehicle.v_rto);
    formDataToSend.append('v_color', newVehicle.v_color);
    formDataToSend.append('v_mileage', newVehicle.v_mileage);
    formDataToSend.append('v_engine_type', newVehicle.v_engine_type);
    formDataToSend.append('v_pay', newVehicle.v_pay);
    formDataToSend.append('v_desp', newVehicle.v_desp);
    formDataToSend.append('o_no',formownerData.o_no);
    for (const [key, value] of formDataToSend.entries()) { console.log(`${key}: ${value}`); }
    // console.log(AddDriver);
    try {
      const response = await axios.post('http://localhost:3001/addvehicleowner', formDataToSend);
      console.log(response.data);
      handleAllOwnerVehicle();
      navigate('/VehiclePage');
    } catch (error) {
      if (error.response) {
        console.log(error.response.data.message || 'An error occurred. Please try again.');
      } else {
        console.log('An error occurred. Please try again.');
      }
    }
  };

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file && file.size > 2000000) { // Example: Limit file size to 2MB
      setErrors((prevErrors) => ({
        ...prevErrors,
        v_image: 'File size should be less than 2MB.',
      }));
    } else {
      setNewVehicle((prevData) => ({
        ...prevData,
        v_image: file,
      }));
      setErrors((prevErrors) => ({
        ...prevErrors,
        v_image: null, // Clear error if file is valid
      }));
    }
  };


  return (
    <form className="add-property-form" onSubmit={handleSubmit} encType="multipart/form-data">
      <h1 className="add-titlee">Add New Vehicle</h1>
      <input
        className="megh-1"
        type="file"
        accept="image/*"
        name="v_image"
        onChange={handleImageUpload}
        required
      />
      {errors.v_image && <span className="error" aria-live="assertive">{errors.v_image}</span>}

      <input
        className="megh-1"
        type="text"
        name="v_insurance"
        placeholder="Insurance Number"
        value={newVehicle.v_insurance}
        onChange={handleInputChange}
      />
      {errors.v_insurance && <span className="error">{errors.v_insurance}</span>}

      <input
        className="megh-1"
        type="text"
        name="v_name"
        placeholder="Vehicle Name"
        value={newVehicle.v_name}
        onChange={handleInputChange}
      />
      {errors.v_name && <span className="error">{errors.v_name}</span>}

      <select
        className="megh-1"
        name="v_type"
        value={newVehicle.v_type}
        onChange={handleInputChange}
      >
        <option value="Select">Select</option>
        <option value="Car">Car</option>
        <option value="Bike">Bike</option>
        <option value="Scooty">Scooty</option>
      </select>
      {errors.v_type && <span className="error">{errors.v_type}</span>}

      <input
        className="megh-1"
        type="text"
        name="v_rto"
        placeholder="RTO"
        value={newVehicle.v_rto}
        onChange={handleInputChange}
      />
      {errors.v_rto && <span className="error">{errors.v_rto}</span>}

      <input
        className="megh-1"
        type="text"
        name="v_color"
        placeholder="Color"
        value={newVehicle.v_color}
        onChange={handleInputChange}
      />
      {errors.v_color && <span className="error">{errors.v_color}</span>}

      <input
        className="megh-1"
        type="text"
        name="v_mileage"
        placeholder="Mileage"
        value={newVehicle.v_mileage}
        onChange={handleInputChange}
      />
      {errors.v_mileage && <span className="error">{errors.v_mileage}</span>}

      <input
        className="megh-1"
        type="text"
        name="v_engine_type"
        placeholder="Engine Type"
        value={newVehicle.v_engine_type}
        onChange={handleInputChange}
      />
      {errors.v_engine_type && <span className="error">{errors.v_engine_type}</span>}

       <input
        className="megh-1"
        type="text"
        name="v_pay"
        placeholder="Price"
        value={newVehicle.v_pay}
        onChange={handleInputChange}
      />
      {errors.v_pay && <span className="error">{errors.v_pay}</span>}

      <input
        className="megh-1"
        type="text"
        name="v_desp"
        placeholder="Description"
        value={newVehicle.v_desp}
        onChange={handleInputChange}
      />
      {errors.v_desp && <span className="error">{errors.v_desp}</span>}

      <button className="btn button" type="submit">
        Add Vehicle
      </button>
    </form>
  );
  
}

export default AddVehicle;
