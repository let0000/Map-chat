import { createSlice } from "@reduxjs/toolkit";

export const searchListSlice = createSlice({
  name: "searchList",
  initialState: {
    list: null,
  },
  reducers: {
    setSearchListInfo: (state, action) => {
      state.list = action.payload.list;
    },
  },
});

export const { setSearchListInfo } = searchListSlice.actions;

export const selectList = (state) => state.searchList.list;

export default searchListSlice.reducer;
