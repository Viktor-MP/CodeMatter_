import { FC, useState, CSSProperties, MouseEvent, FocusEvent } from "react";
import {
  chatMessageType,
  toolsObjType,
  messageStyle,
  elPosition,
  toolsObj,
  pose,
  toolsDrowType,
} from "./chatMessageType";

import "./ChatMessage.scss";

const ChatMessage: FC<chatMessageType> = ({ className, chat }) => {
  const toolTypes: string[] = ["_hiden_tools", "_show_tools"];

  const [toolsView, setToolsView] = useState(toolTypes[0]);
  const [elPose, setElPose] = useState<pose>(elPosition);

  const rcStyle: CSSProperties = {
    left: elPose.left,
    top: elPose.top,
  };

  const openExtraTools = (
    e: MouseEvent<HTMLDivElement> | FocusEvent<HTMLDivElement>
  ) => {
    e.preventDefault();
    console.log(toolsObj);

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

  const DrowTools: FC<toolsDrowType>= ({tools}) => {
    console.log(tools);
    
    return (
            <ul  className={` ${toolsView}  defTool`} style={rcStyle}>
                {tools.map(tool => <li key={tool.id}  onClick={tool.action}>{tool.name}</li>)}
            </ul>
            );
  };
  console.log(chat)
  return (
    <div
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
