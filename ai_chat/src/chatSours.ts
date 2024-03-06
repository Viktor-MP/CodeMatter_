interface header {
    accept: string;
    "content-type": string;
    autorization: string
}

interface reqData  {
    url: string;
    method: string;
    headers: header[]
}

const translateReq = {
    url: 'https://api.edenai.run/v2/translation/automatic_translation',
    method: 'POST',
    headers: {
        accept: 'application/json',
        'content-type': 'application/json',
        authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiNDRhZmU3MGEtN2Y3Yi00YjVkLWE2YTAtMWYzMDg1NWEwMWFhIiwidHlwZSI6ImFwaV90b2tlbiJ9.YqJFuFH70PFAm4jvKA5IYLjFypdMI8vmTop39g6GoC8'
    }
}


const gpt_get_Req = {
    url: 'https://api.openai.com/v1/chat/completions',
    method: "POST",
    headers: {
        accept: 'application/json',
        'content-Type': 'application/json',
        authorization: `Bearer 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`,
    },
}

export {translateReq, gpt_get_Req}