// import axios from "axios";
// import OpenAI from '/node_mo'

// import {response} from "express";

const translate = (message, lang_from, lang_to) => {
    return fetch("https://api.edenai.run/v2/translation/automatic_translation", {
        method: 'POST',
        headers: {
            accept: 'application/json',
            'content-type': 'application/json',
            authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiNDRhZmU3MGEtN2Y3Yi00YjVkLWE2YTAtMWYzMDg1NWEwMWFhIiwidHlwZSI6ImFwaV90b2tlbiJ9.YqJFuFH70PFAm4jvKA5IYLjFypdMI8vmTop39g6GoC8'
        },
        body: JSON.stringify({
            response_as_dict: true,
            attributes_as_list: false,
            show_original_response: false,
            providers: 'google',
            text: message,
            source_language: lang_from,
            target_language: lang_to
        })
    })
        .then(response => {
            return response.json()
        })
        .then(response => {
            return response.google.text
        })
        .catch(err => console.error(err));
}

const GPT_GET_TEXT = (message) => {
    return fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
            'Authorization': `Bearer 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`,
            'Content-Type': 'application/json',
            accept: 'application/json',

        },
        body: JSON.stringify({
            model: "gpt-3.5-turbo",
            messages: message,
        })
    })
        .then(response => {
            return response.json();
        })
        .then(data => {
            return data.choices[0].message
        })
        .catch(error => {
            console.error('Error:', error);
        });
}

const socket_chanal = (messages) => {
    let user_last_message = messages.messages[messages.messages.length - 1].content

    console.log("USER MESS: ", user_last_message)
    translate(user_last_message, 'hy', 'en').then(msg_en => {
        messages.messages[messages.messages.length - 1].content = msg_en
        GPT_GET_TEXT(messages.messages).then(gpt_msg => {
            messages.messages.push(gpt_msg)
            translate(gpt_msg.content, 'en', 'hy').then(msg_hy => {
                console.log("GPT MESS: ", msg_hy)
                messages['answer'] = msg_hy
                return messages
            })
        })
    })
}

export {socket_chanal}