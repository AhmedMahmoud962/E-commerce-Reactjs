import React from "react";
import About from "../components/About/About";
import Navbar from "../components/Header/Navbar";
import Footer from "../components/footer/Footer";
// import { Zoom } from "react-reveal";

function AboutPage() {
  return (
    <div>
      <Navbar />
      {/* <Zoom left> */}
      <section
        id="image"
        style={{
          backgroundImage: `url("images/banner.png")`,
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
        <h2 style={{ color: "#fff" }}>#About</h2>
        <p style={{ color: "#fff" }}>This is page contain About section </p>
      </section>
      {/* </Zoom> */}
      <About />
      <Footer />
    </div>
  );
}

export default AboutPage;
