import { configureStore  } from "@reduxjs/toolkit";
import { chatSlice, chatTalkSlice } from "./UserSliceStor"
import { topicSlice } from "./UserSliceStor";

export const store = configureStore({
  reducer: {
    message: chatSlice.reducer,
    value: topicSlice.reducer,
    talkId: chatTalkSlice.reducer,
  },
});




// Infer the `RootState` and `AppDispatch` types from the store itself
export type MessageState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
