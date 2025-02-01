import { View, Dimensions, Text, SafeAreaView, TextInput, Switch, StatusBar, TouchableOpacity, Image, ScrollView, KeyboardAvoidingView, ImageBackground } from 'react-native'
import React, { useState, useContext } from 'react'
import style from '../../theme/style';
import { Colors } from '../../theme/color';
import { useNavigation } from '@react-navigation/native';
import { AppBar } from '@react-native-material/core';
import Icon from 'react-native-vector-icons/Ionicons';
import { RadioButton } from 'react-native-paper';

const width = Dimensions.get('screen').width
const height = Dimensions.get('screen').height

export default function SCard() {
    const navigation = useNavigation();
    const [checked, setChecked] = useState(false);
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
                        title='Select your card'
                        titleStyle={[style.subtitle, {}]}
                        leading={<TouchableOpacity onPress={() => navigation.navigate('Checkout')} >
                            <Icon name='arrow-back' size={24} color={Colors.txt} />
                        </TouchableOpacity>}
                    />

                    <ScrollView showsVerticalScrollIndicator={false} style={{}}>

                        <Text style={[style.subtitle, {}]}>Summary</Text>

                        <View style={[style.list1, { marginTop: 20 }]}>
                            <Text style={[style.s16, { color: Colors.dis }]}>Subtotal</Text>
                            <Text style={[style.s16, { color: Colors.dis }]}>$ 42.00</Text>
                        </View>
                        <View style={[style.list1, { marginTop: 10 }]}>
                            <Text style={[style.s16, { color: Colors.dis }]}>Shipping fee</Text>
                            <Text style={[style.s16, { color: Colors.dis }]}>$ 1.00</Text>
                        </View>
                        <View style={[style.list1, { marginTop: 10 }]}>
                            <Text style={[style.s16, { color: Colors.txt }]}>Total</Text>
                            <Text style={[style.s16, { color: Colors.txt }]}>$ 43.00</Text>
                        </View>

                        <View style={[style.list, { marginTop: 25 }]}>
                            <Text style={[style.subtitle, { flex: 1 }]}>Payment</Text>
                            <View style={[style.list, {}]}>
                                <Icon name='add' size={22} color={Colors.primary}></Icon>
                                <Text style={[style.s16, { color: Colors.primary, marginLeft: 5 }]}>New</Text>
                            </View>
                        </View>

                        <View style={[style.list, { marginTop: 20 }]}>
                            <View style={[style.icon2, {}]}>
                                <Image source={require('../../../assets/image/a12.png')} resizeMode='stretch' style={{ height: 10, width: 36 }}></Image>
                            </View>
                            <View style={{ flex: 1, marginLeft: 15 }}>
                                <Text style={[style.s16]}>Visa / Visa Debit</Text>
                                <Text style={[style.s14, { color: Colors.dis }]}>xxxx xxxx xxxx 2444</Text>
                                <Text style={[style.s14, { color: Colors.icon, marginTop: 2 }]}>Expiry: 09/20</Text>
                            </View>
                            <RadioButton
                                value="first"
                                status={checked === 'first' ? 'checked' : 'unchecked'}
                                onPress={() => setChecked('first')}
                                color={Colors.primary}
                                uncheckedColor={Colors.icon}
                            />
                        </View>
                        <View style={[style.divider, { marginVertical: 15 }]}></View>
                        <View style={[style.list, {}]}>
                            <View style={[style.icon2, {}]}>
                                <Image source={require('../../../assets/image/a13.png')} resizeMode='stretch' style={{ height: 21, width: 32 }}></Image>
                            </View>
                            <View style={{ flex: 1, marginLeft: 15 }}>
                                <Text style={[style.s16]}>Master Card</Text>
                                <Text style={[style.s14, { color: Colors.dis }]}>xxxx xxxx xxxx 8080</Text>
                                <Text style={[style.s14, { color: Colors.icon, marginTop: 2 }]}>Expiry: 09/20</Text>
                            </View>
                            <RadioButton
                                value="sec"
                                status={checked === 'sec' ? 'checked' : 'unchecked'}
                                onPress={() => setChecked('sec')}
                                color={Colors.primary}
                                uncheckedColor={Colors.icon}
                            />
                        </View>

                    </ScrollView>
                    <TouchableOpacity onPress={() => navigation.navigate('ACard')}
                        style={[style.btn, { marginTop: 50, height: 48, marginBottom: 25 }]}>
                        <Text style={style.btntxt}>Next</Text>
                    </TouchableOpacity>
                </View>
            </KeyboardAvoidingView>
        </SafeAreaView>
    )
}