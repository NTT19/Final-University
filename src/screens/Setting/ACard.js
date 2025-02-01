import { View, Dimensions, Text, SafeAreaView, TextInput, Switch, StatusBar, TouchableOpacity, Image, ScrollView, KeyboardAvoidingView, ImageBackground } from 'react-native'
import React, { useState, useContext } from 'react'
import style from '../../theme/style';
import { Colors } from '../../theme/color';
import { useNavigation } from '@react-navigation/native';
import { AppBar } from '@react-native-material/core';
import Icon from 'react-native-vector-icons/Ionicons';

const width = Dimensions.get('screen').width
const height = Dimensions.get('screen').height

export default function ACard() {
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
                        title='Add card'
                        titleStyle={[style.subtitle, {}]}
                        leading={<TouchableOpacity onPress={() => navigation.navigate('SCard')} >
                            <Icon name='arrow-back' size={24} color={Colors.txt} />
                        </TouchableOpacity>}
                    />

                    <Image source={require('../../../assets/image/a26.png')} resizeMode='stretch' style={{ width: width - 40, height: height / 4.5 }}></Image>

                    <ScrollView showsVerticalScrollIndicator={false} style={{}}>

                        <View style={[style.txtinput, { marginTop: 25 }]}>
                            <TextInput placeholder='Card Number'
                                placeholderTextColor={Colors.icon}
                                selectionColor={Colors.primary}
                                style={[style.s16, { color: Colors.txt, flex: 1, marginLeft: 5 }]}
                            />
                        </View>

                        <View style={[style.txtinput, { marginTop: 20 }]}>
                            <TextInput placeholder='Cardholder Name'
                                placeholderTextColor={Colors.icon}
                                selectionColor={Colors.primary}
                                style={[style.s16, { color: Colors.txt, flex: 1, marginLeft: 5 }]}
                            />
                        </View>
                        <View style={[style.list, { marginTop: 20 }]}>
                            <View style={{ flex: 1 }}>
                                <View style={[style.txtinput, {}]}>
                                    <TextInput placeholder='Expiry'
                                        placeholderTextColor={Colors.icon}
                                        selectionColor={Colors.primary}
                                        style={[style.s16, { color: Colors.txt, flex: 1, marginLeft: 5 }]}
                                    />
                                </View>
                            </View>
                            <View style={{ flex: 1, marginLeft: 15 }}>
                                <View style={[style.txtinput, {}]}>
                                    <TextInput placeholder='Security Code'
                                        placeholderTextColor={Colors.icon}
                                        selectionColor={Colors.primary}
                                        style={[style.s16, { color: Colors.txt, flex: 1, marginLeft: 5 }]}
                                    />
                                </View>
                            </View>
                        </View>

                    </ScrollView>
                    <TouchableOpacity onPress={() => navigation.navigate('MyTabs')}
                        style={[style.btn, { marginTop: 50, height: 48 ,marginBottom:25}]}>
                        <Text style={style.btntxt}>Save</Text>
                    </TouchableOpacity>
                </View>
            </KeyboardAvoidingView>
        </SafeAreaView>
    )
}