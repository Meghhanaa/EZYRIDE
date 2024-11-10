import React from 'react';
import Slider from 'react-slick';
import '../styles/Reviews/Reviews.css'; 
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Data } from './Data';

const Reviews = () => {
    const sliderSettings = {
        dots: false,
        infinite: true,
        speed: 2000,
        slidesToShow: 4, 
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        centerMode: true,
        centerPadding: "20px", 
        pauseOnHover: true,
        responsive: [
          {
            breakpoint: 1024, 
            settings: {
              slidesToShow: 3,  
              centerPadding: "10px", 
            },
          },
          {
            breakpoint: 768, 
            settings: {
              slidesToShow: 2,  
              centerPadding: "5px",  
            },
          },
          {
            breakpoint: 480, 
            settings: {
              slidesToShow: 1,  
              centerPadding: "0px", 
            },
          },
        ],
      };
      
  return (
    <>    
    <div className="heading">Reviews</div>
    <Slider {...sliderSettings} className="review-slider">
      {Data.map((review, index) => (
        <div key={index} className="card">
          <div className="review-content">
            <p className="review-text">"{review.review}"</p>
          </div>
          <img src={review.imageUrl} alt="Vehicle" className="image" />
          <h4 className="reviewer-name" style={{color:'white', fontWeight:600}}>{review.reviewerName}</h4>
          <div className="stars">{'⭐'.repeat(review.rating)}</div>
        </div>
      ))}
    </Slider>
    </>
  );
};

export default Reviews;
