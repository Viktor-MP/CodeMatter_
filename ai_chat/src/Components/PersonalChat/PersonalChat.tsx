import { PersonMapType } from "../PersonalMap/typesPersonMap"
// import { formDataType } from "./typesPersonChat"

import React, {FC } from "react"
import UserForm from "./ChatComponents/UserForm/UserForm"
import UserChat from "./ChatComponents/UserChat/UserChat"

import "./PersonalChat.scss"

const PersonalChat: FC <PersonMapType> = ({className}) => {
  
  const buttonValue = "Start"


  return (
    <section className={className}>
   
        <UserChat className="_chatContainer_" buttonValue = {buttonValue} />
        <UserForm className="_chatStart_" buttonValue = {buttonValue}/>

    </section>
  )
}

export default PersonalChat
