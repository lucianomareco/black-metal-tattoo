import React from "react";

import "../assets/styles/components/Card.scss";

function Card({ imageSource, name , instagram, phoneNumber }) {

  const WPP_URL = "https://wa.me/" + phoneNumber + "?text=Hola%20" + name + ",%20te%20vi%20en%20blackmetaltattoo%20y%20me%20gustaría%20hacerte%20una%20consulta";
  
  return (
    <div className="card text-center bg-dark animate__animated animate__fadeInUp  mx-auto">
      <div className="overflow">
        <img src={imageSource} alt="a wallpaper" className="card-img-top" />
      </div>
      <div className="data-container">
        <a href={WPP_URL} target="_blank"><i className="fab fa-whatsapp"></i></a>
        <a href={"https://www.instagram.com/" + instagram } target="_blank"><i className="fab fa-instagram"></i></a>
        <h4 className="card-title">{name}</h4>
      </div>
    </div>
  );
}

export default Card;