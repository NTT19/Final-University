import { View, Dimensions, Text, SafeAreaView, TouchableOpacity, Image, ScrollView, KeyboardAvoidingView } from 'react-native';
import React, { useState, useEffect } from 'react';
import style from '../../theme/style';
import { Colors } from '../../theme/color';
import { useNavigation } from '@react-navigation/native';
import { AppBar } from '@react-native-material/core';
import sensorReadingApi from '../../api/sensorReadingApi';  // Đảm bảo import đúng file API
import Icon from 'react-native-vector-icons/Ionicons';

const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;

export default function Home() {
    const navigation = useNavigation();
    const [show, setshow] = useState(true);
    const [show1, setshow1] = useState(false);
    const [sensorData, setSensorData] = useState(null);  // State để lưu dữ liệu sensor
    const [loading, setLoading] = useState(true);  // State để theo dõi trạng thái tải dữ liệu
    const [error, setError] = useState(null);  // State để lưu lỗi nếu có

    useEffect(() => {
        // Lấy dữ liệu từ API khi component được mount
        const fetchData = async () => {
            try {
                const data = await sensorReadingApi.getSensorReading();
                setSensorData(data);
            } catch (err) {
                setError("Error fetching sensor data");
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    return (
        <SafeAreaView style={[style.area]}>
            <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === 'ios' ? 'padding' : null}>
                <View style={[style.main, { marginTop: 10 }]}>
                    <AppBar
                        elevation={0}
                        color={Colors.bg}
                        leading={<Text style={[style.s42]}>Khu vườn</Text>}
                    />
                    <View style={[style.list, { marginTop: 10 }]}>
                        <TouchableOpacity onPress={() => { setshow(true); }}>
                            <Image
                                source={show ? require('../../../assets/image/s7d.png') : require('../../../assets/image/s7.png')}
                                resizeMode="stretch"
                                style={{ height: 24, width: 24, marginLeft: 10 }}
                            />
                        </TouchableOpacity>
                    </View>

                    <ScrollView showsVerticalScrollIndicator={false} style={{ marginTop: 15 }}>
                        {loading ? (
                            <Text>Loading...</Text>  // Hiển thị khi dữ liệu đang tải
                        ) : error ? (
                            <Text>{error}</Text>  // Hiển thị lỗi nếu có
                        ) : (
                            <View>
                                {show ? (
                                    <View>
                                        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                                            <TouchableOpacity onPress={() => navigation.navigate('PotInfo')}>
                                                <Image
                                                    source={require('../../../assets/image/jackfruit_tree.png')}
                                                    resizeMode="stretch"
                                                    style={{ height: height / 3.5, width: width / 2, marginLeft: 60 }}
                                                />
                                            </TouchableOpacity>
                                        </ScrollView>
                                        <TouchableOpacity
                                            style={{
                                                backgroundColor: '#95a5a6',
                                                paddingVertical: 5,
                                                paddingHorizontal: 10,
                                                marginTop: 10,
                                                borderRadius: 10,
                                                alignSelf: 'center',
                                            }}
                                            onPress={() => {
                                                navigation.navigate('PotInfo');
                                            }}
                                        >
                                            <Text style={{ color: 'black', fontSize: 18 }}>Điều khiển</Text>
                                        </TouchableOpacity>

                                        {/* Hiển thị dữ liệu sensor */}
                                        <View style={[style.box1, style.shadow, style.list, { margin: 5, marginTop: 5, backgroundColor: '#ecf0f1' }]}>
                                            <View style={{ flex: 1 }}>
                                                <View style={[style.list]}>
                                                    <Icon name='sunny-outline' size={20} color={Colors.primary} />
                                                    {/* Lấy phần tử cuối cùng trong mảng để hiển thị thông tin Lux */}
                                                    <Text style={[style.s14, { marginLeft: 7 }]}>Lux: {sensorData?.[sensorData.length - 1]?.lux} lx</Text>
                                                </View>
                                                <View style={[style.list, { marginTop: 7 }]}>
                                                    <Icon name='water-outline' size={20} color={Colors.primary} />
                                                    {/* Lấy phần tử cuối cùng trong mảng để hiển thị thông tin Water Meter */}
                                                    <Text style={[style.s14, { marginLeft: 7 }]}>Water Meter: {sensorData?.[sensorData.length - 1]?.waterMeter} L</Text>
                                                </View>
                                                <View style={[style.list, { marginTop: 7 }]}>
                                                    <Icon name='thermometer-outline' size={20} color={Colors.primary} />
                                                    {/* Lấy phần tử cuối cùng trong mảng để hiển thị thông tin Temperature */}
                                                    <Text style={[style.s14, { marginLeft: 7 }]}>Temperature: {sensorData?.[sensorData.length - 1]?.temperature}°C</Text>
                                                </View>

                                                <View style={[style.list, { marginTop: 7 }]}>
                                                    <Icon name='heart-outline' size={20} color={Colors.primary} />
                                                    {/* Lấy phần tử cuối cùng trong mảng để hiển thị thông tin Humidity */}
                                                    <Text style={[style.s14, { marginLeft: 7 }]}>Humidity: {sensorData?.[sensorData.length - 1]?.humidity}%</Text>
                                                </View>

                                                {/* Thêm các thông tin mới */}
                                                <View style={[style.list, { marginTop: 7 }]}>
                                                    <Icon name='leaf-outline' size={20} color={Colors.primary} />
                                                    {/* Lấy phần tử cuối cùng trong mảng để hiển thị thông tin Nitrogen */}
                                                    <Text style={[style.s14, { marginLeft: 7 }]}>Nitrogen: {sensorData?.[sensorData.length - 1]?.nitrogen} ppm</Text>
                                                </View>
                                                <View style={[style.list, { marginTop: 7 }]}>
                                                    <Icon name='leaf-outline' size={20} color={Colors.primary} />
                                                    {/* Lấy phần tử cuối cùng trong mảng để hiển thị thông tin Phosphorus */}
                                                    <Text style={[style.s14, { marginLeft: 7 }]}>Phosphorus: {sensorData?.[sensorData.length - 1]?.phosphorus} ppm</Text>
                                                </View>
                                                <View style={[style.list, { marginTop: 7 }]}>
                                                    <Icon name='leaf-outline' size={20} color={Colors.primary} />
                                                    {/* Lấy phần tử cuối cùng trong mảng để hiển thị thông tin Potassium */}
                                                    <Text style={[style.s14, { marginLeft: 7 }]}>Potassium: {sensorData?.[sensorData.length - 1]?.potassium} ppm</Text>
                                                </View>
                                                <View style={[style.list, { marginTop: 7 }]}>
                                                    <Icon name='water-outline' size={20} color={Colors.primary} />
                                                    {/* Lấy phần tử cuối cùng trong mảng để hiển thị thông tin Soil Conductivity */}
                                                    <Text style={[style.s14, { marginLeft: 7 }]}>Soil Conductivity: {sensorData?.[sensorData.length - 1]?.soilConductivity} mS/cm</Text>
                                                </View>
                                                <View style={[style.list, { marginTop: 7 }]}>
                                                    <Icon name='flask-outline' size={20} color={Colors.primary} />
                                                    {/* Lấy phần tử cuối cùng trong mảng để hiển thị thông tin Soil pH */}
                                                    <Text style={[style.s14, { marginLeft: 7 }]}>Soil pH: {sensorData?.[sensorData.length - 1]?.soilPH}</Text>
                                                </View>
                                                <View style={[style.list, { marginTop: 7 }]}>
                                                    <Icon name='thermometer-outline' size={20} color={Colors.primary} />
                                                    {/* Lấy phần tử cuối cùng trong mảng để hiển thị thông tin Soil Temperature */}
                                                    <Text style={[style.s14, { marginLeft: 7 }]}>Soil Temperature: {sensorData?.[sensorData.length - 1]?.soilTemperature}°C</Text>
                                                </View>
                                                <View style={[style.list, { marginTop: 7 }]}>
                                                    <Icon name='cloud-outline' size={20} color={Colors.primary} />
                                                    {/* Lấy phần tử cuối cùng trong mảng để hiển thị thông tin Weather */}
                                                    <Text style={[style.s14, { marginLeft: 7 }]}>Weather: {sensorData?.[sensorData.length - 1]?.weather}</Text>
                                                </View>
                                            </View>
                                        </View>

                                    </View>
                                ) : null}


                                {/* <View style={[style.list, { marginTop: 20, justifyContent: 'space-around' }]}>
                                    <View style={{ alignItems: 'center' }}>
                                        <Text style={[style.b14]}>Nước</Text>
                                        <Image source={require('../../../assets/image/s11.png')} resizeMode="stretch" style={{ height: 68, width: 68, marginTop: 15 }} />
                                        <Text style={[style.b16, { marginTop: 15 }]}>2 DAYS</Text>
                                        <Text style={[style.b12, { color: Colors.icon, marginTop: 10 }]}>Every 7 Days</Text>
                                    </View>
                                    <View style={{ alignItems: 'center' }}>
                                        <Text style={[style.b14]}>Ánh sáng</Text>
                                        <Image source={require('../../../assets/image/s12.png')} resizeMode="stretch" style={{ height: 68, width: 68, marginTop: 15 }} />
                                        <Text style={[style.b16, { marginTop: 15 }]}>65%</Text>
                                        <Text style={[style.b12, { color: Colors.icon, marginTop: 10 }]}>18HRS a day</Text>
                                    </View>
                                </View> */}
                            </View>
                        )}
                    </ScrollView>
                </View>
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
}
