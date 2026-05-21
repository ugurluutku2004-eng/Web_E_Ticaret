import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
  total: 0,
};

const recalcTotal = (items) =>
  items.reduce((sum, item) => sum + item.price * item.qty, 0);

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    setCart: (state, action) => {
      state.items = action.payload.items;
      state.total = action.payload.total;
    },
    addItem: (state, action) => {
      const incoming = action.payload;
      const existing = state.items.find((item) => item.productId === incoming.productId);

      if (existing) {
        existing.qty += incoming.qty ?? 1;
      } else {
        state.items.push({
          productId: incoming.productId,
          name: incoming.name,
          model: incoming.model,
          price: incoming.price,
          qty: incoming.qty ?? 1,
        });
      }

      state.total = recalcTotal(state.items);
    },
    removeItem: (state, action) => {
      state.items = state.items.filter((item) => item.productId !== action.payload);
      state.total = recalcTotal(state.items);
    },
    setItemQuantity: (state, action) => {
      const { productId, qty } = action.payload;
      const item = state.items.find((entry) => entry.productId === productId);

      if (!item) return;
      item.qty = Math.max(1, Number(qty) || 1);
      state.total = recalcTotal(state.items);
    },
    clearCart: (state) => {
      state.items = [];
      state.total = 0;
    },
  },
});

export const { setCart, addItem, removeItem, setItemQuantity, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
