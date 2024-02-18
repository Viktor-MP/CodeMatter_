import {TOKEN} from './conf.js'
const sendMessageOnTelegram = (
    text,
    admin_group_id = "-4106014537",
    reply_markup = {}
) => {
    fetch("https://api.telegram.org/bot" + TOKEN + "/sendMessage", {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
            "chat_id": admin_group_id,
            "text": text,
            "reply_markup": reply_markup
        }),
    })
        .then(response => response.json())
        .then(data => {
            console.log('Success:', data)
        })
        .catch(error => {
            console.error('Error:', error)
        })
}

export {
    sendMessageOnTelegram,
}