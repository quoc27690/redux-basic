import React, { useEffect, useState } from "react";
import Products from "./Products";
import Pagination from "./Pagination";
import ResultTop from "./ResultTop";

function Main(props) {
  const {
    valueTitle,
    valueType,
    valueByType,
    valueByBrand,
    valueByRatings,
    valueByPricesStart,
    valueByPricesEnd,
    handleProducts,
    valueSearch,
  } = props;

  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage, setProductsPerPage] = useState(4);

  const [sort, setSort] = useState("");

  useEffect(() => {
    let xhttp = new XMLHttpRequest();
    let url = `http://localhost:4000/products?`;

    if (valueTitle) {
      url += `&title=${valueTitle}`;
    }

    if (valueType) {
      url += `&type=${valueType}`;
    }

    if (valueByType.length > 0) {
      for (let i = 0; i < valueByType.length; i++) {
        url += `&byType=${valueByType[i]}`;
      }
    }

    if (valueByBrand.length > 0) {
      for (let i = 0; i < valueByBrand.length; i++) {
        url += `&brand=${valueByBrand[i]}`;
      }
    }

    if (valueByRatings) {
      if (valueByRatings !== 4) {
        for (let i = valueByRatings; i <= 4; i++) {
          url += `&ratings=${i}`;
        }
      }
      url += `&ratings=${valueByRatings}`;
    }

    if (valueByPricesStart) {
      url += `&price_gte=${valueByPricesStart}`;
    }

    if (valueByPricesEnd) {
      url += `&price_lte=${valueByPricesEnd}`;
    }

    if (sort) {
      url += `&_sort=price&_order=${sort}`;
    }

    if (valueSearch) {
      url += `&q=${valueSearch}`;
    }

    xhttp.open("GET", url, true);
    xhttp.send();
    xhttp.onreadystatechange = () => {
      if (xhttp.readyState === 4 && xhttp.status === 200) {
        setProducts(JSON.parse(xhttp.responseText));
      }
    };
  }, [
    valueTitle,
    valueType,
    valueByType,
    valueByBrand,
    valueByRatings,
    valueByPricesStart,
    valueByPricesEnd,
    sort,
    valueSearch,
  ]);

  useEffect(() => {
    handleProducts(products);
  }, [products]);

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  const handlePaginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleSort = (value) => {
    setSort(value);
  };

  return (
    <div className="main">
      <ResultTop products={products} handleSort={handleSort} />
      <Products currentProducts={currentProducts} />
      <Pagination
        currentPage={currentPage}
        productsPerPage={productsPerPage}
        totalProducts={products.length}
        handlePaginate={handlePaginate}
      />
    </div>
  );
}

export default Main;
