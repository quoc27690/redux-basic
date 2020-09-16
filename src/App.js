import React, { useState } from "react";
import "./scss/styles.scss";
import Header from "./components/Header";
import Main from "./components/Main/Main";
import Menu from "./components/Menu/Menu";

function App() {
  const [valueTitle, setValueTitle] = useState("");
  const [valueType, setValueType] = useState("");
  const [valueByType, setValueByType] = useState([]);
  const [valueByBrand, setValueByBrand] = useState([]);
  const [valueByRatings, setValueByRatings] = useState("");
  const [valueByPricesStart, setValueByPricesStart] = useState("");
  const [valueByPricesEnd, setValueByPricesEnd] = useState("");
  const [countProducts, setCountProducts] = useState("");
  const [valueSearch, setValueSearch] = useState("");

  const handleTitle = (title) => {
    setValueTitle(title);
  };

  const handleType = (type) => {
    setValueType(type);
  };

  const handleByType = (byType) => {
    setValueByType(byType);
  };

  const handleByBrand = (byBrand) => {
    setValueByBrand(byBrand);
  };

  const handleByRatings = (byRating) => {
    setValueByRatings(byRating);
  };

  const handleByPrices = (start, end) => {
    setValueByPricesStart(start);
    setValueByPricesEnd(end);
  };

  const handleClearAllFilter = () => {
    setValueTitle("");
    setValueType("");
    setValueByType([]);
    setValueByBrand([]);
    setValueByRatings("");
    setValueByPricesStart("");
    setValueByPricesEnd("");
  };

  const handleProducts = (products) => {
    setCountProducts(products);
  };

  const handleSearch = (value) => {
    setValueSearch(value);
  };

  return (
    <div>
      <Header handleSearch={handleSearch} />
      <div>
        <Menu
          handleTitle={handleTitle}
          handleType={handleType}
          handleByType={handleByType}
          handleByBrand={handleByBrand}
          handleByRatings={handleByRatings}
          handleByPrices={handleByPrices}
          handleClearAllFilter={handleClearAllFilter}
          valueByBrand={valueByBrand}
          valueByPricesEnd={valueByPricesEnd}
          valueByPricesStart={valueByPricesStart}
          valueByRatings={valueByRatings}
          valueByType={valueByType}
          valueTitle={valueTitle}
          valueType={valueType}
          countProducts={countProducts}
        />
        <Main
          valueTitle={valueTitle}
          valueType={valueType}
          valueByType={valueByType}
          valueByBrand={valueByBrand}
          valueByRatings={valueByRatings}
          valueByPricesStart={valueByPricesStart}
          valueByPricesEnd={valueByPricesEnd}
          handleProducts={handleProducts}
          valueSearch={valueSearch}
        />
      </div>
    </div>
  );
}

export default App;
