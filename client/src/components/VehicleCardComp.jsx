import React from 'react';
import { useVehicleContext } from '../Context_api/VehicleContext';

const VehicleCardComp = ({ vehicle }) => {
  const { handleBookNowClick, handleMoreClick } = useVehicleContext();

  return (
    <article className="popular__card swiper-slide">
      <img className="popular__img" src={vehicle.imgSrc} alt={vehicle.title} />
      <div className="popular__data">
        <h2 className="popular__price"><span>$</span>{vehicle.price}</h2>
        <h1 className="popular__title">{vehicle.title}</h1>
        <p className="popular__description">{vehicle.description}</p>
        <div className="popular__buttons">
          <button className="popular__button book" onClick={() => handleBookNowClick(vehicle)}>Book Now</button>
          <button className="popular__button more" onClick={() => handleMoreClick(vehicle)}>More</button>
        </div> 
      </div>
    </article>
  );
};

export default VehicleCardComp;
