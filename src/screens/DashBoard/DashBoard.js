import * as React from 'react';
import { View, Dimensions, Text, SafeAreaView, ScrollView, Platform } from 'react-native';
import { LineChart, BarChart } from 'react-native-chart-kit';
import style from '../../theme/style';
import { Colors } from '../../theme/color';

export default function Dashboard() {
    const [data, setData] = React.useState([1.86, 2.82, 2, 2.92, 6.45]); // Dữ liệu độ ẩm
    const [labels, setLabels] = React.useState([
        '00:00:01',
        '00:00:02',
        '00:00:03',
        '00:00:04',
        '00:00:05',
    ]); // Nhãn thời gian
    const [tempData, setTempData] = React.useState([25.5, 26.2, 27.1, 26.8, 25.9]); // Dữ liệu nhiệt độ
    const [phData, setPhData] = React.useState([6.5, 6.8, 13.0, 18.9, 1.2]); // Dữ liệu độ pH

    const waterData = [5, 10, 7, 8, 6, 9, 4]; // Lượng nước tưới trong tuần (đơn vị: lít)
    const days = ['T2', 'T3', 'T4', 'T5', 'T6', 'T7', 'CN']; // Các ngày trong tuần

    React.useEffect(() => {
        const interval = setInterval(() => {
            const currentTime = new Date();
            const formattedTime = `${currentTime.getHours()}:${currentTime
                .getMinutes()
                .toString()
                .padStart(2, '0')}:${currentTime
                    .getSeconds()
                    .toString()
                    .padStart(2, '0')}`;

            setLabels((prevLabels) => {
                if (prevLabels.length >= 5) {
                    return [...prevLabels.slice(1), formattedTime];
                } else {
                    return [...prevLabels, formattedTime];
                }
            });

            setData((prevData) => {
                const newData = [...prevData, Math.random() * 10];
                if (newData.length > 5) {
                    return newData.slice(1);
                } else {
                    return newData;
                }
            });

            setTempData((prevTempData) => {
                const newTempData = [...prevTempData, 25 + Math.random() * 5];
                if (newTempData.length > 5) {
                    return newTempData.slice(1);
                } else {
                    return newTempData;
                }
            });

            setPhData((prevPhData) => {
                const newPhData = [...prevPhData, 6 + Math.random() * 2]; // Giá trị độ pH từ 6.0 đến 8.0
                if (newPhData.length > 5) {
                    return newPhData.slice(1);
                } else {
                    return newPhData;
                }
            });
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    return (
        <SafeAreaView style={[style.area, { backgroundColor: Colors.bg }]}>
            <ScrollView contentContainerStyle={{ paddingBottom: 20 }}>
                <View style={[style.main, { marginTop: Platform.OS === 'ios' ? 10 : 10 }]}>
                    <Text style={[style.apptitle]}>Dashboard</Text>
                    <Text style={[style.r14, { color: Colors.icon, marginTop: 3 }]}>
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
                    <Text style={[style.r14, { color: Colors.icon, marginTop: 20 }]}>
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
                    <Text style={[style.r14, { color: Colors.icon, marginTop: 20 }]}>
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

                    {/* Biểu đồ dạng cột */}
                    <Text style={[style.r14, { color: Colors.icon, marginTop: 20 }]}>
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
                                borderWidth: 1,
                                borderColor: '#ccc',
                            }}
                            fromZero // Bắt đầu từ giá trị 0

                        />
                    </View>

                </View>

            </ScrollView>
        </SafeAreaView>
    );
}