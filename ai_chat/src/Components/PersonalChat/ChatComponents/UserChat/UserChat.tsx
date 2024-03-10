import { FC, useEffect, useRef, useState }  from "react";
import fetchData from "../../../../AxiosRequest/AxiosReques";

import { PersonType } from "../../../PersonalMap/typesPersonMap";
import { ResponseData, myMessage } from "./typesUserChat";
import { useAppSelector, useChatSelector } from "../../../ReduxToolkit/app_hooks";
import { getMessageState } from "./UserChatMessage";
// import { getStartState } from "./ChatStart";

import "./UserChat.scss";

const UserChat: FC<PersonType> = ({ className }) => {
  const [height, setHeight] = useState(0);
  const [chat, setChat] = useState<ResponseData >()
  const [chatTalk, setChatTalk] = useState<myMessage[]>([])
  const [messageId, setMessageId] = useState<number>(1)
  const myComponentRef = useRef<HTMLDivElement>(null);

  const reduxMessage = useAppSelector(getMessageState);

  const changChatTalk  = (role: "user" | "assistant", content: string)  => {

    if (role === 'user') {
      // console.log(role)

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
  }
  myComponentRef.current && console.log(myComponentRef.current?.parentElement?.clientHeight)
  // container.scrollHeight
  myComponentRef.current && console.log(myComponentRef.current.clientHeight)
  console.log(height)

  useEffect(() => {
    
    if (chatTalk.length > 0 && chatTalk[chatTalk.length - 1].role === 'user') {
      chat &&  sendData(chat) 
    }

    if (myComponentRef.current) {
      // Scroll to the bottom
    }
    myComponentRef.current &&
    myComponentRef.current.scrollIntoView
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

  const let_chat_scroll = (e: any) => {

  }

  const ChatTalkDrow_hendler = () => {

    return  chatTalk.length === 0 ?    <>baylus Samo</> : 
          <>

            {chatTalk.map(chat => {
              // console.log(chat)
             return <p className={`
             ${chat.role === "user" ? '_userMess' : '_assistMess'}
              _message
              `}   key={chat.id}> { chat.content }</p>
            })}
          </>
 
    
  }


  return (
    <div className={className}>
      <div  ref={myComponentRef} className="_chat_">
        <ChatTalkDrow_hendler  />
      </div>
    </div>
  );
};

export default UserChat;
