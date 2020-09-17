import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCurrentPage } from "../../redux/slice/mainSlice";

function Pagination(props) {
  const { totalProducts } = props;

  const dispatch = useDispatch();

  const { currentPage, productsPerPage } = useSelector((state) => state.main);

  const pageNumber = [];
  const totalPages = Math.ceil(totalProducts / productsPerPage);

  for (let i = 1; i <= totalPages; i++) {
    pageNumber.push(i);
  }

  const onClick = (currentPage) => {
    const actionCurrentPage = getCurrentPage(currentPage);
    dispatch(actionCurrentPage);
  };

  return (
    <div className="pagination">
      <ul>
        <li>
          <button
            disabled={currentPage <= 1}
            onClick={() => onClick(currentPage - 1)}
          >
            <i className="fa fa-angle-left"></i> Previous page
          </button>
        </li>
        {pageNumber.map((e, i) => (
          <li key={i} onClick={() => onClick(e)}>
            <span>{e}</span>
          </li>
        ))}
        <li>
          <button
            disabled={currentPage >= totalPages}
            onClick={() => onClick(currentPage + 1)}
          >
            Next page <i className="fa fa-angle-right"></i>
          </button>
        </li>
      </ul>
    </div>
  );
}

export default Pagination;
