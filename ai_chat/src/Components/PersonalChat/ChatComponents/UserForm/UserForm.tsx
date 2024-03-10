import React, { ChangeEvent, FC, useState } from "react";
import { formDataType } from "../../typesPersonChat";
import { PersonType } from "../../../PersonalMap/typesPersonMap";
import { useAppDispatch , useDispatchChat} from "../../../ReduxToolkit/app_hooks";
import { sendMessage } from "../UserChat/UserChatMessage";
import { startChat } from "../UserChat/ChatStart";
import { factory } from "typescript";
import { fail } from "assert";

const UserForm: FC<PersonType> = ({ className }) => {
  const inputTypes: string[] = ["text", "button"];
  const [inputType, setInputType] = useState<string>(inputTypes[1]);
  const [inputValue, setInputValue] = useState<string>("Start");
  const [formData, setFormData] = useState<formDataType>({
    message: "",
    state: false
  });


  const reduxDespetch = useAppDispatch();
  const reduxStartDespaetch = useDispatchChat()


  // console.log(reduxStartDespaetch(startChat({chat: true})))
  
  const changingType: React.ComponentProps<"input">["onClick"] = (e) => {
    formData.state = true
    reduxDespetch(sendMessage({
      message: '',
      state: formData.state,
    }));
    setInputType(inputTypes[0]);
    setInputValue("");
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const sendingDataMessage = (data: string) => {
    reduxDespetch(sendMessage({
      message: data,
      state: formData.state
    }));
  };

  const submitSend: React.ComponentProps<"form">["onSubmit"] = (e) => {
    e.preventDefault();
    sendingDataMessage(formData.message);
  };

  const clickSend: React.ComponentProps<"span">["onClick"] = () => {
    sendingDataMessage(formData.message);
  };

  return (
    <form className={className} onSubmit={submitSend}>
      <input
        onClick={(e) => changingType(e)}
        onChange={handleChange}
        name="message"
        className="startChat_btn"
        type={inputType}
        defaultValue={inputValue}
      />
      <span className="sendChatIcon" onClick={clickSend}></span>
    </form>
  );
};

export default UserForm;
