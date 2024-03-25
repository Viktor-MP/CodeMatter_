import { FC, useState, CSSProperties, MouseEvent, FocusEvent, useRef } from "react";
import {
  chatMessageType,
  toolsDrowType,
  messageStyle,
  elPosition,
  toolsObj,
  pose,
} from "./chatMessageType";

import "./ChatMessage.scss";

const ChatMessage: FC<chatMessageType> = ({ className, chat, dataSet }) => {
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
    const newTool = 
      <div  className={` ${toolsView}  defTool`} style={rcStyle}>
          {tools.map(tool => <p key={tool.id}  onClick={tool.action}>{tool.name}</p>)}
      </div>
    
    return newTool;
  };

  const openExtraTools = (
    e: MouseEvent<HTMLDivElement> | FocusEvent<HTMLDivElement>
  ) => {
    e.preventDefault();


    if ("pageX" in e && toolsView === toolTypes[0]) {

      const target = e.currentTarget as HTMLDivElement;
      
      let x =  target.dataset.id === "user" &&  110 || 0
      const mouseX = e.pageX - target.getBoundingClientRect().left - x;
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
      className={`${className} _message`}
      onContextMenu={openExtraTools}
      onBlur={openExtraTools}
      style={messageStyle}
      data-id={dataSet}
      ref = {curentRef}
      tabIndex={0}
    >
      <pre> {chat.content} </pre>

      {<DrowTools tools={toolsObj}  />}
    </div>
  );
};

export default ChatMessage;
