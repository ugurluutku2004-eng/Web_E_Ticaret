import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  orders: [],
  current: null,
  loading: false,
  error: null,
};

const orderSlice = createSlice({
  name: 'orders',
  initialState,
  reducers: {
    setOrders: (state, action) => {
      state.orders = action.payload;
    },
    setCurrentOrder: (state, action) => {
      state.current = action.payload;
    },
  },
});

export const { setOrders, setCurrentOrder } = orderSlice.actions;
export default orderSlice.reducer;
