// libraries
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// api
import { getLists as getListsFromAPI } from '../../APIService';

const initialState = {
  loading: false,
  lists: []
};

// async reducer
export const getLists = createAsyncThunk(
  'lists/getLists',
  async () => {
    const res = await getListsFromAPI();
    return res;
  }
);

// slice
export const listsSlice = createSlice({
  name: 'lists',
  initialState,
  extraReducers: builder => {
    builder.addCase(getLists.pending, state => {
      state.loading = true;
    });
    builder.addCase(getLists.fulfilled, (state, action) => {
      state.lists = action.payload.data;
      state.loading = false;
    });
  }
});

// selector
export const selectLists = state => state.lists;

// reducer
export default listsSlice.reducer;