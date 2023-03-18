import { configureStore } from "@reduxjs/toolkit";
import categorySlice from "../features/categorySlice";
import focusSlice from "../features/focusSlice";
import locationSlice from "../features/locationSlice";
import searchListSlice from "../features/searchListSlice";
import weatherSlice from "../features/weatherSlice";

export default configureStore({
  reducer: {
    location: locationSlice,
    weather: weatherSlice,
    category: categorySlice,
    searchList: searchListSlice,
    focus: focusSlice,
  },
});
