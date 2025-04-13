import { View, Text, StatusBar } from 'react-native'
import React, { useState, useEffect } from 'react';
// import { createStackNavigator } from '@react-navigation/stack';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Colors } from '../theme/color';

import Login from '../screens/Login/Login';
import Signup from '../screens/Login/Signup';
import Forgot from '../screens/Login/Forgot';
import NPass from '../screens/Login/NPass';
import MyOrder from '../screens/Order/MyOrder';
import PayH from '../screens/Profile/PayH';
import MyInfo from '../screens/Profile/MyInfo';
import Profile from '../screens/Profile/Profile';
import Language from '../screens/Profile/Language';
import Account from '../screens/Setting/Account';
import Notify from '../screens/Setting/Notify';
import Wifi from '../screens/Setting/Wifi';
import Setting from '../screens/Setting/Setting';
import ACard from '../screens/Setting/ACard';
import SCard from '../screens/Setting/SCard';

import Hello from '../screens/Intro/Hello';
import Intro from '../screens/Intro/Intro';
import Intro1 from '../screens/Intro/Intro1';
import Intro2 from '../screens/Intro/Intro2';
import Intro3 from '../screens/Intro/Intro3';
import Intro4 from '../screens/Intro/Intro4';
import Intro5 from '../screens/Intro/Intro5';
import Intro6 from '../screens/Intro/Intro6';
import Otp from '../screens/Login/Otp';
import Home from '../screens/Home/Home';
import PotInfo from '../screens/Home/PotInfo';
import AddPot from '../screens/Home/AddPot';
import Store from '../screens/Store/Store';
import Plants from '../screens/Store/Plants';
import Info from '../screens/Store/Info';
import MyCart from '../screens/Store/MyCart';
import Checkout from '../screens/Store/Checkout';
import MyTabs from './BottomNavigator';
import Dashboard from '../screens/DashBoard/DashBoard';

const Stack = createNativeStackNavigator();

export default function StackNavigator() {

  return (
    <NavigationContainer>
      <Stack.Navigator>

        <Stack.Screen
          name="Intro"
          component={Intro}
          options={{ headerShown: false }} />
        <Stack.Screen
          name="Hello"
          component={Hello}
          options={{ headerShown: false }} />
        <Stack.Screen
          name="MyTabs"
          component={MyTabs}
          options={{ headerShown: false }} />

        <Stack.Screen
          name="SCard"
          component={SCard}
          options={{ headerShown: false }} />

        <Stack.Screen
          name="ACard"
          component={ACard}
          options={{ headerShown: false }} />

        <Stack.Screen
          name="Notification"
          component={Setting}
          options={{ headerShown: false }} />

        <Stack.Screen
          name="Wifi"
          component={Wifi}
          options={{ headerShown: false }} />

        <Stack.Screen
          name="Notify"
          component={Notify}
          options={{ headerShown: false }} />

        <Stack.Screen
          name="Account"
          component={Account}
          options={{ headerShown: false }} />

        <Stack.Screen
          name="Language"
          component={Language}
          options={{ headerShown: false }} />

        <Stack.Screen
          name="Profile"
          component={Profile}
          options={{ headerShown: false }} />

        <Stack.Screen
          name="MyInfo"
          component={MyInfo}
          options={{ headerShown: false }} />

        <Stack.Screen
          name="PayH"
          component={PayH}
          options={{ headerShown: false }} />

        <Stack.Screen
          name="MyOrder"
          component={MyOrder}
          options={{ headerShown: false }} />

        <Stack.Screen
          name="NPass"
          component={NPass}
          options={{ headerShown: false }} />

        <Stack.Screen
          name="Forgot"
          component={Forgot}
          options={{ headerShown: false }} />

        <Stack.Screen
          name="Signup"
          component={Signup}
          options={{ headerShown: false }} />

        <Stack.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false }} />



        <Stack.Screen
          name="Checkout"
          component={Checkout}
          options={{ headerShown: false }} />
        <Stack.Screen
          name="MyCart"
          component={MyCart}
          options={{ headerShown: false }} />
        <Stack.Screen
          name="Info"
          component={Info}
          options={{ headerShown: false }} />
        <Stack.Screen
          name="Plants"
          component={Plants}
          options={{ headerShown: false }} />
        <Stack.Screen
          name="Store"
          component={Store}
          options={{ headerShown: false }} />
        <Stack.Screen
          name="AddPot"
          component={AddPot}
          options={{ headerShown: false }} />
        <Stack.Screen
          name="PotInfo"
          component={PotInfo}
          options={{ headerShown: false }} />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }} />
        <Stack.Screen
          name="Otp"
          component={Otp}
          options={{ headerShown: false }} />
        <Stack.Screen
          name="Intro6"
          component={Intro6}
          options={{ headerShown: false }} />
        <Stack.Screen
          name="Intro5"
          component={Intro5}
          options={{ headerShown: false }} />
        <Stack.Screen
          name="Intro4"
          component={Intro4}
          options={{ headerShown: false }} />
        <Stack.Screen
          name="Intro3"
          component={Intro3}
          options={{ headerShown: false }} />
        <Stack.Screen
          name="Intro2"
          component={Intro2}
          options={{ headerShown: false }} />
        <Stack.Screen
          name="Intro1"
          component={Intro1}
          options={{ headerShown: false }} />
        <Stack.Screen
          name="DashBoard"
          component={Dashboard}
          options={{ headerShown: false }} />

      </Stack.Navigator>
    </NavigationContainer>

  )
}