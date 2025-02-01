import { View, Dimensions, Text, SafeAreaView, Modal, Switch, TextInput, StatusBar, TouchableOpacity, Image, ScrollView, KeyboardAvoidingView, ImageBackground } from 'react-native'
import React, { useState, useContext } from 'react'
import style from '../../theme/style';
import { Colors } from '../../theme/color';
import { useNavigation } from '@react-navigation/native';
import { AppBar, HStack } from '@react-native-material/core';
import Icon from 'react-native-vector-icons/Ionicons';

const width = Dimensions.get('screen').width
const height = Dimensions.get('screen').height

export default function Store() {
    const navigation = useNavigation();
    return (
        <SafeAreaView style={[style.area, {}]}>
            <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === 'ios' ? 'padding' : null} >
                <View style={[style.main, { marginTop: 10, }]}>

                    <AppBar
                        elevation={0}
                        color={Colors.bg}
                        leading={<Text style={[style.s42]}>Secret Shop</Text>}
                        trailing={<View style={{ padding: 5 }}>
                            <TouchableOpacity style={[style.icon, style.shadow, { width: 80, borderTopRighttRadius: 0, borderBottomRighttRadius: 0 }]}
                                onPress={() => navigation.navigate('MyCart')} >
                                <Icon name='cart-outline' size={24} color={Colors.txt} style={{ marginRight: 30 }} />
                            </TouchableOpacity>
                        </View>}
                    />

                    <View style={[style.list, { marginTop: 10 }]}>
                        <View style={[style.inputcontainer, { flex: 1 }]}>
                            <Icon name='search' size={20} color={Colors.txt} />
                            <TextInput placeholder='Enter plant name' placeholderTextColor={Colors.icon}
                                selectionColor={Colors.primary}
                                style={[style.s14, { marginLeft: 10, flex: 1 }]}
                            />
                        </View>
                        <View style={[style.icon, { width: 68, marginLeft: 10, backgroundColor: '#F8F8F8', borderRadius: 10 }]}>
                            <Image source={require('../../../assets/image/s23.png')} resizeMode='stretch' style={{ height: 24, width: 24 }} />
                        </View>
                    </View>

                    <ScrollView showsVerticalScrollIndicator={false} style={{ marginTop: 15 }}>

                        <Image source={require('../../../assets/image/s24.png')} resizeMode='stretch' style={{ height: height / 4.2, width: width - 40 }} />

                        <Text style={[style.subtitle, { marginTop: 15 }]}>Products</Text>

                        <View style={{ marginTop: 12 }}>
                            <ScrollView horizontal showsHorizontalScrollIndicator={false} >
                                <View style={[style.box2, style.shadow, { margin: 5 }]}>
                                    <Image source={require('../../../assets/image/s25.png')} resizeMode='stretch' style={{ height: 44, width: 44, alignSelf: 'center' }} />
                                    <Text style={[style.s14, { color: Colors.dis, textAlign: 'center', marginTop: 5 }]}>Plants</Text>
                                    <Text style={[style.s12, { color: Colors.dis, textAlign: 'center' }]}>155 products</Text>
                                </View>
                                <View style={[style.box2, style.shadow, { margin: 5, marginLeft: 10 }]}>
                                    <Image source={require('../../../assets/image/s26.png')} resizeMode='stretch' style={{ height: 44, width: 44, alignSelf: 'center' }} />
                                    <Text style={[style.s14, { color: Colors.dis, textAlign: 'center', marginTop: 5 }]}>Flowers</Text>
                                    <Text style={[style.s12, { color: Colors.dis, textAlign: 'center' }]}>98 products</Text>
                                </View>
                                <View style={[style.box2, style.shadow, { margin: 5, marginLeft: 10 }]}>
                                    <Image source={require('../../../assets/image/s27.png')} resizeMode='stretch' style={{ height: 44, width: 44, alignSelf: 'center' }} />
                                    <Text style={[style.s14, { color: Colors.dis, textAlign: 'center', marginTop: 5 }]}>Fertilizer</Text>
                                    <Text style={[style.s12, { color: Colors.dis, textAlign: 'center' }]}>55 products</Text>
                                </View>
                            </ScrollView>
                        </View>

                        <Text style={[style.subtitle, { marginTop: 15 }]}>Plant Types</Text>

                        <View style={{ marginTop: 12 }}>
                            <ScrollView horizontal showsHorizontalScrollIndicator={false} >
                                <Image source={require('../../../assets/image/s28.png')} resizeMode='stretch' style={{ height: height / 5.7, width: width / 1.5 }} />
                                <Image source={require('../../../assets/image/s29.png')} resizeMode='stretch' style={{ height: height / 5.7, width: width / 1.5, marginLeft: 10 }} />
                            </ScrollView>
                        </View>

                        <Text style={[style.subtitle, { marginTop: 15 }]}>Popular</Text>

                        <View style={[style.list, { marginTop: 15 }]}>
                            <TouchableOpacity  onPress={() => navigation.navigate('Plants')} style={{ flex: 1 }}>
                                <ImageBackground source={require('../../../assets/image/s30.png')} resizeMode='stretch' style={{ height: height / 3.9, flex: 1 }} />
                            </TouchableOpacity>
                            <TouchableOpacity  onPress={() => navigation.navigate('Plants')} style={{ flex: 1 }}>
                                <ImageBackground source={require('../../../assets/image/s31.png')} resizeMode='stretch' style={{ height: height / 3.9, flex: 1, marginLeft: 10 }} />
                            </TouchableOpacity>
                        </View>

                        <View style={[style.list, { marginTop: 15, marginBottom: 20 }]}>
                            <TouchableOpacity  onPress={() => navigation.navigate('Plants')} style={{ flex: 1 }}>
                                <ImageBackground source={require('../../../assets/image/s32.png')} resizeMode='stretch' style={{ height: height / 3.9, flex: 1 }} />
                            </TouchableOpacity>
                            <TouchableOpacity  onPress={() => navigation.navigate('Plants')} style={{ flex: 1 }}>
                                <ImageBackground source={require('../../../assets/image/s33.png')} resizeMode='stretch' style={{ height: height / 3.9, flex: 1, marginLeft: 10 }} />
                            </TouchableOpacity>
                        </View>

                    </ScrollView>

                </View>
            </KeyboardAvoidingView>
        </SafeAreaView>
    )
}