import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {AppNavigator} from './components/AppNavigator';

import AppLoading from 'expo-app-loading';
import {useFonts} from 'expo-font';
export default function App() {
  let [fontsloaded,error] = useFonts({
    'branding-sf':require('./assets/fonts/branding-sf-cmp-medium-italic.ttf')
  });
  if(!fontsloaded)
  return <AppLoading/>;

  return (
      <NavigationContainer>
          <AppNavigator />
     </NavigationContainer>
  );
}
