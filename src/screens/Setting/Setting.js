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

                    <Text style={[style.apptitle, {}]}>Cài đặt</Text>

                    <View style={[style.inputcontainer, { marginTop: 15, height: 42 }]}>
                        <Icon name='search' size={20} color={Colors.txt}></Icon>
                        <TextInput placeholder='Tìm kiếm'
                            placeholderTextColor={Colors.icon}
                            selectionColor={Colors.primary}
                            style={[style.m14, { color: Colors.txt, flex: 1, marginLeft: 5 }]}
                        />
                    </View>

                    <ScrollView showsVerticalScrollIndicator={false} style={{ marginTop: 20 }}>

                        <Text style={[style.subtitle]}>Cài đặt ứng dụng</Text>

                        <TouchableOpacity /*onPress={() => navigation.navigate('Wifi')} */ style={[style.box,style.list,style.shadow,{backgroundColor:Colors.bg,margin:5 ,marginTop:15}]}>
                            <View style={[style.icon,{height:34,width:34,}]}>
                                <Icon name='wifi' size={18} color={Colors.primary}></Icon>
                            </View>
                            <View style={[style.verticaldivider,{marginHorizontal:15}]}></View>
                            <View style={{flex:1}}>
                                <Text style={[style.b16]}>Wifi & Ứng dụng</Text>
                                <Text style={[style.s12,{color:Colors.icon,marginTop:3}]}>Cài đặt Wifi và ứng dụng</Text>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity  /* onPress={() => navigation.navigate('Notify')} */ style={[style.box,style.list,style.shadow,{backgroundColor:Colors.bg,margin:5 ,marginTop:15}]}>
                            <View style={[style.icon,{height:34,width:34,}]}>
                                <Icon name='notifications-outline' size={18} color={Colors.primary}></Icon>
                            </View>
                            <View style={[style.verticaldivider,{marginHorizontal:15}]}></View>
                            <View style={{flex:1}}>
                                <Text style={[style.b16]}>Thông báo</Text>
                                <Text style={[style.s12,{color:Colors.icon,marginTop:3}]}>Thông báo & nhắn tin trong ứng dụng</Text>
                            </View>
                        </TouchableOpacity>

                        <Text style={[style.subtitle,{marginTop:20}]}>Tài khoản & Hỗ trợ</Text>

                        <TouchableOpacity /* onPress={() => navigation.navigate('Account')} */ style={[style.box,style.list,style.shadow,{backgroundColor:Colors.bg,margin:5 ,marginTop:15}]}>
                            <View style={[style.icon,{height:34,width:34,}]}>
                                <Icon name='person-outline' size={18} color={Colors.primary}></Icon>
                            </View>
                            <View style={[style.verticaldivider,{marginHorizontal:15}]}></View>
                            <View style={{flex:1}}>
                                <Text style={[style.b16]}>Tài khoản</Text>
                                <Text style={[style.s12,{color:Colors.icon,marginTop:3}]}>Cài đặt tài khoản và quyền riêng tư</Text>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity style={[style.box,style.list,style.shadow,{backgroundColor:Colors.bg,margin:5 ,marginTop:15,marginBottom:20}]}>
                            <View style={[style.icon,{height:34,width:34,}]}>
                                <Icon name='headset-outline' size={18} color={Colors.primary}></Icon>
                            </View>
                            <View style={[style.verticaldivider,{marginHorizontal:15}]}></View>
                            <View style={{flex:1}}>
                                <Text style={[style.b16]}>Liên hệ với chúng tôi</Text>
                                <Text style={[style.s12,{color:Colors.icon,marginTop:3}]}>Hỏi bất cứ điều gì về sản phẩm</Text>
                            </View>
                        </TouchableOpacity>

                    </ScrollView>
                </View>
            </KeyboardAvoidingView>
        </SafeAreaView>
    )
}