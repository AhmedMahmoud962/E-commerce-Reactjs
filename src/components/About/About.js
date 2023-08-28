/* eslint-disable jsx-a11y/no-distracting-elements */
import React from "react";
import "./About.css";
// import Roll from "react-reveal/Roll";

function About() {
  return (
    <>
      {/* <Roll left> */}
      <section
        id="about"
        className="section-p1"
        data-aos="fade-up"
        data-aos-duration="3000"
      >
        <div className="about-img">
          <img src="images/about/1.jpg" alt="" />
        </div>
        <div className="about-text" data-aos="fade-up" data-aos-duration="3000">
          <h2>Who We Are?</h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque
            provident veniam ullam temporibus ratione deleniti sunt culpa cumque
            expedita nostrum, laudantium placeat tempore, repellat libero sequi
            maiores consequatur voluptates doloremque! Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Mollitia eos accusamus nisi amet
            corporis ut. Earum aspernatur eveniet quidem odio vitae nesciunt
            facilis eius aliquid cupiditate, inventore iste dolorem saepe.
            <br />
            <abbr title="">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas,
              delectus, obcaecati voluptate aliquam ut quam labore id
              consequatur atque error cupiditate similique! Dolore quo nam ullam
              facilis quae. Error, quis.
            </abbr>
            <br />
            <marquee>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas,
              delectus, obcaecati voluptate aliquam ut quam labore id
              consequatur atque error cupiditate similique! Dolore quo nam ullam
              facilis quae. Error, quis.
            </marquee>
          </p>
        </div>
      </section>
      {/* </Roll> */}
      {/* <Roll left> */}
      <section
        id="about-app"
        class="section-p1"
        data-aos="flip-left"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="1500"
      >
        <h2>
          Download Our <a href="#App">App</a>{" "}
        </h2>
        <div class="video">
          <img src="images/about/a6.jpg" alt="" />
        </div>
      </section>
      {/* </Roll> */}
    </>
  );
}

export default About;
