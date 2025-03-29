import modeSettingClient from "./modeSettingClient";

const getModeSetting = async () => {
    try {
        const response = await modeSettingClient.get('/modeSetting');
        return response.data; 
    } catch (error) {
        console.error("Error fetching sensor reading data: ", error);
        throw error; 
    }
};

getModeSetting()
.then((data) => console.log('mode setting Data:', data)) 
.catch((error) => console.error("Error: ", error)); 

export default { getModeSetting };
