import { View, Dimensions, Text, SafeAreaView, TextInput, StatusBar, TouchableOpacity, Image, ScrollView, KeyboardAvoidingView, ImageBackground } from 'react-native'
import React, { useState, useContext } from 'react'
import style from '../../theme/style';
import { Colors } from '../../theme/color';
import { useNavigation } from '@react-navigation/native';
import { AppBar } from '@react-native-material/core';
import Icon from 'react-native-vector-icons/Ionicons';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

const width = Dimensions.get('screen').width
const height = Dimensions.get('screen').height

const Tab = createMaterialTopTabNavigator();

const TopNavigator = () => {

    return (
        <Tab.Navigator
            screenOptions={{
                tabBarStyle: { backgroundColor: Colors.bg, shadowColor: Colors.bg, marginTop: 10 },
                tabBarShowLabel: true,
                swipeEnabled: false,
                tabBarScrollEnabled: false,
                tabBarIndicatorStyle: { backgroundColor: Colors.bg, },
                tabBarPressColor: Colors.bg,
                tabBarPressOpacity: 0.5,
                tabBarGap: 5

            }}>
            <Tab.Screen name="Ongoing" component={Ongoing}
                options={{
                    tabBarShowLabel: true,
                    tabBarLabel: ({ focused, color, }) => (
                        <Text style={[style.s16, { color: focused ? Colors.primary : Colors.icon, }]}>Ongoing</Text>
                    ),
                    headerShown: false,
                }} />
            <Tab.Screen name="History" component={History}
                options={{
                    tabBarShowLabel: true,
                    tabBarLabel: ({ focused, color, }) => (
                        <Text style={[style.s16, { color: focused ? Colors.primary : Colors.icon, }]}>History</Text>
                    ),
                    headerShown: false,
                }} />
            <Tab.Screen name="Voucher" component={Voucher}
                options={{
                    tabBarShowLabel: true,
                    tabBarLabel: ({ focused, color, }) => (
                        <Text style={[style.s16, { color: focused ? Colors.primary : Colors.icon, }]}>Voucher</Text>
                    ),
                    headerShown: false,
                }} />


        </Tab.Navigator>
    )
}

const Ongoing = () => {
    const navigation = useNavigation();
    const [show, setshow] = useState(false)
    const [show1, setshow1] = useState(true)

    return (
        <SafeAreaView style={[style.area, { backgroundColor: Colors.bg }]}>
            <ScrollView showsVerticalScrollIndicator={false} style={{ marginTop: 10 }}>

                <View style={[style.box1, style.shadow, { backgroundColor: Colors.bg, margin: 5 }]}>
                    <View style={[style.list]}>
                        <Image source={require('../../../assets/image/a10.png')} style={{ height: 48, width: 48 }}></Image>
                        <View style={{ flex: 1, marginLeft: 12 }}>
                            <Text style={[style.s16, {}]}>Package 4</Text>
                            <Text style={[style.s14, { color: '#989898' }]}>3 items</Text>
                        </View>
                        <Text style={[style.s14, { marginRight: 5 }]}>Preparing</Text>
                        <TouchableOpacity onPress={() => setshow(!show)} >
                            <Icon name={show ? 'chevron-up' : 'chevron-down'} size={20} color={Colors.icon}></Icon>
                        </TouchableOpacity>
                    </View>
                    {show ?
                        <View>
                            <View style={[style.divider, { marginVertical: 15 }]}></View>

                            <View style={[style.list, { marginTop: 20 }]}>
                                <View style={{ height: 10, width: 10, borderRadius: 10, backgroundColor: Colors.primary }}></View>
                                <Text style={[style.s14, { color: Colors.icon, flex: 1, marginLeft: 20 }]}>Receive Order</Text>
                                <Text style={[style.s14, { color: Colors.icon }]}>6 Nov. 2020</Text>
                            </View>
                            <View style={{height:30,width:1,backgroundColor:Colors.primary,marginLeft:4,marginVertical:-6}}></View>
                            <View style={[style.list1, { }]}>
                                <View style={{ height: 10, width: 10, borderRadius: 10, backgroundColor: Colors.primary }}></View>
                                <Text style={[style.s14, { color: Colors.icon, flex: 1, marginLeft: 20 }]}>Preparing</Text>
                                <Text style={[style.s14, { color: Colors.icon }]}>6 Nov. 2020</Text>
                            </View>
                            <View style={{height:30,width:1,backgroundColor:Colors.primary,marginLeft:4,marginVertical:-6}}></View>
                            <View style={[style.list1, {}]}>
                                <View style={{ height: 10, width: 10, borderRadius: 10, backgroundColor: Colors.primary }}></View>
                                <Text style={[style.s14, { flex: 1, marginLeft: 20 }]}>Shipping</Text>
                                <Text style={[style.s14, {}]}>7 Nov. 2020</Text>
                            </View>
                            <View style={{height:30,width:1,backgroundColor:Colors.primary,marginLeft:4,marginVertical:-6}}></View>
                            <View style={[style.list, { }]}>
                                <View style={{ height: 10, width: 10, borderRadius: 10, borderColor: Colors.primary, borderWidth: 1 }}></View>
                                <Text style={[style.s14, { marginLeft: 20 }]}>Receive</Text>
                            </View>
                        </View>
                        : null}
                </View>

                <View style={[style.box1, style.shadow, { backgroundColor: Colors.bg, margin: 5, marginTop: 15,marginBottom:20 }]}>
                    <View style={[style.list]}>
                        <Image source={require('../../../assets/image/a11.png')} style={{ height: 48, width: 48 }}></Image>
                        <View style={{ flex: 1, marginLeft: 12 }}>
                            <Text style={[style.s16, {}]}>Package 3</Text>
                            <Text style={[style.s14, { color: '#989898' }]}>7 items</Text>
                        </View>
                        <Text style={[style.s14, { marginRight: 5 }]}>Shipping</Text>
                        <TouchableOpacity onPress={() => setshow1(!show1)} >
                            <Icon name={show1 ? 'chevron-up' : 'chevron-down'} size={20} color={Colors.icon}></Icon>
                        </TouchableOpacity>
                    </View>
                    {show1 ?
                        <View>
                            <View style={[style.divider, { marginVertical: 15 }]}></View>

                            <View style={[style.list, { marginTop: 20 }]}>
                                <View style={{ height: 10, width: 10, borderRadius: 10, backgroundColor: Colors.primary }}></View>
                                <Text style={[style.s14, { color: Colors.icon, flex: 1, marginLeft: 20 }]}>Receive Order</Text>
                                <Text style={[style.s14, { color: Colors.icon }]}>6 Nov. 2020</Text>
                            </View>
                            <View style={{height:30,width:1,backgroundColor:Colors.primary,marginLeft:4,marginVertical:-6}}></View>
                            <View style={[style.list1, { }]}>
                                <View style={{ height: 10, width: 10, borderRadius: 10, backgroundColor: Colors.primary }}></View>
                                <Text style={[style.s14, { color: Colors.icon, flex: 1, marginLeft: 20 }]}>Preparing</Text>
                                <Text style={[style.s14, { color: Colors.icon }]}>6 Nov. 2020</Text>
                            </View>
                            <View style={{height:30,width:1,backgroundColor:Colors.primary,marginLeft:4,marginVertical:-6}}></View>
                            <View style={[style.list1, {}]}>
                                <View style={{ height: 10, width: 10, borderRadius: 10, backgroundColor: Colors.primary }}></View>
                                <Text style={[style.s14, { flex: 1, marginLeft: 20 }]}>Shipping</Text>
                                <Text style={[style.s14, {}]}>7 Nov. 2020</Text>
                            </View>
                            <View style={{height:30,width:1,backgroundColor:Colors.primary,marginLeft:4,marginVertical:-6}}></View>
                            <View style={[style.list, { }]}>
                                <View style={{ height: 10, width: 10, borderRadius: 10, borderColor: Colors.primary, borderWidth: 1 }}></View>
                                <Text style={[style.s14, { marginLeft: 20 }]}>Receive</Text>
                            </View>
                        </View>
                        : null}
                </View>

            </ScrollView>
        </SafeAreaView>
    )
}

const History = () => {
    const navigation = useNavigation();
    const [show, setshow] = useState(true)
    const [show1, setshow1] = useState(true)


    return (
        <SafeAreaView style={[style.area, { backgroundColor: Colors.bg }]}>
            <ScrollView showsVerticalScrollIndicator={false} style={{ marginTop: 10 }}>

                <View style={[style.box1, style.shadow, { backgroundColor: Colors.bg, margin: 5 }]}>
                    <View style={[style.list]}>
                        <Image source={require('../../../assets/image/a7.png')} style={{ height: 48, width: 48 }}></Image>
                        <View style={{ flex: 1, marginLeft: 12 }}>
                            <Text style={[style.s16, {}]}>Package 1</Text>
                            <Text style={[style.s14, { color: '#989898' }]}>2 items</Text>
                        </View>
                        <Text style={[style.s14, { marginRight: 5 }]}>Detail</Text>
                        <TouchableOpacity onPress={() => setshow(!show)} >
                            <Icon name={show ? 'chevron-up' : 'chevron-down'} size={20} color={Colors.icon}></Icon>
                        </TouchableOpacity>
                    </View>
                    {show ?
                        <View>
                            <View style={[style.divider, { marginVertical: 15 }]}></View>
                            <View style={[style.list]}>
                                <Image source={require('../../../assets/image/a9.png')} style={{ height: 48, width: 48 }}></Image>
                                <View style={{ flex: 1, marginLeft: 12 }}>
                                    <Text style={[style.s16, {}]}>Euonymus</Text>
                                    <Text style={[style.s14, { color: '#989898' }]}>Small, Indoor</Text>
                                </View>
                                <View style={{ alignItems: 'flex-end' }}>
                                    <Text style={[style.s14, { marginRight: 5 }]}>$ 12.00</Text>
                                    <Text style={[style.s12, { marginRight: 5, color: Colors.icon }]}>Qty: 1.0</Text>
                                </View>
                            </View>

                            <View style={[style.list1, { marginTop: 20 }]}>
                                <Text style={[style.s14, { color: '#989898' }]}>Subtotal</Text>
                                <Text style={[style.s14, { color: '#989898' }]}>$ 117.00</Text>
                            </View>
                            <View style={[style.list1, { marginTop: 10 }]}>
                                <Text style={[style.s14, { color: '#989898' }]}>Charge</Text>
                                <Text style={[style.s14, { color: '#989898' }]}>$ 0.00</Text>
                            </View>
                            <View style={[style.list1, { marginTop: 10 }]}>
                                <Text style={[style.s14, { color: '#989898' }]}>Shipping fee</Text>
                                <Text style={[style.s14, { color: '#989898' }]}>$ 17.55</Text>
                            </View>
                            <View style={[style.list1, { marginTop: 10 }]}>
                                <Text style={[style.s14, { color: '#989898' }]}>Payment</Text>
                                <Text style={[style.s14, { color: '#989898' }]}>Visa Debit</Text>
                            </View>
                            <View style={[style.list1, { marginTop: 10 }]}>
                                <Text style={[style.b16, {}]}>Total</Text>
                                <Text style={[style.b16, {}]}>$ 134.55</Text>
                            </View>
                        </View>
                        : null}
                </View>

                <View style={[style.box1, style.shadow, { backgroundColor: Colors.bg, margin: 5, marginTop: 15,marginBottom:20 }]}>
                    <View style={[style.list]}>
                        <Image source={require('../../../assets/image/a8.png')} style={{ height: 48, width: 48 }}></Image>
                        <View style={{ flex: 1, marginLeft: 12 }}>
                            <Text style={[style.s16, {}]}>Package 2</Text>
                            <Text style={[style.s14, { color: '#989898' }]}>1 items</Text>
                        </View>
                        <Text style={[style.s14, { marginRight: 5 }]}>Detail</Text>
                        <TouchableOpacity onPress={() => setshow1(!show1)} >
                            <Icon name={show1 ? 'chevron-up' : 'chevron-down'} size={20} color={Colors.icon}></Icon>
                        </TouchableOpacity>
                    </View>
                    {show1 ?
                        <View>
                            <View style={[style.divider, { marginVertical: 15 }]}></View>
                            <View style={[style.list]}>
                                <Image source={require('../../../assets/image/a9.png')} style={{ height: 48, width: 48 }}></Image>
                                <View style={{ flex: 1, marginLeft: 12 }}>
                                    <Text style={[style.s16, {}]}>Euonymus</Text>
                                    <Text style={[style.s14, { color: '#989898' }]}>Small, Indoor</Text>
                                </View>
                                <View style={{ alignItems: 'flex-end' }}>
                                    <Text style={[style.s14, { marginRight: 5 }]}>$ 12.00</Text>
                                    <Text style={[style.s12, { marginRight: 5, color: Colors.icon }]}>Qty: 1.0</Text>
                                </View>
                            </View>

                            <View style={[style.list1, { marginTop: 20 }]}>
                                <Text style={[style.s14, { color: '#989898' }]}>Subtotal</Text>
                                <Text style={[style.s14, { color: '#989898' }]}>$ 117.00</Text>
                            </View>
                            <View style={[style.list1, { marginTop: 10 }]}>
                                <Text style={[style.s14, { color: '#989898' }]}>Charge</Text>
                                <Text style={[style.s14, { color: '#989898' }]}>$ 0.00</Text>
                            </View>
                            <View style={[style.list1, { marginTop: 10 }]}>
                                <Text style={[style.s14, { color: '#989898' }]}>Shipping fee</Text>
                                <Text style={[style.s14, { color: '#989898' }]}>$ 17.55</Text>
                            </View>
                            <View style={[style.list1, { marginTop: 10 }]}>
                                <Text style={[style.s14, { color: '#989898' }]}>Payment</Text>
                                <Text style={[style.s14, { color: '#989898' }]}>Visa Debit</Text>
                            </View>
                            <View style={[style.list1, { marginTop: 10 }]}>
                                <Text style={[style.b16, {}]}>Total</Text>
                                <Text style={[style.b16, {}]}>$ 134.55</Text>
                            </View>
                        </View>
                        : null}
                </View>

            </ScrollView>
        </SafeAreaView>
    )
}

const Voucher = () => {
    const navigation = useNavigation();

    return (
        <SafeAreaView style={[style.area, { backgroundColor: Colors.bg }]}>
            <ScrollView showsVerticalScrollIndicator={false} style={{ marginTop: 10 }}>

                <View style={[style.box1, style.shadow, style.list, { margin: 5, backgroundColor: Colors.bg }]}>
                    <Image source={require('../../../assets/image/a4.png')} resizeMode='stretch' style={{ height: 105, width: width / 2.2 }}></Image>
                    <View style={[style.boxo, { marginLeft: 10, height: 104, flex: 1, justifyContent: 'center', alignItems: 'center' }]}>
                        <Text style={[style.s12, { color: Colors.dis }]}>Expiry: </Text>
                        <Text style={[style.b14, { color: Colors.txt }]}>30 JAN 2020</Text>
                        <Text style={[style.s12, { color: Colors.icon, textAlign: 'center', marginTop: 3 }]}>Exclude seeds & fertilizer</Text>
                    </View>
                </View>

                <View style={[style.box1, style.shadow, style.list, { margin: 5, backgroundColor: Colors.bg, marginTop: 15 }]}>
                    <Image source={require('../../../assets/image/a5.png')} resizeMode='stretch' style={{ height: 105, width: width / 2.2 }}></Image>
                    <View style={[style.boxo, { marginLeft: 10, height: 104, flex: 1, justifyContent: 'center', alignItems: 'center' }]}>
                        <Text style={[style.s12, { color: Colors.dis }]}>Expiry: </Text>
                        <Text style={[style.b14, { color: Colors.txt }]}>30 MAR 2020</Text>
                        <Text style={[style.s12, { color: Colors.icon, textAlign: 'center', marginTop: 3 }]}>Exclude seeds & fertilizer</Text>
                    </View>
                </View>

                <View style={[style.box1, style.shadow, style.list, { margin: 5, backgroundColor: Colors.bg, marginTop: 15, marginBottom: 20 }]}>
                    <Image source={require('../../../assets/image/a6.png')} resizeMode='stretch' style={{ height: 105, width: width / 2.2 }}></Image>
                    <View style={[style.boxo, { marginLeft: 10, height: 104, flex: 1, justifyContent: 'center', alignItems: 'center' }]}>
                        <Text style={[style.s12, { color: Colors.dis }]}>Expiry: </Text>
                        <Text style={[style.b14, { color: Colors.txt }]}>30 APR 2020</Text>
                        <Text style={[style.s12, { color: Colors.icon, textAlign: 'center', marginTop: 3 }]}>Exclude seeds & fertilizer</Text>
                    </View>
                </View>

            </ScrollView>
        </SafeAreaView>
    )
}

export default function MyOrder() {
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
                        title='My Orders'
                        titleStyle={[style.subtitle]}
                        centerTitle={true}
                        leading={<TouchableOpacity onPress={() => navigation.navigate('MyTabs')} >
                            <Icon name='arrow-back' size={24} color={Colors.txt} />
                        </TouchableOpacity>}
                    />

                    <TopNavigator></TopNavigator>

                </View>
            </KeyboardAvoidingView>
        </SafeAreaView>
    )
}