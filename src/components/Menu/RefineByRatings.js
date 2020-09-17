import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getByRatings } from "../../redux/slice/menuSlice";

function RefineByRatings(props) {
  const dispatch = useDispatch();

  const valueByRatings = useSelector((state) => state.menu.valueByRatings);

  const ratings = [4, 3, 2, 1];

  const productRaitngs = (rating) => {
    let stars = [];
    for (let i = 0; i < rating; i++) {
      stars.push(<span className="fa fa-star" key={i} />);
    }
    for (let i = 0; i < 5 - rating; i++) {
      stars.push(<span className="fa fa-star-o" key={5 - i} />);
    }
    return stars;
  };

  const onClick = (rating) => {
    const actionByRatings = getByRatings(rating);
    dispatch(actionByRatings);
  };

  return (
    <div className="refine-by-ratings">
      <ul>
        {ratings.map((e, i) => (
          <li
            key={i}
            onClick={() => onClick(e)}
            className={valueByRatings === e ? "active" : ""}
          >
            {productRaitngs(e)} & Up
          </li>
        ))}
      </ul>
    </div>
  );
}

export default RefineByRatings;
