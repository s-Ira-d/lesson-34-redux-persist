import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

const favouriteSlice = createSlice({
  name: "favourites",
  initialState,

  reducers: {
    toggleFavourite: (state, action) => {
      const isExist = state.items.find((i) => i.id === action.payload.id);
      if (isExist) {
        state.items = state.items.filter(
          (item) => item.id !== action.payload.id,
        );
      } else {
        state.items.push(action.payload);
      }
    },
  },
});

export const { toggleFavourite } = favouriteSlice.actions;

export default favouriteSlice.reducer;
