import { createSlice } from '@reduxjs/toolkit';

const initialState = false;

export const authenticatedSlice = createSlice({
  name: 'authenticated',
  initialState,
  reducers: {} // TODO: add reducers when creating login
});

export const selectAuthenticated = state => state.authenticated;

export default authenticatedSlice.reducer;