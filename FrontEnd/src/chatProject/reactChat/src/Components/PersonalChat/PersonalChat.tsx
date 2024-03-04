import { PersonType } from "../PersonalMap/typesPersonMap"
// import { formDataType } from "./typesPersonChat"

import React, {FC } from 'react'
import "./PersonalChat.scss"
import UserForm from "./ChatComponents/UserForm/UserForm"
import UserChat from "./ChatComponents/UserChat/UserChat"


const PersonalChat: FC <PersonType> = ({className}) => {
    


  return (
    <section className={className}>
   
        <UserChat className="_chatContainer_" />
        <UserForm className="_chatStart_"/>

    </section>
  )
}

export default PersonalChat
