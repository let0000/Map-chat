import { createSlice } from "@reduxjs/toolkit";

export const focusSlice = createSlice({
  name: "focus",
  initialState: {
    focus: null,
  },
  reducers: {
    setFocusInfo: (state, action) => {
      state.focus = action.payload.focus;
    },
  },
});

export const { setFocusInfo } = focusSlice.actions;

export const selectFocus = (state) => state.focus.focus;

export default focusSlice.reducer;
