import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,

  reducers: {
    addToCart: (state, action) => {
      const isExist = state.items.find((i) => i.id === action.payload.id);
      if (isExist) {
        isExist.quantity += 1;
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }
    },

    incrementQuantity: (state, action) => {
      const isExist = state.items.find((i) => i.id === action.payload.id);
      if (isExist) {
        isExist.quantity += 1;
      }
    },

    decrementQuantity: (state, action) => {
      const isExist = state.items.find((i) => i.id === action.payload.id);
      if (isExist) {
        isExist.quantity -= 1;
      }
    },

    removeFromCart: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },

    clearCart: (state) => {
      state.items = [];
    },
  },
});

export const {
  addToCart,
  incrementQuantity,
  decrementQuantity,
  removeFromCart,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;
