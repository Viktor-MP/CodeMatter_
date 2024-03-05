import { FC, useEffect, useState } from "react";

import { PersonType } from "../../../PersonalMap/typesPersonMap";
import { useAppSelector } from "../../../ReduxToolkit/app_hooks";
import { getMessageState } from "./UserChatMessage";
import "./UserChat.scss";

const UserChat: FC<PersonType> = ({ className }) => {
  const reduxMessage = useAppSelector(getMessageState);

  useEffect(() => {
    console.log(reduxMessage.message)
  }, [reduxMessage.message])
  // console.log(reduxMessage)

  return (
    <div className={className}>
      <div className="_chat_"></div>
    </div>
  );
};

export default UserChat;
