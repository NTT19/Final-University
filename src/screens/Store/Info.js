import { View, Dimensions, Text, SafeAreaView, Modal, Switch, TextInput, StatusBar, TouchableOpacity, Image, ScrollView, KeyboardAvoidingView, ImageBackground } from 'react-native'
import React, { useState, useContext } from 'react'
import style from '../../theme/style';
import { Colors } from '../../theme/color';
import { useNavigation } from '@react-navigation/native';
import { AppBar, HStack } from '@react-native-material/core';
import Icon from 'react-native-vector-icons/Ionicons';

const width = Dimensions.get('screen').width
const height = Dimensions.get('screen').height

export default function Info() {
    const navigation = useNavigation();
    return (
        <SafeAreaView style={[style.area, {}]}>
            <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === 'ios' ? 'padding' : null} >
                <AppBar
                    elevation={0}
                    color={Colors.bg1}
                    style={{ paddingHorizontal: 20, paddingTop: 10 }}
                    leading={<TouchableOpacity onPress={() => navigation.navigate('Plants')} >
                        <Icon name='arrow-back' size={24} color={Colors.txt} />
                    </TouchableOpacity>}
                    trailing={<View style={{ padding: 5 }}>
                        <View style={[style.icon, style.shadow, { width: 60, borderTopRightRadius: 0, borderBottomRightRadius: 0, marginRight: -20 }]} >
                            <Icon name='cart-outline' size={24} color={Colors.txt} />
                        </View>
                    </View>}
                />

                <ScrollView showsVerticalScrollIndicator={false} >

                    <View style={{ paddingHorizontal: 20, backgroundColor: Colors.bg1, paddingTop: 15 }}>

                        <Text style={[style.s42]}>Euonymus</Text>
                        <Text style={[style.r20, { color: Colors.dis }]}>Robust and dramatic, with leaves.</Text>

                        <View style={[style.list, { marginTop: 15 }]}>
                            <View style={{ flex: 1 }}>
                                <Text style={[style.s14, { color: Colors.dis }]}>Type</Text>
                                <Text style={[style.s16, { marginTop: 2 }]}>Indoor</Text>
                                <Text style={[style.s14, { color: Colors.dis, marginTop: 20 }]}>Size</Text>
                                <Text style={[style.s16, { marginTop: 2 }]}>Small</Text>
                                <Text style={[style.s14, { color: Colors.dis, marginTop: 20 }]}>Plants</Text>
                                <Text style={[style.s16, { marginTop: 2 }]}>Ferns</Text>
                            </View>
                            <Image source={require('../../../assets/image/s36.png')} resizeMode='stretch' style={{ height: 210, width: 150 }} />
                        </View>

                    </View>

                    <View style={{ padding: 20 }}>

                        <Text style={[style.subtitle]}>About</Text>
                        <Text style={[style.s16, { color: Colors.dis, marginTop: 5 }]}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam quam diam, condim nec purus at, ornare ullamcorper est.</Text>

                        <View style={{ marginTop: 20, marginBottom: 20 }}>
                            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                                <View style={[style.icon]}>
                                    <Icon name='sunny-outline' size={20} color={Colors.primary} />
                                </View>
                                <View style={{ marginLeft: 15 }}>
                                    <Text style={[style.s14, { color: Colors.dis }]}>Sun</Text>
                                    <Text style={[style.s14, {}]}>8hrs</Text>
                                </View>
                                <View style={[style.icon, { marginLeft: 30 }]}>
                                    <Icon name='water-outline' size={20} color={Colors.primary} />
                                </View>
                                <View style={{ marginLeft: 15 }}>
                                    <Text style={[style.s14, { color: Colors.dis }]}>Water</Text>
                                    <Text style={[style.s14, {}]}>2 days</Text>
                                </View>
                                <View style={[style.icon, { marginLeft: 30 }]}>
                                    <Icon name='heart-outline' size={20} color={Colors.primary} />
                                </View>
                                <View style={{ marginLeft: 15 }}>
                                    <Text style={[style.s14, { color: Colors.dis }]}>Lifetime</Text>
                                    <Text style={[style.s14, {}]}>7 months</Text>
                                </View>
                            </ScrollView>
                        </View>
                    </View>

                </ScrollView>

                <View style={[style.list, { padding: 20,borderTopColor:Colors.lines,borderTopWidth:1 }]}>
                    <Text style={[style.s14,{flex:1}]}>Price : <Text style={[style.s14, { fontSize: 26 }]}>$ 14.00</Text></Text>
                    <TouchableOpacity onPress={()=>navigation.navigate('MyCart')}
                    style={[style.btn,{flex:1,marginLeft:7}]}>
                            <Text style={[style.btntxt]}>Add to cart</Text>
                    </TouchableOpacity>
                </View>

            </KeyboardAvoidingView>
        </SafeAreaView>
    )
}