
import React from 'react';

const Card = (props) => {
  const { image, name, price, description } = props;

  return (
    <div className="card">
      <img src={image} alt={name} />
      <div className="card-info">
        <h2>{name}</h2>
        <p>{price}</p>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default Card;
