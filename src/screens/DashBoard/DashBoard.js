import * as React from 'react';
import { View, Dimensions, Text, SafeAreaView, ScrollView, Platform } from 'react-native';
import { LineChart, BarChart } from 'react-native-chart-kit';
import style from '../../theme/style';
import { Colors } from '../../theme/color';
import LogoutButton from '../../navigator/LogoutButton';

export default function Dashboard() {
    const [data, setData] = React.useState([1.86, 2.82, 2, 2.92, 6.45]);
    const [labels, setLabels] = React.useState([
        '00:00:01',
        '00:00:02',
        '00:00:03',
        '00:00:04',
        '00:00:05',
    ]); // Nhãn thời gian
    const [tempData, setTempData] = React.useState([25.5, 26.2, 27.1, 26.8, 25.9]);
    const [phData, setPhData] = React.useState([6.5, 6.8, 13.0, 18.9, 1.2]);

    const waterData = [5, 10, 7, 8, 6, 9, 4]; // Lượng nước tưới trong tuần (đơn vị: lít)
    const days = ['T2', 'T3', 'T4', 'T5', 'T6', 'T7', 'CN'];

    const [npkData, setNpkData] = React.useState({
        nitrogen: [25, 24, 23, 22, 25],
        phosphorus: [20, 19, 18, 21, 20],
        potassium: [15, 14, 13, 16, 15],
    });

    React.useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://plantify.info.vn/api/sensorReading');
                const json = await response.json();

                const lastFive = json.slice(-5);

                // Lấy thời gian realtime hiện tại trên client cho mỗi bản ghi
                const now = new Date();
                const timeLabels = lastFive.map((_, idx) => {
                    const time = new Date(now.getTime() - (4 - idx) * 5000);
                    return `${time.getHours().toString().padStart(2, '0')}:` +
                        `${time.getMinutes().toString().padStart(2, '0')}:` +
                        `${time.getSeconds().toString().padStart(2, '0')}`;
                });

                setLabels(timeLabels);
                setData(lastFive.map(item => item.soilHumidity));
                setTempData(lastFive.map(item => item.soilTemperature));
                setPhData(lastFive.map(item => item.soilPH));

                setNpkData({
                    nitrogen: lastFive.map(item => item.nitrogen),
                    phosphorus: lastFive.map(item => item.phosphorus),
                    potassium: lastFive.map(item => item.potassium),
                });
            } catch (error) {
                console.error('Error fetching sensor data:', error);
            }
        };

        fetchData();
        const interval = setInterval(fetchData, 5000);
        return () => clearInterval(interval);
    }, []);

    return (
        <SafeAreaView style={[style.area, { backgroundColor: Colors.bg }]}>
            <ScrollView contentContainerStyle={{ paddingBottom: 20 }}>
                <View style={[style.main, { marginTop: Platform.OS === 'ios' ? 10 : 10 }]}>
                    <View
                        style={{
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            paddingHorizontal: 1,
                            height: 50,

                        }}
                    >
                        <Text style={[style.apptitle]}>Biểu đồ</Text>
                        <LogoutButton />
                    </View>
                    <Text style={[style.r14, { color: Colors.txt, marginTop: 3 }]}>
                        Biểu đồ cảm biến độ ẩm đất
                    </Text>

                    {/* Biểu đồ độ ẩm */}
                    <View style={{ marginTop: 10 }}>
                        <LineChart
                            bezier
                            chartConfig={{
                                backgroundGradientFrom: '#fff',
                                backgroundGradientTo: '#fff',
                                color: () => `#1aa8fe`,
                                decimalPlaces: 1,
                                labelColor: () => `#000`,
                                propsForBackgroundLines: {
                                    stroke: '#9e9e9e',
                                    strokeDasharray: 1,
                                },
                                propsForDots: {
                                    r: '6',
                                },
                            }}
                            data={{
                                datasets: [
                                    {
                                        data: data,
                                    },
                                ],
                                labels: labels,
                            }}
                            fromZero
                            height={200}
                            width={Dimensions.get('window').width - 40}
                            style={{
                                alignSelf: 'center',
                                borderColor: 'black',
                                borderRadius: 16,
                                borderWidth: 2,
                            }}
                            yAxisSuffix=" %"
                            renderDotContent={({ x, y, index }) => (
                                <Text
                                    key={index}
                                    style={{
                                        position: 'absolute',
                                        top: y - 16,
                                        left: x - 10,
                                        fontSize: 10,
                                        color: '#000',
                                    }}
                                >
                                    {data[index].toFixed(1)}%
                                </Text>
                            )}
                        />
                    </View>

                    {/* Biểu đồ nhiệt độ */}
                    <Text style={[style.r14, { color: Colors.txt, marginTop: 20 }]}>
                        Biểu đồ cảm biến nhiệt độ
                    </Text>
                    <View style={{ marginTop: 10 }}>
                        <LineChart
                            bezier
                            chartConfig={{
                                backgroundGradientFrom: '#fff',
                                backgroundGradientTo: '#fff',
                                color: () => `#ff6347`,
                                decimalPlaces: 1,
                                labelColor: () => `#000`,
                                propsForBackgroundLines: {
                                    stroke: '#9e9e9e',
                                    strokeDasharray: 1,
                                },
                                propsForDots: {
                                    r: '6',
                                },
                            }}
                            data={{
                                datasets: [
                                    {
                                        data: tempData,
                                    },
                                ],
                                labels: labels,
                            }}
                            fromZero
                            height={200}
                            width={Dimensions.get('window').width - 40}
                            style={{
                                alignSelf: 'center',
                                borderColor: 'black',
                                borderRadius: 16,
                                borderWidth: 2,
                            }}
                            yAxisSuffix=" °C"
                            renderDotContent={({ x, y, index }) => (
                                <Text
                                    key={index}
                                    style={{
                                        position: 'absolute',
                                        top: y - 16,
                                        left: x - 10,
                                        fontSize: 10,
                                        color: '#000',
                                    }}
                                >
                                    {tempData[index].toFixed(1)}°C
                                </Text>
                            )}
                        />
                    </View>

                    {/* Biểu đồ độ pH */}
                    <Text style={[style.r14, { color: Colors.txt, marginTop: 20 }]}>
                        Biểu đồ cảm biến độ pH
                    </Text>
                    <View style={{ marginTop: 10 }}>
                        <LineChart
                            bezier
                            chartConfig={{
                                backgroundGradientFrom: '#fff',
                                backgroundGradientTo: '#fff',
                                color: () => `#32CD32`, // Màu xanh lá cho độ pH
                                decimalPlaces: 1,
                                labelColor: () => `#000`,
                                propsForBackgroundLines: {
                                    stroke: '#9e9e9e',
                                    strokeDasharray: 1,
                                },
                                propsForDots: {
                                    r: '6',
                                },
                            }}
                            data={{
                                datasets: [
                                    {
                                        data: phData,
                                    },
                                ],
                                labels: labels,
                            }}
                            fromZero
                            height={200}
                            width={Dimensions.get('window').width - 40}
                            style={{
                                alignSelf: 'center',
                                borderColor: 'black',
                                borderRadius: 16,
                                borderWidth: 2,
                            }}
                            yAxisSuffix=" pH"
                            renderDotContent={({ x, y, index }) => (
                                <Text
                                    key={index}
                                    style={{
                                        position: 'absolute',
                                        top: y - 16,
                                        left: x - 10,
                                        fontSize: 10,
                                        color: '#000',
                                    }}
                                >
                                    {phData[index].toFixed(1)} pH
                                </Text>
                            )}
                        />
                    </View>

                    {/* Biểu đồ dạng Line cho NPK */}
                    <Text style={[style.r14, { color: Colors.txt, marginTop: 20 }]}>
                        Cảm biến NPK
                    </Text>
                    <View style={{ marginTop: 10 }}>
                        <LineChart
                            data={{
                                labels: labels,
                                datasets: [
                                    {
                                        data: npkData.nitrogen,
                                        color: (opacity = 1) => `rgba(0, 200, 0, ${opacity})`, // xanh lá - Nitrogen
                                        strokeWidth: 2,
                                    },
                                    {
                                        data: npkData.phosphorus,
                                        color: (opacity = 1) => `rgba(230, 200, 0, ${opacity})`, // vàng - Phosphorus
                                        strokeWidth: 2,
                                    },
                                    {
                                        data: npkData.potassium,
                                        color: (opacity = 1) => `rgba(230, 0, 0, ${opacity})`, // đỏ - Potassium
                                        strokeWidth: 2,
                                    },
                                ],
                                legend: ['Nitrogen(N)    ', 'Phosphorus(P)   ', 'Potassium(K)'],
                            }}
                            width={Dimensions.get('window').width - 40}
                            height={220}
                            yAxisSuffix=" mg/kg"
                            chartConfig={{
                                propsForLabels: {
                                    fontSize: 10,
                                },
                                backgroundGradientFrom: '#fff',
                                backgroundGradientTo: '#fff',
                                decimalPlaces: 1,
                                color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`, // Bắt buộc phải có hàm color ở đây
                                labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
                                propsForBackgroundLines: {
                                    stroke: '#9e9e9e',
                                    strokeDasharray: 1,
                                },
                                propsForDots: {
                                    r: '4',
                                },
                            }}
                            bezier
                            style={{
                                borderRadius: 16,
                                borderWidth: 2,
                                borderColor: 'black',
                                alignSelf: 'center',
                            }}
                        />
                    </View>

                    {/* Biểu đồ dạng cột */}
                    <Text style={[style.r14, { color: Colors.txt, marginTop: 20 }]}>
                        Biểu đồ lượng nước tưới trong tuần
                    </Text>
                    <View style={{ marginTop: 10 }}>
                        <BarChart
                            data={{
                                labels: days, // Nhãn các ngày trong tuần
                                datasets: [
                                    {
                                        data: waterData, // Dữ liệu lượng nước tưới
                                    },
                                ],
                            }}
                            width={Dimensions.get('window').width - 40} // Chiều rộng biểu đồ
                            height={220} // Chiều cao biểu đồ
                            yAxisSuffix=" L" // Đơn vị lít
                            chartConfig={{
                                backgroundGradientFrom: '#fff',
                                backgroundGradientTo: '#fff',
                                color: (opacity = 1) => `rgba(34, 139, 230, ${opacity})`, // Màu xanh dương
                                labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`, // Màu đen cho nhãn
                                barPercentage: 0.5, // Tỷ lệ chiều rộng cột
                                propsForBackgroundLines: {
                                    stroke: '#e3e3e3', // Màu đường lưới
                                },
                            }}
                            style={{
                                marginVertical: 8,
                                borderRadius: 16,
                                alignSelf: 'center',
                                borderWidth: 2,
                                borderColor: 'black',
                            }}
                            fromZero // Bắt đầu từ giá trị 0

                        />
                    </View>

                </View>

            </ScrollView>
        </SafeAreaView>
    );
}