import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import fetchProducts from "../../components/api/fetchProducts";

export const getProducts = createAsyncThunk(
  "getProducts",
  async ({
    valueTitle,
    valueType,
    valueByType,
    valueByBrand,
    valueByRatings,
    valueByPricesStart,
    valueByPricesEnd,
    sort,
    valueSearch,
  }) => {
    const currentProducts = await fetchProducts({
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
    return currentProducts;
  }
);

const mainSlice = createSlice({
  name: "mainSlice",
  initialState: {
    countProducts: "",
    sort: "",
    currentPage: 1,
    productsPerPage: 4,
    products: [],
  },
  reducers: {
    getCountProducts(state, action) {
      state.countProducts = action.payload;
    },

    getSort(state, action) {
      state.sort = action.payload;
    },

    getCurrentPage(state, action) {
      state.currentPage = action.payload;
    },
  },
  extraReducers: {
    [getProducts.fulfilled]: (state, action) => {
      state.products = action.payload;
    },
  },
});

const { reducer, actions } = mainSlice;
export const { getCountProducts, getSort, getCurrentPage } = actions;
export default reducer;
