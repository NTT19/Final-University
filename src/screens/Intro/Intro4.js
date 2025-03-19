import { View, Dimensions, Text, SafeAreaView, TextInput, StatusBar, TouchableOpacity, Image, ScrollView, KeyboardAvoidingView, ImageBackground } from 'react-native'
import React, { useState, useContext } from 'react'
import style from '../../theme/style';
import { Colors } from '../../theme/color';
import { useNavigation } from '@react-navigation/native';
import { AppBar, HStack } from '@react-native-material/core';
import Icon from 'react-native-vector-icons/Ionicons';

const width = Dimensions.get('screen').width
const height = Dimensions.get('screen').height

export default function Intro4() {
    const navigation = useNavigation();
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
    return (
        <SafeAreaView style={[style.area, {}]}>
            <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === 'ios' ? 'padding' : null} >
                <View style={[style.main, { marginTop: 10, }]}>

                    <AppBar
                        elevation={0}
                        color={Colors.bg}
                        centerTitle={true}
                        title={<View style={{ height: 4, backgroundColor: Colors.lines1, borderRadius: 5, width: width / 1.5 }}>
                            <View style={{ height: 4, backgroundColor: Colors.primary, borderRadius: 5, width: width / 2 }}></View>
                        </View>}
                        leading={<TouchableOpacity onPress={() => navigation.navigate('Intro3')} >
                            <Icon name='arrow-back' size={24} color={Colors.txt} />
                        </TouchableOpacity>}
                    />

                    <ScrollView showsVerticalScrollIndicator={false} style={{ marginTop: 15 }}>

                        <Text style={[style.title]}>Kết nối Wifi</Text>
                        <Text style={[style.s14, { color: Colors.dis }]}>Vui lòng nhập thông tin chi tiết cho mạng Wifi của bạn</Text>
                        <View style={[style.txtinput, { marginTop: 20, }]}>
                            <TextInput placeholder='Tên Wifi'
                                placeholderTextColor={Colors.icon}
                                selectionColor={Colors.primary}
                                style={[style.s16, { color: Colors.txt, flex: 1 }]}
                            />
                        </View>

                        <View style={[style.txtinput, { marginTop: 20, }]}>
                            <TextInput placeholder='Mật khẩu'
                                placeholderTextColor={Colors.icon}
                                selectionColor={Colors.primary}
                                secureTextEntry={!isPasswordVisible}
                                style={[style.s16, { color: Colors.txt, flex: 1 }]}
                            />
                            <TouchableOpacity onPress={() => setIsPasswordVisible(!isPasswordVisible)}>
                                <Icon name={!isPasswordVisible ? 'eye-off-outline' : 'eye-outline'} color={Colors.dis} size={20} />
                            </TouchableOpacity>
                        </View>

                        <View style={[style.txtinput, { marginTop: 20, marginBottom: 15 }]}>
                            <TextInput placeholder='Loại bảo bật'
                                placeholderTextColor={Colors.icon}
                                selectionColor={Colors.primary}
                                style={[style.s16, { color: Colors.txt, flex: 1 }]}
                            />
                            <Icon name='chevron-down' size={24} color={Colors.txt} />
                        </View>

                    </ScrollView>

                    <TouchableOpacity onPress={() => navigation.navigate('Intro5')} style={[style.btn, { marginBottom: 20 }]}>
                        <Text style={[style.btntxt]}>Tiếp tục</Text>
                    </TouchableOpacity>

                </View>
            </KeyboardAvoidingView>
        </SafeAreaView>
    )
}