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
import PotInfo from '../screens/Home/PotInfo';

const Tab = createBottomTabNavigator();

export default function MyTabs() {

  return (
    <Tab.Navigator
      screenOptions={{
        // BottomTabBarHeight:30,
        tabBarStyle: { height: 70,paddingTop:10,paddingBottom:10, backgroundColor: Colors.bg, borderTopColor: Colors.bg, borderTopWidth: 0 },
        tabBarShowLabel: false,
      }}>

      <Tab.Screen name="PotInfo" component={PotInfo}
        options={{
          tabBarShowLabel: true,
          tabBarLabel: ({ focused, color }) => (
            <Text style={[style.s15, { color: focused ? Colors.primary : Colors.icon }]}>Vườn</Text>
          ),
          tabBarIcon: ({ focused, color }) => (
            <Ionicons name="leaf" size={24} color={focused ? Colors.primary : Colors.icon} />
          ),
          headerShown: false,
        }}
      />


      <Tab.Screen name="Dashboard" component={Home}
          options={{
            tabBarShowLabel: true,
            tabBarLabel: ({ focused, color }) => (
              <Text style={[style.s15, { color: focused ? Colors.primary : Colors.icon }]}>Biểu đồ</Text>
            ),
            tabBarIcon: ({ focused, color }) => (
              <Ionicons name="stats-chart" size={24} color={focused ? Colors.primary : Colors.icon} />
            ),
            headerShown: false,
          }}
        />
      
      <Tab.Screen name="Camera" component={Home}
                options={{
                  tabBarShowLabel: true,
                  tabBarLabel: ({ focused, color }) => (
                    <Text style={[style.s15, { color: focused ? Colors.primary : Colors.icon }]}>Camera</Text>
                  ),
                  tabBarIcon: ({ focused, color }) => (
                    <Ionicons name="camera" size={24} color={focused ? Colors.primary : Colors.icon} />
                  ),
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

<Tab.Screen name="Notification" component={Setting}
  options={{
    tabBarShowLabel: true,
    tabBarLabel: ({ focused, color }) => (
      <Text
      style={[style.s15, { color: focused ? Colors.primary : Colors.icon }]}
      numberOfLines={1} 
      ellipsizeMode="tail"
    >
      Thông báo
    </Text>
    ),
    tabBarIcon: ({ focused, color }) => (
      <Ionicons name={focused ? "notifications" : "notifications-outline"} size={24} color={focused ? Colors.primary : Colors.icon} />
    ),
    headerShown: false,
  }}
/>

<Tab.Screen name="Profile" component={Profile}
  options={{
    tabBarShowLabel: true,
    tabBarLabel: ({ focused, color }) => (
      <Text style={[style.s15, { color: focused ? Colors.primary : Colors.icon }]}>Hồ sơ</Text>
    ),
    tabBarIcon: ({ focused, color }) => (
      <Ionicons name="person" size={24} color={focused ? Colors.primary : Colors.icon} />
    ),
    headerShown: false,
  }}
/>


    </Tab.Navigator>
  );
}

