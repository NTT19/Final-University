import registerClient from "./registerClient";

const register = (fullName, phoneNumber, email, password) => {
    return registerClient.baseURL.POST('/register',
    {
        fullName,
        phoneNumber,
        email,
        password,
        status: 'active', 
        role_id: 1, 
    });

};

export default {register};