import { View, Dimensions, Text, SafeAreaView, TextInput, Switch, StatusBar, TouchableOpacity, Image, ScrollView, KeyboardAvoidingView, ImageBackground } from 'react-native'
import React, { useState, useContext } from 'react'
import style from '../../theme/style';
import { Colors } from '../../theme/color';
import { useNavigation } from '@react-navigation/native';
import { AppBar } from '@react-native-material/core';
import Icon from 'react-native-vector-icons/Ionicons';

const width = Dimensions.get('screen').width
const height = Dimensions.get('screen').height

export default function Wifi() {
    const navigation = useNavigation();
    const [ison, setIsOn] = useState(false);
    const toggle = () => setIsOn(previousState => !previousState);
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
                        title='Wifi & App'
                        titleStyle={[style.subtitle, {}]}
                        leading={<TouchableOpacity onPress={() => navigation.navigate('MyTabs')} >
                            <Icon name='arrow-back' size={24} color={Colors.txt} />
                        </TouchableOpacity>}
                    />

                    <ScrollView showsVerticalScrollIndicator={false} style={{}}>

                        <Text style={[style.subtitle,{}]}>Wifi</Text>

                        <View style={[style.box,style.shadow,style.list,{backgroundColor:Colors.bg,margin:5,marginTop:15}]}>
                            <View style={[style.icon2,{}]}>
                                <Image source={require('../../../assets/image/a23.png')} resizeMode='stretch' style={{height:28,width:28}}></Image>
                            </View>
                            <View style={{flex:1,marginLeft:15}}>
                                <Text style={[style.s16]}>Device-2215</Text>
                                <Text style={[style.s12,{color:Colors.icon}]}>Connected</Text>
                            </View>
                            <Image source={require('../../../assets/image/a25.png')} resizeMode='stretch' style={{height:26,width:26}}></Image>
                        </View>

                        <View style={[style.box,style.shadow,style.list,{backgroundColor:Colors.bg,margin:5,marginTop:15}]}>
                            <View style={[style.icon2,{}]}>
                                <Image source={require('../../../assets/image/a24.png')} resizeMode='stretch' style={{height:28,width:28}}></Image>
                            </View>
                            <View style={{flex:1,marginLeft:15}}>
                                <Text style={[style.s16]}>Device-4451</Text>
                                <Text style={[style.s12,{color:Colors.icon}]}>WPA2 / PSK</Text>
                            </View>
                            <Image source={require('../../../assets/image/a25.png')} resizeMode='stretch' style={{height:26,width:26}}></Image>
                        </View>

                        <Text style={[style.subtitle,{marginTop:20}]}>App Settings</Text>

                        <View style={[style.box, style.shadow, { backgroundColor: Colors.bg, margin: 5, marginTop: 15, }]}>
                            <View style={[style.list1, { }]}>
                                <Text style={[style.s16, {}]}>Dark Mode</Text>
                                <Switch
                                    trackColor={{ false: Colors.icon, true: Colors.primary }}
                                    thumbColor={ison ? Colors.secondary : '#f4f3f4'}
                                    ios_backgroundColor="#3e3e3e"
                                    onValueChange={toggle}
                                    value={ison}
                                />
                            </View>

                            <Text style={[style.s12, { marginTop: 10 }]}>Dark mode will arrive soon</Text>
                        </View>

                        <View style={[style.box, style.shadow, style.list, { backgroundColor: Colors.bg, margin: 5, marginTop: 15 }]}>
                            <Text style={[style.s16, { flex: 1 }]}>App Permissions</Text>
                            <Icon name='chevron-forward' size={22} color={Colors.txt}></Icon>
                        </View>

                        <TouchableOpacity onPress={()=>navigation.navigate('Language')} style={[style.box, style.shadow, style.list, { backgroundColor: Colors.bg, margin: 5, marginTop: 15 }]}>
                            <Text style={[style.s16, { flex: 1 }]}>Language: <Text style={{color:Colors.primary}}>English</Text></Text>
                            <Icon name='chevron-forward' size={22} color={Colors.txt}></Icon>
                        </TouchableOpacity>

                    </ScrollView>
                </View>
            </KeyboardAvoidingView>
        </SafeAreaView>
    )
}