import { CSSProperties } from "react";
import { myMessage } from "../UserChat/typesUserChat";


export interface pose {
    left: number;
    top: number;
}

export interface toolsObjType {
    "id" : number;
    "name" :string;
    "usage" : boolean;
    "action" : (e: React.MouseEvent<HTMLParagraphElement>) => void;
}



export interface chatMessageType {
    chat: myMessage
    className: string
    dataSet: string
}

export interface toolsDrawType {
    tools: toolsObjType[]
}



const elPosition = {
    left: 0 ,
    top : 0 ,
}


const messageStyle: CSSProperties = {
    boxShadow: "0px 0px 30px -10px rgba(0,0,0,0.79)"
}

const deleteMessage = (e: any) => {
    console.log(e)
    console.log(e.currentTarget)
    console.log(e)
}
const eddetMessage = (e: any) => {
    console.log(e)

}

const copyMessage = (e: any) => {
    console.log(e)
}



const toolsObj: toolsObjType[] = [
    {
        "id" : 0,
        "name" : "Delete",
        "usage" : true,
        "action" : (e) => deleteMessage(e)
    },
    {
        "id" : 1,
        "name" : "Eddet",
        "usage" : false,
        "action" : (e) => eddetMessage(e)
    },
    {
        "id" : 2,
        "name" : "Copy text",
        "usage" : true,
        "action" : (e) => copyMessage(e)
    }
  ]


export { elPosition, messageStyle,toolsObj }