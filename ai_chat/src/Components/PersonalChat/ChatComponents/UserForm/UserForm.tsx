import React, { FC, FormEvent, MouseEvent, useRef, useState } from "react";

import { PersonType } from "../../../PersonalMap/typesPersonMap";
import { useAppDispatch } from "../../../ReduxToolkit/app_hooks";
import { sendMessage } from "../UserChat/UserChatMessage";

import "../../../../App.css"
const UserForm: FC<PersonType> = ({ className }) => {
  const inputTypes: string[] = ["text", "button"];
  const inputMessage = useRef<HTMLInputElement | null>(null);
  const [inputType, setInputType] = useState<string>(inputTypes[1]);
  const [inputValue, setInputValue] = useState<string>("Start");

  const reduxMessageContent = {
    message: "",
    state: true
  }
  
  const reduxDespetch = useAppDispatch();

  const changingType: React.ComponentProps<"input">["onClick"] = (e) => {
    reduxDespetch(sendMessage(reduxMessageContent));
    setInputType(inputTypes[0]);
    setInputValue("");
  };

  const sendingDataMessage = (e: MouseEvent<HTMLSpanElement> | FormEvent<HTMLFormElement>) => {

    let mess = inputMessage.current?.value || ""
    reduxMessageContent.message = mess
    mess && reduxDespetch(sendMessage(reduxMessageContent));
    
    if (inputMessage.current) 
    inputMessage.current.value = ""; // Set inputMessage.current value to empty string

  };

  const submitSend: React.ComponentProps<"form">["onSubmit"] = (e) => {
    e.preventDefault();
    sendingDataMessage(e);
  };

  const clickSend: React.ComponentProps<"span">["onClick"] = (e) => {
    sendingDataMessage(e);
  };

  return (
    <form className={className} onSubmit={submitSend}>
      <input
        ref = {inputMessage}
        onClick={(e) => changingType(e)}
        name="message"
        
        className="startChat_btn"
        type = {inputType}
        defaultValue = {inputValue}
      />
      <span className="sendChatIcon" onClick={clickSend}></span>
    </form>
  );
};

export default UserForm;
