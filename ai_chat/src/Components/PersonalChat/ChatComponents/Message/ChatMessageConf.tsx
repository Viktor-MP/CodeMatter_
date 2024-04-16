import { myMessage } from "../UserChat/typesUserChat"



const deleteMessage = (messId: number, confArr: myMessage[]) => {
    return confArr.filter(conf => conf.id !== messId)
}


const editMessage = (messId: number, confArr: myMessage[]) => {
    console.log(messId)
    console.log(confArr)
}

const copyMessage = (messId: number, confArr: myMessage[]) => {

    navigator.clipboard.writeText(confArr[messId].content)
    return 

}

export {deleteMessage, editMessage, copyMessage}
// export {deleteMessage}
