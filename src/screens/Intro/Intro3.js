import { View, Dimensions, Text, SafeAreaView, TextInput, StatusBar, TouchableOpacity, Image, ScrollView, KeyboardAvoidingView, ImageBackground } from 'react-native'
import React, { useState, useContext } from 'react'
import style from '../../theme/style';
import { Colors } from '../../theme/color';
import { useNavigation } from '@react-navigation/native';
import { AppBar, HStack } from '@react-native-material/core';
import Icon from 'react-native-vector-icons/Ionicons';

const width = Dimensions.get('screen').width
const height = Dimensions.get('screen').height

export default function Intro3() {
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
                            <View style={{ height: 4, backgroundColor: Colors.primary, borderRadius: 5, width: width / 3 }}></View>
                        </View>}
                        leading={<TouchableOpacity onPress={() => navigation.navigate('Intro2')} >
                            <Icon name='arrow-back' size={24} color={Colors.txt} />
                        </TouchableOpacity>}
                    />

                    <View style={{ flex: 1, justifyContent: 'space-around' }}>

                        <Text style={[style.title]}>WiFi Paring</Text>

                        <Image source={require('../../../assets/image/s4.png')} resizeMode='stretch' style={{ height: height / 4, width: width / 1.8, alignSelf: 'center' }} />

                        <Text style={[style.title, { fontSize: 26, textAlign: 'center', }]}>Connect to a Network</Text>

                        <Text style={[style.s14, { color: Colors.dis, textAlign: 'center' }]}>Next, we’ll need to connect your device to the
                            internet so we can update its firmware and active its smart garden features.</Text>

                        <TouchableOpacity onPress={() => navigation.navigate('Intro4')} style={[style.btn, { marginBottom: 20 }]}>
                            <Text style={[style.btntxt]}>Next</Text>
                        </TouchableOpacity>

                    </View>

                </View>
            </KeyboardAvoidingView>
        </SafeAreaView>
    )
}