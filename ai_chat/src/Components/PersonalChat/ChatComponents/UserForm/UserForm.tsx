import React, { FC, useRef, useState } from "react";

import { PersonType } from "../../../PersonalMap/typesPersonMap";
import { useAppDispatch , useDispatchChat} from "../../../ReduxToolkit/app_hooks";
import { sendMessage } from "../UserChat/UserChatMessage";


const UserForm: FC<PersonType> = ({ className }) => {
  const inputTypes: string[] = ["text", "button"];
  const inputMessage = useRef<HTMLInputElement | null>(null);
  const [inputType, setInputType] = useState<string>(inputTypes[1]);
  const [inputValue, setInputValue] = useState<string>("Start");

  const reduxDespetch = useAppDispatch();

  const changingType: React.ComponentProps<"input">["onClick"] = (e) => {
    reduxDespetch(sendMessage({
      message: '',
      state: true,
    }));
    setInputType(inputTypes[0]);
    setInputValue("");
  };
console.log(inputType)

  const sendingDataMessage = (e: any) => {
    // console.dir(e.target.localName)
    let path;
    e.target.localName === "span" ? 
    path = e.target.previousSibling :
    path = e.target[0];

    let mess = inputMessage.current?.value
    mess && reduxDespetch(sendMessage({
      message: mess,
      state: true
    }));
    path.value = ''

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
        // value = { inputValue }
        defaultValue = {inputValue}
      />
      <span className="sendChatIcon" onClick={clickSend}></span>
    </form>
  );
};

export default UserForm;
