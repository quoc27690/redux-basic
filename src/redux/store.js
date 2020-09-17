import { configureStore } from "@reduxjs/toolkit";
import searchReducer from "./slice/searchSlice";
import menuReducer from "./slice/menuSlice";
import mainReducer from "./slice/mainSlice";

const store = configureStore({
  reducer: {
    search: searchReducer,
    menu: menuReducer,
    main: mainReducer,
  },
});

export default store;
