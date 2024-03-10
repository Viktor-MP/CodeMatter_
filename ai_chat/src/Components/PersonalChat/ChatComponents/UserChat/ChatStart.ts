import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { ChatState } from "../../../ReduxToolkit/app_store";
import { startDataType } from "../../typesPersonChat";



// Define the initial state using that type

const initialState: startDataType = {
    chat: false
}

export const chatStateSlice = createSlice({
  name: "chat",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    startChat: (state: startDataType, action: PayloadAction<startDataType>) => {
      state.chat = action.payload.chat;
      // console.log(state, action)

    }
  },
});

export const { startChat } = chatStateSlice.actions;

export const getStartState = (state: ChatState) => state.chat;
// console.log(getStartState)
// Other code such as selectors can use the imported `RootState` type
// export const selectCount = (state: RootState) => state.counter.value

export default chatStateSlice.reducer;
