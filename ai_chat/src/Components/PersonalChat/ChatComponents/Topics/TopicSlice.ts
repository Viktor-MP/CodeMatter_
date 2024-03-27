import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { topicType } from "./TopicTypes";
import { TopicState } from "../../../ReduxToolkit/app_store";

const initialState: topicType = {
  value: "",
  id: 0,
};

export const topicSlice = createSlice({
  name: "topic",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    sendTopic: (state: topicType, action: PayloadAction<topicType>) => {
      state.value = action.payload.value;
      state.id = action.payload.id;

      // console.log(state)
    },
  },
});

export const { sendTopic } = topicSlice.actions;

export const getTopicState = (state: TopicState) => state.value;

// Other code such as selectors can use the imported `RootState` type
// export const selectCount = (state: RootState) => state.counter.value

export default topicSlice.reducer;
