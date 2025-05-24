import React, { useState, useEffect, useRef } from 'react';
import { View, Text, ScrollView, ActivityIndicator } from 'react-native';
import Toast from 'react-native-toast-message';
import style from '../../theme/style';

const Recomendation = () => {
  const API_URL = 'https://plantify.info.vn/api/sensorReading'; // Thay bằng API thật
  const PREDICT_API_URL = 'http://127.0.0.1:5000/predict'; // Thay bằng API thật
  const [formData, setFormData] = useState({
    Nitrogen: '',
    Phosphorus: '',
    Potassium: '',
    Temperature: '',
    Humidity: '',
    Ph: '',
    Rainfall: '',
  });
  const [result, setResult] = useState(null);
  const [loadingSensor, setLoadingSensor] = useState(true);
  const [loadingPredict, setLoadingPredict] = useState(true);

  const lastPredictTimeRef = useRef(null);

  const showToast = (type, message) => {
    Toast.show({
      position: 'top',
      topOffset: 80,
      type: type,
      text1: message,
      visibilityTime: 3000,
      text1Style: { fontSize: 20, fontWeight: 'bold', color: 'black' },
    });
  };

  useEffect(() => {
    const fetchSensorData = async () => {
      try {
        const response = await fetch(API_URL);
        if (!response.ok) throw new Error('Lỗi khi lấy dữ liệu cảm biến');

        const sensorData = await response.json();
        if (sensorData.length > 0) {
          const latestData = sensorData[sensorData.length - 1]; // Lấy phần tử cuối cùng
          setFormData({
            Nitrogen: latestData.nitrogen || '',
            Phosphorus: latestData.phosphorus || '',
            Potassium: latestData.potassium || '',
            Temperature: latestData.temperature || '',
            Humidity: latestData.humidity || '',
            Ph: latestData.soilPH || '',
            Rainfall: latestData.waterMeter || '',
          });
          setLoadingSensor(false);
        }
      } catch (error) {
        console.error(error);
        showToast('error', 'Lỗi khi lấy dữ liệu cảm biến');
        setLoadingSensor(false);
      }
    };

    fetchSensorData();
    const interval = setInterval(fetchSensorData, 5000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const predictPlantRecommendation = async () => {
      try {
        setLoadingPredict(true);
        const response = await fetch(PREDICT_API_URL, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formData),
        });

        if (!response.ok) throw new Error('Lỗi khi gọi API dự đoán');

        const data = await response.json();
        setResult(data.result);
        lastPredictTimeRef.current = Date.now();
      } catch (error) {
        // console.error('Error:', error);
        showToast('error', 'Lỗi khi gọi API dự đoán');
      } finally {
        setLoadingPredict(false);
      }
    };

    predictPlantRecommendation();
    const predictInterval = setInterval(predictPlantRecommendation, 30 * 60 * 1000);
    return () => clearInterval(predictInterval);
  }, [formData]);

  return (
    <>
      <ScrollView contentContainerStyle={{ padding: 16, backgroundColor: '#F0F0F0', flexGrow: 1 }}>
        <Text style={[style.apptitle]}>Khuyến Nghị & Cảm Biến</Text>

        <View
          style={{
            flexDirection: 'column', // Xếp dọc các khung
            flexWrap: 'nowrap',
          }}
        >
          {/* Card Thông tin cảm biến */}
          <View
            style={{
              backgroundColor: '#FFF',
              borderRadius: 12,
              padding: 20,
              marginBottom: 16,
              width: '100%', // Chiều rộng 100% để khung chiếm toàn bộ chiều ngang
              shadowColor: '#000',
              shadowOffset: { width: 0, height: 1 },
              shadowOpacity: 0.3,
              shadowRadius: 4,
              elevation: 3,
            }}
          >
            <Text
              style={{
                fontSize: 20,
                fontWeight: '600',
                marginBottom: 12,
                color: '#222',
              }}
            >
              📊 Thông tin cảm biến
            </Text>
            {loadingSensor ? (
              <ActivityIndicator size="large" color="#007AFF" style={{ marginTop: 20 }} />
            ) : (
              <View>
                {[
                  { label: '🌡 Nhiệt độ:', value: `${formData.Temperature}°C` },
                  { label: '💧 Độ ẩm:', value: `${formData.Humidity}%` },
                  { label: '🧪 Nitơ:', value: `${formData.Nitrogen} mg/kg` },
                  { label: '🧪 Phốt pho:', value: `${formData.Phosphorus} mg/kg` },
                  { label: '🧪 Kali:', value: `${formData.Potassium} mg/kg` },
                  { label: '🧪 pH đất:', value: formData.Ph },
                  { label: '🌧 Lượng nước tưới:', value: `${formData.Rainfall} mm` },
                ].map((item, index) => (
                  <View
                    key={index}
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      marginVertical: 4,
                    }}
                  >
                    <Text style={{ fontSize: 16, color: '#555' }}>{item.label}</Text>
                    <Text style={{ fontSize: 16, fontWeight: '600', color: '#222' }}>{item.value}</Text>
                  </View>
                ))}
              </View>
            )}
          </View>

          {/* Card Khuyến nghị cây trồng */}
          <View
            style={{
              backgroundColor: '#FFF',
              borderRadius: 12,
              padding: 20,
              marginBottom: 16,
              width: '100%', // Chiều rộng 100% để khung chiếm toàn bộ chiều ngang
              shadowColor: '#000',
              shadowOffset: { width: 0, height: 1 },
              shadowOpacity: 0.3,
              shadowRadius: 4,
              elevation: 3,
            }}
          >
            <Text
              style={{
                fontSize: 20,
                fontWeight: '600',
                marginBottom: 12,
                color: '#222',
              }}
            >
              🌱 Khuyến nghị cây trồng
            </Text>
            {loadingPredict ? (
              <ActivityIndicator size="large" color="#007AFF" style={{ marginTop: 20 }} />
            ) : result ? (
              <View
                style={{
                  backgroundColor: '#007AFF',
                  borderRadius: 10,
                  padding: 15,
                }}
              >
                <Text
                  style={{
                    fontSize: 18,
                    fontWeight: '700',
                    color: '#fff',
                  }}
                >
                  Cây trồng được đề xuất:
                </Text>
                <Text
                  style={{
                    marginTop: 10,
                    fontSize: 16,
                    color: '#fff',
                  }}
                >
                  {result}
                </Text>
              </View>
            ) : (
              <Text
                style={{
                  fontSize: 16,
                  color: '#666',
                }}
              >
                Đang lấy dữ liệu...
              </Text>
            )}
          </View>
        </View>
      </ScrollView>
      <Toast />
    </>
  );
};

export default Recomendation;