import { CSSProperties } from "react";
import { myMessage } from "../UserChat/typesUserChat";
import { copyMessage, deleteMessage, editMessage } from "./ChatMessageConf";



export interface pose {
    left: number;
    top: number;
}

export interface toolsObjType {
    "id" : number;
    "name" :string;
    "usage" : boolean;
    "action" : (id : number, confArr: myMessage[]) => void;
}



export interface chatMessageType {
    chat: myMessage
    className: string
    dataSet: string
    id: number
    confObj: myMessage[]
}

export interface toolsDrawType {
    tools: toolsObjType[]
    confArr: myMessage[]
}



const elPosition = {
    left: 0 ,
    top : 0 ,
}


const messageStyle: CSSProperties = {
    boxShadow: "0px 0px 30px -10px rgba(0,0,0,0.79)"
}





const toolsObj: toolsObjType[] = [
    {
        "id" : 0,
        "name" : "Ջնջել",
        "usage" : true,
        "action" : (id, confArr) => deleteMessage(id, confArr)
    },
    {
        "id" : 1,
        "name" : "Փոխել",
        "usage" : false,
        "action" : (id, confArr) => editMessage(id, confArr)
    },
    {
        "id" : 2,
        "name" : "Պատճենել",
        "usage" : true,
        "action" : (id, confArr) => copyMessage(id, confArr)
    }
  ]


export { elPosition, messageStyle,toolsObj }