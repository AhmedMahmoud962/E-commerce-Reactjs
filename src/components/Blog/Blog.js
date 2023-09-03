import React from "react";
import "./Blog.css";
import BlogData from "../../BlogData";
// import Roll from "react-reveal/Roll";

function Blog() {
  return (
    <div>
      {/* <Roll left> */}
      <section id="blog">
        {BlogData.length >= 1 ? (
          BlogData.map((item) => {
            return (
              <div key={item.id} className="blog-box">
                <div
                  className="blog-img"
                  data-aos="fade-up"
                  data-aos-duration="3000"
                >
                  <img loading="lazy" src={item.image} alt="" />
                </div>
                <div
                  className="blog-text"
                  data-aos="fade-up"
                  data-aos-duration="3000"
                >
                  <h4
                    style={{
                      marginBottom: "20px",
                      fontSize: "22px",
                      color: "#027b9a",
                    }}
                  >
                    {item.title}
                  </h4>
                  <p style={{ marginBottom: "20px" }}>{item.description}</p>
                  <button className="btn-Noramal">{item.button}</button>
                </div>
              </div>
            );
          })
        ) : (
          <h1>No data to display </h1>
        )}
      </section>
      {/* </Roll> */}
    </div>
  );
}

export default Blog;
