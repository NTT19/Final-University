import axios from "axios";

const apiClient = axios.create({
    baseURL: "https://67c387671851890165af4169.mockapi.io/api",
    headers:{
        "Content-type": "application/json",
    },
    timeout: 10000,
});

apiClient.interceptors.request.use(
    (response) => response,
    (error) => {
        console.error("API error: ", error.response?.data || error.message);
        return Promise.reject(error);
    }
);

export default apiClient;




