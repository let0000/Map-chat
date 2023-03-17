import { createSlice } from "@reduxjs/toolkit";

export const weatherSlice = createSlice({
  name: "weather",
  initialState: {
    temp: null,
    name: null,
    weather: null,
    icon: null,
  },
  reducers: {
    setWeatherInfo: (state, action) => {
      state.temp = action.payload.temp;
      state.name = action.payload.name;
      state.weather = action.payload.weather;
      state.icon = action.payload.icon;
    },
  },
});

export const { setWeatherInfo } = weatherSlice.actions;

export const selectTemp = (state) => state.weather.temp;
export const selectName = (state) => state.weather.name;
export const selectWeather = (state) => state.weather.weather;
export const selectIcon = (state) => state.weather.icon;

export default weatherSlice.reducer;
