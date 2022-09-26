import { View, Text, Image } from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';

const CustomCircle = ({ image, isLive}) => {
  return (
    <LinearGradient
      colors={ isLive ? ['#5B00C4', '#D00049'] : ['#9E2692', '#FAA958']}
      className="w-[70px] h-[70px] rounded-full p-[2px]"
    >
      <View className="bg-white w-full h-full rounded-full border-white overflow-hidden border-[3px] justify-center items-center">
        <Image
          source={image}
          resizeMode='cover'
          className='w-full h-full '
        />
      </View>
      {isLive &&
        <View className='items-center'>
          <LinearGradient
            colors={['#C7059A', '#DD0E44']}
            className='border-white border-2 items-center -top-4 rounded-md'
          >
            <Text className='text-white text-[11px] px-[5px] py-[2px]'>LIVE</Text>
          </LinearGradient>
        </View>
      }
    </LinearGradient>
  );
};

export default CustomCircle;
