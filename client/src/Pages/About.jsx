import React from "react";
import Icon1 from "../images/about/icon1.png"; // Icon paths as necessary
import Icon2 from "../images/about/icon2.png";
import Icon3 from "../images/about/icon3.png";
import "../styles/About/AboutSection.css"; // Import the CSS file
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import AdminNav from "../components/AdminNav";
import NavbarOwner from "../components/NavbarOwner";

const AboutSection = ({ user }) => {
  const { o_role } = user; // Make sure to pass 'owner' prop to this component

  const renderNavbar = () => {
    switch (o_role) {
      case 'owner':
        return <NavbarOwner />;
      case 'customer':
        return <Navbar />;
      case 'admin':
        return <AdminNav />;
      default:
        return <Navbar />;
    }
  };

  return (
    <>
      {/* {renderNavbar()} */}
      <section className="about-section">
        <div className="about-content">
          <div className="about-text">
            <div className="about-mid">
              <div className="about-para">
                <h3>About Our Company</h3>
                <h2>Where Every Journey Begins</h2>
                <p>
                  We are committed to providing reliable and innovative
                  transportation solutions that cater to all your travel needs.
                  Our dedication to quality and customer satisfaction ensures
                  that every journey with us is safe, comfortable, and
                  enjoyable.
                </p>
              </div>
              <div className="about-image">
                <img src={require("../images/about/abt.jpeg")} alt="About Us" />
              </div>
            </div>

            <div className="about-why-choose">
              <h3>Why Choose Us</h3>
              <div className="about-icons">
                <div className="about-icon">
                  <img src={Icon1} alt="Diverse Fleet" />
                  <h4>Diverse Fleet</h4>
                  <p>
                    Choose from a wide variety of car types suited for every
                    journey.
                  </p>
                </div>
                <div className="about-icon">
                  <img src={Icon2} alt="85+ Rental Locations" />
                  <h4>85+ Rental Locations</h4>
                  <p>
                    Find us in multiple locations to make car rental convenient
                    for you.
                  </p>
                </div>
                <div className="about-icon">
                  <img src={Icon3} alt="Trusted Support" />
                  <h4>Trusted Support</h4>
                  <p>
                    Our support team and repair shops ensure you're always
                    covered.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default AboutSection;
