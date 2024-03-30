import { FC, useEffect, useRef, useState }  from "react";
import fetchData from "../../../../AxiosRequest/AxiosRequest";

import { PersonType } from "../../../PersonalMap/typesPersonMap";
import { ResponseData, myMessage, chatStart } from "./typesUserChat";

import { getMessageState, getTopicState } from "../../../ReduxToolkit/UserSliceStor";
import { useAppSelector } from "../../../ReduxToolkit/app_hooks";

import ChatMessage from "../Message/ChatMessage";
import Typing from "../Typing/Typing";
import classNames from "classnames";
import "./UserChat.scss";

const UserChat: FC<PersonType> = ({ className, buttonValue }) => {
  
  const [chat, setChat] = useState<ResponseData >(chatStart);
  const [typing, setTyping] = useState(false);
  const [chatTalk, setChatTalk] = useState<myMessage[]>([]);
  const [messageId, setMessageId] = useState<number>(0);
  const myComponentRef = useRef<HTMLDivElement>(null);

  // getting message from form component
  const reduxMessage = useAppSelector(getMessageState);
  const reduxTopic = useAppSelector(getTopicState);

// console.log(reduxMessage)
// console.log(reduxTopic)


  
  const handlerError = (err: Error, role:"assistant") => {
    console.log(err)
    
    if (err.message === "Network Error") {
      setMessageId(prevId => prevId += 1)

      const errorInfo =  {
        content: "Please check your connection",
        role: role,
        id: messageId,
      }
      // console.log(chatTalk)
      alert(errorInfo.content)
      // setChatTalk( prev => [ ...prev, errorInfo ])

    }
    setTyping(false)
  };
  
  const copyObj = (obj: object) => JSON.parse(JSON.stringify(obj));




  const changChatTalk  = (role: "user" | "assistant", content: string)  => {
    setTyping(false)
    role === "user" && setTyping(true);
    const newChat = copyObj(chat)
    newChat.messages.push({
      content: content,
      role: role,
    });

    setChat(newChat);
    
    setMessageId(prevId => prevId += 1)
    const info =  {
      content: content,
      role: role,
      id: messageId,
    }
    
    setChatTalk( prev => [ ...prev, info ])
  };

  const getManeContent = (data: ResponseData) => {
    

    fetchData("https://codematter.am/api-v1/openAi", "POST", data)
    .then( res => changChatTalk("assistant", res.answer))
    .catch( err => handlerError(err, "assistant"));
  }

   
  const sendData = (data: ResponseData) => {
    console.log(data)
    fetchData("https://codematter.am/api-v1/openAi", "POST", data)
    .then( res => changChatTalk("assistant", res.answer))
    .catch( err => handlerError(err, "assistant"));
  };


  useEffect(() => { 
    // I made it hear to change rendering keys correctly
    reduxMessage.state && typing &&  sendData(chat)
  }, [chat])

  useEffect(() => { 
    // scrolling down after any new message

    console.log(chatTalk)
    console.log(chat)
    const refCur = myComponentRef.current;
    refCur && refCur.scrollIntoView
    ({ behavior: "smooth", block: "end", inline: "end"});
  }, [chatTalk]) 

  useEffect(() => {
     // it works only ones!
    reduxMessage.state && chat && changChatTalk("assistant", chat.answer);
  }, [reduxMessage.state]);


  useEffect(() => {
   
    reduxMessage.message && changChatTalk("user", reduxMessage.message);
  }, [reduxMessage.message]);



  useEffect(() => {
    // console.log(reduxMessage)
    reduxTopic.value && changChatTalk("user", reduxTopic.value);
    reduxTopic?.value &&  console.log(reduxTopic)
  }, [reduxTopic?.value])

  const ChatTalkDrawHandler = () => {

    return  chatTalk.length === 0 ?
          <div className = "intro">
                  <img width="50%" src = "./media/ai_chatIcons/web1.webp" alt = "icon" />
                  <p>Hi there!</p>
                  <p>Click the <b>“{buttonValue}”</b> button and let’s learn coding</p>
          </div> : 
          <>
            {chatTalk.map(chat => {
             return  <ChatMessage  key={chat.id} 
              className = {classNames({
                ["_userMess"]: chat.role === "user",
                ["_assistMess"]: chat.role !== "user",
              }) } 
              dataSet = {`${chat.role === "user" ? "user" : "assistant"}`}
              chat = {chat} />
            })}
          </> 
}


  return (
    <div  className={className}>
      <div  ref={myComponentRef} className= {reduxMessage.state ? "_chat_": "_chatIntro_"}>

          <ChatTalkDrawHandler  />
          { typing && <Typing  />}

      </div>
    </div>
  );
};

export default UserChat;
