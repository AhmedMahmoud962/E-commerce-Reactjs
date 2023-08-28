import React from "react";
import Blog from "../components/Blog/Blog";
import Navbar from "../components/Header/Navbar";
import Footer from "../components/footer/Footer";
import Pagination from "../components/pagnation/Pagination";
// import { Zoom } from "react-reveal";

function FeaturesPage() {
  return (
    <div>
      <Navbar />
      {/* <Zoom left> */}
      <section
        id="image"
        style={{
          backgroundImage: `url("images/blogbg.jpeg")`,
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
        <h2 style={{ color: "#fff" }}>#Blog</h2>
        <p style={{ color: "#fff" }}>This is page contain blog section </p>
      </section>
      {/* </Zoom> */}
      <Blog />
      <Pagination />
      <Footer />
    </div>
  );
}

export default FeaturesPage;
