import React from 'react';
import./ Card.css;

const Card = ({ color, title }) => {
  return (
    <div className={``} style={{ backgroundColor: `${color}` }}>
      <div className="card-title">
        {title}
      </div>
      <div className="card-content">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </div>
    </div>
  );
};

export default Card;