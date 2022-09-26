import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
  HomeIcon,
  UserIcon,
  VideoCameraIcon,
  HeartIcon,
} from 'react-native-heroicons/outline';
import Foundation from 'react-native-vector-icons/Foundation';
import Feather from 'react-native-vector-icons/Feather';

import HomeScreen from '../screens/HomeScreen';
import SearchScreen from '../screens/SearchScreen';
import ReelScreen from '../screens/ReelScreen';
import NotificationScreen from '../screens/NotificationScreen';
import ProfileScreen from '../screens/ProfileScreen';
import COLORS from '../global/COLORS';
import {Image, View} from 'react-native';

const Tab = createBottomTabNavigator();

const BottomTab = () => {
  return (
    <Tab.Navigator
      initialRouteName={HomeScreen}
      screenOptions={{
        tabBarStyle: {
          backgroundColor: COLORS.white,
          height: 70,
          display: 'flex',
          justifyContent: 'flex-start',
          alignItems: 'flex-start',
          paddingBottom: 20
        },
        headerShown: false,
        tabBarShowLabel: false,
        tabBarActiveTintColor: 'black',
        tabBarInactiveTintColor: 'black',
        tabBarHideOnKeyboard: true,
        tabBarIconStyle: {size: 42},
      }}>
      <Tab.Screen name="HomeScreen" component={HomeScreen} 
        options={{
          tabBarIcon: ({color, size}) => (
            <Foundation name="home" color={color} size={size} />
          ),
          tabBarItemStyle: {borderTopColor: 2},
        }}
      />

      <Tab.Screen name="SearchScreen" component={SearchScreen} 
        options={{
          tabBarIcon: ({color, size}) => (
            <Feather name="search" color={color} size={size} />
          ),
        }}
      />

      <Tab.Screen name="ReelScreen" component={ReelScreen} 
        options={{
          tabBarIcon: () => (
            <Image
              source={require('../assets/images/ig-reels.png')}
              resizeMode="contain"
              className="w-6 h-6"
            />
          ),
        }}
      />

      <Tab.Screen name="NotificationScreen" component={NotificationScreen}
        options={{
          tabBarIcon: ({color, size}) => (
            <Feather name="heart" color={color} size={size} />
          ),
        }}
      />

      <Tab.Screen name="ProfileScreen" component={ProfileScreen}
        options={{
          tabBarIcon: () => (
            <Image
              source={require('../assets/images/pogi.jpg')}
              resizeMode="contain"
              className="w-7 h-7 rounded-full"
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTab;
