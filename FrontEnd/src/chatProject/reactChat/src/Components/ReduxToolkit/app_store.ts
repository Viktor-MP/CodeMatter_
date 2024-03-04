import { configureStore } from "@reduxjs/toolkit";
// ...
import { counterSlice } from "../PersonalChat/ChatComponents/UserChat/UserChatMessage"
import { TypedUseSelectorHook, useDispatch } from "react-redux";
import { useSelector } from "react-redux";

export const store = configureStore({
  reducer: {
    message: counterSlice.reducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;