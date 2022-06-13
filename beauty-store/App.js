import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

import HomeScreen from './src/view/screens/HomeScreen';
import DetailsScreen from './src/view/screens/DetailsScreen';

import { StatusBar } from 'expo-status-bar';
import Colors from './src/vars/colors';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar barStyle='dark-content' backgroundColor={Colors.white} />
      <Stack.Navigator screenOptions={{ header: () => null }}>
        <Stack.Screen name='Home' component={HomeScreen} />
        <Stack.Screen name='Details' component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
