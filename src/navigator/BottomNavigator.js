import React, { useContext, useState } from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Ionicons from "react-native-vector-icons/Ionicons"
import { Colors } from '../theme/color';
import Icon from 'react-native-vector-icons/FontAwesome5'
import Home from '../screens/Home/Home';
import Store from '../screens/Store/Store';
import Setting from '../screens/Setting/Setting';
import Profile from '../screens/Profile/Profile';

import style from '../theme/style';

const Tab = createBottomTabNavigator();

export default function MyTabs() {

  return (
    <Tab.Navigator
      screenOptions={{
        // BottomTabBarHeight:30,
        tabBarStyle: { height: 70,paddingTop:10,paddingBottom:10, backgroundColor: Colors.bg, borderTopColor: Colors.bg, borderTopWidth: 0 },
        tabBarShowLabel: false,
      }}>

      <Tab.Screen name="Home" component={Home}
        options={{
          tabBarShowLabel: true,
          tabBarLabel: ({ focused, color, }) => (
            <Text style={[style.s15, { color: focused ? Colors.primary : Colors.icon, }]}>Garden</Text>
          ),
          tabBarIcon: ({ focused, color }) => {
            return <Image source={focused ? require('../../assets/image/t1.png') : require('../../assets/image/t1.png')} style={{ height: 24, width: 24 }} />
          },
          headerShown: false,
        }}
      />

      {/* <Tab.Screen name="Store" component={Store}
        options={{
          tabBarShowLabel: true,
          tabBarLabel: ({ focused, color, }) => (
            <Text style={[style.s15, { color: focused ? Colors.primary : Colors.icon, }]}>Store</Text>
          ),

          tabBarIcon: ({ focused, color }) => {
            return <Image source={focused ? require('../../assets/image/t2.png') : require('../../assets/image/t2.png')} style={{ height: 24, width: 24 }} />
          },
          headerShown: false,
        }} /> */}

      <Tab.Screen name="Setting" component={Setting}
        options={{
          tabBarShowLabel: true,
          tabBarLabel: ({ focused, color, }) => (
            <Text style={[style.s15, { color: focused ? Colors.primary : Colors.icon, }]}>Settings</Text>
          ),

          tabBarIcon: ({ focused, color }) => {
            return <Image source={focused ? require('../../assets/image/t3.png') : require('../../assets/image/t3.png')} style={{ height: 24, width: 24 }} />
          },
          headerShown: false,
        }} />

      <Tab.Screen name="Profile" component={Profile}
        options={{
          tabBarShowLabel: true,
          tabBarLabel: ({ focused, color, }) => (
            <Text style={[style.s15, { color: focused ? Colors.primary : Colors.icon, }]}>Profile</Text>
          ),

          tabBarIcon: ({ focused, color }) => {
            return <Image source={focused ? require('../../assets/image/t4.png') : require('../../assets/image/t4.png')} style={{ height: 24, width: 24 }} />
          },
          headerShown: false,
        }} />


    </Tab.Navigator>
  );
}

