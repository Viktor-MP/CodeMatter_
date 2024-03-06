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



// export {translateReq, gpt_get_Req}