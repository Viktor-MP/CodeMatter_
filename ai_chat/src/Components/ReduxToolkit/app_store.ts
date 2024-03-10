import { configureStore  } from "@reduxjs/toolkit";
// ...
import { chatSlice } from "../PersonalChat/ChatComponents/UserChat/UserChatMessage"
import { chatStateSlice } from "../PersonalChat/ChatComponents/UserChat/ChatStart";

export const store = configureStore({
  reducer: {
    message: chatSlice.reducer,
  },
});

export const chatState = configureStore({
  reducer: {
    chat: chatStateSlice.reducer,
  }
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

// Infer the `RootState` and `AppDispatch` types from the store itself
export type ChatState = ReturnType<typeof chatState.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatchChat = typeof chatState.dispatch;