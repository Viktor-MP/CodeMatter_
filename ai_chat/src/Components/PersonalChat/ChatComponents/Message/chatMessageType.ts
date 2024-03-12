import { myMessage } from "../UserChat/typesUserChat";


export interface pose {
    left: number;
    top: number;
}

export interface chatMessageType {
    chat: myMessage;
    className: string;
    key: number;
}

