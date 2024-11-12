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

  const [role,setRole] = useState("customer");
  const [errors, setErrors] = useState({});
  const [mess, setMess] = useState("");
  const [userName, setUserName] = useState("");
  const [profilepic,setProfilepic]=useState("");
  const [custNumber,setcustNumber]=useState(0);
  const [number,setnumber]=useState(0)


  const [formData, setFormData] = useState({
    c_no: '',
    c_password: '',
  });

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
        setProfilepic(response.data.image.name)
        setRole(response.data.role.name)
        setnumber(response.data.user.number);
        console.log(response.data.role.name)
        console.log(response.data.image.name)
        console.log(response.data.user.name)
        console.log(formData.c_no)
        navigate('/');
      } catch (error) {
        if (error.response) {
          setMess(error.response.data.message || 'An error occurred. Please try again.');
        } else {
          console.log(error)
          console.log('An error occurred. Please try again.');
          setMess('An error occurred. Please try again.');
        }
      }
    }
  };

  const [formownerData, setFormownerData] = useState({
    o_no: '',
    o_password: '',
  });

  const handleownerInputChange = (e) => {
    const { name, value } = e.target;

    if (name === 'o_no') {
      setFormownerData({ ...formownerData, [name]: bigInt(value).toString() });
    } else {
      setFormownerData({ ...formownerData, [name]: value });
    }
  };

  const validateownerForm = () => {
    const newErrors = {};

    if (!formownerData.o_no) newErrors.o_no = 'Contact is required';
    if (!formownerData.o_password) newErrors.o_password = 'Password is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleownerSubmit = async (e) => {
    e.preventDefault();
    if (validateownerForm()) {
      try {
        console.log('Form Data:', formownerData);
        const response = await axios.post('http://localhost:3001/owner_login', formownerData, {
          headers: { 'Content-Type': 'application/json' },withCredentials: true,
        });
        setMess(response.data.message);
        setUserName(response.data.user.name);
        setProfilepic(response.data.image.name)
        setRole(response.data.role.name)
        setnumber(formownerData.o_no)
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


  const [formadminData, setFormadminData] = useState({
    a_no: '',
    a_password: '',
  });
 
  const handleadminInputChange = (e) => {
    const { name, value } = e.target;

    if (name === 'a_no') {
      setFormadminData({ ...formadminData, [name]: bigInt(value).toString() });
    } else {
      setFormadminData({ ...formadminData, [name]: value });
    }
  };

  const validateadminForm = () => {
    const newErrors = {};

    if (!formadminData.a_no) newErrors.a_no = 'Contact is required';
    if (!formadminData.a_password) newErrors.a_password = 'Password is required';
     console.log(formadminData)
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

const handleadminSubmit = async (e) => {
    e.preventDefault();
    if (validateadminForm()) {
      try {
        console.log('Form Data:', formadminData);
        const response = await axios.post('http://localhost:3001/admin_login', formadminData, {
          headers: { 'Content-Type': 'application/json' },withCredentials: true,
        });
        setMess(response.data.message);
        setUserName(response.data.user.name);
        setRole(response.data.role.name);
        console.log(response.data.message.role);
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
  

  //profile
  const [profileData,setprofileData]=useState([])
  const profilecustomerInfo=async()=>{
     try {
      console.log(formData.c_no)
        const response = await axios.get('http://localhost:3001/custprofile',{
          params: { c_no: formData.c_no },
          headers: { 'Content-Type': 'application/json' },withCredentials: true,
        });
        console.log("data",response.data);
        setprofileData(response.data);
      } catch (error) {
        if (error.response) {
          setMess(error.response.data.message || 'An error occurred. Please try again.');
        } else {
          console.log('An error occurred. Please try again.');
          setMess('An error occurred. Please try again.');
        }
      }

  }

const profileownerInfo=async()=>{
     try {
        const response = await axios.get('http://localhost:3001/ownerprofile',{
          params: { o_no: formownerData.o_no },
          headers: { 'Content-Type': 'application/json' },withCredentials: true,
        });
        setprofileData(response.data);
      } catch (error) {
        if (error.response) {
          setMess(error.response.data.message || 'An error occurred. Please try again.');
        } else {
          console.log('An error occurred. Please try again.');
          setMess('An error occurred. Please try again.');
        }
      }

  }


//customer all booking

const [custbookingdetail,setcustbookingdetail]=useState([])
const custallbooking=async()=>{
  try{
    const response = await axios.get('http://localhost:3001/custallbooking',{
          params: { c_no: formData.c_no },
          headers: { 'Content-Type': 'application/json' },withCredentials: true,
        });
        setcustbookingdetail(response.data);
        console.log(custbookingdetail)
        console.log(response.data)
  }
  catch (error) {
        if (error.response) {
          setMess(error.response.data.message || 'An error occurred. Please try again.');
        } else {
          console.log('An error occurred. Please try again.');
          setMess('An error occurred. Please try again.');
        }
      }
}

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

  //information of vehicle
  const [dummyVehicle,setdummyVehicle]=useState([]);
  const [close,setclose]=useState(false);
  const handleMore=async(e) =>{
    try{

       const response = await axios.get(`http://localhost:3001/vehicleDetail/${e}`)
      setdummyVehicle(response.data);
      setclose(true);
      console.log(response.data);    
    }
catch(error){
    console.error('Error in searching:', error);
}
  };

  //handleclose vehicle info
  const handleClose=async(e)=>{
    setclose(false);
  }

  //Save booking details
const [BookData,setBookData]=useState([]);

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
  const [isDriverRequired, setIsDriverRequired] = useState(false);
  const [totalPay,settotalPay]=useState(0)
  
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
      setIsDriverRequired(false);
      settotalPay(0)
      navigate('/')
    } catch (error) {
      console.error('Error creating booking:', error);
    }
  };

const handlePayLaterClick = async()=>{
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
      const response = await axios.post('http://localhost:3001/bookingpaylater', requestBody);
      console.log('Booking successfully created:', response.data);
      setIsDriverRequired(false);
      settotalPay(0)
      navigate('/')
    } catch (error) {
      console.error('Error creating booking:', error);
    }


  }

//logout
const handlelogout =()=>{
  setUserName("");
  setMess("")
  setRole("")
  navigate('/')
}


  //custom hook for book by customer

  const allValue = { 
    profilepic,
    number,
    profileData,
    profilecustomerInfo,
    profileownerInfo,
    role,
    handleSubmit,
    handleInputChange,
    formData,
    errors,
    userName,
    mess,
    formownerData,
    handleownerInputChange,
    handleownerSubmit,
    formadminData,
    handleadminInputChange,
    handleadminSubmit,
    handleSearch,
    vehicleInputChange,
    searchVehData,
    vehicle,
    dummyVehicle,
    handleMore,
    handleClose,
    close,
    BookformData,
    setBookFormData,
    BookData,
    isDriverRequired,
    setIsDriverRequired,
    totalPay,
    settotalPay,
    custNumber,
    handlePayLaterClick,
    handleBookNowClick,
    handleBookSubmit,
    custbookingdetail,
    custallbooking,
    handlelogout
  };

  return (
    <viewContext.Provider value={allValue}>
      {children}
    </viewContext.Provider>
  );
};

export { ViewProvider, viewContext, useViewContext };