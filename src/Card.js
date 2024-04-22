
import React from 'react';
import './Card.css'; // Assume you will create a separate CSS file for styling
import { Link } from 'react-router-dom';

/*const Card = ({ title, description, imageUrl }) => {
  return (
    <div className="card">
      <img src={imageUrl} alt={title} className="card-image" />
      <div className="card-content">
        <h3 className="card-title">{title}</h3>
        <p className="card-description">{description}</p>
      </div>
    </div>
  );
};
*/
const Card = ({ title, description, imageUrl, linkUrl }) => {
    return (
    
      <Link to={linkUrl} className="card">
        <img src={imageUrl} alt={title} className="card-image" />
        <div className="card-info">
          <h3 className="card-title">{title}</h3>
          <p className="card-description">{description}</p>
        </div>
      </Link>
    );
  };

export default Card;
