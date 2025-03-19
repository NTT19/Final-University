import { View, Dimensions, Text, SafeAreaView, TextInput, StatusBar, TouchableOpacity, Image, ScrollView, KeyboardAvoidingView, ImageBackground } from 'react-native'
import React, { useState, useContext } from 'react'
import style from '../../theme/style';
import { Colors } from '../../theme/color';
import { useNavigation } from '@react-navigation/native';
import { AppBar, HStack } from '@react-native-material/core';
import Icon from 'react-native-vector-icons/Ionicons';
import OtpInputs from 'react-native-otp-inputs'
import Clipboard from '@react-native-clipboard/clipboard'

const width = Dimensions.get('screen').width
const height = Dimensions.get('screen').height

export default function Otp() {
    const navigation = useNavigation();
    return (
        <SafeAreaView style={[style.area, {}]}>
            <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === 'ios' ? 'padding' : null} >
                <View style={[style.main, { marginTop: 10, }]}>

                    <AppBar
                        elevation={0}
                        color={Colors.bg}
                        leading={<TouchableOpacity onPress={() => navigation.navigate('Forgot')} >
                            <Icon name='arrow-back' size={24} color={Colors.txt} />
                        </TouchableOpacity>}
                    />

                    <ScrollView showsVerticalScrollIndicator={false} style={{ marginTop: 15 }}>

                        <Text style={[style.title]}>Khôi phục tài khoản</Text>

                        <Text style={[style.s14, { color: Colors.dis, marginTop: 5 }]}>Nhập mã khôi phục chúng tôi đã gửi cho bạn</Text>

                        <OtpInputs
                            Clipboard={Clipboard}
                            numberOfInputs={4}
                            selectionColor={Colors.primary}
                            style={{ flexDirection: 'row', justifyContent: 'space-evenly', }}
                            inputStyles={{
                                marginTop: 30,
                                marginBottom: 20,
                                textAlign: 'center',
                                height: 50,
                                width: 48,
                                borderBottomWidth:2,
                                borderBottomColor:Colors.dis,
                                fontSize: 20,
                                color: Colors.txt,
                                fontFamily: 'Nunito-Bold',
                            }}
                        />

                    </ScrollView>

                    <TouchableOpacity onPress={() => navigation.navigate('NPass')} style={[style.btn, { marginVertical: 20 }]}>
                            <Text style={[style.btntxt]}>Tiếp tục</Text>
                        </TouchableOpacity>

                </View>
            </KeyboardAvoidingView>
        </SafeAreaView>
    )
}