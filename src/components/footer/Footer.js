import React from "react";
import "./Footer.css";
// import Zoom from "react-reveal/Zoom";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    // <Zoom left>
    <div className="footer">
      <div
        className="heading"
        data-aos="fade-up"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="2000"
      >
        <h2>
          COZA<span>STORE</span>
        </h2>
      </div>
      <div className="content">
        <div
          className="services"
          data-aos="fade-up"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
        >
          <h4>Services</h4>
          <p>Frontend Developer</p>
          <p>App development</p>
          <p>Web development</p>
          <p>ReactJs Developer</p>
          <p>Web designing</p>
        </div>
        <div
          className="social-media"
          data-aos="fade-up"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
        >
          <h4>Social</h4>
          <p>
            <a
              href="https://www.linkedin.com/in/ahmed-mahmoud-0461a6213/"
              target="blank"
            >
              <i className="fab fa-linkedin"></i> Linkedin
            </a>
          </p>

          <p>
            <a href="https://github.com/AhmedMahmoud962" target="blank">
              <i className="fab fa-github"></i> Github
            </a>
          </p>
          <p>
            <a
              href="https://www.facebook.com/mahmoud.ashour.96343405/"
              target="blank"
            >
              <i className="fab fa-facebook"></i> Facebook
            </a>
          </p>
          <p>
            <a
              href="https://portfolio-ahmedmahmoud.netlify.app/"
              target="blank"
            >
              <i className="fab fa-twitter"></i> Portfolio
            </a>
          </p>
          <p>
            <a href="https://twitter.com/AhmedMa44395518" target="blank">
              <i className="fab fa-twitter"></i> Twitter
            </a>
          </p>
          {/* <p>
              <a href="https://www.instagram.com/codewithfaraz" target="blank">
                <i className="fab fa-instagram"></i> Instagram
              </a>
            </p> */}
        </div>
        <div
          className="links"
          data-aos="fade-up"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
        >
          <h4>Quick links</h4>
          <p>
            <NavLink to="/home">Home</NavLink>
          </p>
          <p>
            <NavLink to="/shop">Shop</NavLink>
          </p>
          <p>
            <NavLink to="/about">About</NavLink>
          </p>
          <p>
            <NavLink to="/feature">Features</NavLink>
          </p>
          <p>
            <NavLink to="/blog">Blog</NavLink>
          </p>
          <p>
            <NavLink to="/contact">Contact</NavLink>
          </p>
        </div>
        <div
          className="details"
          data-aos="fade-up"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
        >
          <h4 className="address">Address</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur <br />
            adipisicing elit. Cupiditate, qui!
          </p>
          <h4 className="mobile">Mobile</h4>
          <p>
            <a href="https://wa.me/+2001033993202" target="blank">
              +20 01033993202
            </a>
          </p>
          <h4 className="mail">Email</h4>
          <p>
            <a
              href="https://portfolio-ahmedmahmoud.netlify.app/"
              target="blank"
            >
              ahmedmahmoud921@gmail.com
            </a>
          </p>
        </div>
      </div>
      <footer>
        <div style={{ padding: "10px 5px" }}>
          © 2023 Designed by{" "}
          <a
            style={{ textDecoration: "none", color: "#fff" }}
            href="https://github.com/AhmedMahmoud962"
            target="blank"
          >
            Ahmed Mahmoud
          </a>{" "}
          .
        </div>
      </footer>
    </div>
    // </Zoom>
  );
};

export default Footer;
