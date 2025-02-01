import { View, Dimensions, Text, SafeAreaView, TextInput, StatusBar, TouchableOpacity, Image, ScrollView, KeyboardAvoidingView, ImageBackground } from 'react-native'
import React, { useState, useContext } from 'react'
import style from '../../theme/style';
import { Colors } from '../../theme/color';
import { useNavigation } from '@react-navigation/native';
import { AppBar, HStack } from '@react-native-material/core';
import Icon from 'react-native-vector-icons/Ionicons';

const width = Dimensions.get('screen').width
const height = Dimensions.get('screen').height

export default function Home() {
    const navigation = useNavigation();
    const [show, setshow] = useState(true);
    const [show1, setshow1] = useState(false);
    return (
        <SafeAreaView style={[style.area, {}]}>
            <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === 'ios' ? 'padding' : null} >
                <View style={[style.main, { marginTop: 10, }]}>

                    <AppBar
                        elevation={0}
                        color={Colors.bg}
                        leading={<Text style={[style.s42]}>My Gardens</Text>}
                        trailing={<TouchableOpacity onPress={()=>navigation.navigate('AddPot')}>
                            <Icon name='add-circle-outline' size={24} color={Colors.primary} />
                        </TouchableOpacity>}
                    />

                    <View style={[style.list, { marginTop: 10 }]}>
                        <TouchableOpacity onPress={() => { setshow1(true), setshow(false) }}>
                            <Icon name='grid-outline' size={24} color={show1 ? Colors.txt : Colors.icon} />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => { setshow(true), setshow1(false) }}>
                            <Image source={show ? require('../../../assets/image/s7d.png') : require('../../../assets/image/s7.png')} resizeMode='stretch' style={{ height: 24, width: 24, marginLeft: 10 }} />
                        </TouchableOpacity>
                    </View>

                    <ScrollView showsVerticalScrollIndicator={false} style={{ marginTop: 15 }}>

                        {
                            show ?
                                <View>
                                    <ScrollView horizontal showsHorizontalScrollIndicator={false} >

                                        <TouchableOpacity onPress={() => navigation.navigate('PotInfo')}>
                                            <Image source={require('../../../assets/image/s8.png')} resizeMode='stretch' style={{ height: height / 3.5, width: width / 2, }} />
                                        </TouchableOpacity>
                                        <TouchableOpacity onPress={() => navigation.navigate('PotInfo')}>
                                            <Image source={require('../../../assets/image/s9.png')} resizeMode='stretch' style={{ height: height / 3.5, width: width / 2, marginLeft: 10 }} />
                                        </TouchableOpacity>
                                        <TouchableOpacity onPress={() => navigation.navigate('PotInfo')}>
                                            <Image source={require('../../../assets/image/s10.png')} resizeMode='stretch' style={{ height: height / 3.5, width: width / 2, marginLeft: 10 }} />
                                        </TouchableOpacity>

                                    </ScrollView>

                                    <View style={[style.list, { marginTop: 20, justifyContent: 'space-around' }]}>
                                        <View style={{ alignItems: 'center' }}>
                                            <Text style={[style.b14]}>Water</Text>
                                            <Image source={require('../../../assets/image/s11.png')} resizeMode='stretch' style={{ height: 68, width: 68, marginTop: 15 }} />
                                            <Text style={[style.b16, { marginTop: 15 }]}>2 DAYS</Text>
                                            <Text style={[style.b12, { color: Colors.icon, marginTop: 10 }]}>Every 7 Days</Text>
                                        </View>
                                        <View style={{ alignItems: 'center' }}>
                                            <Text style={[style.b14]}>Light</Text>
                                            <Image source={require('../../../assets/image/s12.png')} resizeMode='stretch' style={{ height: 68, width: 68, marginTop: 15 }} />
                                            <Text style={[style.b16, { marginTop: 15 }]}>65%</Text>
                                            <Text style={[style.b12, { color: Colors.icon, marginTop: 10 }]}>18HRS a day</Text>
                                        </View>
                                    </View>
                                </View>

                                : null
                        }

                        {
                            show1 ?
                                <View>
                                    <View style={[style.list, {}]}>
                                        <TouchableOpacity onPress={() => navigation.navigate('PotInfo')} style={{ flex: 1 }}>
                                            <ImageBackground source={require('../../../assets/image/s13.png')} resizeMode='stretch' style={{ height: height / 3.5, flex: 1 }} />
                                        </TouchableOpacity>
                                        <TouchableOpacity onPress={() => navigation.navigate('PotInfo')} style={{ flex: 1 }}>
                                            <ImageBackground source={require('../../../assets/image/s14.png')} resizeMode='stretch' style={{ height: height / 3.5, flex: 1, marginLeft: 10 }} />
                                        </TouchableOpacity>
                                    </View>

                                    <View style={[style.list, { marginTop: 15 }]}>
                                        <TouchableOpacity onPress={() => navigation.navigate('PotInfo')} style={{ flex: 1 }}>
                                            <ImageBackground source={require('../../../assets/image/s15.png')} resizeMode='stretch' style={{ height: height / 3.5, flex: 1 }} />
                                        </TouchableOpacity>
                                        <TouchableOpacity onPress={() => navigation.navigate('PotInfo')} style={{ flex: 1 }}>
                                            <ImageBackground source={require('../../../assets/image/s16.png')} resizeMode='stretch' style={{ height: height / 3.5, flex: 1, marginLeft: 10 }} />
                                        </TouchableOpacity>
                                    </View>
                                </View>
                                : null
                        }

                    </ScrollView>

                </View>
            </KeyboardAvoidingView>
        </SafeAreaView>
    )
}