import React from 'react';
import Slider from 'react-slick';
import './Hero.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css"; 
import i1 from './p10.jpg';
import i3 from './p3.jpg';
import i4 from './p4.jpg';
import i5 from './p5.jpg';
import i7 from './p7.jpg';
import i8 from './p8.jpg';
import i9 from './p9.jpg';
import i10 from './p1.jpg';

const Hero = () => {
  const images = [
   i1
   ,i10='https://th.bing.com/th/id/OIP.EZjOZMxOe0ZlXDgsqoHc8wHaE7?w=1024&h=682&rs=1&pid=ImgDetMain',i3,i4,i5,i7,i8,i9
  ];
  const settings = {
    dots: false,
    infinite: true,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 300,
    fade: true,
  };
  return (
    <div className="hero-slider">
      <Slider {...settings}>
        {images.map((img, index) => (
          <div key={index} className="slide">
            <div
              className="slide-image"
              style={{ backgroundImage: `url(${img})` }}
            >
            <h2 className="slide-text" style={{ textShadow: '2px 2px 4px #800000'}}>
              Your Journey, <span style={{ color: '#800000',textShadow: '2px 2px 4px #ffffff' }}>Your Ride</span>, Your Way!
            </h2>

              <p className='p'  style={{ textShadow: '2px 2px 4px black'}}>Our vehicle rental app offers a seamless way to book and rent a wide variety of vehicles anytime, anywhere. Whether you need a car for a road trip, a bike for city errands, or a scooty for moving, our app provides a convenient, user-friendly experience with flexible options to suit all your travel needs.</p>
              <button className='hero-btn-h'>Book Ride</button>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};
export default Hero;

