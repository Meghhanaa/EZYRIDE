// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import CarImg1 from "../images/cars-big/audi-box.png";
// import "../styles/Vehicles/vehicles.css";
// import AddVehicle from '../components/AddVehicle';
// import Navbar from '../components/Navbar';

// const Models = () => {
//   const [category, setCategory] = useState('All');
//   const [showModal, setShowModal] = useState(false);
//   const [selectedVehicle, setSelectedVehicle] = useState(null);
//   const navigate = useNavigate();

//   // Sample vehicle data
//   const [items, setItems] = useState([
//     {
//       imgSrc: CarImg1, price: '66,356', title: 'Indrapuri, Bhopal', description: 'Audi Car', type: 'Car',
//       v_image: CarImg1, v_insurance: '12345', v_name: 'Audi', v_type: 'Car', v_desp: 'Luxury car with premium features',
//       v_rto: 'MP09', v_color: 'Black', v_mileage: '15 km/l', v_engine_type: 'V8', o_no: '0987654321', v_pay: 'Paid',
//       v_booked: true, v_price: '66,356'
//     },
//     // Add more vehicles here...
//   ]);

//   const filteredItems = category === 'All' ? items : items.filter(item => item.type === category);

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

//   return (
//     <>
//     <Navbar></Navbar>
//     <section className="section" id="popular">
//       <div className="container">

//         {/* Display filtered vehicles */}
//         <div className="popular__container swiper">
//           <div className="swiper-wrapper">
//             {filteredItems.map((vehicle, index) => (
//               <article className="popular__card swiper-slide" key={index}>
//                 <img className="popular__img" src={vehicle.imgSrc} alt={vehicle.title} />
//                 <div className="popular__data">
//                   <h2 className="popular__price"><span>$</span>{vehicle.price}</h2>
//                   <h1 className="popular__title">{vehicle.title}</h1>
//                   <p className="popular__description">{vehicle.description}</p>
//                   <div className="popular__buttons">
//                     <button className="popular__button book" onClick={() => handleBookNowClick(vehicle)}>Book Now</button>
//                     <button className="popular__button more" onClick={() => handleMoreClick(vehicle)}>More</button>
//                   </div>
//                 </div>
//               </article>
//             ))}
//           </div>
//         </div>

//         {/* Add New Vehicle Form */}
//         {category === 'Add New Vehicle' && <AddVehicle addVehicle={(newVehicle) => setItems([...items, newVehicle])} />}

//         {/* Info Modal */}
//         {showModal && selectedVehicle && (
//           <div className="info-modal">
//             <div className="info-modal-content">
//               <button className="close-button" onClick={handleCloseModal}>X</button>
//               <img src={selectedVehicle.v_image} alt={selectedVehicle.v_name} className="vehicle-image" />
//               <h2 className='info-title'>{selectedVehicle.v_name}</h2>
//               <p><strong>Type:</strong> {selectedVehicle.v_type}</p>
//               <p><strong>Description:</strong> {selectedVehicle.v_desp}</p>
//               <p><strong>RTO:</strong> {selectedVehicle.v_rto}</p>
//               <p><strong>Color:</strong> {selectedVehicle.v_color}</p>
//               <p><strong>Mileage:</strong> {selectedVehicle.v_mileage}</p>
//               <p><strong>Engine Type:</strong> {selectedVehicle.v_engine_type}</p>
//               <p><strong>Booked:</strong> {selectedVehicle.v_booked ? "Yes" : "No"}</p>
//               <p><strong>Price:</strong> ${selectedVehicle.v_price}</p>
//             </div>
//           </div>
//         )}
//       </div>
//     </section>
//     </>
//   );
// };

// export default Models;



import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import HeroPages from '../components/HeroPages';
import AddVehicle from '../components/AddVehicle';
import "../styles/Vehicles/vehicles.css";
import { useViewContext } from '../Context_api/contextApi';
import Navbar from '../components/Navbar';

const VehiclCardComp = ({ imgSrc, price, title, description }) => {
  const isRegistered = true;
  const navigate = useNavigate();
  const handleBookNowClick = () => {
    if (isRegistered) {
      navigate('/bookModel', {
        state: {
          imgSrc,
          price,
          title,
          description,
        },
      });
    } else {
      navigate("/custRegister");
    }
  };

  return (
    <article className="popular__card swiper-slide">
      <img className="popular__img" src={imgSrc} alt={title} />
      <div className="popular__data">
        <h2 className="popular__price">
          <span>$</span>{price}
        </h2> 
        <h1 className="popular__title">{title}</h1>
        <p className="popular__description">{description}</p>
        <div className="popular__buttons">
          <button className="popular__button book" onClick={handleBookNowClick}>
            Book Now
          </button>
          <button className="popular__button more">More</button>
        </div>
      </div>
    </article>
  );
};



const Models = () => {
  const { vehicle } = useViewContext(); // Access context values
  // const [category, setCategory] = useState('All');
  // const [items, setItems] = useState([]);
  // const navigate = useNavigate();

  // // Fetch data from backend
  // useEffect(() => {
  //   const fetchVehicles = async () => {
  //     try {
  //       const response = await axios.get('/api/vehicles');
  //       setItems(response.data); // Assumes API returns an array of vehicle objects
  //     } catch (error) {
  //       console.error("Error fetching vehicles:", error);
  //     }
  //   };
  //   fetchVehicles();
  // }, []);

  // const handleAddVehicle = (newVehicle) => {
  //   setItems((prevItems) => [...prevItems, newVehicle]);
  // };

  // const handleCategoryChange = (newCategory) => {
  //   if (newCategory === 'Add New Vehicle') {
  //     navigate('/AddVehicle');
  //   } else {
  //     setCategory(newCategory);
  //   }
  // };

  // const filteredItems = category === 'All'
  //   ? items
  //   : items.filter(item => item.type === category);

  return (
    <>
    <Navbar/>
    <section className="section" id="popular">
      <HeroPages name="Vehicle Models" />
      <div className="container">
        {/* Category Buttons */}
        {/* <div className="category-buttons">
          <button
            onClick={() => handleCategoryChange('All')}
            className={category === 'All' ? 'active' : ''}
          >
            All
          </button>
          <button
            onClick={() => handleCategoryChange('Car')}
            className={category === 'Car' ? 'active' : ''}
          >
            Car
          </button>
          <button
            onClick={() => handleCategoryChange('Bike')}
            className={category === 'Bike' ? 'active' : ''}
          >
            Bike
          </button>
          <button
            onClick={() => handleCategoryChange('Scooty')}
            className={category === 'Scooty' ? 'active' : ''}
          >
            Scooty
          </button>
          <button
            onClick={() => handleCategoryChange('Add New Vehicle')}
            className={category === 'Add New Vehicle' ? 'active' : ''}
          >
            Add New Vehicle
          </button>
        </div> */}

        {/* Display filtered vehicles */}
        <div className="popular__container swiper">
          <div className="swiper-wrapper">
            {vehicle.map((property, index) => (
              <VehiclCardComp
                key={property.v_insurance}
                imgSrc={property.v_image}
                price={property.v_pay}
                title={property.v_name}
                description={property.v_mileage}
              />
            ))}
          </div>
        </div>

        {/* Add New Vehicle Form
        {category === 'Add New Vehicle' && (
          <AddVehicle addVehicle={handleAddVehicle} />
        )} */}
      </div>
    </section>
    </>
  );
};

export default Models;






        {/* Form to add a new vehicle */}
        {/* <div className="add-property-form">
          <h1 className='add-titlee'>Add New Vehicle</h1>
          <input
            className="megh-1"
            type="file"
            accept="image/*"
            name="imgSrc"
            onChange={handleFileChange}
          />
          <input
            className="megh-1"
            type="text"
            name="price"
            placeholder="Price"
            value={newProperty.price}
            onChange={handleInputChange}
          />
          <input
            className="megh-1"
            type="text"
            name="title"
            placeholder="Title"
            value={newProperty.title}
            onChange={handleInputChange}
          />
          <input
            className="megh-1"
            type="text"
            name="description"
            placeholder="Description"
            value={newProperty.description}
            onChange={handleInputChange}
          />
          <select
            className="megh-1"
            name="type"
            value={newProperty.type}
            onChange={handleInputChange}
          >
            <option value="Car">Car</option>
            <option value="Bike">Bike</option>
            <option value="Scooty">Scooty</option>
          </select>
          <a href="#" className="btn button" onClick={addProperty}>
            Add Vehicle
          </a>
        </div> */}
