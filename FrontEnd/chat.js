const axios = require('axios');
const OpenAI = require("openai");

require("dotenv").config();

const openai = new OpenAI({
    apiKey: process.env.GPT_TOKEN,
});
const translate = async (message, lang_from, lang_to) => {
    try {
        return axios.request({
            method: "POST",
            url: "https://api.edenai.run/v2/translation/automatic_translation",
            headers: {
                authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiNDRhZmU3MGEtN2Y3Yi00YjVkLWE2YTAtMWYzMDg1NWEwMWFhIiwidHlwZSI6ImFwaV90b2tlbiJ9.YqJFuFH70PFAm4jvKA5IYLjFypdMI8vmTop39g6GoC8",
            },
            data: {
                providers: "google",
                text: message,
                source_language: lang_from,
                target_language: lang_to,
                fallback_providers: "",
            },
        })
            .then((response) => {
                return response.data
            })
            .catch((error) => {
                console.error(error);
            });
    } catch (error) {
        console.error(error)
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

module.exports = {
    translate, GPT_GET_TEXT
}

//https://rapidapi.com/rphrp1985/api/chatgpt-42/pricing