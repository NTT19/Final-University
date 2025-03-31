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

const width = Dimensions.get('screen').width
const height = Dimensions.get('screen').height

export default function PotInfo() {
    const navigation = useNavigation();
    const [visible, setVisible] = useState(false)
    const [visible1, setVisible1] = useState(false)
    const [visible2, setVisible2] = useState(false)
    const [visible3, setVisible3] = useState(false)
    const [visible4, setVisible4] = useState(false)
    const [visible5, setVisible5] = useState(false)

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
 const [pumpTimer, setPumpTimer] = useState(8); // Thời gian tưới (giờ/ngày)
 const [pumpCycleOn, setPumpCycleOn] = useState(1); // Thời gian bật (phút)
 const [pumpCycleRest, setPumpCycleRest] = useState(1); // Thời gian nghỉ (giờ)
 const [startTime, setStartTime] = useState('7:00 AM'); // Thời gian bắt đầu
 const [tempMode, setTempMode] = useState(mode); // Lưu chế độ tạm thời

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
                        <TouchableOpacity onPress={() => { setIsExpanded(!isExpanded); updateMode(0); }}>
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
                                                {/* Pump Timer */}
                                                <Text style={[style.b16, { marginTop: 15 }]}>Pump Timer (hours/day)</Text>
                                                <Slider
                                                    style={{ width: '100%', height: 40 }}
                                                    minimumValue={1}
                                                    maximumValue={24}
                                                    step={1}
                                                    value={pumpTimer}
                                                    onValueChange={(value) => setPumpTimer(value)}
                                                    minimumTrackTintColor={Colors.primary}
                                                    maximumTrackTintColor={Colors.lines1}
                                                />
                                                <Text style={[style.s14, { textAlign: 'center', marginTop: 5 }]}>Selected: {pumpTimer} hours/day</Text>
                                        
                                                {/* Pump Cycle */}
                                                <Text style={[style.b16, { marginTop: 15 }]}>Pump Cycle</Text>
                                                <View style={[style.list, { marginTop: 15, marginBottom: 20 }]}>
                                                    <Text style={[style.s16, { flex: 1 }]}>On (min)</Text>
                                                    <View style={[style.list, { flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start', marginLeft: 30 }]}>
                                                        <TouchableOpacity onPress={() => setPumpCycleOn(Math.max(1, pumpCycleOn - 1))}>
                                                            <Icon name="remove" size={24} color={Colors.icon} />
                                                        </TouchableOpacity>
                                        
                                                        <Text style={[style.b16, { marginHorizontal: 10 }]}>{pumpCycleOn}</Text>
                                        
                                                        <TouchableOpacity onPress={() => setPumpCycleOn(pumpCycleOn + 1)}>
                                                            <Icon style={[style.b16, { marginHorizontal: 10, marginRight: 35 }]} name="add" size={24} color={Colors.icon} />
                                                        </TouchableOpacity>
                                                    </View>
                                                </View>
                                                <View style={[style.list, { marginTop: 15, marginBottom: 20 }]}>
                                                    <Text style={[style.s16, { flex: 1 }]}>Rest (hr)</Text>
                                                    <View style={[style.list, { flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start', marginLeft: 30 }]}>
                                                        <TouchableOpacity onPress={() => setPumpCycleRest(Math.max(1, pumpCycleRest - 1))}>
                                                            <Icon name="remove" size={24} color={Colors.icon} />
                                                        </TouchableOpacity>
                                        
                                                        <Text style={[style.b16, { marginHorizontal: 10 }]}>{pumpCycleRest}</Text>
                                        
                                                        <TouchableOpacity onPress={() => setPumpCycleRest(pumpCycleRest + 1)}>
                                                            <Icon style={[style.b16, { marginHorizontal: 10, marginRight: 35 }]} name="add" size={24} color={Colors.icon} />
                                                        </TouchableOpacity>
                                                    </View>
                                                </View>
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

                    {/* <Modal transparent={true}
                        visible={visible4}>
                        <View style={{
                            // width: width,
                            flex: 1,
                            backgroundColor: '#000000aa',
                            transparent: 'true'
                        }}>
                            <View style={[style.modalcontainer, { backgroundColor: Colors.bg, width: width - 60, marginVertical: 40 }]}>
                                <View style={{ marginHorizontal: 15 }}>

                                    <View style={[style.list1]}>
                                        <View></View>
                                        <Text style={[style.subtitle, { textAlign: 'center', }]}>Light Customize</Text>
                                        <TouchableOpacity onPress={() => setVisible4(false)}>
                                            <Icon name='close' size={24} color={Colors.txt} />
                                        </TouchableOpacity>
                                    </View>

                                    <View style={[style.list, { marginTop: 10 }]}>
                                        <Text style={[style.subtitle, { flex: 1 }]}>Default Settings</Text>
                                        <Switch
                                            trackColor={{ false: Colors.disable, true: Colors.primary }}
                                            thumbColor={isEnabled1 ? Colors.secondary : '#f4f3f4'}
                                            ios_backgroundColor="#3e3e3e"
                                            onValueChange={toggleSwitch1}
                                            value={isEnabled1}
                                        />
                                    </View>

                                    <Text style={[style.s12, { marginTop: 5 }]}>Recommend settings for your plant mode. Turn off to customize</Text>

                                    <View style={[style.divider, { marginVertical: 12 }]}></View>

                                    <Text style={[style.b16]}>Set Timer <Text style={[style.s14, { color: Colors.icon }]}>(hours/day)</Text></Text>

                                    <View style={[style.list, { marginTop: 15 }]}>
                                        <Text style={[style.s16, { flex: 1 }]}>Start</Text>
                                        <Text style={[style.s16, { marginRight: 5 }]}>8:30 AM</Text>
                                        <Icon name='chevron-up' size={18} color={Colors.txt} />
                                    </View>

                                    <View style={[style.list, { justifyContent: 'space-around', marginTop: 15 }]}>
                                        <View style={{ alignItems: 'center' }}>
                                            <Icon name='caret-up' size={18} color={Colors.txt} />
                                            <Text style={[style.b16, { color: Colors.icon }]}>7</Text>
                                            <View style={{ height: 1, width: 22, backgroundColor: Colors.txt, marginVertical: 5 }}></View>
                                            <Text style={[style.b16, {}]}>8</Text>
                                            <View style={{ height: 1, width: 22, backgroundColor: Colors.txt, marginVertical: 5 }}></View>
                                            <Text style={[style.b16, { color: Colors.icon }]}>9</Text>
                                        </View>
                                        <View>
                                            <View style={{ height: 4, width: 4, backgroundColor: Colors.txt, borderRadius: 5 }}></View>
                                            <View style={{ height: 4, width: 4, backgroundColor: Colors.txt, borderRadius: 5, marginTop: 5 }}></View>
                                        </View>
                                        <View style={{ alignItems: 'center' }}>
                                            <Icon name='caret-up' size={18} color={Colors.txt} />
                                            <Text style={[style.b16, { color: Colors.icon }]}>29</Text>
                                            <View style={{ height: 1, width: 22, backgroundColor: Colors.txt, marginVertical: 5 }}></View>
                                            <Text style={[style.b16, {}]}>30</Text>
                                            <View style={{ height: 1, width: 22, backgroundColor: Colors.txt, marginVertical: 5 }}></View>
                                            <Text style={[style.b16, { color: Colors.icon }]}>31</Text>
                                        </View>
                                        <View style={{ alignItems: 'center' }}>
                                            <Icon name='caret-up' size={18} color={Colors.txt} />
                                            <Text style={[style.b16, { color: Colors.icon }]}></Text>
                                            <View style={{ height: 1, width: 22, backgroundColor: Colors.txt, marginVertical: 5 }}></View>
                                            <Text style={[style.b16, {}]}>AM</Text>
                                            <View style={{ height: 1, width: 22, backgroundColor: Colors.txt, marginVertical: 5 }}></View>
                                            <Text style={[style.b16, { color: Colors.icon }]}>PM</Text>
                                        </View>
                                    </View>

                                    <View style={[style.list, { marginTop: 15 }]}>
                                        <Text style={[style.s16, { flex: 1 }]}>End</Text>
                                        <Text style={[style.s16, { marginRight: 5 }]}>11:30 AM</Text>
                                        <Icon name='chevron-down' size={18} color={Colors.txt} />
                                    </View>

                                    <Text style={[style.b16, { marginTop: 10 }]}>Spectrum <Text style={[style.s14, { color: Colors.icon }]}>(nm)</Text></Text>

                                    <View style={[style.list, { marginTop: 15 }]}>
                                        <Text style={[style.s16]}>Red</Text>
                                        <View style={{ height: 4, backgroundColor: Colors.lines1, marginLeft: 20, flex: 1,justifyContent:'center' }}>
                                            <View style={[style.list]}>
                                                <View style={{height: 4, backgroundColor: Colors.primary,width:width/6.5}}></View>
                                                <View style={[style.icon2,{height:18,width:18,backgroundColor:Colors.primary}]}></View>
                                            </View>
                                        </View>
                                    </View>

                                    <View style={[style.list, { marginTop: 15 }]}>
                                        <Text style={[style.s16]}>Blue</Text>
                                        <View style={{ height: 4, backgroundColor: Colors.lines1, marginLeft: 20, flex: 1,justifyContent:'center' }}>
                                            <View style={[style.list]}>
                                                <View style={{height: 4, backgroundColor: '#4C91F8',width:width/3.5}}></View>
                                                <View style={[style.icon2,{height:18,width:18,backgroundColor:'#4C91F8'}]}></View>
                                            </View>
                                        </View>
                                    </View>

                                    <View style={[style.list, { marginTop: 15 }]}>
                                        <Text style={[style.s16]}>Yellow</Text>
                                        <View style={{ height: 4, backgroundColor: Colors.lines1, marginLeft: 20, flex: 1,justifyContent:'center' }}>
                                            <View style={[style.list]}>
                                                <View style={{height: 4, backgroundColor: '#F8C84C',width:width/5.5}}></View>
                                                <View style={[style.icon2,{height:18,width:18,backgroundColor:'#F8C84C'}]}></View>
                                            </View>
                                        </View>
                                    </View>


                                    <TouchableOpacity onPress={() => setVisible5(true)}
                                        style={[style.btn, { marginTop: 20 }]}>

                                        <Modal transparent={true}
                                            visible={visible5}>
                                            <View style={{
                                                // width: width,
                                                flex: 1,
                                                backgroundColor: '#000000aa',
                                                transparent: 'true'
                                            }}>
                                                <View style={[style.modalcontainer, { backgroundColor: Colors.bg, width: width - 60, marginVertical: 250 }]}>
                                                    <View style={{ marginTop: 10, marginHorizontal: 20 }}>

                                                        <Text style={[style.b16, {}]}>Are you sure want to save your setting?</Text>

                                                        <View style={[style.list, { marginTop: 20 }]}>
                                                            <TouchableOpacity onPress={() => setVisible5(false)} style={[style.btno, { flex: 1 }]}>
                                                                <Text style={[style.btntxt, { color: Colors.primary }]}>No</Text>
                                                            </TouchableOpacity>
                                                            <TouchableOpacity onPress={() => { setVisible5(false), setVisible4(false) }} style={[style.btn, { flex: 1, marginLeft: 10 }]}>
                                                                <Text style={[style.btntxt, {}]}>YES</Text>
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
                    </Modal> */}

                </View>
            </KeyboardAvoidingView>

              {/* Toast Component */}
              <Toast />
        </SafeAreaView>
    )
}