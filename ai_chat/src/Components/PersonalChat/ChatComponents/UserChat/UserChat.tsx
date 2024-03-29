import { FC, useEffect, useRef, useState }  from "react";
import fetchData from "../../../../AxiosRequest/AxiosReques";

import { PersonType } from "../../../PersonalMap/typesPersonMap";
import { ResponseData, myMessage, chatStart } from "./typesUserChat";
import { useAppSelector } from "../../../ReduxToolkit/app_hooks";
import { getMessageState } from "./UserChatMessage";
import ChatMessage from "../Message/ChatMessage";


import "./UserChat.scss";
import Typing from "../Typing/Typing";

const UserChat: FC<PersonType> = ({ className }) => {
  
  const [chat, setChat] = useState<ResponseData >(chatStart);
  const [typing, setTyping] = useState(false);
  const [chatTalk, setChatTalk] = useState<myMessage[]>([]);
  const [messageId, setMessageId] = useState<number>(0);
  const myComponentRef = useRef<HTMLDivElement>(null);

  const reduxMessage = useAppSelector(getMessageState);

  
  
  const hendlError = () => setTyping(false);
  const copyObj = (obj: object) => JSON.parse(JSON.stringify(obj));




  const changChatTalk  = (role: "user" | "assistant", content: string)  => {
    setTyping(false)
    
    if (role === "user") {
      const newChat = copyObj(chat)
      newChat.messages.push({
        content: content,
        role: role,
      });
      setTyping(true);
      setChat(newChat);
    }
    
    setMessageId(prevId => prevId += 1)
    const info =  {
      content: content,
      role: role,
      id: messageId,
    }
    setChatTalk( prev => [ ...prev, info ])
  };

   
  const sendData = (data: ResponseData) => {
    fetchData("https://codematter.am/api-v1/openAi", "POST", data)
    .then( res => changChatTalk("assistant", res.answer))
    .catch( err => {console.log(err,  "hello error"); hendlError()});
  };

  console.log(chat)

  useEffect(() => { 
    // I made it hear to change rendering keys corectly
    reduxMessage.state &&  sendData(chat)
  }, [chat])

  useEffect(() => { 
    // scrolling down after any new message
    const refCur = myComponentRef.current;
    refCur && refCur.scrollIntoView
    ({ behavior: "smooth", block: "end", inline: "end"});
  }, [chatTalk]) 

  useEffect(() => {
     // it works only ones!
    reduxMessage.state && chat && changChatTalk("assistant", chat.answer);
  }, [reduxMessage.state]);


  useEffect(() => {
    // sending user message
    reduxMessage.message && changChatTalk("user", reduxMessage.message);
  }, [reduxMessage.message]);


  const ChatTalkDrowHendler = () => {

    return  chatTalk.length === 0 ?
          <></> : 
          <>
            {chatTalk.map(chat => {
             return  <ChatMessage  key={chat.id}  
              className={`${chat.role === "user" ? "_userMess" : "_assistMess"}`}
              dataSet = {`${chat.role === "user" ? "user" : "assistent"}`}
              chat = {chat} />
            })}
          </> 
}


  return (
    <div  className={className}>
      <div  ref={myComponentRef} className="_chat_">

          <ChatTalkDrowHendler  />
          { typing && <Typing  />}

      </div>
    </div>
  );
};

export default UserChat;
