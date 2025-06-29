import { configureStore } from '@reduxjs/toolkit';
import usersReducer from './slices/usersSlice';
import categoriesReducer from './slices/categoriesSlice';
import postsReducer from './slices/postsSlice';
import healthReducer from './slices/healthSlice';

export const store = configureStore({
  reducer: {
    users: usersReducer,
    categories: categoriesReducer,
    posts: postsReducer,
    health: healthReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch; 