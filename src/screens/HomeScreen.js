import {View, Text, Image} from 'react-native';
import React from 'react';
import CustomCircle from '../components/CustomCircle';
import {HeartIcon} from 'react-native-heroicons/solid';
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import COLORS from '../global/COLORS';
import Stories from '../components/Stories';
import Posts from '../components/Posts';

const HomeScreen = () => {
  return (
    <View className="flex-1 bg-white pb-[182px]">
      {/* header */}
      <View className='flex-row justify-between pt-3 px-3'>
        <Image
          source={require('../assets/images/ig-logo.png')}
          resizeMode='contain'
          className='w-32 h-12'
        />
        <View className='flex-row items-center space-x-5'>
          <Feather name='plus-square' size={27} color={COLORS.black}/>
          <Feather name='heart' size={27} color={COLORS.black}/>
          <Image
            source={require('../assets/images/ig-share.png')}
            resizeMode='contain'
            className='w-6 h-6'
          />
        </View>
      </View>
      {/* stories */}
      <Stories />
      <Posts />
    </View>
  );
};

export default HomeScreen;
