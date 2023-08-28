import React from "react";
import Navbar from "../components/Header/Navbar";
import Features from "../components/Features/Features";
import Collection from "../components/Collections/Collection";
import Footer from "../components/footer/Footer";
// import { Zoom } from "react-reveal";
function FeaturePage() {
  return (
    <div>
      <Navbar />
      {/* <Zoom left> */}
      <section
        id="image"
        style={{
          backgroundImage: `url("images/feature.webp")`,
          backgroundSize: "cover",
          height: "50vh",
          width: "100%",
          display: "flex",
          justifyContent: "center",
          textAlign: "center",
          flexDirection: "column",
          padding: "14px",
        }}
        data-aos="fade-right"
        data-aos-offset="300"
        data-aos-easing="ease-in-sine"
      >
        <h2 style={{ color: "#fff" }}>#Feautes</h2>
        <p style={{ color: "#fff" }}>This is page contain feature section </p>
      </section>
      {/* </Zoom> */}
      <Features />
      <Collection />
      <Footer />
    </div>
  );
}

export default FeaturePage;
