import axios from "axios";
import { variables } from "./variables";

const statusControlClient = axios.create({
    baseURL: variables.STATUS_CONTROL, 
    headers: {
        "Content-type": "application/json",
    },
    timeout: 10000,
});
statusControlClient.interceptors.response.use(
    (response) => response, 
    (error) => {
        console.error("API lỗi: ", error.response?.data || error.message);
        return Promise.reject(error); 
    }
);

export default statusControlClient;