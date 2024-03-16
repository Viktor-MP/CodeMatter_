import { FC, useState, CSSProperties } from "react"
import { chatMessageType, pose } from "./chatMessageType"

import "./ChatMessage.scss"

const elPosition = {
    left: 0 ,
    top : 0 ,
}


const ChatMessage: FC <chatMessageType> = ({  className, chat  })  => {
    const toolTypes : string[] = ['_hiden_tools', '_show_tools']

    const [tools,setTools] = useState(toolTypes[0])
    const [elPose, setElPose] = useState<pose>(elPosition)
    
    
    const rc: CSSProperties = {
        left: elPose.left,
        top: elPose.top
     
    }
    // console.log(rc)
    
    const openExtraTools = (e:
        React.MouseEvent<HTMLDivElement> |
        React.FocusEvent<HTMLDivElement>
        ) => {

        e.preventDefault();
        
        // e.stopImmediatePropagation();
        
    
        if ('pageX' in e && tools === toolTypes[0]) {

            const target =  e.currentTarget as HTMLDivElement;
            const mouseX = e.pageX - target.getBoundingClientRect().left;
            const mouseY = e.pageY - target.getBoundingClientRect().top;            
            setElPose({
                left: mouseX,
                top: mouseY
            })
            setTools(toolTypes[1])
        } else {
            setTools(toolTypes[0])
        }

    }
    
    return (
            <div  
                onContextMenu = {openExtraTools }
                onBlur = { openExtraTools } 
                className={`${className} _message`}
                tabIndex={0}  >

                <p> {chat.content} </p>

                <div   className = { `${tools}   defTool `}  style  = {rc} >
                    <p>Delete</p>
                    <p>Edit</p>
                    <p>Copy text</p>
                </div>

            </div>
            )
}

export default ChatMessage