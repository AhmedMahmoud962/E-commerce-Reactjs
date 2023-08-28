import React from "react";
import Card from "./Card";
import Button from "../buttons/Button.js";
// import Zoom from "react-reveal/Zoom";
import "./Card.css";

const CardContainer = ({ ItemData, filterByCategory, allCategory }) => {
  return (
    <div>
      {/* <Zoom left> */}
      <div
        data-aos="fade-right"
        data-aos-offset="100"
        data-aos-easing="ease-in-sine"
      >
        <h2
          id="product"
          style={{
            textAlign: "center",
            marginBottom: "15px",
            marginTop: "30px",
            fontSize: "30px",
          }}
        >
          <span style={{ color: "#027b9a" }}>Featured </span>Products
        </h2>
      </div>

      <Button filterByCategory={filterByCategory} allCategory={allCategory} />
      <div className="card-container">
        {ItemData.map((card, index) => (
          <Card
            key={index}
            image={card.image}
            title={card.title}
            price={card.price}
          />
        ))}
      </div>
      {/* </Zoom> */}
    </div>
  );
};

export default CardContainer;
