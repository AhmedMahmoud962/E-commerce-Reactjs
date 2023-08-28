import React from "react";
import "./Card.css";
// import Zoom from "react-reveal/Zoom";

const Card = ({ image, title, price }) => {
  return (
    // <Zoom left>
    <div
      className="card"
      data-aos="flip-left"
      data-aos-easing="ease-out-cubic"
      data-aos-duration="2000"
    >
      <img src={image} alt={title} className="card-image" />

      <p className="card-title">Product {title}</p>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginTop: "0",
        }}
      >
        <h3 className="card-title" style={{ opacity: ".5" }}>
          {price}
        </h3>
        <img
          className="card-title"
          style={{ width: "25px" }}
          src="images/icon.png"
          alt=""
        />
      </div>
    </div>
    // </Zoom>
  );
};

export default Card;
