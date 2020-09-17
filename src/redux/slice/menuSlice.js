import { createSlice } from "@reduxjs/toolkit";

const menuSlice = createSlice({
  name: "menuSlice",
  initialState: {
    valueTitle: "",
    valueType: "",
    valueByType: [],
    valueByBrand: [],
    valueByRatings: "",
    valueByPricesStart: "",
    valueByPricesEnd: "",
    valueIdTitle: "",
    valueIdType: "",
  },
  reducers: {
    getTitle(state, action) {
      state.valueTitle = action.payload;
    },

    getType(state, action) {
      state.valueType = action.payload;
    },

    getIdTitle(state, action) {
      state.valueIdTitle = action.payload;
    },

    getIdType(state, action) {
      state.valueIdType = action.payload;
    },

    getByType(state, action) {
      const currentType = state.valueByType.indexOf(action.payload);

      if (currentType === -1) {
        state.valueByType.push(action.payload);
      } else {
        state.valueByType.splice(currentType, 1);
      }
    },

    getByBrand(state, action) {
      const currentBrand = state.valueByBrand.indexOf(action.payload);

      if (currentBrand === -1) {
        state.valueByBrand.push(action.payload);
      } else {
        state.valueByBrand.splice(currentBrand, 1);
      }
    },

    getByRatings(state, action) {
      state.valueByRatings = action.payload;
    },

    getByPricesStart(state, action) {
      state.valueByPricesStart = action.payload;
    },

    getByPricesEnd(state, action) {
      state.valueByPricesEnd = action.payload;
    },

    getClearAllFilter(state, action) {
      state.valueByBrand = [];
      state.valueByPricesEnd = "";
      state.valueByPricesStart = "";
      state.valueByRatings = "";
      state.valueByType = [];
      state.valueTitle = "";
      state.valueType = "";
    },
  },
});

const { reducer, actions } = menuSlice;
export const {
  getTitle,
  getType,
  getByType,
  getByBrand,
  getByRatings,
  getByPricesStart,
  getByPricesEnd,
  getClearAllFilter,
  getIdTitle,
  getIdType,
} = actions;
export default reducer;
