import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getClearAllFilter } from "../../redux/slice/menuSlice";
import RefineByBrand from "./RefineByBrand";
import RefineByPrices from "./RefineByPrices";
import RefineByRatings from "./RefineByRatings";
import RefineByType from "./RefineByType";
import ShowResultFor from "./ShowResultFor";

function Menu(props) {
  const [types, setTypes] = useState([]);

  const dispatch = useDispatch();

  const {
    valueTitle,
    valueType,
    valueByType,
    valueByBrand,
    valueByRatings,
    valueByPricesStart,
    valueByPricesEnd,
  } = useSelector((state) => state.menu);

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

  const onClick = (params) => {
    const actionClearAllFilter = getClearAllFilter();
    dispatch(actionClearAllFilter);
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
          <button onClick={() => onClick()}>Clear all filter</button>
        ) : (
          ""
        )}
      </div>
      <div className="menu__result">
        <p className="menu__title-1">Show results for</p>
        <ShowResultFor types={types} />
      </div>
      <hr></hr>
      <div className="menu__refine">
        <p className="menu__title-1">Refine by</p>
        <p className="menu__title-2">Type</p>
        <RefineByType types={types} />
        <p className="menu__title-2">Brand</p>
        <RefineByBrand types={types} />
        <p className="menu__title-2">Ratings</p>
        <RefineByRatings />
        <p className="menu__title-2">Prices</p>
        <RefineByPrices />
      </div>
      <hr></hr>
      <div className="menu__text">Data courtesy of Best Buy</div>
    </div>
  );
}

export default Menu;
