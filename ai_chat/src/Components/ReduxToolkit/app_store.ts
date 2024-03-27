import { configureStore  } from "@reduxjs/toolkit";
// ...
import { chatSlice } from "../PersonalChat/ChatComponents/UserChat/UserChatMessage"
import { topicSlice } from "../PersonalChat/ChatComponents/Topics/TopicSlice";

export const store = configureStore({
  reducer: {
    message: chatSlice.reducer,
  },
});
export const topics = configureStore({
  reducer: {
    value: topicSlice.reducer,
  },
});



// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

// Infer the `RootState` and `AppDispatch` types from the store itself
export type TopicState = ReturnType<typeof topics.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppTopicDispatch = typeof topics.dispatch;

