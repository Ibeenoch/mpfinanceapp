import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import className from 'twrnc'
import useThemeStyles from '../utils/dynamic';
import UserImage from '../assets/user.svg';
import Focus from '../assets/focus-8.svg';
import { router } from 'expo-router';

const Processimg = () => {
    const getmode = useThemeStyles();
  return (
    <View style={className`flex-1 py-[60%] px-[3%] bg-black`}>
    <View style={className`${getmode.backGroundColorTwo} flex-1 rounded-xl px-4 justify-center items-center`}>
      
      <View style={className`flex-row justify-center items-center relative`}>
        <Focus fill={getmode.fillPhotoColor} strokeWidth={1} width={50} height={50} />
        <View style={className`absolute `}>
            <UserImage fill={getmode.fillPhotoColor} width={20} height={20} />
        </View>
      </View>

      <View>
            <Text style={className`max-w-sm text-center py-4 text-3xl font-semibold ${getmode.textColorTwo}`}>Processing selfie</Text>
            <Text style={className`max-w-sm text-center pb-4 text-xs font-bold ${getmode.textColorTwo}`}>Just a few more seconds</Text>
       </View>

       <View style={className`rounded-xl mx-4 w-full bg-[#0261ef]`}>
                <TouchableOpacity onPress={() => router.push('selfiecapture')}>
                    <Text style={className`text-center text-sm font-bold py-4 px-8  rounded-xl ${getmode.textColor}`}>Continue</Text>
                </TouchableOpacity>
        </View>



    </View>
    </View>
  )
}

export default Processimg