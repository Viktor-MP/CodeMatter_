import { PayloadAction ,createSlice} from "@reduxjs/toolkit";
import type { MessageState } from "./app_store";
import { formDataType } from "../PersonalChat/typesPersonChat";
import { topicType } from "../PersonalChat/ChatComponents/Topics/TopicTypes";


// Define the initial state using that type

const initialState: formDataType = {
  message: "",
  state: false
};

export const chatSlice = createSlice({
  name: "message",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    sendMessage: (state: formDataType, action: PayloadAction<formDataType>) => {
      state.message = action.payload.message;
      state.state = action.payload.state;
    }
  },
});


const initialTopicState: topicType = {
  value: "",
  id: 0,
};

export const topicSlice = createSlice({
  name: "value",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState: initialTopicState,
  reducers: {
    sendTopic: (state: topicType, action: PayloadAction<topicType>) => {
      state.value = action.payload.value;
      state.id = action.payload.id;
    },
  },
});

export const { sendTopic } = topicSlice.actions;
export const getTopicState = (state: MessageState) => state.value;
// Other code such as selectors can use the imported `RootState` type
// export const selectCount = (state: RootState) => state.counter.value



export const { sendMessage } = chatSlice.actions;
export const getMessageState = (state: MessageState) => state.message;

// Other code such as selectors can use the imported `RootState` type
// export const selectCount = (state: RootState) => state.counter.value


// export default {topicSlice, chatSlice} //  we don't need this part ether
