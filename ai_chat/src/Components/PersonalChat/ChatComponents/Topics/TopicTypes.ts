

export interface topic {
    drawingSate: boolean
    anim: string
}

export interface topicType {
    value: string
    id: number
}
 

const  topicValues: topicType[] = [
    {
        value: "What is HTML and CSS?",
        id: 0
    },
    {
        value: "Tell me a fun fact about the Roman Empire",
        id: 1
    },

]

export {topicValues}
