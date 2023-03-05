import { createSlice } from "@reduxjs/toolkit";

const getId = (items, id) => {
  const idx = items.findIndex((item) => {
    item.id === id;
  });
  return idx;
};

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    count: 0,
  },
  reducers: {
    addItem: (state, action) => {
      const obj = state?.items?.find((item) => item.id === action.payload.id);
      obj ? obj.count++ : state.items.push(action.payload);
      state.count++;
    },
    removeItem(state, action) {
      const obj = state?.items?.find((item) => item.id === action.payload.id);
      if (obj) {
        if (obj.count > 1) {
          obj.count--;
        } else if (obj.count === 1) {
          if (state.count === 1) {
            state.items = [];
          } else {
            return state.items.filter((item) => state.id !== action.payload.id);
          }
        }
        state.count--;
      }
    },
    clearCart: (state) => {
      state.items = [];
    },
    clearCount: (state) => {
      state.count = 0;
    },
  },
});

export const { addItem, removeItem, clearCart, clearCount, remove } =
  cartSlice.actions;
export default cartSlice.reducer;
