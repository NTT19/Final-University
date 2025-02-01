import { View, Dimensions, Text, SafeAreaView, TextInput, StatusBar, TouchableOpacity, Image, ScrollView, KeyboardAvoidingView, ImageBackground } from 'react-native'
import React, { useState, useContext } from 'react'
import style from '../../theme/style';
import { Colors } from '../../theme/color';
import { useNavigation } from '@react-navigation/native';
import { AppBar } from '@react-native-material/core';
import Icon from 'react-native-vector-icons/Ionicons';
import { RadioButton } from 'react-native-paper';

const width = Dimensions.get('screen').width
const height = Dimensions.get('screen').height

export default function Language() {
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
                        title='Sélection de la langue'
                        titleStyle={[style.subtitle, {}]}
                        leading={<TouchableOpacity onPress={() => navigation.navigate('Wifi')} >
                            <Icon name='arrow-back' size={24} color={Colors.txt} />
                        </TouchableOpacity>}
                    />

                    <ScrollView showsVerticalScrollIndicator={false} style={{}}>

                        <View style={[style.box, style.shadow, { backgroundColor: Colors.bg, margin: 5, marginBottom: 20,marginTop:15 }]}>
                            <View style={[style.list, {}]}>
                                <Text style={[style.s14, { flex: 1 }]}>ENGLISH</Text>
                                <Image source={require('../../../assets/image/a15.png')} resizeMode='stretch' style={{ height: 17, width: 24 }}></Image>
                                <Image source={require('../../../assets/image/a16.png')} resizeMode='stretch' style={{ height: 17, width: 24, marginLeft: 5 ,marginRight:10}}></Image>
                                <RadioButton
                                    value="first"
                                    status={checked === 'first' ? 'checked' : 'unchecked'}
                                    onPress={() => setChecked('first')}
                                    color={Colors.primary}
                                    uncheckedColor={Colors.icon}
                                />
                            </View>
                            <View style={[style.divider,{marginVertical:10}]}></View>
                            <View style={[style.list, {}]}>
                                <Text style={[style.s14, { flex: 1 ,}]}>FRANCAIS</Text>
                                <Image source={require('../../../assets/image/a17.png')} resizeMode='stretch' style={{ height: 17, width: 24 ,marginRight:10}}></Image>
                                <RadioButton
                                    value="sec"
                                    status={checked === 'sec' ? 'checked' : 'unchecked'}
                                    onPress={() => setChecked('sec')}
                                    color={Colors.primary}
                                    uncheckedColor={Colors.icon}
                                />
                            </View>
                            <View style={[style.divider,{marginVertical:10}]}></View>
                            <View style={[style.list, {}]}>
                                <Text style={[style.s14, { flex: 1 }]}>DEUTSCH</Text>
                                <Image source={require('../../../assets/image/a18.png')} resizeMode='stretch' style={{ height: 17, width: 24, marginLeft: 5 ,marginRight:10}}></Image>
                                <RadioButton
                                    value="third"
                                    status={checked === 'third' ? 'checked' : 'unchecked'}
                                    onPress={() => setChecked('third')}
                                    color={Colors.primary}
                                    uncheckedColor={Colors.icon}
                                />
                            </View>
                            <View style={[style.divider,{marginVertical:10}]}></View>
                            <View style={[style.list, {}]}>
                                <Text style={[style.s14, { flex: 1 }]}>ITALIANO</Text>
                                <Image source={require('../../../assets/image/a19.png')} resizeMode='stretch' style={{ height: 17, width: 24, marginLeft: 5 ,marginRight:10}}></Image>
                                <RadioButton
                                    value="four"
                                    status={checked === 'four' ? 'checked' : 'unchecked'}
                                    onPress={() => setChecked('four')}
                                    color={Colors.primary}
                                    uncheckedColor={Colors.icon}
                                />
                            </View>
                            <View style={[style.divider,{marginVertical:10}]}></View>
                            <View style={[style.list, {}]}>
                                <Text style={[style.s14, { flex: 1 }]}>ESPANOL</Text>
                                <Image source={require('../../../assets/image/a19.png')} resizeMode='stretch' style={{ height: 17, width: 24 }}></Image>
                                <Image source={require('../../../assets/image/a20.png')} resizeMode='stretch' style={{ height: 17, width: 24, marginLeft: 7,marginRight:10 }}></Image>
                                <RadioButton
                                    value="fifth"
                                    status={checked === 'fifth' ? 'checked' : 'unchecked'}
                                    onPress={() => setChecked('fifth')}
                                    color={Colors.primary}
                                    uncheckedColor={Colors.icon}
                                />
                            </View>
                        </View>

                    </ScrollView>
                </View>
            </KeyboardAvoidingView>
        </SafeAreaView>
    )
}