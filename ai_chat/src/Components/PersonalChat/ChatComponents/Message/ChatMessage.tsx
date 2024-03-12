import { FC, useState, CSSProperties } from "react"
import { chatMessageType, pose } from "./chatMessageType"

import "./ChatMessage.scss"

const elPosition = {
    left: 0 ,
    top : 0 ,
}


const ChatMessage: FC <chatMessageType> = ({ key, className, chat  })  => {
    // const eventType = React.MouseEvent<HTMLButtonElement>
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
      
        let mouseX, mouseY;
        
        'view' in e && 'screenLeft' in e.view && console.log(e.view.screenLeft)
        'clientX' in e && console.log(e.clientX, e.clientY)
        // 'pageX' in e &&  {mouseX : e.clientX, mouseY : e.clientY}
        
        
        const target =  e.currentTarget as HTMLDivElement;
        console.dir(target)

    
     
        "pageX" in e  &&   setElPose({
                left: e.clientX - target.clientWidth,
                top: e.clientY
            })

        "pageX" in e ?
         setTools(toolTypes[1]):
         setTools(toolTypes[0]);
    }
    

    // <Card className={${classes["rsCard"]} ${classes["sowcase"]}}
    console.log(chat.id)
    console.log()
    return (
        <div key = {key}    onContextMenu = {openExtraTools }
                onBlur = { openExtraTools } 
                className={`${className} _message`}
                tabIndex={0}  >


            <p> {chat.content} </p>
            <div className = { `${tools}   defTool `}  style= {rc} >
                    <p>Delete</p>
                    <p>Edit</p>
                    <p>Copy text</p>
            </div>
        </div>
        )
}

export default ChatMessage