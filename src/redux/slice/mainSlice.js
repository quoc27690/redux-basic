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
    isLoading: false,
    error: "",
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
    [getProducts.pending]: (state) => {
      state.isLoading = true;
    },

    [getProducts.fulfilled]: (state, action) => {
      state.products = action.payload;
      state.isLoading = false;
    },

    [getProducts.rejected]: (state, action) => {
      state.error = action.error;
      state.isLoading = false;
    },
  },
});

const { reducer, actions } = mainSlice;
export const { getCountProducts, getSort, getCurrentPage } = actions;
export default reducer;
