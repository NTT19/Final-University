import apiClient from "./apiClient";

// Hàm lấy thông tin cây trồng từ API
const getPlants = () => {
    return apiClient.get('/plants');  
};
console.log(getPlants);

export default { getPlants };