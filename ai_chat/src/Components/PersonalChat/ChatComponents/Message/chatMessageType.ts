import { CSSProperties } from "react";
import { Message, myMessage } from "../UserChat/typesUserChat";


export interface pose {
    left: number;
    top: number;
}

export interface toolsObjType {
    "id" : number;
    "name" :string;
    "usage" : boolean;
    "action" : (id : number, conf: Message[]) => void;
}



export interface chatMessageType {
    chat: myMessage
    className: string
    dataSet: string
    id: number
    confObj: Message[]
}

export interface toolsDrawType {
    tools: toolsObjType[]
    conf: Message[]
}



const elPosition = {
    left: 0 ,
    top : 0 ,
}


const messageStyle: CSSProperties = {
    boxShadow: "0px 0px 30px -10px rgba(0,0,0,0.79)"
}

const deleteMessage = (messId: number, conf: Message[]) => {
    console.log(messId)
    console.log(conf)


}
const editMessage = (messId: number, conf: Message[]) => {
    console.log(messId)
    console.log(conf)


}

const copyMessage = (messId: number, conf: Message[]) => {

    navigator.clipboard.writeText(conf[messId].content)
    return "coped"

}



const toolsObj: toolsObjType[] = [
    {
        "id" : 0,
        "name" : "Delete",
        "usage" : true,
        "action" : (id, conf) => deleteMessage(id, conf)
    },
    {
        "id" : 1,
        "name" : "Edit",
        "usage" : false,
        "action" : (id, conf) => editMessage(id, conf)
    },
    {
        "id" : 2,
        "name" : "Copy text",
        "usage" : true,
        "action" : (id, conf) => copyMessage(id, conf)
    }
  ]


export { elPosition, messageStyle,toolsObj }