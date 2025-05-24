import React, { useEffect, useState } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  ScrollView,
  KeyboardAvoidingView,
  TouchableOpacity,
  Platform,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import { AppBar } from '@react-native-material/core';
import Icon from 'react-native-vector-icons/Ionicons';
import style from '../../theme/style';
import { Colors } from '../../theme/color';

export default function MyInfo() {
  const navigation = useNavigation();

  const [userInfo, setUserInfo] = useState({
    email: '',
    fullName: '',
    password: '',
    phoneNumber: '',
  });

  useEffect(() => {
    const getUserData = async () => {
      try {
        const userStr = await AsyncStorage.getItem('userData');
        if (userStr) {
          const user = JSON.parse(userStr);
          setUserInfo({
            email: user.email || '',
            fullName: user.fullName || '',
            password: user.password || '',
            phoneNumber: user.phoneNumber || '',
          });
        }
      } catch (error) {
        console.log('Lỗi lấy dữ liệu user:', error);
      }
    };

    getUserData();
  }, []);

  return (
    <SafeAreaView style={[style.area, { backgroundColor: Colors.bg }]}>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : null}
      >
        <View style={[style.main, { marginTop: Platform.OS === 'ios' ? 10 : 10 }]}>
          <AppBar
            color={Colors.bg}
            elevation={0}
            centerTitle={true}
            title="My info"
            titleStyle={[style.subtitle]}
            leading={
              <TouchableOpacity onPress={() => navigation.goBack()}>
                <Icon name="arrow-back" size={24} color={Colors.txt} />
              </TouchableOpacity>
            }
          />

          <ScrollView showsVerticalScrollIndicator={false} style={{ padding: 16 }}>
            <Text style={[style.subtitle, { marginBottom: 10 }]}>Thông tin tài khoản</Text>

            <View style={{ marginBottom: 12 }}>
              <Text style={[style.s14, { color: Colors.dis }]}>Email:</Text>
              <Text style={[style.s16, { color: Colors.txt }]}>{userInfo.email}</Text>
            </View>

            <View style={{ marginBottom: 12 }}>
              <Text style={[style.s14, { color: Colors.dis }]}>Họ và tên:</Text>
              <Text style={[style.s16, { color: Colors.txt }]}>{userInfo.fullName}</Text>
            </View>

            <View style={{ marginBottom: 12 }}>
              <Text style={[style.s14, { color: Colors.dis }]}>Số điện thoại:</Text>
              <Text style={[style.s16, { color: Colors.txt }]}>{userInfo.phoneNumber}</Text>
            </View>

            <View style={{ marginBottom: 12 }}>
              <Text style={[style.s14, { color: Colors.dis }]}>Mật khẩu:</Text>
              <Text style={[style.s16, { color: Colors.txt }]}>
                {userInfo.password ? '********' : ''}
              </Text>
            </View>
          </ScrollView>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
