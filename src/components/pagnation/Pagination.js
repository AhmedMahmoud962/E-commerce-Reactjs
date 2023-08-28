import React from "react";
import "./Pagination.css";
const Pagination = () => {
  return (
    <div
      className="pagination"
      data-aos="fade-right"
      data-aos-offset="300"
      data-aos-easing="ease-in-sine"
    >
      <button className="prev">Previous</button>
      <ul className="page-numbers">
        <li>
          <a href="#1">1</a>
        </li>
        <li>
          <a href="#1">2</a>
        </li>
        <li>
          <a href="#1">3</a>
        </li>
        <li>
          <a href="#1">4</a>
        </li>
        <li>
          <a href="#1">5</a>
        </li>
      </ul>
      <button className="next">Next</button>
    </div>
  );
};

export default Pagination;
