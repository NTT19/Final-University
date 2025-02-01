import { View, Dimensions, Text, SafeAreaView, TextInput, StatusBar, TouchableOpacity, Image, ScrollView, KeyboardAvoidingView, ImageBackground } from 'react-native'
import React, { useState, useContext } from 'react'
import style from '../../theme/style';
import { Colors } from '../../theme/color';
import { useNavigation } from '@react-navigation/native';
import { AppBar, HStack } from '@react-native-material/core';
import Icon from 'react-native-vector-icons/Ionicons';

const width = Dimensions.get('screen').width
const height = Dimensions.get('screen').height

export default function Intro2() {
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
                            <View style={{ height: 4, backgroundColor: Colors.primary, borderRadius: 5, width: width / 3.5 }}></View>
                        </View>}
                        leading={<TouchableOpacity onPress={() => navigation.navigate('Intro1')} >
                            <Icon name='arrow-back' size={24} color={Colors.txt} />
                        </TouchableOpacity>}
                    />

                    <View style={{ flex: 1, justifyContent: 'space-around' }}>

                        <Text style={[style.title]}>Rise & Shine</Text>

                        <Image source={require('../../../assets/image/s3.png')} resizeMode='stretch' style={{ height: height / 4, width: width / 1.8, alignSelf: 'center' }} />

                        <Text style={[style.title, { fontSize: 26, textAlign: 'center', }]}>Wait for your device to
fully turn on.</Text>

                        <Text style={[style.s14, { color: Colors.dis, textAlign: 'center' }]}>You’ll know when the device’s LED lights 
start pulsing white</Text>

                        <TouchableOpacity onPress={() => navigation.navigate('Intro3')} style={[style.btn, { marginBottom: 20 }]}>
                            <Text style={[style.btntxt]}>Next</Text>
                        </TouchableOpacity>

                    </View>

                </View>
            </KeyboardAvoidingView>
        </SafeAreaView>
    )
}