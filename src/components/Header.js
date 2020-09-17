import React from "react";
import { useDispatch } from "react-redux";
import { getSearch } from "../redux/slice/searchSlice";

function Header(props) {
  const dispatch = useDispatch();

  const onChange = (value) => {
    const action = getSearch(value);
    dispatch(action);
  };

  return (
    <header>
      <a href="./" className="header__logo">
        <img
          src="https://community.algolia.com/instantsearch.js/v1/examples/e-commerce/logo-is.png"
          alt=""
        />
      </a>
      <a href="./" className="header__text">
        amazing
      </a>
      <div className="header__input">
        <input
          placeholder="Search a product"
          onChange={(value) => onChange(value.target.value)}
        />
        <button>
          <i className="fa fa-search"></i>
        </button>
      </div>
    </header>
  );
}

export default Header;
