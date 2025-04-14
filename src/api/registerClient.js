import axios from "axios";
import { variables } from "./variables";

const registerClient = axios.create({
    baseURL: variables.REGISTER,
    headers:{
        "Content-type": "application/json",
    },
    timeout: 10000,
});

registerClient.interceptors.request.use(
    (response) => response,
    (error) => {
        console.error("API error: ", error.response?.data || error.message);
        return Promise.reject(error);
    }
);

export default registerClient;