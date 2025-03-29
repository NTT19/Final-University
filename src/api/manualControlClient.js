import axios from "axios";
import { variables } from "./variables";


const manualControlClient = axios.create({
    baseURL: variables.MANUAL_CONTROL, 
    headers: {
        "Content-type": "application/json",
    },
    timeout: 10000,
});
manualControlClient.interceptors.response.use(
    (response) => response, 
    (error) => {
        console.error("API lỗi: ", error.response?.data || error.message);
        return Promise.reject(error); 
    }
);

export default manualControlClient;
