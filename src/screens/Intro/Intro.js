import { View, Dimensions, Text, SafeAreaView, TextInput, StatusBar, TouchableOpacity, Image, ScrollView, KeyboardAvoidingView, ImageBackground } from 'react-native'
import React, { useState, useContext } from 'react'
import style from '../../theme/style';
import { Colors } from '../../theme/color';
import { useNavigation } from '@react-navigation/native';
import { AppBar, HStack } from '@react-native-material/core';
import Icon from 'react-native-vector-icons/Ionicons';

const width = Dimensions.get('screen').width
const height = Dimensions.get('screen').height

export default function Intro() {
    const navigation = useNavigation();
    return (
        <SafeAreaView style={[style.area, {}]}>
            <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === 'ios' ? 'padding' : null} >
                <View style={[style.main, { marginTop: 10, }]}>

                    <AppBar
                        elevation={0}
                        color={Colors.bg}
                        centerTitle={true}
                        title={<View style={{ height: 4, backgroundColor: Colors.lines1, borderRadius: 5, width: width / 1.5 }}>
                            <View style={{ height: 4, backgroundColor: Colors.primary, borderRadius: 5, width: width / 5 }}></View>
                        </View>}
                        leading={<View></View>}
                    />

                    <View style={{ flex: 1, justifyContent: 'space-around' }}>

                        <Text style={[style.title]}>Xin chào!</Text>

                        <Image source={require('../../../assets/image/s1.png')} resizeMode='stretch' style={{ height: height / 4, width: width / 1.5, alignSelf: 'center' }} />

                        <Text style={[style.title, { fontSize: 26, textAlign: 'center', }]}>Hãy cùng thiết lập khu vườn thông minh mới của bạn</Text>

                        <Text style={[style.s14, { color: Colors.dis, textAlign: 'center' }]}>Hãy đảm bảo kết nối Wifi luôn sẵn sàng.</Text>

                        <TouchableOpacity onPress={() => navigation.navigate('Intro1')} style={[style.btn, { marginBottom: 20 }]}>
                            <Text style={[style.btntxt]}>Tiếp tục</Text>
                        </TouchableOpacity>

                    </View>

                </View>
            </KeyboardAvoidingView>
        </SafeAreaView>
    )
}