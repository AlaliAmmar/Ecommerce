import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    quantity: 0,
  },
  reducers: {
    addProduct: (state, action) => {
      state.quantity += action.payload.quantity;
    },
  },
});

export const { addProduct } = cartSlice.actions;
export default cartSlice.reducer;
