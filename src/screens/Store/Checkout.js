import { View, Dimensions, Text, SafeAreaView, Modal, Switch, TextInput, StatusBar, TouchableOpacity, Image, ScrollView, KeyboardAvoidingView, ImageBackground } from 'react-native'
import React, { useState, useContext } from 'react'
import style from '../../theme/style';
import { Colors } from '../../theme/color';
import { useNavigation } from '@react-navigation/native';
import { AppBar, HStack } from '@react-native-material/core';
import Icon from 'react-native-vector-icons/Ionicons';

const width = Dimensions.get('screen').width
const height = Dimensions.get('screen').height

export default function Checkout() {
    const navigation = useNavigation();
    return (
        <SafeAreaView style={[style.area, {}]}>
            <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === 'ios' ? 'padding' : null} >
                <View style={[style.main, { marginTop: 10, }]}>

                    <AppBar
                        elevation={0}
                        color={Colors.bg1}
                        leading={<TouchableOpacity onPress={() => navigation.navigate('MyCart')} >
                            <Icon name='arrow-back' size={24} color={Colors.txt} />
                        </TouchableOpacity>}
                    />

                    <ScrollView showsVerticalScrollIndicator={false} style={{ marginTop: 10 }}>

                        <Text style={[style.s42]}>Checkout</Text>

                        <View style={[style.list1, { marginTop: 10 }]}>
                            <Text style={[style.subtitle]}>Payment</Text>
                            <TouchableOpacity onPress={() => navigation.navigate('SCard')}>
                                <Text style={[style.s16, { color: Colors.primary }]}>Change</Text>
                            </TouchableOpacity>
                        </View>

                        <Text style={[style.s16, { color: Colors.icon, marginTop: 7 }]}>09/20, (...)2444 . Visa / Visa Debit</Text>

                        <View style={[style.list1, { marginTop: 15 }]}>
                            <Text style={[style.s16, { color: Colors.dis }]}>Subtotal</Text>
                            <Text style={[style.s16, { color: Colors.dis }]}>$ 42.00</Text>
                        </View>
                        <View style={[style.list1, { marginTop: 7 }]}>
                            <Text style={[style.s16, { color: Colors.dis }]}>Shipping fee</Text>
                            <Text style={[style.s16, { color: Colors.dis }]}>$ 1.00</Text>
                        </View>
                        <View style={[style.list1, { marginTop: 7 }]}>
                            <Text style={[style.s16, {}]}>Total</Text>
                            <Text style={[style.s16, {}]}>$ 43.00</Text>
                        </View>

                        <Text style={[style.subtitle, { marginTop: 20 }]}>Shipping Address</Text>

                        <View style={[style.list, { marginTop: 15 }]}>
                            <View style={{ flex: 1 }}>
                                <Text style={[style.s14, { color: '#43484B' }]}>31 Bryngllas, Glewstone</Text>
                                <Text style={[style.s14, { color: '#43484B', marginTop: 5 }]}>Name: O'Donnell</Text>
                                <Text style={[style.s14, { color: '#43484B', marginTop: 5 }]}>Phone: 070 0435 2524</Text>
                            </View>
                            <Icon name='checkmark-circle' size={24} color={Colors.primary} />
                        </View>

                        <View style={[style.divider, { marginVertical: 15 }]}></View>

                        <View style={[style.list, { marginBottom: 15 }]}>
                            <View style={{ flex: 1 }}>
                                <Text style={[style.s14, { color: Colors.icon }]}>31 Bryngllas, Glewstone</Text>
                                <Text style={[style.s14, { color: Colors.icon, marginTop: 5 }]}>Name: O'Donnell</Text>
                                <Text style={[style.s14, { color: Colors.icon, marginTop: 5 }]}>Phone: 070 0435 2524</Text>
                            </View>
                            <Icon name='ellipse-outline' size={24} color={Colors.icon} />
                        </View>

                    </ScrollView>

                </View>
                <View style={[style.list, { padding: 20, borderTopColor: Colors.lines, borderTopWidth: 1 }]}>
                    <Text style={[style.s14, { flex: 1 }]}>Price : <Text style={[style.s14, { fontSize: 26 }]}>$ 43.00</Text></Text>
                    <TouchableOpacity onPress={() => navigation.navigate('MyTabs')}
                        style={[style.btn, { flex: 1, marginLeft: 7 }]}>
                        <Text style={[style.btntxt]}>Place order</Text>
                    </TouchableOpacity>
                </View>
            </KeyboardAvoidingView>
        </SafeAreaView>
    )
}