import { type FC, useEffect, useState } from "react";
import { topicValues, topic, topicType } from "./TopicTypes";

import { useAppDispatch } from "../../../ReduxToolkit/app_hooks";
import { sendTopic } from "../../../ReduxToolkit/UserSliceStor";


import classNames from "classnames";
import "./Topics.scss";

const Topics: FC<topic> = ({ drawingSate, anim }) => {
  const [animStart, setAnimStart] = useState(false);
  
  
  const topicInfo: topicType = {
    value: "",
    id: 0
  }
  // console.log(reduxTopicDispatch(sendTopic(topicInfo)))
  const reduxDespatch = useAppDispatch();

  const sendTopicHandler = (value: string, id: number) => {
    topicInfo.value = value
    topicInfo.id = id
    reduxDespatch(sendTopic(topicInfo))
    
  };

  useEffect(() => {
    anim &&
      setTimeout(() => {
        setAnimStart(!animStart);
      }, 50);
  }, [anim]);

  return drawingSate ? (
    <div className={`_extraQuest  ${animStart && anim}`}>
      {topicValues.map((topic) => {
        return (
          <div
            role="button"  
            onClick={() => sendTopicHandler(topic.value, topic.id)}
            className={classNames({
              ["fromRight"]: topic.id % 2 === 0,
              ["fromLeft"]: topic.id % 2 !== 0,
            })}
            key={topic.id}
          >
            {topic.value}
          </div>
        );
      })}
    </div>
  ) : (
    <></>
  );
};

export default Topics;
