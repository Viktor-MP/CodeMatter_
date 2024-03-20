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
    "action" : (e: React.MouseEvent<HTMLLIElement>) => void;
}

export interface chatMessageType {
    chat: myMessage
    className: string
}

export interface toolsDrowType {
    tools: toolsObjType[]
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
        "name" : "Delete",
        "usage" : true,
        "action" : (e: any) => {console.log(e)}
    },
    {
        "id" : 1,
        "name" : "Eddet",
        "usage" : false,
        "action" : (e: any) => {console.log(e)}
    },
    {
        "id" : 2,
        "name" : "Copy text",
        "usage" : true,
        "action" : (e: any) => {console.log(e)}
    }
  ]


export { elPosition, messageStyle,toolsObj }