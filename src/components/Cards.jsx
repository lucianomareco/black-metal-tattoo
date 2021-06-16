  
import React from "react";
import Card from "./Card";
import "../assets/styles/components/Cards.scss";
import tattooersList from '../../tattooersList.js';



function Cards() {
  return (
    <div className="cards">
        {tattooersList.map(({ name, image, instagram, phoneNumber, id }) => (
          <div key={id}>
            <Card imageSource={image} name={name} instagram={instagram} phoneNumber={phoneNumber} />
          </div>
        ))}
    </div>
  );
}

export default Cards;