import apiClient from "./apiClient";

const login = (phone_number, password) => {
    return apiClient.post('/login',
    {
        phone_number,
        password,
    });

};

export default {login};