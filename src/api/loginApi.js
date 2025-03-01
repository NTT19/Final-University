import apiClient from "./apiClient";

const login = (phone, password) => {
    return apiClient.post('/login',
    {
        phone,
        password
    });

};

export default {login};