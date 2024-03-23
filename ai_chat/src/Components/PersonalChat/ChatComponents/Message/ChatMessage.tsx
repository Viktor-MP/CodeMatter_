import { FC, useState, CSSProperties, MouseEvent, FocusEvent, useRef } from "react";
import {
  chatMessageType,
  toolsDrowType,
  toolsObjType,
  messageStyle,
  elPosition,
  toolsObj,
  pose,
} from "./chatMessageType";

import "./ChatMessage.scss";

const ChatMessage: FC<chatMessageType> = ({ className, chat }) => {
  const toolTypes: string[] = ["_hiden_tools", "_show_tools"];

  const [toolsView, setToolsView] = useState(toolTypes[0]);
  const [elPose, setElPose] = useState<pose>(elPosition);
  let  curentRef = useRef<HTMLDivElement>(null)

  const rcStyle: CSSProperties = {
    left: elPose.left,
    top: elPose.top,
  };

  const DrowTools: FC<toolsDrowType>= ({tools}) => {
    // console.log(tools);
    const newTool = <div  className={` ${toolsView}  defTool`} style={rcStyle}>
                          {tools.map(tool => <p key={tool.id}  onClick={tool.action}>{tool.name}</p>)}
                    </div>
    
    return newTool;
  };

  const openExtraTools = (
    e: MouseEvent<HTMLDivElement> | FocusEvent<HTMLDivElement>
  ) => {
    e.preventDefault();
    // if (curentRef.current) {
    //   console.log(curentRef.current)
    //   const newTool = drowTools(toolsObj)
    //   // curentRef.current.appendChild() 

    // }

    if ("pageX" in e && toolsView === toolTypes[0]) {
      const target = e.currentTarget as HTMLDivElement;
      const mouseX = e.pageX - target.getBoundingClientRect().left;
      const mouseY = e.pageY - target.getBoundingClientRect().top;
      setElPose({
        left: mouseX,
        top: mouseY,
      });
        setToolsView(toolTypes[1]);
    } else {
        setToolsView(toolTypes[0]);
    }
  };




  return (
    <div
      ref = {curentRef}
      onContextMenu={openExtraTools}
      onBlur={openExtraTools}
      className={`${className} _message`}
      style={messageStyle}
      tabIndex={0}
    >
      <pre> {chat.content} </pre>

      {<DrowTools tools={toolsObj} />}
    </div>
  );
};

export default ChatMessage;
