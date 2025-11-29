import rootSlice from "./rootSlice.js";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: {
    root: rootSlice,
  },
});

export default store;
