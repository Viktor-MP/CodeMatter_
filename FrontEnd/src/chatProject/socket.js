

const socket_chanal = (url) => {
    const ws = new WebSocket(url)
    ws.onopen = function(e) {
     
        ws.send(`{
            "messages": [
                {
                    "role": "user",
                    "content": "բառև"
                }
            ]
        }

    `)
    }
    ws.onmessage = function (message) {
      console.log(JSON.stringify(message.data))
        // console.log(  message.data)
    }
}


export default socket_chanal