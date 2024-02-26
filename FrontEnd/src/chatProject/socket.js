// import WebSocket from 'ws'


const socket_chanal = (url) => {
  let ws = new WebSocket(url, ["soap", "wamp"]);
    // const ws = new WebSocket(url, 'protocolOne');

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
  ws.onmessage = (e) => console.log(e, 'message')

    ws.onclose = (e) => console.log(e, "onclose")
    ws.onerror = (e) => console.log(e, "error")

}



export { socket_chanal }