import { configureStore } from '@reduxjs/toolkit';
import authenticatedReducer from './slices/authenticated';
import listsReducer from './slices/lists';

export const store = configureStore({
  reducer: {
    authenticated: authenticatedReducer,
    lists: listsReducer
  },
});
