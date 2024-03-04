import { FC } from "react";

import { PersonType } from "../../../PersonalMap/typesPersonMap";
import { useAppSelector } from "../../../ReduxToolkit/app_hooks";
import { getMessageState } from "./UserChatMessage";
import "./UserChat.scss";

const UserChat: FC<PersonType> = ({ className }) => {
  const reduxMessage = useAppSelector(getMessageState);
  console.log(reduxMessage)

  return (
    <div className={className}>
      <div className="_chat_">{reduxMessage.message}</div>
    </div>
  );
};

export default UserChat;
