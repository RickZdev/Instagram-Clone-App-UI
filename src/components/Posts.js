import { View, Text, FlatList, Image, Dimensions, TextInput, Animated, useWindowDimensions, RefreshControl } from 'react-native'
import React, { useRef, useState } from 'react'
import Entypo from 'react-native-vector-icons/Entypo';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';

import DATA from '../global/DATA'
import COLORS from '../global/COLORS';

const Posts = () => {
  const [refreshing, setRefreshing] = useState(false);
  const onRefresh = () => {
    setRefreshing(true)
    setTimeout(() => {
      setRefreshing(false)
    }, 200)
  }

  return (
    <View className=''>
      <FlatList
        data={DATA}
        extraData={item => item.id}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={() => onRefresh()}
          />
        }
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => <Post data={item}/>}
      />
    </View>
  )
}

const Post = ({ data }) => {
  const { width } = Dimensions.get('window');
  const scrollX = useRef(new Animated.Value(0)).current;
  const slidesRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(null);
  const viewableItemsChanged = useRef(({ viewableItems }) => {
    setCurrentIndex(viewableItems[0].index);
    console.log(viewableItems[0].index)
  }).current;

  return (
    <View className='mt-4 '>
      {/* header */}
      <View className='flex-row px-3 justify-between items-center'>
        <View className='flex-row space-x-2 items-center'>
          <View className='w-12 h-12'>
            <Image
              source={data.profilePicture}
              resizeMode='contain'
              className='w-full h-full rounded-full'
            />
          </View>
          <View className='justify-center'>
            <Text className='font-SfUiRegular font-bold text-sm text-black'>{data.username}</Text>
            {
              data?.location && 
              <Text className='font-SfUiRegular font-semibold text-[11px] text-black'>{data.location}</Text>
            }
          </View>
        </View>
        <Entypo name='dots-three-horizontal' size={25} color='#4F4F4F'/>
      </View>

      {/* images */}
      <View className='mt-3'>
        <FlatList
          data={data.images}
          keyExtractor={(_item, index) => index.toString()}
          horizontal
          pagingEnabled
          bounces
          showsHorizontalScrollIndicator={false}
          scrollEventThrottle={32}
          ref={slidesRef}
          initialNumToRender={2}
          onViewableItemsChanged={viewableItemsChanged}
          onScroll={Animated.event([{
            nativeEvent: {
              contentOffset: {
                x: scrollX
              }
            }
          }], {
            useNativeDriver: false,
          })}
          renderItem={({ item, index }) => {
            return (
              <Image
                source={item}
                resizeMode='cover'
                style={{ width: width, height: 350}}
              />
            )
          }
        }
        />
        { 
          data.images.length > 1 &&
            <View className='absolute w-full items-end right-3 top-3'>
              <View className='py-1.5 px-3 rounded-3xl bg-[#333333]'>
                <Text className='text-white font-SfUiBold font-bold text-xs'>{currentIndex + 1}/{data.images.length}</Text>
              </View>
            </View>
        }
      </View>
      
      {/* buttons */}
      <View className='flex-row mt-3 items-center justify-between'>
        <View className='items-center flex-row space-x-5 pl-3'>
          <Feather name='heart' size={27} color={COLORS.black}/>
          <Ionicons name='chatbubble-outline' size={27} color={COLORS.black}/>
          <Image
            source={require('../assets/images/ig-share.png')}
            resizeMode='contain'
            className='w-6 h-6'
          />
        </View>
        {
          data.images.length !== 1 && 
          <PostPaginator data={data.images} scrollX={scrollX}/>
        }
        <Feather name='bookmark' size={27} color={COLORS.black} style={{ paddingRight: 12}}/>
      </View>

      {/* like & comment section */}
      <View className='px-3 mt-2'>
        <Text className='text-black font-SfProSemiBold font-bold'>{data.likes} likes</Text>
        <Text className='text-black font-SfProSemiBold font-bold mt-1'>
          {data.username}
          <Text className='text-black font-SfProSemiBold font-semibold text-xs'>  {data.caption}</Text>
        </Text>
        <View className='flex-row items-center space-x-2'>
          <Image
            source={require('../assets/images/pogi.jpg')}
            resizeMode='contain'
            className='rounded-full w-7 h-7'
          />
          <TextInput placeholder='Add a comment...' className='text-black w-full'/>
        </View>
        <Text className='font-SfUiRegular font-semibold text-xs -mt-1'>{data.days} days ago</Text>
      </View>
    </View>
  )
}

const PostPaginator = ({ data, scrollX }) => {
  const { width } = useWindowDimensions();
  return (
    <View className='flex-row justify-center items-center absolute w-full'>
      {data.map((item, index) => {
        const inputRange = [(index - 1) * width, index * width, (index + 1) * width];
        const dotWidth = scrollX.interpolate({
          inputRange,
          outputRange: [6, 6, 6],
          extrapolate: 'clamp',
        })

        const dotOpacity = scrollX.interpolate({
          inputRange,
          outputRange: ['#C4C4C4', '#0098FD', '#C4C4C4'],
          extrapolate: 'clamp',
        })
        return (
          <Animated.View className='h-[6px] rounded-full bg-primary mx-1' style={{ width: dotWidth, backgroundColor: dotOpacity }} key={index} />
        )
      })}
    </View>
  )
}

export default Posts