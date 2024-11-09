// import React, { createContext, useContext, useState } from 'react';
// import axios from 'axios';
// import bigInt from 'big-integer';
// import { useNavigate } from 'react-router-dom';
// import CarImg1 from "../images/cars-big/audi-box.png";

// // Create contexts
// const VehicleContext = createContext();
// const ViewContext = createContext();

// // Custom hooks to use the contexts
// export const useVehicleContext = () => useContext(VehicleContext);
// export const useViewContext = () => useContext(ViewContext);

// // VehicleProvider component
// export const VehicleProvider = ({ children }) => {
//   const [category, setCategory] = useState('All');
//   const [showModal, setShowModal] = useState(false);
//   const [selectedVehicle, setSelectedVehicle] = useState(null);
//   const [items, setItems] = useState([
//     {
//       imgSrc: CarImg1, price: '66,356', title: 'Indrapuri, Bhopal', description: 'Audi Car', type: 'Car',
//       v_image: CarImg1, v_insurance: '12345', v_name: 'Audi', v_type: 'Car', v_desp: 'Luxury car with premium features',
//       v_rto: 'MP09', v_color: 'Black', v_mileage: '15 km/l', v_engine_type: 'V8', o_no: '0987654321', v_pay: 'Paid',
//       v_booked: true, v_price: '66,356'
//     },
//     // Add more vehicles here...
//   ]);

//   const navigate = useNavigate();

//   const handleCategoryChange = (newCategory) => {
//     if (newCategory === 'Add New Vehicle') {
//       navigate('/AddVehicle');
//     } else {
//       setCategory(newCategory);
//     }
//   };

//   const handleBookNowClick = (vehicle) => {
//     navigate('/bookModel', {
//       state: { ...vehicle }
//     });
//   };

//   const handleMoreClick = (vehicle) => {
//     setSelectedVehicle(vehicle);
//     setShowModal(true);
//   };

//   const handleCloseModal = () => {
//     setShowModal(false);
//     setSelectedVehicle(null);
//   };

//   const addVehicle = (newVehicle) => {
//     setItems([...items, newVehicle]);
//   };

//   const filteredItems = category === 'All' ? items : items.filter(item => item.type === category);

//   return (
//     <VehicleContext.Provider value={{
//       category,
//       setCategory,
//       showModal,
//       selectedVehicle,
//       items,
//       filteredItems,
//       handleCategoryChange,
//       handleBookNowClick,
//       handleMoreClick,
//       handleCloseModal,
//       addVehicle
//     }}>
//       {children}
//     </VehicleContext.Provider>
//   );
// };

// // ViewProvider component for customer login and vehicle search
// export const ViewProvider = ({ children }) => {
//   const navigate = useNavigate();
//   const [formData, setFormData] = useState({
//     c_no: '',
//     c_password: '',
//   });

//   const [errors, setErrors] = useState({});
//   const [mess, setMess] = useState("");
//   const [userName, setUserName] = useState("");

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     if (name === 'c_no') {
//       setFormData({ ...formData, [name]: bigInt(value).toString() });
//     } else {
//       setFormData({ ...formData, [name]: value });
//     }
//   };

//   const validateForm = () => {
//     const newErrors = {};
//     if (!formData.c_no) newErrors.c_no = 'Contact is required';
//     if (!formData.c_password) newErrors.c_password = 'Password is required';
//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (validateForm()) {
//       try {
//         const response = await axios.post('http://localhost:3001/customer_login', formData, {
//           headers: { 'Content-Type': 'application/json' }
//         });
//         setMess(response.data.mess);
//         setUserName(response.data.user.name);
//         navigate('/');
//       } catch (error) {
//         if (error.response) {
//           setMess(error.response.data.mess || 'An error occurred. Please try again.');
//         } else {
//           console.log('An error occurred. Please try again.');
//           setMess('An error occurred. Please try again.');
//         }
//       }
//     }
//   };

//   const [searchVehData, setSearchVehData] = useState({
//     carType: '',
//     color: '',
//     vehicleType: '',
//     priceRange: '',
//     pickUp: '',
//     dropOff: '',
//     pickDate: '',
//     pickTime: '',
//     dropDate: '',
//     dropTime: '',
//     carImg: '',
//     driverRequired: ''
//   });

//   const vehicleInputChange = (e) => {
//     const { name, value } = e.target;
//     setSearchVehData(prevData => ({ ...prevData, [name]: value }));
//   };

//   const [vehicle, setVehicle] = useState([]);
//   const handleSearch = async () => {
//     try {
//       const response = await axios.get(`http://localhost:3001/vehicles`, { params: searchVehData });
//       setVehicle(response.data);
//       navigate('/models');
//     } catch (error) {
//       console.log('Error fetching vehicles:', error);
//     }
//   };

//   const allValue = {
//     handleSubmit,
//     handleInputChange,
//     formData,
//     errors,
//     userName,
//     mess,
//     handleSearch,
//     vehicleInputChange,
//     searchVehData,
//     vehicle,
//   };

//   return (
//     <ViewContext.Provider value={allValue}>
//       {children}
//     </ViewContext.Provider>
//   );
// };

// // Combined ContextProvider component to wrap both providers if needed
// export const ContextProvider = ({ children }) => (
//   <VehicleProvider>
//     <ViewProvider>{children}</ViewProvider>
//   </VehicleProvider>
// );

// export { VehicleContext, ViewContext };



import React, { createContext, useContext, useState } from 'react';
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
          headers: { 'Content-Type': 'application/json' }
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
    carType: '',
    color: '',
    vehicleType: '',
    priceRange: '',
    pickUp: '',
    dropOff: '',
    pickDate: '',
    pickTime: '',
    dropDate: '',
    dropTime: '',
    carImg: '',
    driverRequired: ''
  });

  const vehicleInputChange = (e) => {
    const { name, value: initialValue } = e.target;
    let value = initialValue;

    if (value === "Vehicle type" || 
        value === "Select Preference" || 
        value === "Select color" || 
        value === "Select price range" || 
        value === "Select pick up location"||
        value === "Select") {
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
  };

  return (
    <viewContext.Provider value={allValue}>
      {children}
    </viewContext.Provider>
  );
};

export { ViewProvider, viewContext, useViewContext };
