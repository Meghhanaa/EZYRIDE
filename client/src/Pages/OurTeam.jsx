import React from "react";
import Slider from "react-slick";
import amit from "../images/ourteam/amitmondal.jpg";
import anchal from "../images/ourteam/anchalk.jpg";
import anurag from "../images/ourteam/anu.jpg";
import harstuti from "../images/ourteam/harstuti.jpg";
import meghna from "../images/ourteam/meghnaji.jpg";




import Footer from "../components/Footer.jsx";
import HeroPages from "../components/HeroPages";
import "../styles/ourteam/ourteam.css";

function OurTeam() {
  const message =
    "Our team is a blend of visionaries, innovators, and passionate individuals committed to transforming the way you experience mobility with EZYRIDE.";

  const teamMembers = [
    {
      imgSrc: meghna,
      name: "Meghana Tamrakar",
      role: "Head of CEO",
      description: "As a 2nd year MCA student at MANIT Bhopal, Meghna brings a wealth of knowledge and creativity to the EZYRIDE team.",
      socialLinks: { twitter: "#", github: "#", linkedin: "#", instagram: "#" }
    },
    {
        imgSrc: anurag,
        name: "Anurag Sharma",
        role: "Head of CEO",
        description: "As a 2nd year MCA student at MANIT Bhopal, Anurag's enthusiasm for technology makes him an invaluable asset.",
        socialLinks: { twitter: "https://x.com/AnuragS95281180", github: "https://github.com/anuragsharma5259", linkedin: "https://www.linkedin.com/in/anuragsharma5259", instagram: "https://www.instagram.com/anuragsharma5259/" }
      },
    {
      imgSrc: anchal,
      name: "Anchal Kumari",
      role: "Head of CEO",
      description: "Anchal, a 2nd year MCA student at MANIT Bhopal, is known for her attention to detail and innovative ideas.",
      socialLinks: { twitter: "#", github: "#", linkedin: "#", instagram: "#" }
    },
    {
      imgSrc: amit,
      name: "Amit Mondal",
      role: "Head of CEO",
      description: "Amit, a 2nd year MCA student from MANIT Bhopal, ensures that EZYRIDE is always on the cutting edge.",
      socialLinks: { twitter: "#", github: "https://github.com/Mondal71", linkedin: "#", instagram: "#" }
    },
    {
        imgSrc: harstuti,
        name: "harstuti",
        role: "Head of CEO",
        description: "As a 2nd year MCA student at MANIT Bhopal, harstuti brings a wealth of knowledge and creativity to the EZYRIDE team.",
        socialLinks: { twitter: "#", github: "#", linkedin: "#", instagram: "#" }
      },
      
   
  ];

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,         
    autoplaySpeed: 4000,      
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2
        }
      }
    ]
  };
  
  return (
    <section className="section-white">
      <HeroPages name="Our Team" />
      <div className="container">
        <div className="row">
          <div className="col-md-12 text-center">
            <h2 className="section-title">Meet the Minds Behind EZYRIDE</h2>
            <p className="section-subtitle">{message}</p>
          </div>
        </div>
        <Slider {...sliderSettings}>
          {teamMembers.map((member, index) => (
            <div key={index} className="team-item" alt="pic">
              <img src={member.imgSrc} className="team-img" alt={member.name} />
              <h3>{member.name}</h3>
              <div className="team-info">
                <p>{member.role}</p>
              </div>
              <p>{member.description}</p>
              <ul className="team-icon">
                <li><a href={member.socialLinks.twitter} className="twitter"><i className="fa fa-twitter"></i></a></li>
                <li><a href={member.socialLinks.github} className="github"><i className="fa fa-github"></i></a></li>
                <li><a href={member.socialLinks.linkedin} className="linkedin"><i className="fa fa-linkedin"></i></a></li>
                <li><a href={member.socialLinks.instagram} className="instagram"><i className="fa fa-instagram"></i></a></li>
              </ul>
            </div>
          ))}
        </Slider>
      </div>
      <Footer />
    </section>
  );
}

export default OurTeam;
