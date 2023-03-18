import { createSlice } from "@reduxjs/toolkit";

export const categorySlice = createSlice({
  name: "category",
  initialState: {
    category: null,
  },
  reducers: {
    setCategoryInfo: (state, action) => {
      state.category = action.payload.category;
    },
  },
});

export const { setCategoryInfo } = categorySlice.actions;

export const selectCategory = (state) => state.category.category;

export default categorySlice.reducer;
