import statusControlClient from "./statusControlClient";

const getStatusDevices = async () => {
    try {
        const response = await statusControlClient.get('/ledStatus');
        return response.data; 
    } catch (error) {
        console.error("Error fetching sensor reading data: ", error);
        throw error; 
    }
};

getStatusDevices()
    .then((data) => console.log('Status control:', data)) 
    .catch((error) => console.error("Error: ", error)); 

export default { getStatusDevices };    