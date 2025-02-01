import { View, Dimensions, Text, SafeAreaView, Modal, Switch, TextInput, StatusBar, TouchableOpacity, Image, ScrollView, KeyboardAvoidingView, ImageBackground } from 'react-native'
import React, { useState, useContext } from 'react'
import style from '../../theme/style';
import { Colors } from '../../theme/color';
import { useNavigation } from '@react-navigation/native';
import { AppBar, HStack } from '@react-native-material/core';
import Icon from 'react-native-vector-icons/Ionicons';

const width = Dimensions.get('screen').width
const height = Dimensions.get('screen').height

export default function MyCart() {
    const navigation = useNavigation();
    return (
        <SafeAreaView style={[style.area, { backgroundColor: Colors.bg1 }]}>
            <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === 'ios' ? 'padding' : null} >
                <AppBar
                    elevation={0}
                    color={Colors.bg1}
                    style={{ paddingHorizontal: 20, paddingTop: 10 }}
                    leading={<TouchableOpacity onPress={() => navigation.navigate('Info')} >
                        <Icon name='arrow-back' size={24} color={Colors.txt} />
                    </TouchableOpacity>}
                />

                <ScrollView showsVerticalScrollIndicator={false} style={{ marginTop: 10 }}>

                    <View style={{ paddingHorizontal: 20, }}>

                        <Text style={[style.s42]}>My Cart</Text>

                        <View style={[style.box, style.shadow, { margin: 5, marginTop: 20, flexDirection: 'row' }]}>
                            <Image source={require('../../../assets/image/s37.png')} resizeMode='stretch' style={{ height: 80, width: 80 }} />
                            <View style={{ marginLeft: 10, flex: 1, justifyContent: 'space-between' }}>
                                <View style={{ flexDirection: 'row' }}>
                                    <View style={{ flex: 1 }}>
                                        <Text style={[style.b16]}>Protocol 69</Text>
                                        <Text style={[style.s12, { color: Colors.icon }]}>It’s spine is toxic</Text>
                                    </View>
                                    <Icon name='trash-outline' size={20} color={Colors.icon} />
                                </View>
                                <View style={[style.list]}>
                                    <View style={[style.list, { flex: 1 }]}>
                                        <View style={[style.icon1]}>
                                            <Icon name='remove' size={12} color={Colors.icon} />
                                        </View>
                                        <Text style={[style.b16, { marginHorizontal: 10 }]}>1</Text>
                                        <View style={[style.icon1]}>
                                            <Icon name='add' size={12} color={Colors.icon} />
                                        </View>
                                    </View>
                                    <Text style={[style.s14, { color: Colors.primary }]}>$ 14.00</Text>
                                </View>
                            </View>
                        </View>

                        <View style={[style.box, style.shadow, { margin: 5, marginTop: 15, flexDirection: 'row' }]}>
                            <Image source={require('../../../assets/image/s38.png')} resizeMode='stretch' style={{ height: 80, width: 80 }} />
                            <View style={{ marginLeft: 10, flex: 1, justifyContent: 'space-between' }}>
                                <View style={{ flexDirection: 'row' }}>
                                    <View style={{ flex: 1 }}>
                                        <Text style={[style.b16]}>Muli Space</Text>
                                        <Text style={[style.s12, { color: Colors.icon }]}>It’s spine is toxic</Text>
                                    </View>
                                    <Icon name='trash-outline' size={20} color={Colors.icon} />
                                </View>
                                <View style={[style.list]}>
                                    <View style={[style.list, { flex: 1 }]}>
                                        <View style={[style.icon1]}>
                                            <Icon name='remove' size={12} color={Colors.icon} />
                                        </View>
                                        <Text style={[style.b16, { marginHorizontal: 10 }]}>1</Text>
                                        <View style={[style.icon1]}>
                                            <Icon name='add' size={12} color={Colors.icon} />
                                        </View>
                                    </View>
                                    <Text style={[style.s14, { color: Colors.primary }]}>$ 14.00</Text>
                                </View>
                            </View>
                        </View>

                        <View style={[style.box, style.shadow, { margin: 5, marginTop: 15, marginBottom: 15, flexDirection: 'row' }]}>
                            <Image source={require('../../../assets/image/s39.png')} resizeMode='stretch' style={{ height: 80, width: 80 }} />
                            <View style={{ marginLeft: 10, flex: 1, justifyContent: 'space-between' }}>
                                <View style={{ flexDirection: 'row' }}>
                                    <View style={{ flex: 1 }}>
                                        <Text style={[style.b16]}>Euonymus</Text>
                                        <Text style={[style.s12, { color: Colors.icon }]}>It’s spine is toxic</Text>
                                    </View>
                                    <Icon name='trash-outline' size={20} color={Colors.icon} />
                                </View>
                                <View style={[style.list]}>
                                    <View style={[style.list, { flex: 1 }]}>
                                        <View style={[style.icon1]}>
                                            <Icon name='remove' size={12} color={Colors.icon} />
                                        </View>
                                        <Text style={[style.b16, { marginHorizontal: 10 }]}>1</Text>
                                        <View style={[style.icon1]}>
                                            <Icon name='add' size={12} color={Colors.icon} />
                                        </View>
                                    </View>
                                    <Text style={[style.s14, { color: Colors.primary }]}>$ 14.00</Text>
                                </View>
                            </View>
                        </View>
                    </View>

                </ScrollView>

                <View style={{ padding: 18, backgroundColor: Colors.bg }}>
                    <View style={[style.list1]}>
                        <Text style={[style.m16, {  }]}>Subtotal</Text>
                        <Text style={[style.m16, {  }]}>$ 42.00</Text>
                    </View>
                    <View style={[style.list1]}>
                        <Text style={[style.s14, {  color: Colors.dis}]}>Shipping fee</Text>
                        <Text style={[style.s14, {  color: Colors.dis }]}>$ 1.00</Text>
                    </View>
                    <View style={[style.divider, { marginVertical: 12 }]}></View>
                    <View style={[style.list1]}>
                        <Text style={[style.s18, { fontSize: 26, color: '#454A4E' }]}>Total</Text>
                        <Text style={[style.s18, { fontSize: 26, color: '#454A4E' }]}>$ 43.00</Text>
                    </View>
                    <View style={[style.list, { marginTop: 15 }]}>
                        <TouchableOpacity onPress={() => navigation.navigate('MyTabs')}
                            style={[style.btno, { flex: 1 }]}>
                            <Text style={[style.s18, { color: Colors.primary }]}>Add more</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => navigation.navigate('Checkout')}
                            style={[style.btn, { flex: 1, marginLeft: 10, }]}>
                            <Text style={[style.btntxt]}>Checkout</Text>
                        </TouchableOpacity>
                    </View>
                </View>

            </KeyboardAvoidingView>
        </SafeAreaView>
    )
}