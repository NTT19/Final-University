import { View, Dimensions, Text, SafeAreaView, Modal, Switch, TextInput, StatusBar, TouchableOpacity, Image, ScrollView, KeyboardAvoidingView, ImageBackground, Alert } from 'react-native'
import React, { useState, useContext, useEffect } from 'react'
import style from '../../theme/style';
import { Colors } from '../../theme/color';
import { useNavigation } from '@react-navigation/native';
import { AppBar, HStack } from '@react-native-material/core';
import Icon from 'react-native-vector-icons/Ionicons';
import manualControlApi from '../../api/manualControlApi';
import Toast from 'react-native-toast-message';
import axios from 'axios';
import Slider from '@react-native-community/slider';
import DateTimePickerModal from "react-native-modal-datetime-picker";

const width = Dimensions.get('screen').width
const height = Dimensions.get('screen').height

export default function PotInfo() {
    const navigation = useNavigation();
    const [visible, setVisible] = useState(false)
    const [visible1, setVisible1] = useState(false)
    const [visible2, setVisible2] = useState(false)


    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);

    const [isEnabled1, setIsEnabled1] = useState(false);
    const toggleSwitch1 = () => setIsEnabled1(previousState => !previousState);


    // States for new buttons
    const [isExpanded, setIsExpanded] = useState(false); // Trạng thái mở rộng/thu gọn
    const [isMistingEnabled, setIsMistingEnabled] = useState(false);
    const [isWateringEnabled, setIsWateringEnabled] = useState(false);
    const [isLightEnabled, setIsLightEnabled] = useState(false);
    const [isCameraEnabled, setIsCameraEnabled] = useState(false);

    const [loading, setLoading] = useState(true);

    const [mode, setMode] = useState(null); // Lưu chế độ hiện tại
    const [isDefaultSetting, setIsDefaultSetting] = useState(false); // Trạng thái Default Setting
    const [tempMode, setTempMode] = useState(mode); // Lưu chế độ tạm thời


    const [schedule, setSchedule] = useState([]);
    const [isStartTimePickerVisible, setStartTimePickerVisible] = useState(false);
    const [isEndTimePickerVisible, setEndTimePickerVisible] = useState(false);



    const [currentDeviceIndex, setCurrentDeviceIndex] = useState(null); 

    useEffect(() => {
        fetchSchedule();  
    }, []);

    const fetchSchedule = async () => {
        try {
            const response = await axios.get('https://plantify.info.vn/api/ledControl');
            console.log('Fetched schedule:', response.data); // Kiểm tra dữ liệu từ API
            setSchedule(response.data);
        } catch (error) {
            showToast('error', 'Lỗi khi lấy lịch tưới');
            console.error(error);
        }
    };

    const showStartTimePicker = (deviceIndex) => {
        setCurrentDeviceIndex(deviceIndex);
        setStartTimePickerVisible(true);
    };
    const hideStartTimePicker = () => setStartTimePickerVisible(false);

    // Show End Time Picker
    const showEndTimePicker = (deviceIndex) => {
        setCurrentDeviceIndex(deviceIndex);
        setEndTimePickerVisible(true);
    };
    const hideEndTimePicker = () => setEndTimePickerVisible(false);

    // Handle start time selection
    const handleStartTimeConfirm = (date, deviceIndex) => {
        setSchedule((prevSchedule) => {
            const updatedSchedule = [...prevSchedule];
            updatedSchedule[deviceIndex].turnOnTime = [date.getHours(), date.getMinutes()];
            return updatedSchedule;
        });
        hideStartTimePicker();
    };

    // Handle end time selection
    const handleEndTimeConfirm = (date, deviceIndex) => {
        setSchedule((prevSchedule) => {
            const updatedSchedule = [...prevSchedule];
            updatedSchedule[deviceIndex].turnOffTime = [date.getHours(), date.getMinutes()];
            return updatedSchedule;
        });
        hideEndTimePicker();
    };

    const formatTime = (timeArray) => {
        if (!timeArray || timeArray.length !== 2) {
            return 'Invalid Time';
        }

        const [hours, minutes] = timeArray;
        const period = hours >= 12 ? 'PM' : 'AM';
        const formattedHours = hours % 12 || 12; // Convert 24-hour time to 12-hour format
        const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
        return `${formattedHours}:${formattedMinutes} ${period}`;
    };

    const saveSchedule = async () => {
        const formatTime = (timeArray) => {
            const [hours, minutes] = timeArray;
            const formattedHours = hours < 10 ? `0${hours}` : hours; // Ensure 2 digits for hours
            const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes; // Ensure 2 digits for minutes
            return `${formattedHours}:${formattedMinutes}:00`; // Add seconds as "00"
        };

        // Loop through each device and send an update request for each one
        for (let i = 0; i < schedule.length; i++) {
            const device = schedule[i];

            // Prepare the request data for this device
            const updateData = {
                id: device.id,
                turnOnTime: formatTime(device.turnOnTime),
                turnOffTime: formatTime(device.turnOffTime),
            };

            console.log(`Sending update for device ${device.id}:`, updateData);

            try {
                // Send the update for each device separately
                const response = await axios.put(
                    'https://plantify.info.vn/api/ledControl/updateLedControl',
                    updateData,
                    { headers: { 'Content-Type': 'application/json' } }
                );

                // Log the response from the server for each device
                console.log('Save response for device', device.id, response.data);

                // Show success message for each device update
                //  showToast('success', `Lịch tưới cho thiết bị đã được cập nhật thành công`);
            } catch (error) {
                // Log and handle errors individually for each device
                if (error.response) {
                    console.error(`Error response for device ${device.id}:`, error.response.data);
                    //   showToast('error', `Lỗi khi cập nhật lịch cho thiết bị ${device.id}`);
                } else if (error.request) {
                    console.error(`Error request for device ${device.id}:`, error.request);
                    //  showToast('error', `Không nhận được phản hồi cho thiết bị ${device.id}`);
                } else {
                    console.error(`Error message for device ${device.id}:`, error.message);
                    // showToast('error', `Lỗi không xác định cho thiết bị ${device.id}`);
                }
            }
        }

        // Close the modal after all requests are sent
        setVisible2(false);
    };


    const fetchMode = async () => {
        try {
            const response = await axios.get('https://plantify.info.vn/api/modeSetting');
            setMode(response.data.mode); // Lưu chế độ hiện tại
        } catch (error) {
            showToast('error', 'Không thể lấy chế độ hiện tại');
            console.error(error);
        }
    };

    // Gọi API để cập nhật chế độ
    const updateMode = async (newMode) => {
        try {
            await axios.put(`https://plantify.info.vn/api/modeSetting/updateMode?mode=${newMode}`);
            setMode(newMode); // Cập nhật chế độ trong state
            showToast('success', `Chế độ thành ${newMode === 0 ? 'Thủ công' : newMode === 1 ? 'Tự động' : 'Đặt lịch tưới'}`);
        } catch (error) {
            showToast('error', 'Không thể cập nhật chế độ');
            console.error(error);
        }
    };

    useEffect(() => {
        fetchMode();
    }, []);

    // Hàm hiển thị thông báo
    const showToast = (type, message) => {
        Toast.show({
            position: 'top',
            topOffset: 80,
            type: type,
            text1: message,
            visibilityTime: 1000,
            text1Style: { fontSize: 20, fontWeight: 'bold', color: 'black' },
        });
    };


    const fetchControlStatus = async () => {
        try {
            const response = await axios.get('https://plantify.info.vn/api/ledStatus');
            const { led1, led2, led3, led4 } = response.data;

            // Cập nhật trạng thái cho các switch
            setIsLightEnabled(led1 === 1);
            setIsWateringEnabled(led2 === 1);
            setIsMistingEnabled(led3 === 1);
            setIsCameraEnabled(led4 === 1);
        } catch (error) {
            //   console.error("Lỗi khi lấy trạng thái điều khiển:", error);
            showToast('error', 'Lỗi khi lấy trạng thái điều khiển');
        } finally {
            setLoading(false);
        }
    };

    // Gọi API khi component render
    useEffect(() => {
        fetchControlStatus();  // Lấy trạng thái điều khiển ngay khi component được render

        const interval = setInterval(fetchControlStatus, 2000);  // Định kỳ lấy trạng thái mỗi 2 giây

        return () => clearInterval(interval);  // Dọn dẹp interval khi component bị unmount
    }, []);

    // Theo dõi trạng thái isDefaultSetting
    useEffect(() => {
        if (!isDefaultSetting) {
            // Chỉ gọi API khi chuyển sang chế độ "Custom Settings"
            fetchSchedule();
        }
    }, [isDefaultSetting]);

    // Hàm bật/tắt với API
    const toggleLight = async () => {
        try {
            const newState = !isLightEnabled;
            setIsLightEnabled(newState);
            await manualControlApi.updateDeviceStatus("led1", newState ? "1" : "0");
            showToast('success', `Đèn đã được ${newState ? "bật" : "tắt"}`);
        } catch (error) {
            showToast('error', "Không thể cập nhật trạng thái đèn");
            console.error(error);
        }
    };

    const toggleWatering = async () => {
        try {
            const newState = !isWateringEnabled;
            setIsWateringEnabled(newState);
            await manualControlApi.updateDeviceStatus("led2", newState ? "1" : "0");
            showToast('success', `Tưới nước đã được ${newState ? "bật" : "tắt"}`);
        } catch (error) {
            showToast('error', "Không thể cập nhật trạng thái tưới nước");
            console.error(error);
        }
    };

    const toggleMisting = async () => {
        try {
            const newState = !isMistingEnabled;
            setIsMistingEnabled(newState);
            await manualControlApi.updateDeviceStatus("led3", newState ? "1" : "0");
            showToast('success', `Phun sương đã được ${newState ? "bật" : "tắt"}`);
        } catch (error) {
            showToast('error', "Không thể cập nhật trạng thái phun sương");
            console.error(error);
        }
    };

    const toggleCamera = async () => {
        try {
            const newState = !isCameraEnabled;
            setIsCameraEnabled(newState);
            await manualControlApi.updateDeviceStatus("led4", newState ? "1" : "0");
            showToast('success', `Camera đã được ${newState ? "bật" : "tắt"}`);
        } catch (error) {
            showToast('error', "Không thể cập nhật trạng thái camera");
            console.error(error);
        }
    };






    if (loading) {
        return (
            <SafeAreaView style={[style.area]}>
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <Text>Loading...</Text>
                </View>
            </SafeAreaView>
        );
    }



    return (
        <SafeAreaView style={[style.area, {}]}>
            <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === 'ios' ? 'padding' : null} >
                <View style={[style.main, { marginTop: 10, }]}>

                    <AppBar
                        elevation={0}
                        color={Colors.bg}
                        leading={<TouchableOpacity onPress={() => navigation.goBack()} >
                            <Icon name='arrow-back' size={24} color={Colors.txt} />
                        </TouchableOpacity>}
                        trailing={<HStack>
                            <TouchableOpacity onPress={() => setVisible(true)}>
                                <Image source={require('../../../assets/image/s17.png')} resizeMode='stretch' style={{ height: 24, width: 24 }} />
                            </TouchableOpacity>
                            <Icon name='trash-outline' size={24} color={Colors.txt} style={{ marginHorizontal: 7 }} />
                            <Icon name='remove' size={24} color={Colors.primary} />
                        </HStack>}
                    />

                    <ScrollView showsVerticalScrollIndicator={false} style={{ marginTop: 15 }}>

                        <Text style={[style.s42]}>Cây mít</Text>

                        {/* <Text style={[style.r20, { color: Colors.dis }]}>...</Text> */}

                        <View style={[style.box1, style.shadow, style.list, { margin: 5, marginTop: 15 }]}>
                            <View style={{ flex: 1 }}>
                                <View style={[style.list]}>
                                    <Icon name='sunny-outline' size={20} color={Colors.primary} />
                                    <Text style={[style.s14, { marginLeft: 7 }]}>Sun 8 - 12 hrs</Text>
                                </View>
                                <View style={[style.list, { marginTop: 7 }]}>
                                    <Icon name='water-outline' size={20} color={Colors.primary} />
                                    <Text style={[style.s14, { marginLeft: 7 }]}>Every 7 days</Text>
                                </View>
                                <View style={[style.list, { marginTop: 7 }]}>
                                    <Icon name='thermometer-outline' size={20} color={Colors.primary} />
                                    <Text style={[style.s14, { marginLeft: 7 }]}>Best at 18°C - 30°C</Text>
                                </View>
                                {/*    <View style={[style.list, { marginTop: 7 }]}>
                               <Image source={require('../../../assets/image/s18.png')} resizeMode='stretch' style={{ height: 20, width: 20 }} />   
                                    <Text style={[style.s14, { marginLeft: 7 }]}>Sprouts in: 7 - 14 days</Text>   
                                </View>   */}
                                <View style={[style.list, { marginTop: 7 }]}>
                                    <Icon name='heart-outline' size={20} color={Colors.primary} />
                                    <Text style={[style.s14, { marginLeft: 7 }]}>Enjoy for: 90 - 112 days</Text>
                                </View>
                            </View>
                            <Image source={require('../../../assets/image/jackfruit_tree.png')} resizeMode='stretch' style={{ height: 180, width: 90 }} />
                        </View>

                        {/* <View style={[style.list, { marginTop: 20, justifyContent: 'space-around' }]}>
                            <TouchableOpacity onPress={() => setVisible2(true)} style={{ alignItems: 'center' }}>
                                <Text style={[style.b14]}>Nước</Text>
                                <Image source={require('../../../assets/image/s11.png')} resizeMode='stretch' style={{ height: 68, width: 68, marginTop: 15 }} />
                                <Text style={[style.b16, { marginTop: 15 }]}>2 DAYS</Text>
                                <Text style={[style.b12, { color: Colors.icon, marginTop: 10 }]}>Every 7 Days</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => setVisible4(true)} style={{ alignItems: 'center' }}>
                                <Text style={[style.b14]}>Ánh Sáng</Text>
                                <Image source={require('../../../assets/image/s12.png')} resizeMode='stretch' style={{ height: 68, width: 68, marginTop: 15 }} />
                                <Text style={[style.b16, { marginTop: 15 }]}>65%</Text>
                                <Text style={[style.b12, { color: Colors.icon, marginTop: 10 }]}>18HRS a day</Text>
                            </TouchableOpacity>
                        </View> */}

                        {/* <Text style={[style.b14, { textAlign: 'center', marginTop: 20 }]}>Days planted</Text>
                        <View style={{ height: 10, backgroundColor: Colors.lines1, borderRadius: 5, width: width / 1.5, alignSelf: 'center', marginTop: 15 }}>
                            <View style={{ height: 10, backgroundColor: Colors.primary, borderRadius: 5, width: width / 7 }}></View>
                        </View>
                        <Text style={[style.b17, { color: Colors.primary, marginTop: 5, marginLeft: 50, marginBottom: 20 }]}>15 Days</Text> */}

                        {/* Khung "Tự động tưới" */}
                        <View style={[style.box1, style.shadow, { margin: 10, padding: 15, borderRadius: 10 }]}>
                            <TouchableOpacity onPress={() => { fetchSchedule(); setVisible2(true); setIsExpanded(false); }}>
                                <Text style={[style.s16, { fontWeight: 'bold', color: Colors.txt, textAlign: 'center' }]}>Tự động tưới</Text>
                            </TouchableOpacity>
                        </View>

                        {/* Khung "Điều khiển thủ công" */}
                        <View style={[style.box1, style.shadow, { margin: 10, padding: 15, borderRadius: 10 }]}>
                            <TouchableOpacity onPress={() => setIsExpanded(!isExpanded)}>
                                <Text style={[style.s16, { fontWeight: 'bold', color: Colors.txt, textAlign: 'center' }]}>Điều khiển thủ công</Text>
                            </TouchableOpacity>
                            {isExpanded && (
                                <View style={[style.list, { justifyContent: 'space-around', marginTop: 15 }]}>
                                    {/* Các công tắc điều khiển */}
                                    <View style={{ alignItems: 'center' }}>
                                        <Text style={[style.b14]}>Đèn</Text>
                                        <Switch
                                            trackColor={{ false: Colors.disable, true: Colors.primary }}
                                            thumbColor={isLightEnabled ? Colors.secondary : '#f4f3f4'}
                                            ios_backgroundColor="#3e3e3e"
                                            onValueChange={toggleLight}
                                            value={isLightEnabled}
                                        />
                                    </View>
                                    <View style={{ alignItems: 'center' }}>
                                        <Text style={[style.b14]}>Tưới Nước</Text>
                                        <Switch
                                            trackColor={{ false: Colors.disable, true: Colors.primary }}
                                            thumbColor={isWateringEnabled ? Colors.secondary : '#f4f3f4'}
                                            ios_backgroundColor="#3e3e3e"
                                            onValueChange={toggleWatering}
                                            value={isWateringEnabled}
                                        />
                                    </View>
                                    <View style={{ alignItems: 'center' }}>
                                        <Text style={[style.b14]}>Phun Sương</Text>
                                        <Switch
                                            trackColor={{ false: Colors.disable, true: Colors.primary }}
                                            thumbColor={isMistingEnabled ? Colors.secondary : '#f4f3f4'}
                                            ios_backgroundColor="#3e3e3e"
                                            onValueChange={toggleMisting}
                                            value={isMistingEnabled}
                                        />
                                    </View>
                                    <View style={{ alignItems: 'center' }}>
                                        <Text style={[style.b14]}>Camera</Text>
                                        <Switch
                                            trackColor={{ false: Colors.disable, true: Colors.primary }}
                                            thumbColor={isCameraEnabled ? Colors.secondary : '#f4f3f4'}
                                            ios_backgroundColor="#3e3e3e"
                                            onValueChange={toggleCamera}
                                            value={isCameraEnabled}
                                        />
                                    </View>
                                </View>
                            )}

                            {/* Nút Save */}
                            {isExpanded && (
                                <TouchableOpacity
                                    onPress={() => {
                                        updateMode(0); // Cập nhật chế độ sang "Điều khiển thủ công"
                                        setIsExpanded(false); // Đóng phần mở rộng
                                        showToast('success', 'Chế độ đã được cập nhật');
                                    }}
                                    style={{
                                        marginTop: 15,
                                        backgroundColor: Colors.primary,
                                        paddingVertical: 10,
                                        borderRadius: 10,
                                        alignItems: 'center',
                                    }}
                                >
                                    <Text style={[style.b14, { color: Colors.secondary }]}>Save</Text>
                                </TouchableOpacity>
                            )}
                        </View>

                        {/* Khung "Quan sát bằng camera" */}
                        <View style={[style.box1, style.shadow, { margin: 10, marginTop: 1, padding: 15, borderRadius: 10, alignItems: 'center' }]}>
                            <TouchableOpacity
                                style={{
                                    backgroundColor: Colors.primary,
                                    paddingVertical: 10,
                                    paddingHorizontal: 20,
                                    borderRadius: 10,
                                }}
                                onPress={() => {
                                    // Xử lý sự kiện khi nhấn nút "Quan sát bằng camera"
                                    navigation.navigate('MyTabs', { screen: 'Camera' });
                                }}
                            >
                                <Text style={[style.s16, { fontWeight: 'bold', color: Colors.txt, textAlign: 'center' }, { color: Colors.secondary }]}>Quan sát bằng camera</Text>
                            </TouchableOpacity>
                        </View>
                    </ScrollView>

                    <Modal transparent={true}
                        visible={visible}>
                        <View style={{
                            // width: width,
                            flex: 1,
                            backgroundColor: '#000000aa',
                            transparent: 'true'
                        }}>
                            <View style={[style.modalcontainer, { backgroundColor: Colors.bg, width: width - 60, marginVertical: 210 }]}>
                                <View style={{ marginTop: 10, marginHorizontal: 20 }}>

                                    <Text style={[style.subtitle, { textAlign: 'center', }]}>Plant Name</Text>

                                    <View style={[style.txtinput, { marginTop: 15, }]}>
                                        <TextInput placeholder='Name'
                                            placeholderTextColor={Colors.icon}
                                            selectionColor={Colors.primary}
                                            style={[style.s16, { color: Colors.txt, flex: 1 }]}
                                        />
                                    </View>

                                    <View style={[style.list, { marginTop: 20 }]}>
                                        <TouchableOpacity onPress={() => setVisible(false)} style={[style.btno, { flex: 1 }]}>
                                            <Text style={[style.btntxt, { color: Colors.primary }]}>Cancel</Text>
                                        </TouchableOpacity>
                                        <TouchableOpacity onPress={() => setVisible1(true)} style={[style.btn, { flex: 1, marginLeft: 10 }]}>

                                            <Modal transparent={true}
                                                visible={visible1}>
                                                <View style={{
                                                    // width: width,
                                                    flex: 1,
                                                    backgroundColor: '#000000aa',
                                                    transparent: 'true'
                                                }}>
                                                    <View style={[style.modalcontainer, { backgroundColor: Colors.bg, width: width - 60, marginVertical: 210 }]}>
                                                        <View style={{ marginTop: 10, marginHorizontal: 20 }}>

                                                            <Text style={[style.subtitle, { textAlign: 'center', }]}>Done Pot</Text>

                                                            <Text style={[style.s14, { color: Colors.dis, marginTop: 12 }]}>Your Ailanthus is still very young!</Text>
                                                            <Text style={[style.s14, { color: Colors.dis, marginTop: 10 }]}>Are you sure want to finish plant?</Text>

                                                            <View style={[style.list, { marginTop: 20 }]}>
                                                                <TouchableOpacity onPress={() => setVisible(false)} style={[style.btno, { flex: 1 }]}>
                                                                    <Text style={[style.btntxt, { color: Colors.primary }]}>Cancel</Text>
                                                                </TouchableOpacity>
                                                                <TouchableOpacity onPress={() => { setVisible1(false), setVisible(false) }} style={[style.btn, { flex: 1, marginLeft: 10 }]}>
                                                                    <Text style={[style.btntxt, {}]}>Save</Text>
                                                                </TouchableOpacity>
                                                            </View>

                                                        </View>

                                                    </View>
                                                </View>
                                            </Modal>

                                            <Text style={[style.btntxt, {}]}>Save</Text>
                                        </TouchableOpacity>
                                    </View>

                                </View>

                            </View>
                        </View>
                    </Modal>

                    {/* Modal "Tự động tưới" */}
                    <Modal transparent={true} visible={visible2}>
                        <View style={{
                            flex: 1,
                            backgroundColor: '#000000aa',
                        }}>
                            <View style={[style.modalcontainer, { backgroundColor: Colors.bg, width: width - 20, marginVertical: 50 }]}>
                                <View style={{ marginHorizontal: 15 }}>

                                    <View style={[style.list1]}>
                                        <View></View>
                                        <Text style={[style.subtitle, { textAlign: 'center' }]}>Điều chỉnh tưới nước</Text>
                                        <TouchableOpacity onPress={() => setVisible2(false)}>
                                            <Icon name='close' size={24} color={Colors.txt} />
                                        </TouchableOpacity>
                                    </View>

                                    {/* Default Settings Switch */}
                                    <View style={[style.list, { marginTop: 10 }]}>
                                        <Text style={[style.subtitle, { flex: 1 }]}>Cài đặt mặc định</Text>
                                        <Switch
                                            trackColor={{ false: Colors.disable, true: Colors.primary }}
                                            thumbColor={isDefaultSetting ? Colors.secondary : '#f4f3f4'}
                                            ios_backgroundColor="#3e3e3e"
                                            onValueChange={(value) => {
                                                setIsDefaultSetting(value);
                                                setTempMode(value ? 1 : 2); // Mode 1: Default, Mode 2: Custom
                                            }}
                                            value={isDefaultSetting}
                                        />
                                    </View>

                                    {/* Hiển thị nút Save riêng khi Default Settings được bật */}
                                    {isDefaultSetting && (
                                        <TouchableOpacity
                                            onPress={() => {
                                                updateMode(1); // Cập nhật chế độ sang "Default Settings"
                                                setVisible2(false);
                                                showToast('success', 'Chế độ mặc định đã được cập nhật');
                                            }}
                                            style={{
                                                marginTop: 20,
                                                backgroundColor: Colors.primary,
                                                paddingVertical: 10,
                                                borderRadius: 10,
                                                alignItems: 'center',
                                            }}
                                        >
                                            <Text style={[style.btntxt, { color: Colors.secondary }]}>Save</Text>
                                        </TouchableOpacity>
                                    )}


                                    {/* Custom Settings */}
                                    {!isDefaultSetting && (
                                        <>
                                            {/* Device 1: Đèn */}
                                            {schedule && schedule[0] && (
                                                <>
                                                    <Text style={[style.b16, { marginTop: 15 }]}>Đèn</Text>
                                                    <View style={[style.list, { marginTop: 10 }]}>
                                                        <Text style={[style.s16]}>Giờ bật</Text>
                                                        <TouchableOpacity onPress={() => showStartTimePicker(0)} style={[style.btn, { marginTop: 5, marginLeft:10, width:90 }]}>
                                                            <Text style={[style.btntxt]}>
                                                                {schedule[0].turnOnTime && schedule[0].turnOnTime.length > 0
                                                                    ? formatTime(schedule[0].turnOnTime)
                                                                    : 'Chưa đặt'}
                                                            </Text>
                                                        </TouchableOpacity>
                                                        <Text style={[style.s16, {marginLeft: 10}]}>Giờ tắt</Text>
                                                        <TouchableOpacity onPress={() => showEndTimePicker(0)} style={[style.btn, { marginTop: 5, marginLeft:10, width:90 }]}>
                                                            <Text style={[style.btntxt]}>
                                                                {schedule[0].turnOffTime && schedule[0].turnOffTime.length > 0
                                                                    ? formatTime(schedule[0].turnOffTime)
                                                                    : 'Chưa đặt'}
                                                            </Text>
                                                        </TouchableOpacity>
                                                    </View>
                                                </>
                                            )}

                                            {/* Các thiết bị khác */}
                                            {/* Device 2: Máy bơm nước */}
                                            {schedule && schedule[1] && (
                                                <>
                                                    <Text style={[style.b16, { marginTop: 15 }]}>Máy bơm nước</Text>
                                                    <View style={[style.list, { marginTop: 10 }]}>
                                                        <Text style={[style.s16]}>Giờ bật</Text>
                                                        <TouchableOpacity onPress={() => showStartTimePicker(1)} style={[style.btn, { marginTop: 5, marginLeft:10, width:90 }]}>
                                                            <Text style={[style.btntxt]}>
                                                                {schedule[1].turnOnTime && schedule[1].turnOnTime.length > 0
                                                                    ? formatTime(schedule[1].turnOnTime)
                                                                    : 'Chưa đặt'}
                                                            </Text>
                                                        </TouchableOpacity>
                                                        <Text style={[style.s16, {marginLeft: 10}]}>Giờ tắt</Text>
                                                        <TouchableOpacity onPress={() => showEndTimePicker(1)} style={[style.btn, { marginTop: 5, marginLeft:10, width:90 }]}>
                                                            <Text style={[style.btntxt]}>
                                                                {schedule[1].turnOffTime && schedule[1].turnOffTime.length > 0
                                                                    ? formatTime(schedule[1].turnOffTime)
                                                                    : 'Chưa đặt'}
                                                            </Text>
                                                        </TouchableOpacity>
                                                    </View>
                                                </>
                                            )}

                                            {/* Device 3: Máy phun sương */}
                                            {schedule && schedule[2] && (
                                                <>
                                                    <Text style={[style.b16, { marginTop: 15 }]}>Máy phun sương</Text>
                                                    <View style={[style.list, { marginTop: 10 }]}>
                                                        <Text style={[style.s16]}>Giờ bật</Text>
                                                        <TouchableOpacity onPress={() => showStartTimePicker(2)} style={[style.btn, { marginTop: 5, marginLeft:10, width:90 }]}>
                                                            <Text style={[style.btntxt]}>
                                                                {schedule[2].turnOnTime && schedule[2].turnOnTime.length > 0
                                                                    ? formatTime(schedule[2].turnOnTime)
                                                                    : 'Chưa đặt'}
                                                            </Text>
                                                        </TouchableOpacity>
                                                        <Text style={[style.s16, {marginLeft: 10}]}>Giờ tắt</Text>
                                                        <TouchableOpacity onPress={() => showEndTimePicker(2)} style={[style.btn, { marginTop: 5, marginLeft:10, width:90 }]}>
                                                            <Text style={[style.btntxt]}>
                                                                {schedule[2].turnOffTime && schedule[2].turnOffTime.length > 0
                                                                    ? formatTime(schedule[2].turnOffTime)
                                                                    : 'Chưa đặt'}
                                                            </Text>
                                                        </TouchableOpacity>
                                                    </View>
                                                </>
                                            )}

                                            {/* Device 4: Camera */}
                                            {schedule && schedule[3] && (
                                                <>
                                                    <Text style={[style.b16, { marginTop: 15 }]}>Camera</Text>
                                                    <View style={[style.list, { marginTop: 10 }]}>
                                                        <Text style={[style.s16]}>Giờ bật</Text>
                                                        <TouchableOpacity onPress={() => showStartTimePicker(3)} style={[style.btn, { marginTop: 5, marginLeft:10, width:90 }]}>
                                                            <Text style={[style.btntxt]}>
                                                                {schedule[3].turnOnTime && schedule[3].turnOnTime.length > 0
                                                                    ? formatTime(schedule[3].turnOnTime)
                                                                    : 'Chưa đặt'}
                                                            </Text>
                                                        </TouchableOpacity>
                                                        <Text style={[style.s16, {marginLeft: 10}]}>Giờ tắt</Text>
                                                        <TouchableOpacity onPress={() => showEndTimePicker(3)} style={[style.btn, { marginTop: 5, marginLeft:10, width:90 }]}>
                                                            <Text style={[style.btntxt]}>
                                                                {schedule[3].turnOffTime && schedule[3].turnOffTime.length > 0
                                                                    ? formatTime(schedule[3].turnOffTime)
                                                                    : 'Chưa đặt'}
                                                            </Text>
                                                        </TouchableOpacity>
                                                    </View>
                                                </>
                                            )}

                                            {/* Nút Save riêng cho Custom Settings */}
                                            <TouchableOpacity
                                                onPress={() => {
                                                    saveSchedule(); // Lưu lịch trình
                                                    setVisible2(false);
                                                    showToast('success', 'Lịch trình đã được cập nhật');
                                                }}
                                                style={{
                                                    marginTop: 50,
                                                    backgroundColor: Colors.primary,
                                                    paddingVertical: 10,
                                                    borderRadius: 10,
                                                    alignItems: 'center',
                                                }}
                                            >
                                                <Text style={[style.btntxt, { color: Colors.secondary }]}>Save</Text>
                                            </TouchableOpacity>
                                        </>
                                    )}
                                </View>
                            </View>
                        </View>
                    </Modal>

                    {/* DateTime Pickers */}
                    <DateTimePickerModal
                        isVisible={isStartTimePickerVisible}
                        mode="time"
                        onConfirm={(date) => handleStartTimeConfirm(date, currentDeviceIndex)}
                        onCancel={() => setStartTimePickerVisible(false)}
                    />
                    <DateTimePickerModal
                        isVisible={isEndTimePickerVisible}
                        mode="time"
                        onConfirm={(date) => handleEndTimeConfirm(date, currentDeviceIndex)}
                        onCancel={() => setEndTimePickerVisible(false)}
                    />



                </View>
            </KeyboardAvoidingView>

            {/* Toast Component */}
            <Toast />
        </SafeAreaView>
    )
}