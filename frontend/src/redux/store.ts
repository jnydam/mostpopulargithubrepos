import { configureStore } from '@reduxjs/toolkit';
import counterSliceReducer from './slices/counterSlice';
import breakpointSliceReducer from './slices/breakpointSlice';
import apiSliceReducer from './slices/apiDataSlice';

const store = configureStore({
  reducer: {
    counterSliceReducer,
    breakpointSliceReducer,
    apiSliceReducer,
  },
});

export default store;

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
