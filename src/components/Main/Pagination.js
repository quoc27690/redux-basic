import React from "react";

function Pagination(props) {
  const { currentPage, productsPerPage, totalProducts, handlePaginate } = props;

  const pageNumber = [];
  const totalPages = Math.ceil(totalProducts / productsPerPage);

  for (let i = 1; i <= totalPages; i++) {
    pageNumber.push(i);
  }

  return (
    <div className="pagination">
      <ul>
        <li>
          <button
            disabled={currentPage <= 1}
            onClick={() => handlePaginate(currentPage - 1)}
          >
            <i className="fa fa-angle-left"></i> Previous page
          </button>
        </li>
        {pageNumber.map((e, i) => (
          <li key={i} onClick={() => handlePaginate(e)}>
            <span>{e}</span>
          </li>
        ))}
        <li>
          <button
            disabled={currentPage >= totalPages}
            onClick={() => handlePaginate(currentPage + 1)}
          >
            Next page <i className="fa fa-angle-right"></i>
          </button>
        </li>
      </ul>
    </div>
  );
}

export default Pagination;
