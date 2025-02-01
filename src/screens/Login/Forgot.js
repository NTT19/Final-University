import { View, Dimensions, Text, SafeAreaView, TextInput, StatusBar, TouchableOpacity, Image, ScrollView, KeyboardAvoidingView, ImageBackground } from 'react-native'
import React, { useState, useContext } from 'react'
import style from '../../theme/style';
import { Colors } from '../../theme/color';
import { useNavigation } from '@react-navigation/native';
import { AppBar } from '@react-native-material/core';
import Icon from 'react-native-vector-icons/Ionicons';

export default function Forgot() {
    const navigation = useNavigation();

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
                        leading={<TouchableOpacity onPress={() => navigation.navigate('Login')} >
                            <Icon name='arrow-back' size={24} color={Colors.txt} />
                        </TouchableOpacity>}
                    />

                    <ScrollView showsVerticalScrollIndicator={false} style={{}}>

                        <Text style={[style.title]}>Recovery</Text>
                        <Text style={[style.s14,{color:Colors.dis,marginTop:5}]}>Enter email to receive recovery code</Text>

                        <View style={[style.txtinput, { marginTop: 40, }]}>
                            <TextInput placeholder='Email' 
                                placeholderTextColor={Colors.icon}
                                selectionColor={Colors.primary}
                                style={[style.s16, { color: Colors.txt, flex:1}]}
                            />
                        </View>

                        <Text style={[style.s14,{marginTop:80,textAlign:'center'}]}>Make sure you already comfirmed your emaill. By pressing button below, you’ll get an email with recovery code. Input this code on the next page to reset your password</Text>
                        
                        <TouchableOpacity onPress={()=>navigation.navigate('Otp')} 
                            style={[style.btn, { marginTop: 30 ,height:48,marginBottom:20}]}>
                            <Text style={style.btntxt}>Get the code</Text>
                        </TouchableOpacity>

                    </ScrollView>
                </View>
            </KeyboardAvoidingView>
        </SafeAreaView>
    )
}