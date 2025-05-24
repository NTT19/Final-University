import sensorReadingClient from "./sensorReadingClient";

// Hàm lấy thông tin sensorReading từ API
const getSensorReading = async () => {
    try {
        const response = await sensorReadingClient.get('/sensorReading');
        return response.data; 
    } catch (error) {
        console.error("Error fetching sensor reading data: ", error);
        throw error; 
    }
};

// getSensorReading()
//     .then((data) => console.log('Sensor Reading Data:', data)) 
//     .catch((error) => console.error("Error: ", error)); 

export default { getSensorReading };