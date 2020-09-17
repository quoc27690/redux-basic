import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "searchSlice",
  initialState: {
    valueSearch: "",
  },
  reducers: {
    getSearch(state, action) {
      state.valueSearch = action.payload;
    },
  },
});

const { reducer, actions } = searchSlice;
export const { getSearch } = actions;
export default reducer;
