import { myMessage } from "../UserChat/typesUserChat";

export interface topic {
    drawingSate: boolean;
    anim: string;
}

export interface topicType {
    value: string;
    id: number;
}

export interface chatTalkType {
    talkId: number;
}

// What is HTML and CSS?
// Tell me a fun fact about the Roman Empire

const topicValues: topicType[] = [
    {
        value: "Ինչ՞ է HTML և CSS",
        id: 0,
    },
    {
        value: "Ասա ինձ մի զվարճալի փաստ Հռոմեական կայսրության մասին",
        id: 1,
    },
];

export { topicValues };
