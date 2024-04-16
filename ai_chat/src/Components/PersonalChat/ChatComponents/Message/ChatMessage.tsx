import {
    FC,
    useState,
    CSSProperties,
    MouseEvent,
    FocusEvent,
    useRef,
    ReactElement,
} from "react";
import {
    chatMessageType,
    toolsDrawType,
    messageStyle,
    elPosition,
    toolsObj,
    pose,
} from "./chatMessageType";

import "./ChatMessage.scss";
import { useAppDispatch } from "../../../ReduxToolkit/app_hooks";

const ChatMessage: FC<chatMessageType> = ({
    className,
    dataSet,
    confObj,
    chat,
    id,
}) => {
    const toolTypes: string[] = ["_hidden_tools", "_show_tools"];
    const [toolsView, setToolsView] = useState(toolTypes[0]);
    const [elPose, setElPose] = useState<pose>(elPosition);
    let currentRef = useRef<HTMLDivElement>(null);

    const reduxDespatch = useAppDispatch();

    const rcStyle: CSSProperties = {
        left: elPose.left,
        top: elPose.top,
    };

    const DrawTools: FC<toolsDrawType> = ({ tools, confArr }) => {
        let assist: ReactElement;
        const newTool = (
            <div className={` ${toolsView}  defTool`} style={rcStyle}>
                {tools.map((tool) => {
                    // console.log(confArr);
                    assist = (
                        <p
                            key={tool.id}
                            onClick={() => {
                                tool.action(id, confArr);

                                setToolsView(toolTypes[0]);
                            }}
                        >
                            {tool.name}
                        </p>
                    );
                    return tool.usage? assist: 
                    confArr[`${id}`]?.role === "user"? assist: null
                })}
            </div>
        );
        return newTool;
    };

    const openExtraTools = (
        e: MouseEvent<HTMLDivElement> | FocusEvent<HTMLDivElement>
    ) => {
        e.preventDefault();

        if ("pageX" in e && toolsView === toolTypes[0]) {
            const target = e.currentTarget as HTMLDivElement;

            let x = (target.dataset.id === "user" && 110) || 0;
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
            ref={currentRef}
            tabIndex={0}
        >
            <pre> {chat.content} </pre>

            {<DrawTools tools={toolsObj} confArr={confObj} />}
        </div>
    );
};

export default ChatMessage;
