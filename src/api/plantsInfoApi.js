import plantsInfoClient from "./plantsInfoClient";

// Hàm lấy thông tin cây trồng từ API
const getPlants = () => {
    return plantsInfoClient.get('/plants');  
};


export default { getPlants };