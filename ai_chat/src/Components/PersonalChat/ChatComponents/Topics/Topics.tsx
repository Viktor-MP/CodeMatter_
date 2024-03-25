import { FC, useEffect, useState } from "react"
import { topicValues, topyc } from "./TopicTypes"
import "./Topics.scss"


const Topics:FC <topyc> = ({drowingSate, anim}) => {
    const [animStart, setAnimStart] = useState(false)
    
    useEffect(() => {
       anim && setTimeout(() => {setAnimStart(!animStart)}, 5)
    }, [anim])

    return drowingSate ? 
        <div className = {`_extraQuest  ${animStart &&  anim}`}>

            {topicValues.map(topic => {
                return <input className = {topic.id % 2 === 0? "fromRight": "fromLeft"}  type="text" readOnly={true} key={topic.id} value={topic.value} />
            })}


        </div>: <></>;   
}


export default Topics