import { View, Dimensions, Text, SafeAreaView, Modal, Switch, TextInput, StatusBar, TouchableOpacity, Image, ScrollView, KeyboardAvoidingView, ImageBackground } from 'react-native'
import React, { useState, useContext } from 'react'
import style from '../../theme/style';
import { Colors } from '../../theme/color';
import { useNavigation } from '@react-navigation/native';
import { AppBar, HStack } from '@react-native-material/core';
import Icon from 'react-native-vector-icons/Ionicons';

const width = Dimensions.get('screen').width
const height = Dimensions.get('screen').height

export default function AddPot() {
    const navigation = useNavigation();
    return (
        <SafeAreaView style={[style.area, {}]}>
            <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === 'ios' ? 'padding' : null} >
                <View style={[style.main, { marginTop: 10, }]}>

                    <AppBar
                        elevation={0}
                        color={Colors.bg}
                        centerTitle={true}
                        title={<Text style={[style.subtitle]}>Add plants</Text>}
                        leading={<TouchableOpacity onPress={() => navigation.navigate('MyTabs')} >
                            <Icon name='arrow-back' size={24} color={Colors.txt} />
                        </TouchableOpacity>}
                    />

                    <View>
                        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ marginTop: 12 }}>
                            <Text style={[style.b16, { color: Colors.primary }]}>All</Text>
                            <Text style={[style.b16, { color: Colors.dis, marginHorizontal: 15 }]}>Ferns</Text>
                            <Text style={[style.b16, { color: Colors.dis, }]}>Succulents</Text>
                            <Text style={[style.b16, { color: Colors.dis, marginHorizontal: 15 }]}>Herbs</Text>
                            <Text style={[style.b16, { color: Colors.dis, }]}>Tropicals</Text>
                        </ScrollView>
                    </View>

                    <ScrollView showsVerticalScrollIndicator={false} style={{ marginTop: 15 }}>

                        <View style={[style.list, {}]}>
                            <ImageBackground source={require('../../../assets/image/s16.png')} resizeMode='stretch' style={{ height: height / 3.5, flex: 1 }} />
                            <ImageBackground source={require('../../../assets/image/s20.png')} resizeMode='stretch' style={{ height: height / 3.5, flex: 1, marginLeft: 10 }} />
                        </View>

                        <View style={[style.list, { marginTop: 15 }]}>
                            <ImageBackground source={require('../../../assets/image/s15.png')} resizeMode='stretch' style={{ height: height / 3.5, flex: 1 }} />
                            <ImageBackground source={require('../../../assets/image/s13.png')} resizeMode='stretch' style={{ height: height / 3.5, flex: 1, marginLeft: 10 }} />
                        </View>

                        <View style={[style.list, { marginTop: 15,marginBottom:20 }]}>
                            <ImageBackground source={require('../../../assets/image/s21.png')} resizeMode='stretch' style={{ height: height / 3.5, flex: 1 }} />
                            <ImageBackground source={require('../../../assets/image/s22.png')} resizeMode='stretch' style={{ height: height / 3.5, flex: 1, marginLeft: 10 }} />
                        </View>

                    </ScrollView>
                </View>
            </KeyboardAvoidingView>
        </SafeAreaView>
    )
}