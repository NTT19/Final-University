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

    const [startTime, setStartTime] = useState('7:00 AM'); // Thời gian bắt đầu
    const [endTime, setEndTime] = useState('7:00 PM'); // Thời gian kết thúc

    const fetchSchedule = async () => {
        try {
            const response = await axios.get('https://plantify.info.vn/api/ledControl');
            setSchedule(response.data);
        } catch (error) {
            showToast('error', 'Lỗi khi lấy lịch tưới');
            console.error(error);
        }
    };

    useEffect(() => {
        fetchSchedule();  // Fetch schedule data when the component mounts
    }, []);

    const showStartTimePicker = () => setStartTimePickerVisible(true);
    const hideStartTimePicker = () => setStartTimePickerVisible(false);

    // Show End Time Picker
    const showEndTimePicker = () => setEndTimePickerVisible(true);
    const hideEndTimePicker = () => setEndTimePickerVisible(false);

    // Handle start time selection
    const handleStartTimeConfirm = (date) => {
        const formattedTime = formatTime(date);
        setStartTime(formattedTime);
        hideStartTimePicker();
    };

    // Handle end time selection
    const handleEndTimeConfirm = (date) => {
        const formattedTime = formatTime(date);
        setEndTime(formattedTime);
        hideEndTimePicker();
    };

    const formatTime = (date) => {
        const hours = date.getHours();
        const minutes = date.getMinutes();
        const period = hours >= 12 ? 'PM' : 'AM';
        const formattedHours = hours % 12 || 12; // Convert 24-hour time to 12-hour format
        const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
        return `${formattedHours}:${formattedMinutes} ${period}`;
    };

    const saveSchedule = async () => {
        try {
            const updatedSchedule = schedule.map(device => {
                if (device.ledName === 'led1') {
                    device.turnOnTime = startTime.split(':')[0];
                    device.turnOffTime = endTime.split(':')[0];
                }
                return device;
            });
            await axios.put('https://plantify.info.vn/api/ledControl', updatedSchedule);
            showToast('success', 'Cập nhật lịch thành công');
            setVisible2(false);
        } catch (error) {
            showToast('error', 'Lỗi khi cập nhật lịch');
            console.error(error);
        }
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
        text1Style: { fontSize: 20, fontWeight: 'bold', color: 'black' } ,
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

    const interval = setInterval(fetchControlStatus, 2000);  // Định kỳ lấy trạng thái mỗi 10 giây

    return () => clearInterval(interval);  // Dọn dẹp interval khi component bị unmount
  }, []);

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
                        leading={<TouchableOpacity onPress={() => navigation.navigate('MyTabs')} >
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
                        <TouchableOpacity onPress={() => { setVisible2(true); updateMode(2); }}>
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
            <View style={[style.box1, style.shadow, { margin: 10,marginTop:1, padding: 15, borderRadius: 10, alignItems: 'center' }]}>
                <TouchableOpacity
                    style={{
                        backgroundColor: Colors.primary,
                        paddingVertical: 10,
                        paddingHorizontal: 20,
                        borderRadius: 10,
                    }}
                    onPress={() => {
                        // Xử lý sự kiện khi nhấn nút "Quan sát bằng camera"
                        console.log('Quan sát bằng camera');
                    }}
                >
                    <Text style={[style.b14, { color: Colors.secondary }]}>Quan sát bằng camera</Text>
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
                                <View style={[style.modalcontainer, { backgroundColor: Colors.bg, width: width - 60, marginVertical: 50 }]}>
                                    <View style={{ marginHorizontal: 15 }}>
                        
                                        <View style={[style.list1]}>
                                            <View></View>
                                            <Text style={[style.subtitle, { textAlign: 'center' }]}>Water Customize</Text>
                                            <TouchableOpacity onPress={() => setVisible2(false)}>
                                                <Icon name='close' size={24} color={Colors.txt} />
                                            </TouchableOpacity>
                                        </View>
                        
                                        {/* Default Settings Switch */}
                                        <View style={[style.list, { marginTop: 10 }]}>
                                            <Text style={[style.subtitle, { flex: 1 }]}>Default Settings</Text>
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

                                        {/* Custom Settings */}
                                        {!isDefaultSetting && (
                                            <>
                                                {/* Device 1: Đèn */}
                                                {schedule[0] && (
                                                    <>
                                                        <Text style={[style.b16, { marginTop: 15 }]}>Đèn</Text>
                                                        <View style={[style.list, { marginTop: 10 }]}>
                                                            <Text style={[style.s16]}>Giờ bật</Text>
                                                            <TouchableOpacity onPress={() => showStartTimePicker(0)} style={[style.btn, { marginTop: 10 }]}>
                                                                <Text style={[style.btntxt]}>{formatTime(new Date(schedule[0].turnOnTime[0], schedule[0].turnOnTime[1]))}</Text>
                                                            </TouchableOpacity>
                                                            <Text style={[style.s16]}>Giờ tắt</Text>
                                                            <TouchableOpacity onPress={() => showEndTimePicker(0)} style={[style.btn, { marginTop: 10 }]}>
                                                                <Text style={[style.btntxt]}>{formatTime(new Date(schedule[0].turnOffTime[0], schedule[0].turnOffTime[1]))}</Text>
                                                            </TouchableOpacity>
                                                        </View>
                                                    </>
                                                )}

                                                {/* Device 2: Máy bơm nước */}
                                                {schedule[1] && (
                                                    <>
                                                        <Text style={[style.b16, { marginTop: 15 }]}>Máy bơm nước</Text>
                                                        <View style={[style.list, { marginTop: 10 }]}>
                                                            <Text style={[style.s16]}>Giờ bật</Text>
                                                            <TouchableOpacity onPress={() => showStartTimePicker(1)} style={[style.btn, { marginTop: 10 }]}>
                                                                <Text style={[style.btntxt]}>{formatTime(new Date(schedule[1].turnOnTime[0], schedule[1].turnOnTime[1]))}</Text>
                                                            </TouchableOpacity>
                                                            <Text style={[style.s16]}>Giờ tắt</Text>
                                                            <TouchableOpacity onPress={() => showEndTimePicker(1)} style={[style.btn, { marginTop: 10 }]}>
                                                                <Text style={[style.btntxt]}>{formatTime(new Date(schedule[1].turnOffTime[0], schedule[1].turnOffTime[1]))}</Text>
                                                            </TouchableOpacity>
                                                        </View>
                                                    </>
                                                )}

                                                 {/* Device 3: Máy phun sương */}
                                                 {schedule[2] && (
                                                    <>
                                                        <Text style={[style.b16, { marginTop: 15 }]}>Máy phun sương</Text>
                                                        <View style={[style.list, { marginTop: 10 }]}>
                                                            <Text style={[style.s16]}>Giờ bật</Text>
                                                            <TouchableOpacity onPress={() => showStartTimePicker(1)} style={[style.btn, { marginTop: 10 }]}>
                                                                <Text style={[style.btntxt]}>{formatTime(new Date(schedule[1].turnOnTime[0], schedule[1].turnOnTime[1]))}</Text>
                                                            </TouchableOpacity>
                                                            <Text style={[style.s16]}>Giờ tắt</Text>
                                                            <TouchableOpacity onPress={() => showEndTimePicker(1)} style={[style.btn, { marginTop: 10 }]}>
                                                                <Text style={[style.btntxt]}>{formatTime(new Date(schedule[1].turnOffTime[0], schedule[1].turnOffTime[1]))}</Text>
                                                            </TouchableOpacity>
                                                        </View>
                                                    </>
                                                )}
                                               
                                                {/* Device 4: camera */}
                                                {schedule[3] && (
                                                    <>
                                                        <Text style={[style.b16, { marginTop: 15 }]}>Camera</Text>
                                                        <View style={[style.list, { marginTop: 10 }]}>
                                                            <Text style={[style.s16]}>Giờ bật</Text>
                                                            <TouchableOpacity onPress={() => showStartTimePicker(1)} style={[style.btn, { marginTop: 10 }]}>
                                                                <Text style={[style.btntxt]}>{formatTime(new Date(schedule[1].turnOnTime[0], schedule[1].turnOnTime[1]))}</Text>
                                                            </TouchableOpacity>
                                                            <Text style={[style.s16]}>Giờ tắt</Text>
                                                            <TouchableOpacity onPress={() => showEndTimePicker(1)} style={[style.btn, { marginTop: 10 }]}>
                                                                <Text style={[style.btntxt]}>{formatTime(new Date(schedule[1].turnOffTime[0], schedule[1].turnOffTime[1]))}</Text>
                                                            </TouchableOpacity>
                                                        </View>
                                                    </>
                                                )}
                                            </>
                                        )}

                                        {/* Save Button */}
                                        <TouchableOpacity
                                            onPress={() => {
                                                updateMode(tempMode); // Cập nhật chế độ khi nhấn Save
                                                setVisible2(false); // Đóng Modal
                                            }}
                                            style={[style.btn, { marginTop: 30 }]}
                                        >
                                            <Text style={[style.btntxt, {}]}>Save</Text>
                                        </TouchableOpacity>

                                    </View>
                                </View>
                            </View>
                        </Modal>

                        {/* DateTime Pickers */}
                        <DateTimePickerModal
                            isVisible={isStartTimePickerVisible}
                            mode="time"
                            onConfirm={handleStartTimeConfirm}
                            onCancel={() => setStartTimePickerVisible(false)}
                        />
                        <DateTimePickerModal
                            isVisible={isEndTimePickerVisible}
                            mode="time"
                            onConfirm={handleEndTimeConfirm}
                            onCancel={() => setEndTimePickerVisible(false)}
                        />

    

                </View>
            </KeyboardAvoidingView>

              {/* Toast Component */}
              <Toast />
        </SafeAreaView>
    )
}