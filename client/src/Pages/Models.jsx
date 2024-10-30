import React, { useState } from 'react';
import CarImg1 from "../images/cars-big/audi-box.png";
import CarImg2 from "../images/cars-big/golf6-box.png";
import CarImg3 from "../images/cars-big/toyota-box.png";
import CarImg4 from "../images/cars-big/bmw-box.png";
import CarImg5 from "../images/cars-big/benz-box.png";
import BikeImg1 from "../images/bike/bike1.jpeg"; // Example bike image
import ScootyImg1 from "../images/Scooty/scooty1.jpeg"; // Example scooty image
import "../styles/Vehicles/vehicles.css";
import HeroPages from '../components/HeroPages';

// Component to display a single residence card
const ResidenceCard = ({ imgSrc, price, title, description }) => {
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
          <button className="popular__button book">Book Now</button>
          <button className="popular__button more">More</button>
        </div>
      </div>
    </article>
  );
};

// Main component to display all residence cards and a form to add new ones
const Models = () => {
  const [category, setCategory] = useState('All'); // Default to showing all vehicles
  const [properties, setProperties] = useState([
    { imgSrc: CarImg1, price: '66,356', title: 'Indrapuri, BHopal', description: 'Audi Car', type: 'Car' },
    { imgSrc: CarImg2, price: '35,159', title: 'MP Nagar, Bhopal', description: 'Golf6 Car', type: 'Car' },
    { imgSrc: CarImg3, price: '75,043', title: 'Arera Hills, Bhopal', description: 'Toyota Car', type: 'Car' },
    { imgSrc: CarImg4, price: '62,024', title: 'Kolar , Bhopal', description: 'BMW Car', type: 'Car' },
    { imgSrc: CarImg5, price: '47,043', title: 'Awadh Nagar, Bhopal', description: 'Benz Car', type: 'Car' },
    { imgSrc: BikeImg1, price: '15,000', title: 'TT Nagar, Bhopal', description: 'Bike', type: 'Bike' },
    { imgSrc: ScootyImg1, price: '10,000', title: 'Piplani, Bhopal', description: 'Scooty', type: 'Scooty' }
  ]);

  const [newProperty, setNewProperty] = useState({
    imgSrc: '',
    price: '',
    title: '',
    description: '',
    type: 'Car' // Default to 'Car'
  });

  // Handle input change for text fields
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewProperty({ ...newProperty, [name]: value });
  };

  // Handle image file upload
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setNewProperty({ ...newProperty, imgSrc: reader.result }); // Store base64 string as imgSrc
    };

    if (file) {
      reader.readAsDataURL(file); // Convert the image file to base64 string
    }
  };

  // Add new property to the list
  const addProperty = () => {
    if (newProperty.imgSrc && newProperty.price && newProperty.title && newProperty.description) {
      setProperties([...properties, newProperty]);
      setNewProperty({ imgSrc: '', price: '', title: '', description: '', type: 'Car' }); // Reset form fields
    } else {
      alert('Please fill out all fields and upload an image.');
    }
  };

  // Filter vehicles based on the selected category
  const filteredProperties = category === 'All'
    ? properties
    : properties.filter(property => property.type === category);

  return (
    // <HeroPages></HeroPages>
    <section className="section" id="popular">
      <HeroPages name="Vehicle Models" />
      <div className="container">

        {/* Category Buttons */}
        <div className="category-buttons">
          <button onClick={() => setCategory('All')} className={category === 'All' ? 'active' : ''}>All</button>
          <button onClick={() => setCategory('Car')} className={category === 'Car' ? 'active' : ''}>Car</button>
          <button onClick={() => setCategory('Bike')} className={category === 'Bike' ? 'active' : ''}>Bike</button>
          <button onClick={() => setCategory('Scooty')} className={category === 'Scooty' ? 'active' : ''}>Scooty</button>
        </div>

        {/* Display filtered vehicles */}
        <div className="popular__container swiper">
          <div className="swiper-wrapper">
            {filteredProperties.map((property, index) => (
              <ResidenceCard
                key={index}
                imgSrc={property.imgSrc}
                price={property.price}
                title={property.title}
                description={property.description}
              />
            ))}
          </div>

          <div className="swiper-button-next">
            <i className="bx bx-chevron-right"></i>
          </div>
          <div className="swiper-button-prev">
            <i className="bx bx-chevron-left"></i>
          </div>
        </div>

        {/* Form to add a new vehicle */}
        <div className="add-property-form">
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
        </div>
      </div>
    </section>
  );
};

export default Models;
