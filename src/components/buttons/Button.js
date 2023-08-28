import React from "react";
import "./Button.css";
// import Zoom from "react-reveal/Zoom";

const Button = ({ filterByCategory, allCategory }) => {
  // to filter by category
  const onFilter = (cat) => {
    filterByCategory(cat);
  };
  return (
    <div className="button-group">
      {/* <Zoom left> */}
      {allCategory.length >= 1 ? (
        allCategory.map((btn) => {
          return (
            <div
              key={btn.id}
              data-aos="flip-left"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="1500"
            >
              <button onClick={() => onFilter(btn)}>{btn}</button>
            </div>
          );
        })
      ) : (
        <h2>No data to display</h2>
      )}
      {/* <div className="button-group">
        <button onClick={() => onFilter("All")}>All</button>
        <button onClick={() => onFilter("Product Men")}>Men</button>
        <button onClick={() => onFilter("Product Woman")}>Woman</button>
        <button onClick={() => onFilter("Product Acessories")}>Acessories</button>
      </div> */}
      {/* </Zoom> */}
    </div>
  );
};

export default Button;
