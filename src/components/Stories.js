import { View, Text, FlatList, Image } from 'react-native'
import React from 'react'
import CustomCircle from './CustomCircle'
import AntDesign from 'react-native-vector-icons/AntDesign';
import DATA from '../global/DATA';

const Stories = () => {
  return (
    <View className='mt-3 border-gray-200 border-b-[1px] pb-3'>
      <FlatList
        data={DATA}
        keyExtractor={item => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => <Story data={item}/>}
        ListHeaderComponent={() => (
                <View className='items-center'>
                    <View className="mx-3 w-[70px] h-[70px]  border-white border-[3px] justify-center items-center">
                        <Image
                            source={require('../assets/images/pogi.jpg')}
                            resizeMode='cover'
                            className='w-full h-full rounded-full'
                        />
                        <View className='absolute z-20 bg-white p-1 rounded-full -bottom-2 -right-2'>
                            <AntDesign name='pluscircle' color='#3EA9E5' size={25}/>
                        </View>
                    </View>
                    <Text className='font-SfUiRegular text-xs text-black mt-2'>Your story</Text>
                </View>
            )
        }
      />
    </View>
  )
}

const Story = ({ data }) => {
    return (
        <View className='mr-3 items-center'>
            <CustomCircle image={data.profilePicture} isLive={data.id === 0 ? true : false} />
            <Text className='font-SfUiRegular text-xs text-black mt-2'>{data.username}</Text>
        </View>
    )
}

export default Stories