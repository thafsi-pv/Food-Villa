import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addToCart: (state, action) => {
      console.log("🚀 ~ file: CartSlice.js:10 ~ state", state);
      state.items.push(action.payload);
    },
    clearCart: (state) => {
      state.items = [];
    },
    removeItem: (state, action) => {
      let itm = state.items;
      const i = itm.findIndex((x) => x.name === action.payload);
      state.items.splice(i, 1);
    },
  },
});
export const { addToCart, clearCart, removeItem } = cartSlice.actions;
export default cartSlice.reducer;
