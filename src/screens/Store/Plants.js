import { View, Dimensions, Text, SafeAreaView, Modal, Switch, TextInput, StatusBar, TouchableOpacity, Image, ScrollView, KeyboardAvoidingView, ImageBackground } from 'react-native'
import React, { useState, useContext } from 'react'
import style from '../../theme/style';
import { Colors } from '../../theme/color';
import { useNavigation } from '@react-navigation/native';
import { AppBar, HStack } from '@react-native-material/core';
import Icon from 'react-native-vector-icons/Ionicons';

const width = Dimensions.get('screen').width
const height = Dimensions.get('screen').height

export default function Plants() {
    const navigation = useNavigation();
    return (
        <SafeAreaView style={[style.area, {}]}>
            <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === 'ios' ? 'padding' : null} >
                <View style={[style.main, { marginTop: 10, }]}>

                    <AppBar
                        elevation={0}
                        color={Colors.bg}
                        centerTitle={true}
                        title={<Text style={[style.subtitle]}>Plants</Text>}
                        leading={<TouchableOpacity onPress={() => navigation.navigate('MyTabs')} >
                            <Icon name='arrow-back' size={24} color={Colors.txt} />
                        </TouchableOpacity>}
                        trailing={<View style={{ padding: 5 }}>
                            <View style={[style.icon, style.shadow, { width: 60, borderTopRightRadius: 0, borderBottomRightRadius: 0, marginRight: -20 }]} >
                                <Icon name='cart-outline' size={24} color={Colors.txt} />
                            </View>
                        </View>}
                    />

                    <View>
                        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ marginTop: 12 }}>
                            <Text style={[style.b16, { color: Colors.primary }]}>All</Text>
                            <Text style={[style.b16, { color: Colors.dis, marginHorizontal: 15 }]}>Ferns</Text>
                            <Text style={[style.b16, { color: Colors.dis, }]}>Succulents</Text>
                            <Text style={[style.b16, { color: Colors.dis, marginHorizontal: 15 }]}>Herbs</Text>
                            <Text style={[style.b16, { color: Colors.dis, }]}>Tropicals</Text>
                        </ScrollView>
                    </View>

                    <ScrollView showsVerticalScrollIndicator={false} style={{ marginTop: 15 }}>

                        <View style={[style.list, {}]}>
                            <TouchableOpacity onPress={() => navigation.navigate('Info')} style={{ flex: 1 }}>
                                <ImageBackground source={require('../../../assets/image/s30.png')} resizeMode='stretch' style={{ height: height / 4.2, flex: 1 }} />
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => navigation.navigate('Info')} style={{ flex: 1 }}>
                                <ImageBackground source={require('../../../assets/image/s34.png')} resizeMode='stretch' style={{ height: height / 4.2, flex: 1, marginLeft: 10 }} />
                            </TouchableOpacity>
                        </View>

                        <View style={[style.list, { marginTop: 15 }]}>
                            <TouchableOpacity onPress={() => navigation.navigate('Info')} style={{ flex: 1 }}>
                                <ImageBackground source={require('../../../assets/image/s32.png')} resizeMode='stretch' style={{ height: height / 4.2, flex: 1 }} />
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => navigation.navigate('Info')} style={{ flex: 1 }}>
                                <ImageBackground source={require('../../../assets/image/s33.png')} resizeMode='stretch' style={{ height: height / 4.2, flex: 1, marginLeft: 10 }} />
                            </TouchableOpacity>
                        </View>

                        <View style={[style.list, { marginTop: 15, marginBottom: 20 }]}>
                            <TouchableOpacity onPress={() => navigation.navigate('Info')} style={{ flex: 1 }}>
                                <ImageBackground source={require('../../../assets/image/s35.png')} resizeMode='stretch' style={{ height: height / 4.2, flex: 1 }} />
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => navigation.navigate('Info')} style={{ flex: 1 }}>
                                <ImageBackground source={require('../../../assets/image/s31.png')} resizeMode='stretch' style={{ height: height / 4.2, flex: 1, marginLeft: 10 }} />
                            </TouchableOpacity>
                        </View>

                    </ScrollView>
                </View>
            </KeyboardAvoidingView>
        </SafeAreaView>
    )
}