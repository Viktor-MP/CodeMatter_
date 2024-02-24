// import WebSocket from 'ws'


const socket_chanal = (url) => {
    const ws = new WebSocket(url, 'protocolOne');

    ws.onopen = (e) => {
      console.log(e,"opend")
          ws.send({
      "messages": [
        {
          "role": "user",
          "content": "բառև"
        }
      ]
    })
    }
    ws.onclose = (e) => console.log(e, "onclose")
    ws.onerror = (e) => console.log("error", e)
    ws.onmessage = (e) => console.log(e)
    console.log(ws)

}



export { socket_chanal }