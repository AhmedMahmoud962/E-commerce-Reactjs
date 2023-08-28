import { useState } from "react";
import Navbar from "../components/Header/Navbar";
import Slideshow from "../components/Slidshow/Slideshow";
import Features from "../components/Features/Features";
import Pagination from "../components/pagnation/Pagination";
import Products from "../components/Products/Container";
import Footer from "../components/footer/Footer";
import cardData from "../CardData";
import Banner from "../components/Banner/Banner";
import Collection from "../components/Collections/Collection";
// import About from "../components/About/About";

function Home() {
  const [ItemData, setItemData] = useState(cardData);
  // for but buttons dynamic
  const allCategory = [
    "All",
    ...new Set(cardData.map((item) => item.category)),
  ];
  // filter by  category
  const filterByCategory = (cat) => {
    if (cat === "All") {
      setItemData(cardData);
    } else {
      const newArray = cardData.filter((item) => item.category === cat);
      setItemData(newArray);
    }
  };
  return (
    <div className="App">
      <Navbar />
      <Slideshow />
      <Features />
      <Products
        ItemData={ItemData}
        filterByCategory={filterByCategory}
        allCategory={allCategory}
      />
      <Pagination />
      <Banner />
      <Collection />
      <Footer />
    </div>
  );
}

export default Home;
