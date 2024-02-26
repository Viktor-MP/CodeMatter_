
const socket_chanal = (url) => {
    const ws = new WebSocket(url)
    ws.onopen = function(e) {
        alert("[open] Connection established");
        alert("Sending to server");
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
        console.log(message)
    }
}


export { socket_chanal }