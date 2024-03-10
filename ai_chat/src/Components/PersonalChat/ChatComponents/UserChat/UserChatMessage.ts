import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../../../ReduxToolkit/app_store";
import { formDataType } from "../../typesPersonChat";



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
      // console.log(state)
    }
  },
});

export const { sendMessage } = chatSlice.actions;

export const getMessageState = (state: RootState) => state.message;

// Other code such as selectors can use the imported `RootState` type
// export const selectCount = (state: RootState) => state.counter.value

export default chatSlice.reducer;
