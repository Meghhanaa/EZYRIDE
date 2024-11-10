
import React from "react";
import SafetyCard from "../components/SafetyCard"
import "../styles/Safety/SafetyPage.css";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const SafetyPage = () => {
  return (
  <>
    {/* <Navbar/> */}
    <div className="safety-page">
      <header className="header">
        <h1>SAFETY MEASURES AT EZYRIDE</h1>
        <p>Dedicated to providing safe and reliable journeys for all.</p>
      </header>

      <div className="card-container">
        <SafetyCard 
          icon={<i className="fas fa-user-shield"></i>}
          title="Customer Safety"
          description="Real-time tracking, emergency contacts, and shareable trip details ensure every passenger's security."
        />
        <SafetyCard 
          icon={<i className="fas fa-car-side"></i>}
          title="Driver Safety"
          description="All drivers undergo background checks, receive safety training, and follow strict hygiene protocols."
        />
        <SafetyCard 
          icon={<i className="fas fa-handshake"></i>}
          title="Owner Safety"
          description="Owners renting out vehicles are protected by comprehensive insurance and monitoring systems."
        />
      </div>

      <section className="contact-section">
        <h2>Need More Information?</h2>
        <p>Our support team is here to help 24/7. Feel free to reach out anytime.</p>
        <Link to="/ContactEzy"> <button className="contact-button">Contact Support</button> </Link>      </section>
    </div>
    <Footer></Footer> </>
  );
};

export default SafetyPage;
