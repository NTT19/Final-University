import { View, Dimensions, Text, SafeAreaView, TextInput, Switch, StatusBar, TouchableOpacity, Image, ScrollView, KeyboardAvoidingView, ImageBackground } from 'react-native'
import React, { useState, useContext } from 'react'
import style from '../../theme/style';
import { Colors } from '../../theme/color';
import { useNavigation } from '@react-navigation/native';
import { AppBar } from '@react-native-material/core';
import Icon from 'react-native-vector-icons/Ionicons';

const width = Dimensions.get('screen').width
const height = Dimensions.get('screen').height

export default function Account() {
    const navigation = useNavigation();
    const [ison, setIsOn] = useState(true);
    const toggle = () => setIsOn(previousState => !previousState);
    const [ison1, setIsOn1] = useState(true);
    const toggle1 = () => setIsOn1(previousState => !previousState);
    const [ison2, setIsOn2] = useState(false);
    const toggle2 = () => setIsOn2(previousState => !previousState);
    const [ison3, setIsOn3] = useState(false);
    const toggle3 = () => setIsOn3(previousState => !previousState);
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
                        title='Account Settings'
                        titleStyle={[style.subtitle, {}]}
                        leading={<TouchableOpacity onPress={() => navigation.navigate('MyTabs')} >
                            <Icon name='arrow-back' size={24} color={Colors.txt} />
                        </TouchableOpacity>}
                    />

                    <ScrollView showsVerticalScrollIndicator={false} style={{}}>

                        <Text style={[style.subtitle, { marginTop: 5 }]}>Password & Backup</Text>

                        <View style={[style.box, style.shadow, style.list, { backgroundColor: Colors.bg, margin: 5, marginTop: 15 }]}>
                            <Text style={[style.s16, { flex: 1 }]}>Change Password</Text>
                            <Icon name='chevron-forward' size={22} color={Colors.txt}></Icon>
                        </View>

                        <View style={[style.box, style.shadow, style.list, { backgroundColor: Colors.bg, margin: 5, marginTop: 15 }]}>
                            <Text style={[style.s16, { flex: 1 }]}>Set Backup Email</Text>
                            <Icon name='chevron-forward' size={22} color={Colors.txt}></Icon>
                        </View>

                        <Text style={[style.subtitle, { marginTop: 22 }]}>Connected </Text>

                        <View style={[style.box, style.shadow, { backgroundColor: Colors.bg, margin: 5, marginTop: 15 }]}>
                            <View style={[style.list, {}]}>
                                <Icon name='logo-twitter' size={22} style={{ color: '#00AAEC' }}></Icon>
                                <Text style={[style.s16, { marginLeft: 12, flex: 1 }]}>Twitter</Text>
                                <Switch
                                    trackColor={{ false: Colors.icon, true: Colors.primary }}
                                    thumbColor={ison ? Colors.secondary : '#f4f3f4'}
                                    ios_backgroundColor="#3e3e3e"
                                    onValueChange={toggle}
                                    value={ison}
                                />
                            </View>
                            <View style={[style.list, { marginTop: 15 }]}>
                                <Icon name='logo-facebook' size={22} style={{ color: '#4460A0' }}></Icon>
                                <Text style={[style.s16, { marginLeft: 12, flex: 1 }]}>Facebook</Text>
                                <Switch
                                    trackColor={{ false: Colors.icon, true: Colors.primary }}
                                    thumbColor={ison1 ? Colors.secondary : '#f4f3f4'}
                                    ios_backgroundColor="#3e3e3e"
                                    onValueChange={toggle1}
                                    value={ison1}
                                />
                            </View>
                            <View style={[style.list, { marginTop: 15 }]}>
                                <Icon name='logo-instagram' size={22} style={{ color: '#EC4989' }}></Icon>
                                <Text style={[style.s16, { marginLeft: 12, flex: 1 }]}>Instagram</Text>
                                <Switch
                                    trackColor={{ false: Colors.icon, true: Colors.primary }}
                                    thumbColor={ison2 ? Colors.secondary : '#f4f3f4'}
                                    ios_backgroundColor="#3e3e3e"
                                    onValueChange={toggle2}
                                    value={ison2}
                                />
                            </View>
                            <View style={[style.list, { marginTop: 15 }]}>
                                <Icon name='logo-dribbble' size={22} style={{ color: '#EC4989' }}></Icon>
                                <Text style={[style.s16, { marginLeft: 12, flex: 1 }]}>Dribble</Text>
                                <Switch
                                    trackColor={{ false: Colors.icon, true: Colors.primary }}
                                    thumbColor={ison3 ? Colors.secondary : '#f4f3f4'}
                                    ios_backgroundColor="#3e3e3e"
                                    onValueChange={toggle3}
                                    value={ison3}
                                />
                            </View>
                        </View>

                    </ScrollView>
                </View>
            </KeyboardAvoidingView>
        </SafeAreaView>
    )
}