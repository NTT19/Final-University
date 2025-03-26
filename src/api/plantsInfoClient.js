import axios from "axios";
import { variables } from "./variables";

const plantsInfoClient = axios.create({
    baseURL: variables.PLANTSINFOR_URL,  
    headers: {
        "Content-type": "application/json",
    },
    timeout: 10000, 
});


apiClient.interceptors.response.use(
    (response) => response,  
    (error) => {
        console.error("API error: ", error.response?.data || error.message);  
        return Promise.reject(error);  
    }
);

export default apiClient;
