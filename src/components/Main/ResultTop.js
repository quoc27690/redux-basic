import React from "react";
import { useDispatch } from "react-redux";
import { getSort } from "../../redux/slice/mainSlice";

function ResultTop(props) {
  const { products } = props;

  const dispatch = useDispatch();

  const onChange = (value) => {
    const actionSort = getSort(value);
    dispatch(actionSort);
  };

  return (
    <div className="result-top">
      <div className="result-top__left">
        {products.length} results found in 3ms
      </div>
      <div className="result-top__right">
        <label>Sort by</label>
        <select onChange={(value) => onChange(value.target.value)}>
          <option value="">Featured</option>
          <option value="asc">Price asc.</option>
          <option value="desc">Price desc.</option>
        </select>
      </div>
    </div>
  );
}

export default ResultTop;
