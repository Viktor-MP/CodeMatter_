import axios, { AxiosResponse, AxiosError, AxiosRequestConfig } from "axios";
// import { DeveloperLevel } from "../Components/PersonalMap/typesPersonMap";
// import { Message, ResponseData } from "../Components/PersonalChat/ChatComponents/UserChat/typesUserChat";

// Example function to fetch data using Axios
const fetchData = async (
    url: string,
    method: "GET" | "POST" = "GET",
    data?: any
) => {
    const config: AxiosRequestConfig = {
        method,
        url,
        data,
    };

    try {
        // Make a request
        const response: AxiosResponse<any> = await axios(config);

        // Access the data
        const responseData = response.data;
        // Do something with the data
        return responseData;
    } catch (error: any) {
        throw error;
    }
};

export default fetchData;
