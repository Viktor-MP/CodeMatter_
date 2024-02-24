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
    cert: fs.readFileSync('./webhook_cert.pem'), // SSL certificate
    key: fs.readFileSync('./webhook_pkey.pem') // Private key
});

const wss = new WebSocket.Server({ server: websocket, onServer: true });

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
    console.log(messages)
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
        console.log(typeof messages)
        let user_last_message = messages[messages.length - 1].content
        cld.detect(user_last_message).then((detect_lang) => {
            console.log(detect_lang)
            let lang = detect_lang.languages[0].code
            console.log("USER MESS: ", user_last_message)
            if (lang === "hy") {
                translate(user_last_message, lang, 'en').then((translate_text) => {
                    let user_message_en = translate_text.translations.translation
                    console.log(`Translate to en: `, user_message_en)
                    user_last_message.content = user_message_en
                    GPT_GET_TEXT(messages).then((GPT_text) => {
                        console.log(`AI Default text: en`, GPT_text)
                        messages.push(GPT_text)
                        translate(GPT_text.content, 'en', lang).then((send_text) => {
                            console.log(send_text)
                            console.log(`AI text translate to : ${lang}`, )
                            message["answer"] = send_text.translations.translation
                            ws.send(JSON.stringify(message))
                        })
                    })
                })
            } else if (lang === "en" || lang === "ru") {
                GPT_GET_TEXT(messages).then((GPT_text) => {
                    console.log("AI text: ", GPT_text.content)
                    message["answer"] = GPT_text.content
                    ws.send(JSON.stringify(message))
                })
            }
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