import { View, Dimensions, Text, SafeAreaView, TextInput, Switch, StatusBar, TouchableOpacity, Image, ScrollView, KeyboardAvoidingView, ImageBackground } from 'react-native'
import React, { useState, useContext } from 'react'
import style from '../../theme/style';
import { Colors } from '../../theme/color';
import { useNavigation } from '@react-navigation/native';
import { AppBar } from '@react-native-material/core';
import Icon from 'react-native-vector-icons/Ionicons';

const width = Dimensions.get('screen').width
const height = Dimensions.get('screen').height

export default function Notify() {
    const navigation = useNavigation();
    const [ison, setIsOn] = useState(true);
    const toggle = () => setIsOn(previousState => !previousState);
    const [ison1, setIsOn1] = useState(false);
    const toggle1 = () => setIsOn1(previousState => !previousState);
    const [ison2, setIsOn2] = useState(false);
    const toggle2 = () => setIsOn2(previousState => !previousState);
    const [ison3, setIsOn3] = useState(true);
    const toggle3 = () => setIsOn3(previousState => !previousState);
    const [ison4, setIsOn4] = useState(true);
    const toggle4 = () => setIsOn4(previousState => !previousState);
    const [ison5, setIsOn5] = useState(false);
    const toggle5 = () => setIsOn5(previousState => !previousState);
    const [ison6, setIsOn6] = useState(false);
    const toggle6 = () => setIsOn6(previousState => !previousState);
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
                        title='Notification'
                        titleStyle={[style.subtitle, {}]}
                        leading={<TouchableOpacity onPress={() => navigation.navigate('MyTabs')} >
                            <Icon name='arrow-back' size={24} color={Colors.txt} />
                        </TouchableOpacity>}
                    />

                    <ScrollView showsVerticalScrollIndicator={false} style={{}}>

                        <View style={[style.list, { marginTop: 5 }]}>
                            <Text style={[style.subtitle, { flex: 1 }]}>Allow Notifications</Text>
                            <Switch
                                trackColor={{ false: Colors.icon, true: Colors.primary }}
                                thumbColor={ison ? Colors.secondary : '#f4f3f4'}
                                ios_backgroundColor="#3e3e3e"
                                onValueChange={toggle}
                                value={ison}
                            />
                        </View>
                        <Text style={[style.s12, { color: Colors.dis, marginTop:3}]}>Get notifications about what is coming up with your gardens</Text>

                        <View style={[style.box, style.shadow, { backgroundColor: Colors.bg, margin: 5, marginTop: 20 }]}>
                            <View style={[style.list1, {}]}>
                                <Text style={[style.s16, { flex: 1 }]}>Dehydrated</Text>
                                <Switch
                                    trackColor={{ false: Colors.icon, true: Colors.primary }}
                                    thumbColor={ison1 ? Colors.secondary : '#f4f3f4'}
                                    ios_backgroundColor="#3e3e3e"
                                    onValueChange={toggle1}
                                    value={ison1}
                                />
                            </View>
                            <Text style={[style.s12, { color: '#DEDEDE', marginTop: 3 }]}>Water below (%):</Text>
                            <Image source={require('../../../assets/image/a21.png')} resizeMode='stretch' style={{ height: 26, width: width / 1.27, marginTop: 15, alignSelf: 'center' }}></Image>
                        </View>

                        <View style={[style.box, style.shadow, { backgroundColor: Colors.bg, margin: 5, marginTop: 20 }]}>
                            <View style={[style.list1, {}]}>
                                <Text style={[style.s16, { flex: 1 }]}>Light Required</Text>
                                <Switch
                                    trackColor={{ false: Colors.icon, true: Colors.primary }}
                                    thumbColor={ison2 ? Colors.secondary : '#f4f3f4'}
                                    ios_backgroundColor="#3e3e3e"
                                    onValueChange={toggle2}
                                    value={ison2}
                                />
                            </View>
                            <Text style={[style.s12, { color: '#DEDEDE', marginTop: 3 }]}>Light time below (%):</Text>
                            <Image source={require('../../../assets/image/a22.png')} resizeMode='stretch' style={{ height: 26, width: width / 1.27, marginTop: 15, alignSelf: 'center' }}></Image>
                        </View>

                        <View style={[style.box, style.shadow, { backgroundColor: Colors.bg, margin: 5, marginTop: 15 }]}>
                            <View style={[style.list1, {}]}>
                                <Text style={[style.s16, {}]}>Daily Report</Text>
                                <Switch
                                    trackColor={{ false: Colors.icon, true: Colors.primary }}
                                    thumbColor={ison3 ? Colors.secondary : '#f4f3f4'}
                                    ios_backgroundColor="#3e3e3e"
                                    onValueChange={toggle3}
                                    value={ison3}
                                />
                            </View>
                            <View style={[style.list1, { marginTop: 15 }]}>
                                <Text style={[style.s16, {}]}>Weekly Report</Text>
                                <Switch
                                    trackColor={{ false: Colors.icon, true: Colors.primary }}
                                    thumbColor={ison4 ? Colors.secondary : '#f4f3f4'}
                                    ios_backgroundColor="#3e3e3e"
                                    onValueChange={toggle4}
                                    value={ison4}
                                />
                            </View>
                            <View style={[style.list1, { marginTop: 15 }]}>
                                <Text style={[style.s16, {}]}>Monthly</Text>
                                <Switch
                                    trackColor={{ false: Colors.icon, true: Colors.primary }}
                                    thumbColor={ison5 ? Colors.secondary : '#f4f3f4'}
                                    ios_backgroundColor="#3e3e3e"
                                    onValueChange={toggle5}
                                    value={ison5}
                                />
                            </View>

                            <Text style={[style.s12, { marginTop: 15 }]}>Easily keep an eye on your garden </Text>
                        </View>

                        <View style={[style.box, style.shadow, { backgroundColor: Colors.bg, margin: 5, marginTop: 15,marginBottom:20 }]}>
                            <View style={[style.list1, { }]}>
                                <Text style={[style.s16, {}]}>Email Notification</Text>
                                <Switch
                                    trackColor={{ false: Colors.icon, true: Colors.primary }}
                                    thumbColor={ison6 ? Colors.secondary : '#f4f3f4'}
                                    ios_backgroundColor="#3e3e3e"
                                    onValueChange={toggle6}
                                    value={ison6}
                                />
                            </View>

                            <Text style={[style.s12, { marginTop: 10 }]}>Get notifications via email</Text>
                        </View>

                    </ScrollView>
                </View>
            </KeyboardAvoidingView>
        </SafeAreaView>
    )
}