import axios from "axios";
import { variables } from "./variables";

const modeSettingClient = axios.create({
    baseURL: variables.MODE_SETTING, 
    headers: {
        "Content-type": "application/json",  
    },
    timeout: 10000, 
});

// Xử lý lỗi global với interceptor
modeSettingClient.interceptors.response.use(
    (response) => response,  
    (error) => {
        console.error("API error: ", error.response?.data || error.message);
        return Promise.reject(error);
    }
);

export default modeSettingClient;
