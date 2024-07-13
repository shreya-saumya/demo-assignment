import React from 'react';
import './css/card.css';
export default function Card({ imgSrc, bikeDetails, styleProp, headerSlot, onClickFunc, className, startingCard }) {
  return (
    <div className={`card ${className}`} style={{ ...styleProp }} onClick={onClickFunc}>
      {headerSlot && headerSlot}

      {imgSrc && (
        <div>
          <img src={imgSrc} alt="some alt" style={{ maxWidth: '100%' }} />
        </div>
      )}
      {startingCard && <div className="bike-name starting-card-name">{bikeDetails.name}</div> }
      {bikeDetails && !startingCard && (
        <div>
          <div className="bike-name">{bikeDetails.name}</div>
          <div className="bike-model">{bikeDetails.model}</div>
          <div className="bike-price">{bikeDetails.price}</div>
        </div>
      )}
    </div>
  );
}
