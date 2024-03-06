interface Message {
    role: "user" | "assistant";
    content: string;
  }
  
 export interface ResponseData {
    messages: Message[];
    answer: string;
  }


  