const https = require('https');
const fs = require('fs');
const WebSocket = require('ws');
const axios = require('axios');
const cld = require('cld');

require('dotenv').config()

const websocket = https.createServer({
    cert: fs.readFileSync('./webhook_cert.pem'), // SSL certificate
    key: fs.readFileSync('./webhook_pkey.pem') // Private key
});

const wss = new WebSocket.Server({server: websocket});


const translate = async (message, lang_from, lang_to) => {
    try {
        const response = await axios.request({
            method: 'POST',
            url: 'https://translate-plus.p.rapidapi.com/translate',
            headers: {
                'content-type': 'application/json',
                'X-RapidAPI-Key': process.env.GPT_TOKEN,
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

const GPT_4 = async (message) => {
    try {
        const GPT_4 = await axios.request({
            method: 'POST',
            url: 'https://open-ai21.p.rapidapi.com/conversationgpt35',
            headers: {
                'content-type': 'application/json',
                'X-RapidAPI-Key': process.env.GPT_TOKEN,
                'X-RapidAPI-Host': 'open-ai21.p.rapidapi.com'
            },
            data: {
                messages: [
                    {
                        role: 'user',
                        content: message
                    }
                ],
                web_access: false,
                system_prompt: '',
                temperature: 0.9,
                top_k: 5,
                top_p: 0.9,
                max_tokens: 256
            }
        })
        return GPT_4.data.result
    } catch (error) {
        return GPT_4_SPORT(message)
    }
}

const GPT_4_SPORT = async (message) => {
    try {
        const GPT_4 = await axios.request({
            method: 'POST',
            url: 'https://chatgpt-api8.p.rapidapi.com/',
            headers: {
                'content-type': 'application/json',
                'X-RapidAPI-Key': process.env.GPT_TOKEN,
                'X-RapidAPI-Host': 'chatgpt-api8.p.rapidapi.com'
            },
            data: [
                {
                    content: message,
                    role: 'user'
                }
            ]
        })
        return GPT_4.data.text
    } catch (error) {
        console.error(error);
    }
}


wss.on('connection', function connection(ws) {
    console.log('Client connected');

    ws.on('message', function incoming(message) {
        let data = JSON.parse(message)
        cld.detect(data.text).then((detect_lang) => {
            let lang = detect_lang.languages[0].code
            console.log("User text: ", data.text)
            if (lang === "hy" || lang === "ru") {
                translate(data.text, lang, 'en').then((translate_text) => {
                    console.log(`Translate to ${lang}: `, translate_text.translations.translation)
                    GPT_4_SPORT(translate_text.translations.translation).then((GPT_text) => {
                        console.log(`AI Default text: ${lang}`, GPT_text)
                        translate(GPT_text, 'en', lang).then((send_text) => {
                            console.log(`AI text translate to : ${lang}`, send_text.translations.translation)
                            ws.send(send_text.translations.translation)
                        })
                    })
                })
            } else if (lang === "en") {
                GPT_4_SPORT(data.text).then((GPT_text) => {
                    console.log("AI text: ", GPT_text)
                    ws.send(GPT_text)
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