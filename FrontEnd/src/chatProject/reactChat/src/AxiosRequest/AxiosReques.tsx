

import axios, { AxiosResponse, AxiosError } from 'axios';
import { DeveloperLevel } from '../Components/PersonalMap/typesPersonMap';
// Define a type for the data you expect to receive


// Example function to fetch data using Axios
const fetchData = async (url: string) => {
  try {
    // Make a GET request
    const response: AxiosResponse<DeveloperLevel[]> = await axios.get(url);

    // Access the data
    const data = response.data;
    return data
    // Do something with the data
  } catch (error: any) {
    // Handle 
    console.log(error)
    if (axios.isAxiosError(error)) {
      const axiosError: AxiosError = error;
      console.error('Axios error:', axiosError.message);
    } else {
      console.error('Unexpected error:', error.message);
    }
  }
};

export default fetchData
