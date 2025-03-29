import manualControlClient from "./manualControlClient";

const updateDeviceStatus = async (ledName, status) => {
    try {
        const response = await manualControlClient.put(
            `/update?led=${ledName}&status=${status}` 
        );
        return response.data; 
    } catch (error) {
        console.error("Error updating device status: ", error);
        throw error; 
    }
};

export default { updateDeviceStatus };
