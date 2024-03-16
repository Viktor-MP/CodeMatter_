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
    answer: string;
    messages: Message[];
  }


  

const  chatStart: ResponseData = {
    answer:"Բարև Ձեզ! Ինչպե՞ս կարող եմ ձեզ օգնել:",
    messages: [
        {role: 'assistant', content: 'Hello! How can I assist you?'},
    ]
}

export {chatStart} 