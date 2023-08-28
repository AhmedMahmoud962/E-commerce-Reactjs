import React from "react";
import Contact from "../components/Contact/Contact";
import Navbar from "../components/Header/Navbar";
import Footer from "../components/footer/Footer";
// import { Zoom } from "react-reveal";

function ContactPage() {
  return (
    <div>
      <Navbar />
      {/* <Zoom left> */}
      <section
        id="page-contact"
        className="page-contact"
        style={{
          backgroundImage: `url("images/contactbg.webp")`,
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
        <h2 style={{ color: "white" }}>#Contact Us</h2>
        <p style={{ color: "white" }}>LEAVE A MESSAGE.WE LOVE TO READ IT! </p>
      </section>
      {/* </Zoom> */}
      <Contact />
      <Footer />
    </div>
  );
}

export default ContactPage;
