import React from 'react';
import "../styles/Vehicles/vehicles.css";
import { useViewContext } from '../Context_api/contextApi';
import InfoModal from '../components/InfoModal';


const MyDrivers = () => {
  const { driverOwner,handleMore,close } = useViewContext(); // Access context values
  return (
    <>
    {/* <Navbar/> */}
    <section className="section" id="popular">
    <h1 className='megh-title'>MY DRIVERS</h1>
      {/* <HeroPages name="Vehicle Models" /> */}
      <div className="container">
        {/* Display filtered vehicles */}
        <div className="popular__container swiper">
          <div className="swiper-wrapper">
            {driverOwner.map((property) => (
              <article className="popular__card swiper-slide">
                <img className="popular__img" src={property.d_image} alt={property.d_name} />
                <div className="popular__data">
                   <h2 className="popular__price"><span>Rs </span>{property.d_name}</h2>
                   <h1 className="popular__title">{property.d_no}</h1>
                   <p className="popular__description">{property.o_street}</p>
                   <div className="popular__buttons">
                     <button className="popular__button more" onClick={() => handleMore(property.d_no)}>More</button>
                ,  </div> 
                </div>
              </article>))}
          </div>
        </div>
      </div>
    </section>
    {
      close&&(
        <InfoModal/>
      )
    }
    </>
  );
};

export default MyDrivers;