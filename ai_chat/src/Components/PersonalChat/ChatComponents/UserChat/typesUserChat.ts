export interface myMessage {
  role: "user" | "assistant";
  content: string;
  id: number
}


interface Message {
    role: "user" | "assistant";
    content: string;
  }
  
 export interface ResponseData {
    messages: Message[];
    answer: string;
  }


  