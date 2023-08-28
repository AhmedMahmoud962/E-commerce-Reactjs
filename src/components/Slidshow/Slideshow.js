import React, { useState, useEffect } from "react";
import "./Slideshow.css";
// import Slide from "react-reveal/Slide";

const Slideshow = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prevSlide) =>
        prevSlide === slides.length - 1 ? 0 : prevSlide + 1
      );
    }, 4000);
    return () => clearInterval(interval);
  });

  const slides = [
    {
      image: "images/h2.webp",
      title: "Men Collections 2023",
      description: "NEW ARREIVES.",
      btn: "Shop Now",
    },
    {
      image: "images/h1.webp",
      title: " Men Collections 2023 ",
      description: "JACKETS && COATS",
      btn: "Shop Now",
    },
    {
      image: "images/h3.webp",
      title: "Womman Collections 2023",
      description: "NEW SEASON",
      btn: "Shop Now",
    },
  ];

  const handlePrevSlide = () => {
    setActiveSlide((prevSlide) =>
      prevSlide === 0 ? slides.length - 1 : prevSlide - 1
    );
  };

  const handleNextSlide = () => {
    setActiveSlide((prevSlide) =>
      prevSlide === slides.length - 1 ? 0 : prevSlide + 1
    );
  };

  return (
    // <Slide left>
    <div
      id="home"
      className="slideshow"
      data-aos="fade-up-left"
      // data-aos="fade-up"
      data-aos-duration="3000"
    >
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`slide ${index === activeSlide ? "active" : ""}`}
          style={{ backgroundImage: `url(${slide.image})` }}
        >
          <div className="slide-content">
            <h3 className="slide-title">{slide.title}</h3>
            <p className="slide-description">{slide.description}</p>
            <button className="btn">{slide.btn}</button>
          </div>
        </div>
      ))}
      <button className="slideshow-button prev" onClick={handlePrevSlide}>
        &lt;
      </button>
      <button className="slideshow-button next" onClick={handleNextSlide}>
        &gt;
      </button>
    </div>
    // </Slide>
  );
};

export default Slideshow;
