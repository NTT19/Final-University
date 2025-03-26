import axios from "axios";
import { variables } from "./variables";

// Tạo axios client cho sensor reading API
const sensorReadingClient = axios.create({
    baseURL: variables.SENSOR_READING, 
    headers: {
        "Content-type": "application/json",  
    },
    timeout: 10000, 
});

// Xử lý lỗi global với interceptor
sensorReadingClient.interceptors.response.use(
    (response) => response,  
    (error) => {
        console.error("API error: ", error.response?.data || error.message);
        return Promise.reject(error);
    }
);

export default sensorReadingClient;