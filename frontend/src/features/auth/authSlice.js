import { createSlice } from '@reduxjs/toolkit';

const storedToken = localStorage.getItem('token');
const storedUserRaw = localStorage.getItem('user');
const storedUser = storedUserRaw ? JSON.parse(storedUserRaw) : null;

const initialState = {
  user: storedUser,
  token: storedToken,
  loading: false,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout: (state) => {
      state.user = null;
      state.token = null;
      localStorage.removeItem('token');
      localStorage.removeItem('user');
    },
    setAuth: (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
      localStorage.setItem('token', action.payload.token);
      localStorage.setItem('user', JSON.stringify(action.payload.user));
    },
  },
});

export const { logout, setAuth } = authSlice.actions;
export default authSlice.reducer;
