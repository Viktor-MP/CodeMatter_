import { type FC, useEffect, useState } from "react";
import { topicValues, topic } from "./TopicTypes";
import {
  useTopicDispatch,
} from "../../../ReduxToolkit/app_hooks";
import { sendTopic } from "./TopicSlice";

import classNames from "classnames";
import "./Topics.scss";

const Topics: FC<topic> = ({ drawingSate, anim }) => {
  const [animStart, setAnimStart] = useState(false);
  const reduxTopicDispatch = useTopicDispatch();

  const sendTopicHandler = (value: string, id: number) => {
    reduxTopicDispatch(sendTopic({ value, id }));
    console.log(value);
  };

  useEffect(() => {
    anim &&
      setTimeout(() => {
        setAnimStart(!animStart);
      }, 5);
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
