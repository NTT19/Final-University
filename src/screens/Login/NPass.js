import { View, Dimensions, Text, SafeAreaView, TextInput, StatusBar, TouchableOpacity, Image, ScrollView, KeyboardAvoidingView, ImageBackground } from 'react-native'
import React, { useState, useContext } from 'react'
import style from '../../theme/style';
import { Colors } from '../../theme/color';
import { useNavigation } from '@react-navigation/native';
import { AppBar } from '@react-native-material/core';
import Icon from 'react-native-vector-icons/Ionicons';

export default function NPass() {
    const navigation = useNavigation();
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
    const [isPasswordVisible1, setIsPasswordVisible1] = useState(false);

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
                        leading={<TouchableOpacity onPress={() => navigation.navigate('Otp')} >
                            <Icon name='arrow-back' size={24} color={Colors.txt} />
                        </TouchableOpacity>}
                    />

                    <ScrollView showsVerticalScrollIndicator={false} style={{}}>

                        <Text style={[style.title]}>New Password</Text>
                        <Text style={[style.s14,{color:Colors.dis,marginTop:5}]}>Enter your new password</Text>              

                        <View style={[style.txtinput, { marginTop: 40, }]}>
                            <TextInput placeholder='Password' 
                                placeholderTextColor={Colors.icon}
                                selectionColor={Colors.primary}
                                secureTextEntry={!isPasswordVisible}
                                style={[style.s16, { color: Colors.txt, flex: 1 }]}
                            />
                            <TouchableOpacity onPress={() => setIsPasswordVisible(!isPasswordVisible)}>
                                <Icon name={!isPasswordVisible ? 'eye-off-outline' : 'eye-outline'} color={Colors.dis} size={20} />
                            </TouchableOpacity>
                        </View>

                        <View style={[style.txtinput, { marginTop: 20, }]}>
                            <TextInput placeholder='Confirm Password' 
                                placeholderTextColor={Colors.icon}
                                selectionColor={Colors.primary}
                                secureTextEntry={!isPasswordVisible1}
                                style={[style.s16, { color: Colors.txt, flex: 1 }]}
                            />
                            <TouchableOpacity onPress={() => setIsPasswordVisible1(!isPasswordVisible1)}>
                                <Icon name={!isPasswordVisible1 ? 'eye-off-outline' : 'eye-outline'} color={Colors.dis} size={20} />
                            </TouchableOpacity>
                        </View>

                        
                        <TouchableOpacity onPress={()=>navigation.navigate('Login')} 
                            style={[style.btn, { marginTop: 60 ,height:48,marginBottom:20}]}>
                            <Text style={style.btntxt}>Confirm</Text>
                        </TouchableOpacity>

                    </ScrollView>
                </View>
            </KeyboardAvoidingView>
        </SafeAreaView>
    )
}