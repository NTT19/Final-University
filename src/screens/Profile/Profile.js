import { View, Dimensions, Text, SafeAreaView, TextInput, StatusBar, TouchableOpacity, Image, ScrollView, KeyboardAvoidingView, ImageBackground } from 'react-native'
import React, { useState, useContext } from 'react'
import style from '../../theme/style';
import { Colors } from '../../theme/color';
import { useNavigation } from '@react-navigation/native';
import { AppBar } from '@react-native-material/core';
import Icon from 'react-native-vector-icons/Ionicons';

const width = Dimensions.get('screen').width
const height = Dimensions.get('screen').height

export default function Profile() {
    const navigation = useNavigation();
    return (
        <SafeAreaView style={[style.area, { backgroundColor: Colors.bg }]}>
            <KeyboardAvoidingView style={{ flex: 1 }}
                behavior={Platform.OS === 'ios' ? 'padding' : null}
            >

                <View style={[style.main, { marginTop: Platform.OS === 'ios' ? 10 : 10, }]}>

                   <Text style={[style.apptitle,{}]}>Profile</Text>

                   <Image source={require('../../../assets/image/a14.png')} resizeMode='stretch' style={{height:100,width:95,alignSelf:'center',marginTop:20}}></Image>

                   <Text style={[style.subtitle,{textAlign:'center'}]}>Alice O’Donnell</Text>
                   <Text style={[style.s16,{textAlign:'center',color:Colors.icon}]}>UX Designer</Text>

                    <ScrollView showsVerticalScrollIndicator={false} style={{marginTop:30}}>

                        <TouchableOpacity onPress={() => navigation.navigate('MyInfo')} style={[style.box,style.list,style.shadow,{backgroundColor:Colors.bg,margin:5 ,marginTop:15}]}>
                            <View style={[style.icon,{height:34,width:34,}]}>
                                <Icon name='person-outline' size={18} color={Colors.primary}></Icon>
                            </View>
                            <View style={[style.verticaldivider,{marginHorizontal:15}]}></View>
                            <View style={{flex:1}}>
                                <Text style={[style.b16]}>My Info</Text>
                                <Text style={[style.s12,{color:Colors.icon,marginTop:3}]}>Personal info, payment method,...</Text>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => navigation.navigate('PayH')} style={[style.box,style.list,style.shadow,{backgroundColor:Colors.bg,margin:5 ,marginTop:15}]}>
                            <View style={[style.icon,{height:34,width:34,}]}>
                                <Icon name='phone-portrait-outline' size={18} color={Colors.primary}></Icon>
                            </View>
                            <View style={[style.verticaldivider,{marginHorizontal:15}]}></View>
                            <View style={{flex:1}}>
                                <Text style={[style.b16]}>Payment History</Text>
                                <Text style={[style.s12,{color:Colors.icon,marginTop:3}]}>Record of your monthly payment</Text>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => navigation.navigate('MyOrder')} style={[style.box,style.list,style.shadow,{backgroundColor:Colors.bg,margin:5 ,marginTop:15,marginBottom:20}]}>
                            <View style={[style.icon,{height:34,width:34,}]}>
                                <Icon name='cart-outline' size={18} color={Colors.primary}></Icon>
                            </View>
                            <View style={[style.verticaldivider,{marginHorizontal:15}]}></View>
                            <View style={{flex:1}}>
                                <Text style={[style.b16]}>My Orders</Text>
                                <Text style={[style.s12,{color:Colors.icon,marginTop:3}]}>See what you have ordered </Text>
                            </View>
                        </TouchableOpacity>

                    </ScrollView>
                </View>
            </KeyboardAvoidingView>
        </SafeAreaView>
    )
}