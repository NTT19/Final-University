import { View, Dimensions, Text, SafeAreaView, TextInput, StatusBar, TouchableOpacity, Image, ScrollView, KeyboardAvoidingView, ImageBackground } from 'react-native'
import React, { useState, useContext } from 'react'
import style from '../../theme/style';
import { Colors } from '../../theme/color';
import { useNavigation } from '@react-navigation/native';
import { AppBar } from '@react-native-material/core';
import Icon from 'react-native-vector-icons/Ionicons';

const width = Dimensions.get('screen').width
const height = Dimensions.get('screen').height

export default function Setting() {
    const navigation = useNavigation();

    return (
        <SafeAreaView style={[style.area, { backgroundColor: Colors.bg }]}>
            <KeyboardAvoidingView style={{ flex: 1 }}
                behavior={Platform.OS === 'ios' ? 'padding' : null}
            >

                <View style={[style.main, { marginTop: Platform.OS === 'ios' ? 10 : 10, }]}>

                    <Text style={[style.apptitle, {}]}>Settings</Text>

                    <View style={[style.inputcontainer, { marginTop: 15, height: 42 }]}>
                        <Icon name='search' size={20} color={Colors.txt}></Icon>
                        <TextInput placeholder='Search in Settings'
                            placeholderTextColor={Colors.icon}
                            selectionColor={Colors.primary}
                            style={[style.m14, { color: Colors.txt, flex: 1, marginLeft: 5 }]}
                        />
                    </View>

                    <ScrollView showsVerticalScrollIndicator={false} style={{ marginTop: 20 }}>

                        <Text style={[style.subtitle]}>App Settings</Text>

                        <TouchableOpacity onPress={() => navigation.navigate('Wifi')} style={[style.box,style.list,style.shadow,{backgroundColor:Colors.bg,margin:5 ,marginTop:15}]}>
                            <View style={[style.icon,{height:34,width:34,}]}>
                                <Icon name='wifi' size={18} color={Colors.primary}></Icon>
                            </View>
                            <View style={[style.verticaldivider,{marginHorizontal:15}]}></View>
                            <View style={{flex:1}}>
                                <Text style={[style.b16]}>Wifi & App</Text>
                                <Text style={[style.s12,{color:Colors.icon,marginTop:3}]}>Wifi & app settings</Text>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => navigation.navigate('Notify')} style={[style.box,style.list,style.shadow,{backgroundColor:Colors.bg,margin:5 ,marginTop:15}]}>
                            <View style={[style.icon,{height:34,width:34,}]}>
                                <Icon name='notifications-outline' size={18} color={Colors.primary}></Icon>
                            </View>
                            <View style={[style.verticaldivider,{marginHorizontal:15}]}></View>
                            <View style={{flex:1}}>
                                <Text style={[style.b16]}>Notifications</Text>
                                <Text style={[style.s12,{color:Colors.icon,marginTop:3}]}>Notification & in-app messaging</Text>
                            </View>
                        </TouchableOpacity>

                        <Text style={[style.subtitle,{marginTop:20}]}>Account & Support</Text>

                        <TouchableOpacity onPress={() => navigation.navigate('Account')} style={[style.box,style.list,style.shadow,{backgroundColor:Colors.bg,margin:5 ,marginTop:15}]}>
                            <View style={[style.icon,{height:34,width:34,}]}>
                                <Icon name='person-outline' size={18} color={Colors.primary}></Icon>
                            </View>
                            <View style={[style.verticaldivider,{marginHorizontal:15}]}></View>
                            <View style={{flex:1}}>
                                <Text style={[style.b16]}>Account</Text>
                                <Text style={[style.s12,{color:Colors.icon,marginTop:3}]}>Account &  privacy settings</Text>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity style={[style.box,style.list,style.shadow,{backgroundColor:Colors.bg,margin:5 ,marginTop:15,marginBottom:20}]}>
                            <View style={[style.icon,{height:34,width:34,}]}>
                                <Icon name='headset-outline' size={18} color={Colors.primary}></Icon>
                            </View>
                            <View style={[style.verticaldivider,{marginHorizontal:15}]}></View>
                            <View style={{flex:1}}>
                                <Text style={[style.b16]}>Contact Us</Text>
                                <Text style={[style.s12,{color:Colors.icon,marginTop:3}]}>Ask anything about product</Text>
                            </View>
                        </TouchableOpacity>

                    </ScrollView>
                </View>
            </KeyboardAvoidingView>
        </SafeAreaView>
    )
}