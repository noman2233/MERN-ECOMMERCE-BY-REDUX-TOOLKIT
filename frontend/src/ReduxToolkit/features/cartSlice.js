import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    products: [],
    quantity: 0,
    total: 0,
  },
  reducers: {
    addProduct: (state, action) => {
      state.products.push(action.payload);
      state.quantity += 1;
      state.total += action.payload.price * action.payload.quantity;
    },
    removeProduct: (state, action) => {
        let index = state.products.indexOf(action.payload)
        state.quantity -= action.payload
        state.products.splice(index, 1)
    }
  },
});

export const { addProduct ,removeProduct} = cartSlice.actions;
export default cartSlice.reducer;
