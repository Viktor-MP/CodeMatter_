import { FC, useEffect, useState ,Dispatch, SetStateAction }  from "react";

import { PersonType } from "../../../PersonalMap/typesPersonMap";
import { useAppSelector } from "../../../ReduxToolkit/app_hooks";
import { getMessageState } from "./UserChatMessage";
import { ResponseData } from "./typesUserChat";
import "./UserChat.scss";
import fetchData from "../../../../AxiosRequest/AxiosReques";
// import { Dispatch } from "@reduxjs/toolkit";

const UserChat: FC<PersonType> = ({ className }) => {
  const [chat, setChat] = useState<ResponseData>()
  // const [chat, setChat]: [ResponseData | null | undefined, Dispatch<SetStateAction<ResponseData | null | undefined>>] = useState(null);

  
  const reduxMessage = useAppSelector(getMessageState);

  
  useEffect(() => {
      fetchData('./sourses/testChat.json')
      // .then (data => setChat(data))

  }, [])
chat && console.log(chat)
  // console.log(reduxMessage)

  return (
    <div className={className}>
      <div className="_chat_"></div>
    </div>
  );
};

export default UserChat;
