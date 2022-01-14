import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getLists as getListsFromAPI } from '../../api';

const initialState = {
  loading: false,
  lists: []
};

//
export const getLists = createAsyncThunk(
  'lists/getLists',
  async () => {
    const res = await getListsFromAPI();
    return res;
  }
);

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

export const selectLists = state => state.lists;

export default listsSlice.reducer;