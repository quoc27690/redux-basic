import React, { useState, useEffect } from "react";
import RefineByBrand from "./RefineByBrand";
import RefineByPrices from "./RefineByPrices";
import RefineByRatings from "./RefineByRatings";
import RefineByType from "./RefineByType";
import ShowResultFor from "./ShowResultFor";

function Menu(props) {
  const {
    handleTitle,
    handleType,
    handleByType,
    handleByBrand,
    handleByRatings,
    handleByPrices,
    valueByBrand,
    valueByPricesEnd,
    valueByPricesStart,
    valueByRatings,
    valueByType,
    valueTitle,
    valueType,
    handleClearAllFilter,
    countProducts,
  } = props;

  const [types, setTypes] = useState([]);

  const [valueIdTitle, setvalueIdTitle] = useState("");
  const [valueIdType, setvalueIdType] = useState("");

  useEffect(() => {
    let xhttp = new XMLHttpRequest();
    let url = "http://localhost:4000/types";
    xhttp.open("GET", url, true);
    xhttp.send();
    xhttp.onreadystatechange = () => {
      if (xhttp.readyState === 4 && xhttp.status === 200) {
        setTypes(JSON.parse(xhttp.responseText));
      }
    };
  }, []);

  const handleIdTitle = (id) => {
    setvalueIdTitle(id);
  };

  const handleIdType = (id) => {
    setvalueIdType(id);
  };

  return (
    <div className="menu">
      <div className="menu__clear">
        {valueByBrand.length > 0 ||
        valueByPricesEnd ||
        valueByPricesStart ||
        valueByRatings ||
        valueByType.length > 0 ||
        valueTitle ||
        valueType ? (
          <button onClick={() => handleClearAllFilter()}>
            Clear all filter
          </button>
        ) : (
          ""
        )}
      </div>
      <div className="menu__result">
        <p className="menu__title-1">Show results for</p>
        <ShowResultFor
          types={types}
          handleIdTitle={handleIdTitle}
          handleIdType={handleIdType}
          handleTitle={handleTitle}
          handleType={handleType}
          valueIdTitle={valueIdTitle}
          valueIdType={valueIdType}
          valueTitle={valueTitle}
          valueType={valueType}
        />
      </div>
      <hr></hr>
      <div className="menu__refine">
        <p className="menu__title-1">Refine by</p>
        <p className="menu__title-2">Type</p>
        <RefineByType
          types={types}
          valueIdTitle={valueIdTitle}
          valueByType={valueByType}
          handleByType={handleByType}
          countProducts={countProducts}
        />
        <p className="menu__title-2">Brand</p>
        <RefineByBrand
          types={types}
          valueIdTitle={valueIdTitle}
          valueIdType={valueIdType}
          valueByBrand={valueByBrand}
          handleByBrand={handleByBrand}
          countProducts={countProducts}
        />
        <p className="menu__title-2">Ratings</p>
        <RefineByRatings
          handleByRatings={handleByRatings}
          valueByRatings={valueByRatings}
        />
        <p className="menu__title-2">Prices</p>
        <RefineByPrices
          handleByPrices={handleByPrices}
          valueByPricesStart={valueByPricesStart}
          valueByPricesEnd={valueByPricesEnd}
        />
      </div>
      <hr></hr>
      <div className="menu__text">Data courtesy of Best Buy</div>
    </div>
  );
}

export default Menu;
