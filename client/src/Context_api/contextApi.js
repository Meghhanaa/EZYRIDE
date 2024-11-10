import React, { createContext, useContext, useEffect, useState } from 'react';
import axios from 'axios';
import bigInt from 'big-integer';
import { useNavigate } from 'react-router-dom';

// Create context
const viewContext = createContext();
const useViewContext = () => useContext(viewContext);

// Custom hook to use the context for the Customer Login
const ViewProvider = ({ children }) => {
  const navigate = useNavigate();


  const [formData, setFormData] = useState({
    c_no: '',
    c_password: '',
  });

  const [errors, setErrors] = useState({});
  const [mess, setMess] = useState("");
  const [userName, setUserName] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    if (name === 'c_no') {
      setFormData({ ...formData, [name]: bigInt(value).toString() });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.c_no) newErrors.c_no = 'Contact is required';
    if (!formData.c_password) newErrors.c_password = 'Password is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      try {
        console.log('Form Data:', formData);
        const response = await axios.post('http://localhost:3001/customer_login', formData, {
          headers: { 'Content-Type': 'application/json' },withCredentials: true,
        });
        setMess(response.data.message);
        setUserName(response.data.user.name);
        navigate('/');
      } catch (error) {
        if (error.response) {
          setMess(error.response.data.message || 'An error occurred. Please try again.');
        } else {
          console.log('An error occurred. Please try again.');
          setMess('An error occurred. Please try again.');
        }
      }
    }
  };


  //custom hook for vehicle search
  const [searchVehData, setSearchVehData] = useState({
    color: '',
    vehicleType: '',
    priceRange: '',
    pickUp: '',
    dropOff: '',
    pickDate: '',
    pickTime: '',
    dropDate: '',
    dropTime: '',
  });

  const vehicleInputChange = (e) => {
    const { name, value: initialValue } = e.target;
    let value = initialValue;

    if (value === "Vehicle type" ||  
        value === "Select color" || 
        value === "Select price range" || 
        value === "Select pick up location") {
        value = "";
    }

    setSearchVehData(prevData => ({ ...prevData, [name]: value }));
    console.log("current initiated:", searchVehData);
};

  const [vehicle,setVehicle]=useState([]);
  const handleSearch = async () => {
    try {
      console.log("Search initiated:", searchVehData);
      const response = await axios.get(`http://localhost:3001/vehicles`, {
        params: searchVehData,
      });
      console.log('Search Results:', response.data);
      setVehicle(response.data);
      console.log('Results:', vehicle);
      navigate('/models');
    } catch (error) {
      console.log('Error fetching vehicles:', error);
    }
  };

  //Save booking details
const [BookData,setBookData]=useState([]);
const [custNumber,setcustNumber]=useState('');

  const handleBookNowClick = async (e) => {
    console.log(e);
    // Correct the URL structure to include / before e (insuranceId)
    axios.get(`http://localhost:3001/book/driver/${e}`, {
    withCredentials: true,
})
.then(response => {
    setcustNumber(formData.c_no);
    setBookData(response.data.detail);
    console.log(response.data.detail);
    navigate('/bookModel');
    
})
.catch(error => {
    console.error('Error in searching:', error);
});

};
const [BookformData, setBookFormData] = useState({
      // b_location: BookData.o_street,
      // v_rto: BookData.v_rto,
      // c_no: custNumber,
      // d_no: BookData.d_no,
      // b_pay: "",
      b_date: "", // default empty, user will select
      b_time: "", // default empty, user will select
      b_method: "", // default empty, user will select
      b_return_date: "", // default empty, user will select
      b_return_time: "", // default empty, user will select
      // b_pickup: BookData.o_street// assuming pickup is the same as location
  });
  const [totalPay,settotalPay]=useState("")
  
   const handleBookSubmit = async (e) => {
    e.preventDefault();

    // Construct the request payload
    const requestBody = {
      c_no: formData.c_no,
      b_pay:totalPay,
      b_location: BookData.o_street,
      d_no: BookData.d_no,
      v_insurance: BookData.v_insurance,
      b_pickup: BookData.o_street, // Update pick-up location from BookData
      ...BookformData, // Spread operator to add all properties of BookformData
    };

    console.log(requestBody);

    try {
      // Make the POST request to the backend
      const response = await axios.post('http://localhost:3001/booking', requestBody);
      console.log('Booking successfully created:', response.data);
    } catch (error) {
      console.error('Error creating booking:', error);
    }
  };

const handlePayLaterClick = async(e)=>{
    e.preventDefault();
    console.log(e);
    //  axios.get(`http://localhost:3001/book/driver${e}`)
    //       .then(response => {
    //         console.log(response.data)
    //         setFooddetail(response.data);
    //         setClose(true)
    //       })
    //       .catch(error => {
    //         console.error('Error in searching:', error);
    //       });


  }




  //custom hook for book by customer

  const allValue = { 
    handleSubmit,
    handleInputChange,
    formData,
    errors,
    userName,
    mess,
    handleSearch,
    vehicleInputChange,
    searchVehData,
    vehicle,
    BookformData,
    setBookFormData,
    BookData,
    totalPay,
    settotalPay,
    custNumber,
    handlePayLaterClick,
    handleBookNowClick,
    handleBookSubmit
  };

  return (
    <viewContext.Provider value={allValue}>
      {children}
    </viewContext.Provider>
  );
};

export { ViewProvider, viewContext, useViewContext };