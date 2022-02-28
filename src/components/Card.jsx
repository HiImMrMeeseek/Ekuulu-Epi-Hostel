import React, { useState } from "react";
import '../css/Card.css';

const Card = ({ producto }) => {
  const {title, image, restaurantChain, id} = producto;

  const randomNumber = () => {
    var rNum = Math.floor(Math.random() * 51);
    return rNum;
  }


  return (
    <>
          <>
            <div className="card">
              <div className="card-img-container">
                <img id="card-img" src={image} className="card-img-top" alt="..." />
              </div>
              <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-info">
                  <strong>Restaurante:</strong> {restaurantChain}
                </p>
                <p className="card-info">
                  <strong>Precio:</strong> ${randomNumber()}.{randomNumber()}
                </p>
              </div>
            </div>
          </>

    </>
  );
};

export default Card;
