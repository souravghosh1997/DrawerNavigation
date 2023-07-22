import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View } from 'react-native';
import { ThemeProvider } from 'styled-components/native';
import { NavigationContainer } from '@react-navigation/native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { SafeArea } from '../../components/Utility/safearea.utility';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

const Tab2 = createMaterialTopTabNavigator();

const HomeScreen = () => (
  <View
    style={{
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#7FFFD4',
    }}>
    <Text
      style={{
        fontSize: 40,
      }}>
      HomeScreen
    </Text>
  </View>
);
const SettingsScreen = () => (
  <View
    style={{
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#7FFFD4',
    }}>
    <Text
      style={{
        fontSize: 40,
      }}>
      SettingsScreen
    </Text>
  </View>
);
export const NavigationMaterial = () => {
  return (
    <Tab2.Navigator>
      <Tab2.Screen name="Home" component={HomeScreen} />
      <Tab2.Screen name="Settings" component={SettingsScreen} />
    </Tab2.Navigator>
  );
};
