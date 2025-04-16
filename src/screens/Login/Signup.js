import { View, Dimensions, Text, SafeAreaView, TextInput, TouchableOpacity, ScrollView, KeyboardAvoidingView } from 'react-native';
import React, { useState } from 'react';
import style from '../../theme/style';
import { Colors } from '../../theme/color';
import { useNavigation } from '@react-navigation/native';
import { AppBar } from '@react-native-material/core';
import Icon from 'react-native-vector-icons/Ionicons';
import Toast from 'react-native-toast-message';
import registerApi from '../../api/registerApi';

export default function Signup() {
    const navigation = useNavigation();
    const [fullName, setFullName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
    const [isPasswordVisible1, setIsPasswordVisible1] = useState(false);

    const register = async () => {
        if (password !== confirmPassword) {
            showToast('error', 'Mật khẩu không khớp!');
            return;
        }
    
        try {
            const payload = {
                fullName,
                phoneNumber,
                email,
                password,
                status: 'active', 
                role_id: 1, 
            };

            console.log('Payload gửi lên API:', payload); // In ra payload để kiểm tra
    
            // Gửi yêu cầu trực tiếp đến API
            const response = await fetch('https://plantify.info.vn/api/user/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(payload),
            });
    
            const responseData = await response.json();
    
            if (response.ok) {
                showToast('success', 'Đăng ký thành công!');
                navigation.navigate('Login'); // Chuyển hướng về màn hình đăng nhập
            } else {
                console.log('Phản hồi từ API:', responseData); // In ra phản hồi từ API
                showToast('error', responseData.message || 'Đăng ký thất bại. Vui lòng thử lại!');
            }
        } catch (error) {
            console.error('Lỗi khi đăng ký:', error);
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
                        <Text style={[style.title]}>Đăng ký</Text>

                        <View style={[{ marginTop: 5, }]}>
                            <Text style={[style.s14, { color: Colors.dis, }]}>Nhập số điện thoại và mật khẩu của bạn để đăng ký hoặc</Text>
                            <TouchableOpacity onPress={() => navigation.navigate('Login')} >
                                <Text style={[style.s14, { color: Colors.primary, }]}>Bạn đã có tài khoản?</Text>
                            </TouchableOpacity>
                        </View>

                        <View style={[style.txtinput, { marginTop: 40, }]}>
                            <TextInput
                                placeholder='Họ và tên'
                                placeholderTextColor={Colors.icon}
                                selectionColor={Colors.primary}
                                style={[style.s16, { color: Colors.txt, flex: 1 }]}
                                value={fullName}
                                onChangeText={setFullName}
                            />
                        </View>
                                                                                        
                        <View style={[style.txtinput, { marginTop: 20, }]}>
                            <TextInput
                                placeholder='Số điện thoại'
                                placeholderTextColor={Colors.icon}
                                selectionColor={Colors.primary}
                                style={[style.s16, { color: Colors.txt, flex: 1 }]}
                                value={phoneNumber}
                                onChangeText={setPhoneNumber}
                            />
                        </View>

                        <View style={[style.txtinput, { marginTop: 20, }]}>
                            <TextInput
                                placeholder='Email'
                                placeholderTextColor={Colors.icon}
                                selectionColor={Colors.primary}
                                style={[style.s16, { color: Colors.txt, flex: 1 }]}
                                value={email}
                                onChangeText={setEmail}
                            />
                        </View>

                        <View style={[style.txtinput, { marginTop: 20, }]}>
                            <TextInput
                                placeholder='Mật khẩu'
                                placeholderTextColor={Colors.icon}
                                selectionColor={Colors.primary}
                                secureTextEntry={!isPasswordVisible}
                                style={[style.s16, { color: Colors.txt, flex: 1 }]}
                                value={password}
                                onChangeText={setPassword}
                            />
                            <TouchableOpacity onPress={() => setIsPasswordVisible(!isPasswordVisible)}>
                                <Icon name={!isPasswordVisible ? 'eye-off-outline' : 'eye-outline'} color={Colors.dis} size={20} />
                            </TouchableOpacity>
                        </View>

                        <View style={[style.txtinput, { marginTop: 20, }]}>
                            <TextInput
                                placeholder='Nhập lại mật khẩu'
                                placeholderTextColor={Colors.icon}
                                selectionColor={Colors.primary}
                                secureTextEntry={!isPasswordVisible1}
                                style={[style.s16, { color: Colors.txt, flex: 1 }]}
                                value={confirmPassword}
                                onChangeText={setConfirmPassword}
                            />
                            <TouchableOpacity onPress={() => setIsPasswordVisible1(!isPasswordVisible1)}>
                                <Icon name={!isPasswordVisible1 ? 'eye-off-outline' : 'eye-outline'} color={Colors.dis} size={20} />
                            </TouchableOpacity>
                        </View>

                        <TouchableOpacity
                            onPress={register}
                            style={[style.btn, { marginTop: 60, height: 48 }]}
                        >
                            <Text style={style.btntxt}>Tạo tài khoản mới</Text>
                        </TouchableOpacity>
                    </ScrollView>
                </View>
            </KeyboardAvoidingView>
            {/* Toast Component */}
        <Toast />
        </SafeAreaView>
    );
}