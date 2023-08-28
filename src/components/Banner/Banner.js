import React from "react";
import "./Banner.css";
// import Zoom from "react-reveal/Zoom";

function Banner() {
  return (
    // <Zoom left>
    <div
      data-aos="fade-right"
      data-aos-offset="300"
      data-aos-easing="ease-in-sine"
    >
      <section id="banner" className="section-ml">
        <h4>Repair Services</h4>
        <h2>
          Up to <span>70% offer </span> - All T-Shirts & Accessories
        </h2>
        <button className="btn-Noramal">Explore More</button>
      </section>
    </div>
    // </Zoom>
  );
}

export default Banner;
