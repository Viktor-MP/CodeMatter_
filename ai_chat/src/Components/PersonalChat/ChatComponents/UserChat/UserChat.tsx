import { FC, useEffect, useState }  from "react";
import { gptGetResponse, translateMessage } from "./translate";

import { PersonType } from "../../../PersonalMap/typesPersonMap";
import { useAppSelector } from "../../../ReduxToolkit/app_hooks";
import { getMessageState } from "./UserChatMessage";
import { ResponseData } from "./typesUserChat";
import "./UserChat.scss";


const UserChat: FC<PersonType> = ({ className }) => {
  const [chat, setChat] = useState<ResponseData >()


  const reduxMessage = useAppSelector(getMessageState).message;

  const getPosts = async (url: string) => {
    const res : Response = await fetch(url);
    const posts : ResponseData = await res.json();
    setChat(posts);
  }



  const chatGPT_message_hendler = (chatMessages: ResponseData, newUserMessage: string ) => {
    const newChat = JSON.parse(JSON.stringify(chatMessages))
    newChat.messages.push({
      content:newUserMessage,
      role: "user"
    })
    setChat(newChat)
    const lastMessage = newChat.messages[newChat.messages.length - 1].content
    console.log(lastMessage)
   translateMessage(lastMessage, "hy", "en")
   .then(res => {
  res &&  gptGetResponse(res.text)

  })        
  }


  useEffect(() => {
   chat &&  chatGPT_message_hendler(chat, reduxMessage)
  }, [reduxMessage] )


  useEffect(() => {
    getPosts('./sourses/testChat.json')

  }, [])


  return (
    <div className={className}>
      <div className="_chat_">

      </div>
    </div>
  );
};

export default UserChat;
