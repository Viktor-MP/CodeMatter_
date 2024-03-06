import { ResponseData } from "./typesUserChat";
// import { translateReq, gpt_get_Req } from "../../../../chatSours"
import fetchData from "../../../../AxiosRequest/AxiosReques";



const gptGetResponse = async (message: string) => {
    console.log(message)
    try {
        const res = await fetch(gpt_get_Req.url, {
            method: gpt_get_Req.method,
            headers: gpt_get_Req.headers,
            body: JSON.stringify({
                model: "gpt-3.5-turbo",
                messages: message,
            })
        });
        const resData = res.json()
        console.log(resData)
        return resData
    }
    catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
}   

// fetchData

const translateMessage = async (lastMessage: string, lang_from: string, lang_to:string) => {
    
try {
    const res = await fetch(translateReq.url, {
        method: translateReq.method,
        headers: translateReq.headers,
        body: JSON.stringify({
            response_as_dict: true,
            attributes_as_list: false,
            show_original_response: false,
            providers: 'google',
            text: lastMessage,
            source_language: lang_from,
            target_language: lang_to
        })
    });
    const tr_mass = await res.json();
    return tr_mass.google;
}
catch (error) {
    console.error('Error fetching data:', error);
    throw error;
}

    
    
}

export { translateMessage, gptGetResponse }