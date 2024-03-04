import React, { ChangeEvent, FC, useState } from "react";
import { formDataType } from "../../typesPersonChat";
import { PersonType } from "../../../PersonalMap/typesPersonMap";
import { sendMessage } from "../UserChat/UserChatMessage";
import { useAppDispatch } from "../../../ReduxToolkit/app_hooks";

const UserForm: FC<PersonType> = ({ className }) => {
  const inputTypes: string[] = ["text", "button"];
  const [inputType, setInputType] = useState<string>(inputTypes[1]);
  const [inputValue, setInputValue] = useState<string>("Start");
  const [formData, setFormData] = useState<formDataType>({
    message: "",
  });
  const reduxDespetch = useAppDispatch();

  const changingType: React.ComponentProps<"input">["onClick"] = (e) => {
    console.dir(e.target);
    setInputType(inputTypes[0]);
    setInputValue("");
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const sendingDataMessage = (data: any) => {
    reduxDespetch(sendMessage(data));
  };

  const submitSend: React.ComponentProps<"form">["onSubmit"] = (e) => {
    e.preventDefault();
    sendingDataMessage(formData);
  };

  const clickSend: React.ComponentProps<"span">["onClick"] = () => {
    sendingDataMessage(formData);
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
