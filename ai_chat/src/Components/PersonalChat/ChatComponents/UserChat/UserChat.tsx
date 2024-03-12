import { FC, useEffect, useRef, useState }  from "react";
import fetchData from "../../../../AxiosRequest/AxiosReques";

import { PersonType } from "../../../PersonalMap/typesPersonMap";
import { ResponseData, myMessage } from "./typesUserChat";
import { useAppSelector } from "../../../ReduxToolkit/app_hooks";
import { getMessageState } from "./UserChatMessage";
import ChatMessage from "../Message/ChatMessage";
// import { getStartState } from "./ChatStart";

import "./UserChat.scss";
import Typing from "../Typing/Typing";

const UserChat: FC<PersonType> = ({ className }) => {
  
  const [chat, setChat] = useState<ResponseData >()
  const [typing, setTyping] = useState(false)
  const [chatTalk, setChatTalk] = useState<myMessage[]>([])
  const [messageId, setMessageId] = useState<number>(1)
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

  useEffect(() => {
    const refCur = myComponentRef.current
    setTyping(false)
    if (chatTalk.length > 0 && chatTalk[chatTalk.length - 1].role === 'user') {
      chat &&  sendData(chat) 
      setTyping(!typing)
    }

    refCur &&
    refCur.scrollIntoView
      ({ 
      behavior: 'smooth', block: 'end', inline: 'nearest'
    });

  }, [chatTalk])

  useEffect(() => { // it works only ones!
    reduxMessage.state && chat && changChatTalk("assistant", chat.answer)
  }, [reduxMessage.state])



  useEffect(() => {

   !chat && fetchData('./sourses/testChat.json')
    .then(data => {
      setChat(data) // storing the data json
    })
    
    reduxMessage.message && changChatTalk("user", reduxMessage.message)
  }, [reduxMessage.message])


  const ChatTalkDrow_hendler = () => {

    return  chatTalk.length === 0 ?
          <>baylus Samo </> : 
          <>
            {chatTalk.map(chat => {
              console.log(chat.id)
             return  <>
              <ChatMessage  key={chat.id}  
              className={`${chat.role === "user" ? '_userMess' : '_assistMess'}`}
              chat = {chat} />
             </>
            
             
            })}
          </>

 
}
  return (
    <div  className={className}>
      <div  ref={myComponentRef} className="_chat_">
          <ChatTalkDrow_hendler  />
          { typing && <Typing />}

      </div>
    </div>
  );
};

export default UserChat;
