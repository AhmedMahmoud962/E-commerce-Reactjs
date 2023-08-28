import React from "react";
import "./Collection.css";
// import Zoom from "react-reveal/Zoom";

function Collection() {
  return (
    <div>
      {/* <Zoom left> */}
      <section
        id="sm-banner"
        className="section-p1"
        data-aos="flip-left"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="2000"
      >
        <div className="banner-box">
          <h4>spring/summer</h4>
          <h2>upcomming season</h2>
          <span>The best classNameic dress is an sale at care </span>
          <button className="btn-white">Collections</button>
        </div>

        <div
          className="banner-box banner-box2"
          data-aos="flip-right"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
        >
          <h4>Crazy deals</h4>
          <h2>buy 1 get 1 free</h2>
          <span>The best classNameic dress is an sale at care </span>
          <button className="btn-white">Learn More</button>
        </div>
      </section>
      {/* </Zoom> */}
      {/* <Zoom> */}
      <section id="banner3">
        <div
          className="banner-box"
          data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
        >
          <h2>T-SHIRTS</h2>
        </div>
        <div
          className="banner-box banner-box2"
          data-aos="flip-right"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
        >
          <h2>SEASONAL SALE</h2>
        </div>
        <div
          className="banner-box banner-box3"
          data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
        >
          <h2>NEW COLLECTION</h2>
        </div>
      </section>
      {/* </Zoom> */}
    </div>
  );
}

export default Collection;
