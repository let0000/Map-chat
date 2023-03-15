import { configureStore } from "@reduxjs/toolkit";
import locationSlice from "../features/locationSlice";
import weatherSlice from "../features/weatherSlice";

export default configureStore({
  reducer: {
    location: locationSlice,
    weather: weatherSlice,
  },
});
