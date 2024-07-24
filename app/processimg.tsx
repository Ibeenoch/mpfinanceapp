import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import className from 'twrnc'
import useThemeStyles from '../utils/dynamic';
import UserImage from '../assets/user.svg';
import Focus from '../assets/focus-8.svg';
import { router } from 'expo-router';

const processimg = () => {
    const getmode = useThemeStyles();
  return (
    <View style={className`flex-1 py-[60%] px-[3%] bg-black`}>
    <View style={className`${getmode.backGroundColorTwo} flex-1 rounded-xl justify-center items-center`}>
      
      <View style={className`flex-row justify-center items-center relative`}>
        <Focus fill={getmode.fillPhotoColor} width={50} height={50} />
        <View style={className`absolute `}>
            <UserImage fill={getmode.fillPhotoColor} width={20} height={20} />
        </View>
      </View>

      <View>
            <Text style={className`max-w-sm text-center py-4 text-3xl font-bold ${getmode.textColorTwo}`}>Processing selfie</Text>
            <Text style={className`max-w-sm text-center pb-4 text-xs font-bold ${getmode.textColorTwo}`}>Just a few more seconds</Text>
       </View>

       <View style={className`rounded-xl bg-blue-500`}>
            <TouchableOpacity onPress={() => router.push('selfiecapture')}>
                <Text style={className`text-center text-sm text-bold py-2 px-6 rounded-xl ${getmode.textColor}`}>Continue</Text>
            </TouchableOpacity>
       </View>


    </View>
    </View>
  )
}

export default processimg