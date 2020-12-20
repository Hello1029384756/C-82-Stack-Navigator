import React from 'react';
import { View, Text, TextInput, Modal, KeyboardAvoidingView, StyleSheet, TouchableOpacity, Alert, ScrollView} from 'react-native';
import { createDrawerNavigator } from 'react-navigation-drawer'
import { TabNavigator } from './TabNavigator'
import SettingScreen from '../screens/SettingScreen'
import SideBar from './SideBar'

export const DrawNavigator = createDrawerNavigator({
    Home: {screen: TabNavigator},
    Setting: {screen: SettingScreen}},
    {contentComponent: SideBar},
    {initialRouteName: 'Home'
})