import React, { useEffect } from "react";
import Products from "./Products";
import Pagination from "./Pagination";
import ResultTop from "./ResultTop";
import { useDispatch, useSelector } from "react-redux";
import { getCountProducts, getProducts } from "../../redux/slice/mainSlice";
import { unwrapResult } from "@reduxjs/toolkit";

function Main(props) {
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
  const {
    sort,
    currentPage,
    productsPerPage,
    products,
    isLoading,
    error,
  } = useSelector((state) => state.main);

  console.log(error, products);

  useEffect(() => {
    const actionProducts = getProducts({
      valueTitle,
      valueType,
      valueByType,
      valueByBrand,
      valueByRatings,
      valueByPricesStart,
      valueByPricesEnd,
      sort,
      valueSearch,
    });

    dispatch(actionProducts);
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
    dispatch,
  ]);

  useEffect(() => {
    const actionCountProducts = getCountProducts(products);
    dispatch(actionCountProducts);
  }, [dispatch, products]);

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  return (
    <div className="main">
      {isLoading ? (
        <h1>Loading...</h1>
      ) : error ? (
        <h1>{error.message}</h1>
      ) : (
        <div>
          {" "}
          <ResultTop products={products} />
          <Products currentProducts={currentProducts} />
          <Pagination totalProducts={products.length} />
        </div>
      )}
    </div>
  );
}

export default Main;
