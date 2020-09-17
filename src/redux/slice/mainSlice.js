import { createSlice } from "@reduxjs/toolkit";

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

    getProducts(state, action) {
      state.products.push(action.payload);
    },
  },
});

const { reducer, actions } = mainSlice;
export const {
  getCountProducts,
  getSort,
  getCurrentPage,
  getProducts,
} = actions;
export default reducer;
