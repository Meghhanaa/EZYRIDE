
import React from 'react';
import "../styles/Safety/SafetyCard.css";

const SafetyCard = ({ icon, title, description }) => {
  return (
    <div className="safety-card">
      <div className="icon">{icon}</div>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default SafetyCard;
