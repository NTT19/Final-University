import { View, Dimensions, Text, SafeAreaView, TextInput, StatusBar, TouchableOpacity, Image, ScrollView, KeyboardAvoidingView, ImageBackground } from 'react-native'
import React, { useState, useContext } from 'react'
import style from '../../theme/style';
import { Colors } from '../../theme/color';
import { useNavigation } from '@react-navigation/native';
import { AppBar, HStack } from '@react-native-material/core';
import Icon from 'react-native-vector-icons/Ionicons';

const width = Dimensions.get('screen').width
const height = Dimensions.get('screen').height

export default function Hello() {
    const navigation = useNavigation();
    return (
        <SafeAreaView style={[style.area, {}]}>
            <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === 'ios' ? 'padding' : null} >
                <View style={[style.main, { marginTop: 10, }]}>

                    <Image source={require('../../../assets/image/Logo.png')} resizeMode='stretch' style={{ height: 120, width: 120, marginTop: 20 }} />

                    <Text style={[style.s42, { marginTop: 10 }]}>Everyone should live with a little more green</Text>

                    <View style={{ flex: 1, justifyContent: 'flex-end' }}>

                        <TouchableOpacity onPress={()=>navigation.navigate('Login')} style={[style.btn, { marginTop: 20 }]}>
                            <Text style={[style.btntxt]}>Sign in</Text>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={()=>navigation.navigate('Signup')} style={[style.btno, { marginVertical: 15 ,marginBottom:20}]}>
                            <Text style={[style.s18, { color: Colors.primary }]}>Create new account</Text>
                        </TouchableOpacity>

                    </View>


                </View>
            </KeyboardAvoidingView>
        </SafeAreaView>
    )
}