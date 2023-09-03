import React from "react";
import "./Features.css";
// import Fade from "react-reveal/Fade";

const Features = () => {
  const features = [
    {
      id: 1,
      image: "images/h4.webp",
      title: "Women",
      description: "Spring 2023",
    },
    {
      id: 2,
      image: "images/h5.webp",
      title: " Men ",
      description: "Spring 2023",
    },
    {
      id: 3,
      image: "images/h6.webp",
      title: "Acessories",
      description: "Spring 2023",
    },
  ];
  return (
    // <Fade left>
    <section id="Types">
      <div className="Types-box">
        {features.length >= 1 ? (
          features.map((item) => {
            return (
              <div
                key={item.id}
                className="single-Types"
                data-aos="flip-left"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="2000"
              >
                <img loading="lazy" src={item.image} alt="" />
                <div className="overlay"></div>
                <div className="Types-desc">
                  <h2>{item.title}</h2>

                  <small> {item.description}</small>
                </div>
              </div>
            );
          })
        ) : (
          <h1>No data to display </h1>
        )}
      </div>
    </section>
    // </Fade>
  );
};

export default Features;
