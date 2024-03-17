import { FC, useEffect, useRef, useState }  from "react";
import fetchData from "../../../../AxiosRequest/AxiosReques";

import { PersonType } from "../../../PersonalMap/typesPersonMap";
import { ResponseData, myMessage, chatStart } from "./typesUserChat";
import { useAppSelector } from "../../../ReduxToolkit/app_hooks";
import { getMessageState } from "./UserChatMessage";
import ChatMessage from "../Message/ChatMessage";
// import { getStartState } from "./ChatStart";

import "./UserChat.scss";
import Typing from "../Typing/Typing";

const UserChat: FC<PersonType> = ({ className }) => {
  
  const [chat, setChat] = useState<ResponseData >(chatStart)
  const [typing, setTyping] = useState(false)
  const [chatTalk, setChatTalk] = useState<myMessage[]>([])
  const [messageId, setMessageId] = useState<number>(0)
  const myComponentRef = useRef<HTMLDivElement>(null);
  
  const reduxMessage = useAppSelector(getMessageState);

  const changChatTalk  = (role: "user" | "assistant", content: string)  => {

    if (role === 'user') {
      const newChat = JSON.parse(JSON.stringify(chat))
      setChat(newChat)

      newChat.messages.push({
         content: content,
         role: role,
       })
    } 

      setChatTalk([
        ...chatTalk,
        {
          content: content,
          role: role,
          id: messageId,
        }
      ]) 
   
    setMessageId(pr => ++pr)
  }
  
  const sendData = (data: ResponseData) => {
    fetchData("https://codematter.am/api-v1/openAi", "POST", data)
    .then( res => changChatTalk("assistant", res.answer))
    .catch( err => console.log(err))
  }

  console.log('hello')

  useEffect(() => {
    const refCur = myComponentRef.current
    setTyping(false)
    if (chatTalk.length > 0 && chatTalk[chatTalk.length - 1].role === 'user') {
      chat &&  sendData(chat) 
      setTyping(!typing)
    }

    refCur &&
    refCur.scrollIntoView
    ({ behavior: 'smooth', block: 'end', inline: 'nearest'});

  }, [chatTalk])

  useEffect(() => { // it works only ones!
    reduxMessage.state && chat && changChatTalk("assistant", chat.answer)
  }, [reduxMessage.state])


  useEffect(() => {
    reduxMessage.message && changChatTalk("user", reduxMessage.message)
  }, [reduxMessage.message])


  const ChatTalkDrowHendler = () => {

    return  chatTalk.length === 0 ?
          <>baylus Samo </> : 
          <>
            {chatTalk.map(chat => {
              console.log(chat.id)
             return  <ChatMessage  key={chat.id}  
              className={`${chat.role === "user" ? '_userMess' : '_assistMess'}`}
              chat = {chat} />

            })}
          </>

 
}
  return (
    <div  className={className}>
      <div  ref={myComponentRef} className="_chat_">

          <ChatTalkDrowHendler  />
          { typing && <Typing />}

      </div>
    </div>
  );
};

export default UserChat;
