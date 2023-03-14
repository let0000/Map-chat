import { createSlice } from "@reduxjs/toolkit";

export const locationSlice = createSlice({
  name: "location",
  initialState: {
    lat: null,
    lon: null,
    address: null,
  },
  reducers: {
    setLocationInfo: (state, action) => {
      state.lat = action.payload.lat;
      state.lon = action.payload.lon;
      state.address = action.payload.address;
    },
  },
});

export const { setLocationInfo } = locationSlice.actions;

export const selectLat = (state) => state.location.lat;
export const selectLon = (state) => state.location.lon;
export const selectAddress = (state) => state.location.address;

export default locationSlice.reducer;
