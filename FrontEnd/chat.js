const https = require('https');
const fs = require('fs');
const WebSocket = require('ws');
const axios = require('axios');
const cld = require('cld');
const OpenAI = require("openai");
require("dotenv").config();

const openai = new OpenAI({
    apiKey: process.env.GPT_TOKEN,
});

const websocket = https.createServer({
//     cert: fs.readFileSync('./webhook_cert.pem'), // SSL certificate
//     key: fs.readFileSync('./webhook_pkey.pem') // Private key
});

const wss = new WebSocket.Server({port: 8082});

const translate = async (message, lang_from, lang_to) => {
    try {
        const response = await axios.request({
            method: 'POST',
            url: 'https://translate-plus.p.rapidapi.com/translate',
            headers: {
                'content-type': 'application/json',
                'X-RapidAPI-Key': process.env.TR_TOKEN,
                'X-RapidAPI-Host': 'translate-plus.p.rapidapi.com'
            },
            data: {
                text: message,
                source: lang_from,
                target: lang_to
            }
        })
        return response.data
    } catch (error) {
        console.error(error);
    }
}

const GPT_GET_TEXT = async (messages) => {
    try {
        const response = await openai.chat.completions.create({
            model: "gpt-3.5-turbo",
            messages: messages,
            temperature: 0,
            max_tokens: 1000,
        });
        return response.choices[0].message
    } catch (err) {
        console.log(err.message)
    }
}


wss.on('connection', function connection(ws) {
    console.log('Client connected');
    ws.on('message', function incoming(message) {
        message = JSON.parse(message)
        let messages = message.messages
        // console.log(messages)

        let user_last_message = messages[messages.length - 1].content
            // console.log("USER MESS: ", user_last_message)
            translate(user_last_message, 'hy', 'en').then((translate_text) => {
            let user_message_en = translate_text.translations.translation
            // console.log(`Translate to en: `, user_message_en)
            messages[messages.length - 1].content = user_message_en
            GPT_GET_TEXT(messages).then((GPT_text) => {
                // console.log(`AI Default text: en`, GPT_text)
                messages.push(GPT_text)
                translate(GPT_text.content, 'en', 'hy').then((send_text) => {
                    let answer = send_text.translations.translation
                    // console.log(`AI text translate to : ${lang}`, )
                    message["answer"] = answer
                    ws.send(JSON.stringify(message))
                })
            })
        })
    });

    ws.on('close', function () {
        console.log('Client disconnected');
    });
});

module.exports = {
    websocket
}

//https://rapidapi.com/rphrp1985/api/chatgpt-42/pricing