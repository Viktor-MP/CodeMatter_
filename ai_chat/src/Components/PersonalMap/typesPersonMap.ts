
interface knowledgeTypes {
  name : string;
  description :string;
  source :string;
  source2? :string;

}


export interface DeveloperLevel  {
  level: string;
  id: number;
  knowledge: knowledgeTypes[];
}


export interface PersonMapType {
  burgerState: boolean
  className: string;
}

export interface PersonalChatType {
  className: string;
}

export interface PersonType {
  className: string;
  buttonValue: string;
}
