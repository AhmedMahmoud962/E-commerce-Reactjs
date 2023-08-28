import { useState } from "react";
import Navbar from "../components/Header/Navbar";
import Pagination from "../components/pagnation/Pagination";
import Products from "../components/Products/Container";
import Footer from "../components/footer/Footer";
import cardData from "../CardData";
// import { Zoom } from "react-reveal";

function Shop() {
  const [ItemData, setItemData] = useState(cardData);
  // for but buttons dynamic
  const allCategory = ["All", ...new Set(cardData.map((item) => item.title))];
  // filter by  category
  const filterByCategory = (cat) => {
    if (cat === "All") {
      setItemData(cardData);
    } else {
      const newArray = cardData.filter((item) => item.title === cat);
      setItemData(newArray);
    }
  };
  return (
    <div className="App">
      <Navbar />
      {/* <Zoom left> */}
      <section
        id="page-contact"
        className="page-contact"
        style={{
          backgroundImage: `url("images/banner/b1.jpg")`,
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
        <h2 style={{ color: "#fff" }}>#Shop Now </h2>
        <p style={{ color: "#fff" }}>
          This page displayed products in website{" "}
        </p>
      </section>
      {/* </Zoom> */}

      <Products
        ItemData={ItemData}
        filterByCategory={filterByCategory}
        allCategory={allCategory}
      />
      <Pagination />
      <Footer />
    </div>
  );
}

export default Shop;
