import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import {HomeScreen} from './HomeScreen.js';
import {WelcomeScreen} from './WelcomeScreen.js';
const Stack = createStackNavigator();

export const AppNavigator = () =>  {
  return (
    <Stack.Navigator screenOptions={{headerShown:false}}>
      <Stack.Screen name="welcome" component={WelcomeScreen} />
      <Stack.Screen name="home" component={HomeScreen} />
    </Stack.Navigator>
  );
}