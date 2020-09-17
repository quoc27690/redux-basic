import React, { useEffect, useState } from "react";
import Products from "./Products";
import Pagination from "./Pagination";
import ResultTop from "./ResultTop";
import { useDispatch, useSelector } from "react-redux";
import { getCountProducts } from "../../redux/slice/mainSlice";

function Main(props) {
  const [products, setProducts] = useState([]);

  const dispatch = useDispatch();

  const valueSearch = useSelector((state) => state.search.valueSearch);
  const {
    valueTitle,
    valueType,
    valueByType,
    valueByBrand,
    valueByRatings,
    valueByPricesStart,
    valueByPricesEnd,
  } = useSelector((state) => state.menu);
  const { sort, currentPage, productsPerPage } = useSelector(
    (state) => state.main
  );

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
    const actionCountProducts = getCountProducts(products);
    dispatch(actionCountProducts);
  }, [products]);

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  return (
    <div className="main">
      <ResultTop products={products} />
      <Products currentProducts={currentProducts} />
      <Pagination totalProducts={products.length} />
    </div>
  );
}

export default Main;
