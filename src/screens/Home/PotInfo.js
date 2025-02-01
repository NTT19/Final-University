import { View, Dimensions, Text, SafeAreaView, Modal, Switch, TextInput, StatusBar, TouchableOpacity, Image, ScrollView, KeyboardAvoidingView, ImageBackground } from 'react-native'
import React, { useState, useContext } from 'react'
import style from '../../theme/style';
import { Colors } from '../../theme/color';
import { useNavigation } from '@react-navigation/native';
import { AppBar, HStack } from '@react-native-material/core';
import Icon from 'react-native-vector-icons/Ionicons';

const width = Dimensions.get('screen').width
const height = Dimensions.get('screen').height

export default function PotInfo() {
    const navigation = useNavigation();
    const [visible, setVisible] = useState(false)
    const [visible1, setVisible1] = useState(false)
    const [visible2, setVisible2] = useState(false)
    const [visible3, setVisible3] = useState(false)
    const [visible4, setVisible4] = useState(false)
    const [visible5, setVisible5] = useState(false)

    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);

    const [isEnabled1, setIsEnabled1] = useState(false);
    const toggleSwitch1 = () => setIsEnabled1(previousState => !previousState);

    return (
        <SafeAreaView style={[style.area, {}]}>
            <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === 'ios' ? 'padding' : null} >
                <View style={[style.main, { marginTop: 10, }]}>

                    <AppBar
                        elevation={0}
                        color={Colors.bg}
                        leading={<TouchableOpacity onPress={() => navigation.navigate('MyTabs')} >
                            <Icon name='arrow-back' size={24} color={Colors.txt} />
                        </TouchableOpacity>}
                        trailing={<HStack>
                            <TouchableOpacity onPress={() => setVisible(true)}>
                                <Image source={require('../../../assets/image/s17.png')} resizeMode='stretch' style={{ height: 24, width: 24 }} />
                            </TouchableOpacity>
                            <Icon name='trash-outline' size={24} color={Colors.txt} style={{ marginHorizontal: 7 }} />
                            <Icon name='remove' size={24} color={Colors.primary} />
                        </HStack>}
                    />

                    <ScrollView showsVerticalScrollIndicator={false} style={{ marginTop: 15 }}>

                        <Text style={[style.s42]}>Ailanthus</Text>

                        <Text style={[style.r20, { color: Colors.dis }]}>Robust and dramatic,
                            with no leaves.</Text>

                        <View style={[style.box1, style.shadow, style.list, { margin: 5, marginTop: 15 }]}>
                            <View style={{ flex: 1 }}>
                                <View style={[style.list]}>
                                    <Icon name='sunny-outline' size={20} color={Colors.primary} />
                                    <Text style={[style.s14, { marginLeft: 7 }]}>Sun 8 - 12 hrs</Text>
                                </View>
                                <View style={[style.list, { marginTop: 7 }]}>
                                    <Icon name='water-outline' size={20} color={Colors.primary} />
                                    <Text style={[style.s14, { marginLeft: 7 }]}>Every 7 days</Text>
                                </View>
                                <View style={[style.list, { marginTop: 7 }]}>
                                    <Icon name='thermometer-outline' size={20} color={Colors.primary} />
                                    <Text style={[style.s14, { marginLeft: 7 }]}>Best at 18°C - 30°C</Text>
                                </View>
                                <View style={[style.list, { marginTop: 7 }]}>
                                    <Image source={require('../../../assets/image/s18.png')} resizeMode='stretch' style={{ height: 20, width: 20 }} />
                                    <Text style={[style.s14, { marginLeft: 7 }]}>Sprouts in: 7 - 14 days</Text>
                                </View>
                                <View style={[style.list, { marginTop: 7 }]}>
                                    <Icon name='heart-outline' size={20} color={Colors.primary} />
                                    <Text style={[style.s14, { marginLeft: 7 }]}>Enjoy for: 90 - 112 days</Text>
                                </View>
                            </View>
                            <Image source={require('../../../assets/image/s19.png')} resizeMode='stretch' style={{ height: 180, width: 90 }} />
                        </View>

                        <View style={[style.list, { marginTop: 20, justifyContent: 'space-around' }]}>
                            <TouchableOpacity onPress={() => setVisible2(true)} style={{ alignItems: 'center' }}>
                                <Text style={[style.b14]}>Water</Text>
                                <Image source={require('../../../assets/image/s11.png')} resizeMode='stretch' style={{ height: 68, width: 68, marginTop: 15 }} />
                                <Text style={[style.b16, { marginTop: 15 }]}>2 DAYS</Text>
                                <Text style={[style.b12, { color: Colors.icon, marginTop: 10 }]}>Every 7 Days</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => setVisible4(true)} style={{ alignItems: 'center' }}>
                                <Text style={[style.b14]}>Light</Text>
                                <Image source={require('../../../assets/image/s12.png')} resizeMode='stretch' style={{ height: 68, width: 68, marginTop: 15 }} />
                                <Text style={[style.b16, { marginTop: 15 }]}>65%</Text>
                                <Text style={[style.b12, { color: Colors.icon, marginTop: 10 }]}>18HRS a day</Text>
                            </TouchableOpacity>
                        </View>

                        <Text style={[style.b14, { textAlign: 'center', marginTop: 20 }]}>Days planted</Text>
                        <View style={{ height: 10, backgroundColor: Colors.lines1, borderRadius: 5, width: width / 1.5, alignSelf: 'center', marginTop: 15 }}>
                            <View style={{ height: 10, backgroundColor: Colors.primary, borderRadius: 5, width: width / 7 }}></View>
                        </View>
                        <Text style={[style.b17, { color: Colors.primary, marginTop: 5, marginLeft: 50, marginBottom: 20 }]}>15 Days</Text>

                    </ScrollView>

                    <Modal transparent={true}
                        visible={visible}>
                        <View style={{
                            // width: width,
                            flex: 1,
                            backgroundColor: '#000000aa',
                            transparent: 'true'
                        }}>
                            <View style={[style.modalcontainer, { backgroundColor: Colors.bg, width: width - 60, marginVertical: 210 }]}>
                                <View style={{ marginTop: 10, marginHorizontal: 20 }}>

                                    <Text style={[style.subtitle, { textAlign: 'center', }]}>Plant Name</Text>

                                    <View style={[style.txtinput, { marginTop: 15, }]}>
                                        <TextInput placeholder='Name'
                                            placeholderTextColor={Colors.icon}
                                            selectionColor={Colors.primary}
                                            style={[style.s16, { color: Colors.txt, flex: 1 }]}
                                        />
                                    </View>

                                    <View style={[style.list, { marginTop: 20 }]}>
                                        <TouchableOpacity onPress={() => setVisible(false)} style={[style.btno, { flex: 1 }]}>
                                            <Text style={[style.btntxt, { color: Colors.primary }]}>Cancel</Text>
                                        </TouchableOpacity>
                                        <TouchableOpacity onPress={() => setVisible1(true)} style={[style.btn, { flex: 1, marginLeft: 10 }]}>

                                            <Modal transparent={true}
                                                visible={visible1}>
                                                <View style={{
                                                    // width: width,
                                                    flex: 1,
                                                    backgroundColor: '#000000aa',
                                                    transparent: 'true'
                                                }}>
                                                    <View style={[style.modalcontainer, { backgroundColor: Colors.bg, width: width - 60, marginVertical: 210 }]}>
                                                        <View style={{ marginTop: 10, marginHorizontal: 20 }}>

                                                            <Text style={[style.subtitle, { textAlign: 'center', }]}>Done Pot</Text>

                                                            <Text style={[style.s14, { color: Colors.dis, marginTop: 12 }]}>Your Ailanthus is still very young!</Text>
                                                            <Text style={[style.s14, { color: Colors.dis, marginTop: 10 }]}>Are you sure want to finish plant?</Text>

                                                            <View style={[style.list, { marginTop: 20 }]}>
                                                                <TouchableOpacity onPress={() => setVisible(false)} style={[style.btno, { flex: 1 }]}>
                                                                    <Text style={[style.btntxt, { color: Colors.primary }]}>Cancel</Text>
                                                                </TouchableOpacity>
                                                                <TouchableOpacity onPress={() => { setVisible1(false), setVisible(false) }} style={[style.btn, { flex: 1, marginLeft: 10 }]}>
                                                                    <Text style={[style.btntxt, {}]}>Save</Text>
                                                                </TouchableOpacity>
                                                            </View>

                                                        </View>

                                                    </View>
                                                </View>
                                            </Modal>

                                            <Text style={[style.btntxt, {}]}>Save</Text>
                                        </TouchableOpacity>
                                    </View>

                                </View>

                            </View>
                        </View>
                    </Modal>

                    <Modal transparent={true}
                        visible={visible2}>
                        <View style={{
                            // width: width,
                            flex: 1,
                            backgroundColor: '#000000aa',
                            transparent: 'true'
                        }}>
                            <View style={[style.modalcontainer, { backgroundColor: Colors.bg, width: width - 60, marginVertical: 50 }]}>
                                <View style={{ marginHorizontal: 15 }}>

                                    <View style={[style.list1]}>
                                        <View></View>
                                        <Text style={[style.subtitle, { textAlign: 'center', }]}>Water Customize</Text>
                                        <TouchableOpacity onPress={() => setVisible2(false)}>
                                            <Icon name='close' size={24} color={Colors.txt} />
                                        </TouchableOpacity>
                                    </View>

                                    <View style={[style.list, { marginTop: 10 }]}>
                                        <Text style={[style.subtitle, { flex: 1 }]}>Default Settings</Text>
                                        <Switch
                                            trackColor={{ false: Colors.disable, true: Colors.primary }}
                                            thumbColor={isEnabled ? Colors.secondary : '#f4f3f4'}
                                            ios_backgroundColor="#3e3e3e"
                                            onValueChange={toggleSwitch}
                                            value={isEnabled}
                                        />
                                    </View>

                                    <Text style={[style.s12, { marginTop: 5 }]}>Recommend settings for your plant mode. Turn off to customize</Text>

                                    <View style={[style.divider, { marginVertical: 12 }]}></View>

                                    <Text style={[style.b16]}>Pump Timer <Text style={[style.s14, { color: Colors.icon }]}>(hours/day)</Text></Text>

                                    <View style={{ height: 4, backgroundColor: Colors.lines1, marginTop: 20, borderRadius: 5, justifyContent: 'center' }}>
                                        <View style={[style.list, {}]}>
                                            <View style={{ height: 4, backgroundColor: '#34BDF8', width: width / 3 }}></View>
                                            <View style={[style.icon, { height: 24, width: 24, backgroundColor: '#34BDF8' }]}>
                                                <Text style={[style.s14, { color: Colors.secondary }]}>8</Text>
                                            </View>
                                        </View>
                                    </View>

                                    <Text style={[style.b16, { marginTop: 15 }]}>Pump Cycle </Text>

                                    <View style={[style.list, { marginTop: 15 }]}>
                                        <Text style={[style.s16, { flex: 1 }]}>On</Text>
                                        <View style={[style.list, { flex: 1 }]}>
                                            <View style={[style.icon1]}>
                                                <Icon name='remove' size={12} color={Colors.icon} />
                                            </View>
                                            <Text style={[style.b16, { marginHorizontal: 10 }]}>1</Text>
                                            <View style={[style.icon1]}>
                                                <Icon name='add' size={12} color={Colors.icon} />
                                            </View>
                                            <Text style={[style.s14, { color: Colors.icon, marginLeft: 10 }]}>(min)</Text>
                                        </View>

                                    </View>

                                    <View style={[style.list, { marginTop: 15 }]}>
                                        <Text style={[style.s16, { flex: 1 }]}>Rest</Text>
                                        <View style={[style.list, { flex: 1 }]}>
                                            <View style={[style.icon1]}>
                                                <Icon name='remove' size={12} color={Colors.icon} />
                                            </View>
                                            <Text style={[style.b16, { marginHorizontal: 10 }]}>1</Text>
                                            <View style={[style.icon1]}>
                                                <Icon name='add' size={12} color={Colors.icon} />
                                            </View>
                                            <Text style={[style.s14, { color: Colors.icon, marginLeft: 10 }]}>(hr)</Text>
                                        </View>
                                    </View>

                                    <Text style={[style.b16, { marginTop: 15 }]}>Start Time</Text>

                                    <View style={[style.list, { justifyContent: 'space-around', marginTop: 15 }]}>
                                        <View style={{ alignItems: 'center' }}>
                                            <Icon name='caret-up' size={18} color={Colors.txt} />
                                            <Text style={[style.b16, { color: Colors.icon }]}>7</Text>
                                            <View style={{ height: 1, width: 22, backgroundColor: Colors.txt, marginVertical: 5 }}></View>
                                            <Text style={[style.b16, {}]}>8</Text>
                                            <View style={{ height: 1, width: 22, backgroundColor: Colors.txt, marginVertical: 5 }}></View>
                                            <Text style={[style.b16, { color: Colors.icon }]}>9</Text>
                                        </View>
                                        <View>
                                            <View style={{ height: 4, width: 4, backgroundColor: Colors.txt, borderRadius: 5 }}></View>
                                            <View style={{ height: 4, width: 4, backgroundColor: Colors.txt, borderRadius: 5, marginTop: 5 }}></View>
                                        </View>
                                        <View style={{ alignItems: 'center' }}>
                                            <Icon name='caret-up' size={18} color={Colors.txt} />
                                            <Text style={[style.b16, { color: Colors.icon }]}>29</Text>
                                            <View style={{ height: 1, width: 22, backgroundColor: Colors.txt, marginVertical: 5 }}></View>
                                            <Text style={[style.b16, {}]}>30</Text>
                                            <View style={{ height: 1, width: 22, backgroundColor: Colors.txt, marginVertical: 5 }}></View>
                                            <Text style={[style.b16, { color: Colors.icon }]}>31</Text>
                                        </View>
                                        <View style={{ alignItems: 'center' }}>
                                            <Icon name='caret-up' size={18} color={Colors.txt} />
                                            <Text style={[style.b16, { color: Colors.icon }]}></Text>
                                            <View style={{ height: 1, width: 22, backgroundColor: Colors.txt, marginVertical: 5 }}></View>
                                            <Text style={[style.b16, {}]}>AM</Text>
                                            <View style={{ height: 1, width: 22, backgroundColor: Colors.txt, marginVertical: 5 }}></View>
                                            <Text style={[style.b16, { color: Colors.icon }]}>PM</Text>
                                        </View>
                                    </View>

                                    <TouchableOpacity onPress={() => setVisible3(true)}
                                        style={[style.btn, { marginTop: 20 }]}>

                                        <Modal transparent={true}
                                            visible={visible3}>
                                            <View style={{
                                                // width: width,
                                                flex: 1,
                                                backgroundColor: '#000000aa',
                                                transparent: 'true'
                                            }}>
                                                <View style={[style.modalcontainer, { backgroundColor: Colors.bg, width: width - 60, marginVertical: 250 }]}>
                                                    <View style={{ marginTop: 10, marginHorizontal: 20 }}>

                                                        <Text style={[style.b16, {}]}>Are you sure want to save your setting?</Text>

                                                        <View style={[style.list, { marginTop: 20 }]}>
                                                            <TouchableOpacity onPress={() => setVisible3(false)} style={[style.btno, { flex: 1 }]}>
                                                                <Text style={[style.btntxt, { color: Colors.primary }]}>No</Text>
                                                            </TouchableOpacity>
                                                            <TouchableOpacity onPress={() => { setVisible3(false), setVisible2(false) }} style={[style.btn, { flex: 1, marginLeft: 10 }]}>
                                                                <Text style={[style.btntxt, {}]}>YES</Text>
                                                            </TouchableOpacity>
                                                        </View>

                                                    </View>

                                                </View>
                                            </View>
                                        </Modal>

                                        <Text style={[style.btntxt, {}]}>Save</Text>
                                    </TouchableOpacity>

                                </View>

                            </View>
                        </View>
                    </Modal>

                    <Modal transparent={true}
                        visible={visible4}>
                        <View style={{
                            // width: width,
                            flex: 1,
                            backgroundColor: '#000000aa',
                            transparent: 'true'
                        }}>
                            <View style={[style.modalcontainer, { backgroundColor: Colors.bg, width: width - 60, marginVertical: 40 }]}>
                                <View style={{ marginHorizontal: 15 }}>

                                    <View style={[style.list1]}>
                                        <View></View>
                                        <Text style={[style.subtitle, { textAlign: 'center', }]}>Light Customize</Text>
                                        <TouchableOpacity onPress={() => setVisible4(false)}>
                                            <Icon name='close' size={24} color={Colors.txt} />
                                        </TouchableOpacity>
                                    </View>

                                    <View style={[style.list, { marginTop: 10 }]}>
                                        <Text style={[style.subtitle, { flex: 1 }]}>Default Settings</Text>
                                        <Switch
                                            trackColor={{ false: Colors.disable, true: Colors.primary }}
                                            thumbColor={isEnabled1 ? Colors.secondary : '#f4f3f4'}
                                            ios_backgroundColor="#3e3e3e"
                                            onValueChange={toggleSwitch1}
                                            value={isEnabled1}
                                        />
                                    </View>

                                    <Text style={[style.s12, { marginTop: 5 }]}>Recommend settings for your plant mode. Turn off to customize</Text>

                                    <View style={[style.divider, { marginVertical: 12 }]}></View>

                                    <Text style={[style.b16]}>Set Timer <Text style={[style.s14, { color: Colors.icon }]}>(hours/day)</Text></Text>

                                    <View style={[style.list, { marginTop: 15 }]}>
                                        <Text style={[style.s16, { flex: 1 }]}>Start</Text>
                                        <Text style={[style.s16, { marginRight: 5 }]}>8:30 AM</Text>
                                        <Icon name='chevron-up' size={18} color={Colors.txt} />
                                    </View>

                                    <View style={[style.list, { justifyContent: 'space-around', marginTop: 15 }]}>
                                        <View style={{ alignItems: 'center' }}>
                                            <Icon name='caret-up' size={18} color={Colors.txt} />
                                            <Text style={[style.b16, { color: Colors.icon }]}>7</Text>
                                            <View style={{ height: 1, width: 22, backgroundColor: Colors.txt, marginVertical: 5 }}></View>
                                            <Text style={[style.b16, {}]}>8</Text>
                                            <View style={{ height: 1, width: 22, backgroundColor: Colors.txt, marginVertical: 5 }}></View>
                                            <Text style={[style.b16, { color: Colors.icon }]}>9</Text>
                                        </View>
                                        <View>
                                            <View style={{ height: 4, width: 4, backgroundColor: Colors.txt, borderRadius: 5 }}></View>
                                            <View style={{ height: 4, width: 4, backgroundColor: Colors.txt, borderRadius: 5, marginTop: 5 }}></View>
                                        </View>
                                        <View style={{ alignItems: 'center' }}>
                                            <Icon name='caret-up' size={18} color={Colors.txt} />
                                            <Text style={[style.b16, { color: Colors.icon }]}>29</Text>
                                            <View style={{ height: 1, width: 22, backgroundColor: Colors.txt, marginVertical: 5 }}></View>
                                            <Text style={[style.b16, {}]}>30</Text>
                                            <View style={{ height: 1, width: 22, backgroundColor: Colors.txt, marginVertical: 5 }}></View>
                                            <Text style={[style.b16, { color: Colors.icon }]}>31</Text>
                                        </View>
                                        <View style={{ alignItems: 'center' }}>
                                            <Icon name='caret-up' size={18} color={Colors.txt} />
                                            <Text style={[style.b16, { color: Colors.icon }]}></Text>
                                            <View style={{ height: 1, width: 22, backgroundColor: Colors.txt, marginVertical: 5 }}></View>
                                            <Text style={[style.b16, {}]}>AM</Text>
                                            <View style={{ height: 1, width: 22, backgroundColor: Colors.txt, marginVertical: 5 }}></View>
                                            <Text style={[style.b16, { color: Colors.icon }]}>PM</Text>
                                        </View>
                                    </View>

                                    <View style={[style.list, { marginTop: 15 }]}>
                                        <Text style={[style.s16, { flex: 1 }]}>End</Text>
                                        <Text style={[style.s16, { marginRight: 5 }]}>11:30 AM</Text>
                                        <Icon name='chevron-down' size={18} color={Colors.txt} />
                                    </View>

                                    <Text style={[style.b16, { marginTop: 10 }]}>Spectrum <Text style={[style.s14, { color: Colors.icon }]}>(nm)</Text></Text>

                                    <View style={[style.list, { marginTop: 15 }]}>
                                        <Text style={[style.s16]}>Red</Text>
                                        <View style={{ height: 4, backgroundColor: Colors.lines1, marginLeft: 20, flex: 1,justifyContent:'center' }}>
                                            <View style={[style.list]}>
                                                <View style={{height: 4, backgroundColor: Colors.primary,width:width/6.5}}></View>
                                                <View style={[style.icon2,{height:18,width:18,backgroundColor:Colors.primary}]}></View>
                                            </View>
                                        </View>
                                    </View>

                                    <View style={[style.list, { marginTop: 15 }]}>
                                        <Text style={[style.s16]}>Blue</Text>
                                        <View style={{ height: 4, backgroundColor: Colors.lines1, marginLeft: 20, flex: 1,justifyContent:'center' }}>
                                            <View style={[style.list]}>
                                                <View style={{height: 4, backgroundColor: '#4C91F8',width:width/3.5}}></View>
                                                <View style={[style.icon2,{height:18,width:18,backgroundColor:'#4C91F8'}]}></View>
                                            </View>
                                        </View>
                                    </View>

                                    <View style={[style.list, { marginTop: 15 }]}>
                                        <Text style={[style.s16]}>Yellow</Text>
                                        <View style={{ height: 4, backgroundColor: Colors.lines1, marginLeft: 20, flex: 1,justifyContent:'center' }}>
                                            <View style={[style.list]}>
                                                <View style={{height: 4, backgroundColor: '#F8C84C',width:width/5.5}}></View>
                                                <View style={[style.icon2,{height:18,width:18,backgroundColor:'#F8C84C'}]}></View>
                                            </View>
                                        </View>
                                    </View>


                                    <TouchableOpacity onPress={() => setVisible5(true)}
                                        style={[style.btn, { marginTop: 20 }]}>

                                        <Modal transparent={true}
                                            visible={visible5}>
                                            <View style={{
                                                // width: width,
                                                flex: 1,
                                                backgroundColor: '#000000aa',
                                                transparent: 'true'
                                            }}>
                                                <View style={[style.modalcontainer, { backgroundColor: Colors.bg, width: width - 60, marginVertical: 250 }]}>
                                                    <View style={{ marginTop: 10, marginHorizontal: 20 }}>

                                                        <Text style={[style.b16, {}]}>Are you sure want to save your setting?</Text>

                                                        <View style={[style.list, { marginTop: 20 }]}>
                                                            <TouchableOpacity onPress={() => setVisible5(false)} style={[style.btno, { flex: 1 }]}>
                                                                <Text style={[style.btntxt, { color: Colors.primary }]}>No</Text>
                                                            </TouchableOpacity>
                                                            <TouchableOpacity onPress={() => { setVisible5(false), setVisible4(false) }} style={[style.btn, { flex: 1, marginLeft: 10 }]}>
                                                                <Text style={[style.btntxt, {}]}>YES</Text>
                                                            </TouchableOpacity>
                                                        </View>

                                                    </View>

                                                </View>
                                            </View>
                                        </Modal>

                                        <Text style={[style.btntxt, {}]}>Save</Text>
                                    </TouchableOpacity>

                                </View>

                            </View>
                        </View>
                    </Modal>

                </View>
            </KeyboardAvoidingView>
        </SafeAreaView>
    )
}