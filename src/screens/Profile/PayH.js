import { View, Dimensions, Text, SafeAreaView, TextInput, StatusBar, TouchableOpacity, Image, ScrollView, KeyboardAvoidingView, ImageBackground } from 'react-native'
import React, { useState, useContext } from 'react'
import style from '../../theme/style';
import { Colors } from '../../theme/color';
import { useNavigation } from '@react-navigation/native';
import { AppBar } from '@react-native-material/core';
import Icon from 'react-native-vector-icons/Ionicons';

const width = Dimensions.get('screen').width
const height = Dimensions.get('screen').height

export default function PayH() {
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
                        title='Payment History'
                        titleStyle={[style.subtitle, {}]}
                        leading={<TouchableOpacity onPress={() => navigation.navigate('MyTabs')} >
                            <Icon name='arrow-back' size={24} color={Colors.txt} />
                        </TouchableOpacity>}
                    />
                    <View style={[style.inputcontainer, { marginTop: 10, height:42}]}>
                        <Icon name='search' size={20} color={Colors.txt}></Icon>
                        <TextInput placeholder='Card name or card number, date, ...'
                            placeholderTextColor={Colors.icon}
                            selectionColor={Colors.primary}
                            style={[style.m14, { color: Colors.txt, flex: 1 ,marginLeft:5}]}
                        />
                    </View>
                    <ScrollView showsVerticalScrollIndicator={false} style={{}}>

                        <View style={[style.list1,{marginTop:20}]}>
                            <Text style={[style.subtitle,{}]}>History</Text>
                            <Text style={[style.s16,{color:Colors.primary}]}>Filter</Text>
                        </View>

                        <View style={[style.box2,style.shadow,style.list,{backgroundColor:Colors.bg,margin:5,marginTop:15}]}>
                            <View style={[style.icon2,{}]}>
                                <Image source={require('../../../assets/image/a12.png')} resizeMode='stretch' style={{height:10,width:36}}></Image>
                            </View>
                            <View style={{flex:1,marginLeft:12}}>
                                <Text style={[style.s12,{color:Colors.icon}]}>28 SEP 2019</Text>
                                <Text style={[style.s16,{marginTop:2}]}>Visa Debit</Text>
                            </View>
                            <Text style={[style.b18,{}]}>$ 20</Text>
                        </View>

                        <View style={[style.box2,style.shadow,style.list,{backgroundColor:Colors.bg,margin:5,marginTop:15}]}>
                            <View style={[style.icon2,{}]}>
                                <Image source={require('../../../assets/image/a13.png')} resizeMode='stretch' style={{height:21,width:32}}></Image>
                            </View>
                            <View style={{flex:1,marginLeft:12}}>
                                <Text style={[style.s12,{color:Colors.icon}]}>28 SEP 2019</Text>
                                <Text style={[style.s16,{marginTop:2}]}>Master Card</Text>
                            </View>
                            <Text style={[style.b18,{}]}>$ 24</Text>
                        </View>

                        <View style={[style.box2,style.shadow,style.list,{backgroundColor:Colors.bg,margin:5,marginTop:15}]}>
                            <View style={[style.icon2,{}]}>
                                <Image source={require('../../../assets/image/a13.png')} resizeMode='stretch' style={{height:21,width:32}}></Image>
                            </View>
                            <View style={{flex:1,marginLeft:12}}>
                                <Text style={[style.s12,{color:Colors.icon}]}>28 SEP 2019</Text>
                                <Text style={[style.s16,{marginTop:2}]}>Master Card</Text>
                            </View>
                            <Text style={[style.b18,{}]}>$ 24</Text>
                        </View>

                        <View style={[style.box2,style.shadow,style.list,{backgroundColor:Colors.bg,margin:5,marginTop:15}]}>
                            <View style={[style.icon2,{}]}>
                                <Image source={require('../../../assets/image/a12.png')} resizeMode='stretch' style={{height:10,width:36}}></Image>
                            </View>
                            <View style={{flex:1,marginLeft:12}}>
                                <Text style={[style.s12,{color:Colors.icon}]}>28 SEP 2019</Text>
                                <Text style={[style.s16,{marginTop:2}]}>Visa Debit</Text>
                            </View>
                            <Text style={[style.b18,{}]}>$ 20</Text>
                        </View>

                        <View style={[style.box2,style.shadow,style.list,{backgroundColor:Colors.bg,margin:5,marginTop:15,marginBottom:20}]}>
                            <View style={[style.icon2,{}]}>
                                <Image source={require('../../../assets/image/a12.png')} resizeMode='stretch' style={{height:10,width:36}}></Image>
                            </View>
                            <View style={{flex:1,marginLeft:12}}>
                                <Text style={[style.s12,{color:Colors.icon}]}>28 SEP 2019</Text>
                                <Text style={[style.s16,{marginTop:2}]}>Visa Debit</Text>
                            </View>
                            <Text style={[style.b18,{}]}>$ 20</Text>
                        </View>

                    </ScrollView>
                </View>
            </KeyboardAvoidingView>
        </SafeAreaView>
    )
}