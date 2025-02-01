import { View, Dimensions, Text, SafeAreaView, TextInput, StatusBar, TouchableOpacity, Image, ScrollView, KeyboardAvoidingView, ImageBackground } from 'react-native'
import React, { useState, useContext } from 'react'
import style from '../../theme/style';
import { Colors } from '../../theme/color';
import { useNavigation } from '@react-navigation/native';
import { AppBar } from '@react-native-material/core';
import Icon from 'react-native-vector-icons/Ionicons';

const width = Dimensions.get('screen').width
const height = Dimensions.get('screen').height

export default function MyInfo() {
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
                        title='My info'
                        titleStyle={[style.subtitle, {}]}
                        leading={<TouchableOpacity onPress={() => navigation.navigate('MyTabs')} >
                            <Icon name='arrow-back' size={24} color={Colors.txt} />
                        </TouchableOpacity>}
                    />

                    <ScrollView showsVerticalScrollIndicator={false} style={{}}>

                        <Text style={[style.subtitle, { marginTop: 5 }]}>About Me</Text>

                        <View style={[style.list, { marginTop: 10 }]}>
                            <View style={{ flex: 1 }}>
                                <View style={[style.txtinput, {}]}>
                                    <TextInput placeholder='First Name'
                                        placeholderTextColor={Colors.icon}
                                        selectionColor={Colors.primary}
                                        style={[style.s16, { color: Colors.txt, flex: 1, marginLeft: 5 }]}
                                    />
                                </View>
                            </View>
                            <View style={{ flex: 1, marginLeft: 15 }}>
                                <View style={[style.txtinput, {}]}>
                                    <TextInput placeholder='Last Name'
                                        placeholderTextColor={Colors.icon}
                                        selectionColor={Colors.primary}
                                        style={[style.s16, { color: Colors.txt, flex: 1, marginLeft: 5 }]}
                                    />
                                </View>
                            </View>
                        </View>

                        <View style={[style.txtinput, { marginTop: 15 }]}>
                            <TextInput placeholder='Email'
                                placeholderTextColor={Colors.icon}
                                selectionColor={Colors.primary}
                                style={[style.s16, { color: Colors.txt, flex: 1, marginLeft: 5 }]}
                            />
                        </View>

                        <View style={[style.list, { marginTop: 15 }]}>
                            <View style={{ flex: 0.5 }}>
                                <View style={[style.txtinput, {}]}>
                                    <TextInput placeholder='Gender'
                                        placeholderTextColor={Colors.icon}
                                        selectionColor={Colors.primary}
                                        style={[style.s16, { color: Colors.txt, flex: 1, marginLeft: 5 }]}
                                    />
                                </View>
                            </View>
                            <View style={{ flex: 1, marginLeft: 15 }}>
                                <View style={[style.txtinput, {}]}>
                                    <TextInput placeholder='Phone Number'
                                        placeholderTextColor={Colors.icon}
                                        selectionColor={Colors.primary}
                                        style={[style.s16, { color: Colors.txt, flex: 1, marginLeft: 5 }]}
                                    />
                                </View>
                            </View>
                        </View>

                        <View style={[style.list, { marginTop: 25 }]}>
                            <Text style={[style.subtitle, { flex: 1 }]}>Address</Text>
                            <View style={[style.list, {}]}>
                                <Icon name='add' size={22} color={Colors.primary}></Icon>
                                <Text style={[style.s16, { color: Colors.primary, marginLeft: 5 }]}>New Address</Text>
                            </View>
                        </View>

                        <View style={[style.list, { marginTop: 20 }]}>
                            <Icon name='location-outline' size={22} color={Colors.primary}></Icon>
                            <View style={{ flex: 1, marginLeft: 15 }}>
                                <Text style={[style.s16]}>222 Cullingworth Mills Yard</Text>
                                <Text style={[style.s12, { color: Colors.icon, marginTop: 2 }]}>222 Cullingworth, North Bridge, Halifax</Text>
                            </View>
                        </View>
                        <View style={[style.divider, { marginVertical: 15 }]}></View>
                        <View style={[style.list, {}]}>
                            <Icon name='location-outline' size={22} color={Colors.primary}></Icon>
                            <View style={{ flex: 1, marginLeft: 15 }}>
                                <Text style={[style.s16]}>31 Canterbury Road</Text>
                                <Text style={[style.s12, { color: Colors.icon, marginTop: 2 }]}>31 Canterbury Road, Valley Field</Text>
                            </View>
                        </View>

                        <View style={[style.list, { marginTop: 25 }]}>
                            <Text style={[style.subtitle, { flex: 1 }]}>Payment</Text>
                            <TouchableOpacity  style={[style.list, {}]}>
                                <Icon name='add' size={22} color={Colors.primary}></Icon>
                                <Text style={[style.s16, { color: Colors.primary, marginLeft: 5 }]}>NewCard</Text>
                            </TouchableOpacity>
                        </View>

                        <View style={[style.list, { marginTop: 20 }]}>
                            <View style={[style.icon2, {}]}>
                                <Image source={require('../../../assets/image/a12.png')} resizeMode='stretch' style={{ height: 10, width: 36 }}></Image>
                            </View>
                            <View style={{ flex: 1, marginLeft: 15 }}>
                                <Text style={[style.s16]}>Visa Debit</Text>
                                <Text style={[style.s14, { color: Colors.dis }]}>xxxx xxxx xxxx 2444</Text>
                                <Text style={[style.s14, { color: Colors.icon, marginTop: 2 }]}>Expiry: 09/20</Text>
                            </View>
                            <Text style={[style.s14, { color: Colors.dis }]}>CVV:328</Text>
                        </View>
                        <View style={[style.divider, { marginVertical: 15 }]}></View>
                        <View style={[style.list, {marginBottom:20 }]}>
                            <View style={[style.icon2, {}]}>
                                <Image source={require('../../../assets/image/a13.png')} resizeMode='stretch' style={{height:21,width:32}}></Image>
                            </View>
                            <View style={{ flex: 1, marginLeft: 15 }}>
                                <Text style={[style.s16]}>Master Card</Text>
                                <Text style={[style.s14, { color: Colors.dis }]}>xxxx xxxx xxxx 8080</Text>
                                <Text style={[style.s14, { color: Colors.icon, marginTop: 2 }]}>Expiry: 09/20</Text>
                            </View>
                            <Text style={[style.s14, { color: Colors.dis }]}>CVV:432</Text>
                        </View>

                    </ScrollView>
                </View>
            </KeyboardAvoidingView>
        </SafeAreaView>
    )
}