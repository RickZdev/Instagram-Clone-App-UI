import 'react-native-gesture-handler';
import React from 'react';
import BottomTab from './src/navigations/BottomTab';
import {NavigationContainer} from '@react-navigation/native';
import { StatusBar } from 'react-native';

const App = () => {
  StatusBar.setBarStyle('dark-content');
  StatusBar.setBackgroundColor('white');

  return (
    <NavigationContainer>
      <BottomTab />
    </NavigationContainer>
  );
};

export default App;
