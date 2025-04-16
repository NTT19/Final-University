import { View, Dimensions, Text, SafeAreaView, TextInput, StatusBar, TouchableOpacity, Image, ScrollView, KeyboardAvoidingView, ImageBackground, ActivityIndicator } from 'react-native'
import React, { useState, useContext } from 'react'
import style from '../../theme/style';
import { Colors } from '../../theme/color';
import { useNavigation } from '@react-navigation/native';
import { AppBar } from '@react-native-material/core';
import Icon from 'react-native-vector-icons/Ionicons';
import CheckBox from 'react-native-check-box';
import loginApi from '../../api/loginApi';
import Toast from 'react-native-toast-message';
const width = Dimensions.get('screen').width
const height = Dimensions.get('screen').height

    const Login= () => {
    const navigation = useNavigation();
    const [isSelected, setIsSelected] = useState(false)
    const [phone_number, setPhoneNumber] = useState("");  // State cho phone
    const [password, setPassword] = useState("");  // State cho password
    const [loading, setLoading] = useState(false);  // Trạng thái loading khi gọi API
    const [error, setError] = useState(null);  // Lỗi khi đăng nhập thất bại


    const handleLogin = async () => {
        setLoading(true);
        setError(null);

        try {
            const payload = {
                phone_number,
                password,
            };

            console.log('Payload gửi lên API:', payload); // In ra payload để kiểm tra
    
            // Gửi yêu cầu trực tiếp đến API
            const response = await fetch('https://plantify.info.vn/api/user/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(payload),
            });
    
            const responseData = await response.json();
    
            if (response.ok) {
                showToast('success', 'Đăng nhập thành công!');
                navigation.navigate('MyTabs'); // Chuyển hướng về màn hình đăng nhập
            } else {
                console.log('Phản hồi từ API:', responseData); // In ra phản hồi từ API
                showToast('error', responseData.message || 'Đăng nhập thất bại. Vui lòng thử lại!');
            }
        } catch (error) {
            console.error('Lỗi khi đăng nhập:', error);
            showToast('error', 'Đã xảy ra lỗi. Vui lòng thử lại sau!');
        }
};


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

    return (
        <SafeAreaView style={[style.area, { backgroundColor: Colors.bg }]}>
            <KeyboardAvoidingView style={{ flex: 1 }}
                behavior={Platform.OS === 'ios' ? 'padding' : null}
            >

                <View style={[style.main, { marginTop: Platform.OS === 'ios' ? 10 : 10, }]}>

                    <AppBar
                        color={Colors.bg}
                        elevation={0}
                        centerTitle={true}
                        leading={<TouchableOpacity onPress={() => navigation.navigate('Hello')} >
                            <Icon name='arrow-back' size={24} color={Colors.txt} />
                        </TouchableOpacity>}
                    />

                    <ScrollView showsVerticalScrollIndicator={false} style={{}}>

                        <Text style={[style.title]}>Đăng nhập</Text>

                        <View style={[style.list, { marginTop: 5, }]}>
                            <Text style={[style.s14, { color: Colors.dis }]}>Bạn chưa có tài khoản?</Text>
                            <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
                                <Text style={[style.s14, { color: Colors.primary }]}>Đăng ký ngay!</Text>
                            </TouchableOpacity>
                        </View>

                        <View style={[style.txtinput, { marginTop: 40, }]}>
                            <TextInput placeholder='Số điện thoại'
                                placeholderTextColor={Colors.icon}
                                selectionColor={Colors.primary}
                                style={[style.s16, { color: Colors.txt, flex: 1 }]}
                                value={phone_number}
                                onChangeText={setPhoneNumber}
                            />
                        </View>

                        <View style={[style.txtinput, { marginTop: 30, }]}>
                            <TextInput placeholder='Mật khẩu'
                                placeholderTextColor={Colors.icon}
                                selectionColor={Colors.primary}
                                style={[style.s16, { color: Colors.txt, flex: 1 }]}
                                value={password}
                                onChangeText={setPassword}
                            />
                        </View>

                        <View style={[style.list, { marginTop: 15 }]}>
                            <CheckBox isChecked={isSelected}
                                onClick={() => setIsSelected(!isSelected)}
                                checkBoxColor={Colors.primary}
                            />
                            <Text style={[style.s14, { color: Colors.icon, flex: 1, marginLeft: 7 }]}>Nhớ mật khẩu</Text>
                            <TouchableOpacity onPress={() => navigation.navigate('Forgot')}>
                                <Text style={[style.s14, { color: Colors.dis, }]}>Quên mật khẩu?</Text>
                            </TouchableOpacity>
                        </View>

                        <TouchableOpacity onPress={handleLogin}
                            style={[style.btn, { marginTop: 50, height: 48 }]}>
                                  {loading ? (
                                <ActivityIndicator size="small" color={Colors.white} />
                            ) : (
                            <Text style={style.btntxt}>Đăng nhập</Text>)}
                        </TouchableOpacity>
                         {/* Error message */}
                        {error && <Text style={{ color: 'red', marginTop: 10, marginLeft: 30 }}>{error}</Text>}


                        {/* <View style={[style.list, { justifyContent: 'center', marginVertical: 20 }]}>
                            <View style={[style.divider, { backgroundColor: Colors.dis, width: 30 }]}></View>
                            <Text style={[style.s14, { color: Colors.dis, marginHorizontal: 10 }]}>Lựa chọn khác</Text>
                            <View style={[style.divider, { backgroundColor: Colors.dis, width: 30 }]}></View>
                        </View>

                        <View style={[style.list, { justifyContent: 'center', marginBottom: 20 }]}>
                            <View style={[style.fb]}>
                                <Image source={require('../../../assets/image/a1.png')} resizeMode='stretch' style={{ height: 24, width: 24 }}></Image>
                            </View>
                            <Image source={require('../../../assets/image/a2.png')} resizeMode='stretch' style={{ height: 36, width: 36, marginHorizontal: 25 }}></Image>
                            <Image source={require('../../../assets/image/a3.png')} resizeMode='stretch' style={{ height: 36, width: 36 }}></Image>
                        </View> */}

                    </ScrollView>
                </View>
            </KeyboardAvoidingView>
                        {/* Toast Component */}
                    <Toast />
        </SafeAreaView>
    )
};

export default Login;