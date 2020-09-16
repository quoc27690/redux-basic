import React from "react";

function ResultTop(props) {
  const { products, handleSort } = props;

  return (
    <div className="result-top">
      <div className="result-top__left">
        {products.length} results found in 3ms
      </div>
      <div className="result-top__right">
        <label>Sort by</label>
        <select onChange={(value) => handleSort(value.target.value)}>
          <option value="">Featured</option>
          <option value="asc">Price asc.</option>
          <option value="desc">Price desc.</option>
        </select>
      </div>
    </div>
  );
}

export default ResultTop;
