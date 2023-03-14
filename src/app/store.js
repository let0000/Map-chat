import { configureStore } from "@reduxjs/toolkit";
import locationSlice from "../features/locationSlice";

export default configureStore({
  reducer: {
    location: locationSlice,
  },
});
