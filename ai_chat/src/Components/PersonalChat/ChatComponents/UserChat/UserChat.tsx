import { FC, useEffect, useRef, useState } from "react";
import fetchData from "../../../../AxiosRequest/AxiosRequest";

import { PersonType } from "../../../PersonalMap/typesPersonMap";
import { ResponseData, myMessage, chatStart } from "./typesUserChat";

import {
    getMessageState,
    getTalkState,
    getTopicState,
} from "../../../ReduxToolkit/UserSliceStor";
import { useAppSelector } from "../../../ReduxToolkit/app_hooks";

import ChatMessage from "../Message/ChatMessage";
import Typing from "../Typing/Typing";
import classNames from "classnames";
import "./UserChat.scss";

const UserChat: FC<PersonType> = ({ className, buttonValue }) => {
    const [chat, setChat] = useState<ResponseData>(chatStart);
    const [typing, setTyping] = useState(false);
    const [chatTalk, setChatTalk] = useState<myMessage[]>([]);
    const [messageId, setMessageId] = useState<number>(0);
    const myComponentRef = useRef<HTMLDivElement>(null);

    
    // getting message from form component
    const reduxMessage = useAppSelector(getMessageState);
    const reduxTopic = useAppSelector(getTopicState);
    const reduxTalk = useAppSelector(getTalkState)
    // console.log(reduxTalk.talkId)
    const handlerError = (err: Error, role: "assistant") => {
    //   console.log(err)
        if (err.message === "Network Error") {
            setMessageId((prevId) => (prevId += 1));

            const errorInfo = {
                content: "Please check your connection",
                role: role, 
                id: messageId,
            };
            alert(errorInfo.content);
            // setChatTalk( prev => [ ...prev, errorInfo ])
        }
        setTyping(false);
    };

    const copyObj = (obj: object) => JSON.parse(JSON.stringify(obj));

    const changChatTalk = (role: "user" | "assistant", content: string) => {
        setTyping(false);
        role === "user" && setTyping(true);
        const newChat = copyObj(chat);
        newChat.messages.push({
            content: content,
            role: role,
        });

        setChat(newChat);

        setMessageId((prevId) => (prevId += 1));
        const info = {
            content: content,
            role: role,
            id: messageId,
        };

        setChatTalk((prev) => [...prev, info]);
        
    };

    const getJsonFromSTR = (str: string) => {
        // console.log(str);
        const jsonStartEnd = "{}";
        // console.log(jsonStartEnd[0]);

        const strJson = str.slice(
            str.indexOf(jsonStartEnd[0]),
            str.lastIndexOf(jsonStartEnd[1]) + 1
        );
        // console.log(strJson);
        // console.log(JSON.parse(strJson))
    };

    const getManeContent = (data: ResponseData) => {
        let cont = copyObj(data);
        let maneMean = {
            role: "user",
            content:
                "give me the mane meaning of all conversation and give me two common questions regarding to that conversation and give me that questions in a JSON file type and give it to me do not add anything in JSON except questions and make that json using all rules for that",
        };
        cont.messages.push(maneMean);

        fetchData("https://codematter.am/api-v1/openAi", "POST", cont).then(
            (res) => getJsonFromSTR(res.answer)
        );
        // .catch( err => handlerError(err, "assistant"));
    };

    const sendData = (data: ResponseData) => {
        fetchData("https://codematter.am/api-v1/openAi", "POST", data)
            .then((res) => changChatTalk("assistant", res.answer))
            .catch((err) => handlerError(err, "assistant"));
    };

    useEffect(() => {
        // I made it hear to change rendering keys correctly
        reduxMessage.state && typing && sendData(chat);
    }, [chat]);

    useEffect(() => {
        if (chat.messages.length % 4 === 0) {
            // console.log("make");
            getManeContent(chat);
        }

        // scrolling down after any new message
        const refCur = myComponentRef.current;
        refCur &&
            refCur.scrollIntoView({
                behavior: "smooth",
                block: "end",
                inline: "end",
            });
    }, [chatTalk]);

    // useEffect(() => {
    //     // it works only ones!
    //     reduxMessage.state && chat && changChatTalk("assistant", chat.answer);
    // }, [reduxMessage.state]);

    useEffect(() => {
        reduxMessage.message && changChatTalk("user", reduxMessage.message);
    }, [reduxMessage.message]);

    useEffect(() => {
        reduxTopic.value && changChatTalk("user", reduxTopic.value);
    }, [reduxTopic?.value]);

    const ChatTalkDrawHandler = () => {
        return !reduxMessage.state ? (
            <div className="intro">
                <img
                    width="50%"
                    src="./media/ai_chatIcons/web1.webp"
                    alt="icon"
                />
                <p>Hi there!</p>
                <p>
                    Click the <b>“{buttonValue}”</b> button and let’s learn
                    coding
                </p>
            </div>
        ) : (
            <>
                {chatTalk.map((chat) => {
                    return (
                        <ChatMessage
                            key={chat.id}
                            id={chat.id}
                            confObj={chatTalk}
                            className={classNames({
                                ["_userMess"]: chat.role === "user",
                                ["_assistMess"]: chat.role !== "user",
                            })}
                            dataSet={`${
                                chat.role === "user" ? "user" : "assistant"
                            }`}
                            chat={chat}
                        />
                    );
                })}
            </>
        );
    };

    return (
        <div className={className}>
            <div
                ref={myComponentRef}
                className={reduxMessage.state ? "_chat_" : "_chatIntro_"}
            >
                <ChatTalkDrawHandler />
                {typing && <Typing />}
            </div>
        </div>
    );
};

export default UserChat;
