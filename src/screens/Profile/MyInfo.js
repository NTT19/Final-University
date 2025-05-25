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
  
 const renderInfoCard = (iconName, label, value) => (
    <View
      style={{
        backgroundColor: '#fff',
        borderRadius: 12,
        padding: 20,
        marginBottom: 15,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: 10,
        shadowOffset: { width: 0, height: 4 },
        elevation: 5,
        flexDirection: 'row',
        alignItems: 'center',
      }}
    >
      <Icon name={iconName} size={28} color={Colors.primary} />
      <View style={{ marginLeft: 16, flex: 1 }}>
        <Text style={{ color: Colors.dis, fontSize: 14, marginBottom: 4 }}>{label}</Text>
        <Text style={{ fontSize: 16, color: Colors.txt }}>{value}</Text>
      </View>
    </View>
  );

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
            title="Thông tin cá nhân"
            titleStyle={[style.subtitle, { fontWeight: '700', fontSize: 22 }]}
            leading={
              <TouchableOpacity onPress={() => navigation.goBack()} style={{ padding: 8 }}>
                <Icon name="arrow-back" size={28} color={Colors.txt} />
              </TouchableOpacity>
            }
          />

          <ScrollView
            showsVerticalScrollIndicator={false}
            style={{ paddingHorizontal: 20, marginTop: 12 }}
            contentContainerStyle={{ paddingBottom: 30 }}
          >
            {/* Header greeting */}
            <Text
              style={{
                fontSize: 20,
                fontWeight: '600',
                marginBottom: 20,
                color: Colors.txt,
                textAlign: 'center',
              }}
            >
              Xin chào, {userInfo.fullName || 'Người dùng'}
            </Text>

            {renderInfoCard('mail-outline', 'Email', userInfo.email)}
            {renderInfoCard('person-outline', 'Họ và tên', userInfo.fullName)}
            {renderInfoCard('call-outline', 'Số điện thoại', userInfo.phoneNumber)}
            {renderInfoCard(
              'lock-closed-outline',
              'Mật khẩu',
              userInfo.password ? '********' : ''
            )}
          </ScrollView>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}