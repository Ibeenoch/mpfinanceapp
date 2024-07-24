import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import className from 'twrnc';
import useThemeStyles from '../utils/dynamic';
import { Image } from 'expo-image';
import { router } from 'expo-router';


const selfietake = () => {
    const getmode = useThemeStyles();

    
  return (
    <View style={className`bg-black flex-1 justify-center items-center`}>
    <View style={className`${getmode.backGroundColorTwo} my-4  rounded-3xl p-4`}>
        <View>
            <Text style={className`max-w-sm text-center py-4 text-3xl font-bold ${getmode.textColorTwo}`}>Is this a good quality selfie?</Text>
            <Text style={className`max-w-sm text-center pb-4 text-[11px] font-bold ${getmode.textColorTwo}`}>Make sure your whole face is visible and clear</Text>
        </View>

        <View style={className`my-4  mx-auto px-4 w-50 h-50 `}>
            <Image source={require('../assets/gift.png')} style={className`w-50 h-50 rounded-xl`} />
        </View>

        <View style={className`flex-col gap-4 `}>
            <TouchableOpacity onPress={() => router.push('processimg')} style={className`rounded-xl border border-gray-400 w-full py-2 px-6 ${getmode.backGroundColorTwo}`}>
                <Text style={className`${getmode.textColorTwo} text-center`}>Yes, use this</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => router.back()} style={className`rounded-xl border border-gray-400 w-full py-2 px-6 ${getmode.backGroundColorTwo, getmode.borderColor}`}>
                <Text style={className`${getmode.textColorTwo} text-center`}>No, retake selfie</Text>
            </TouchableOpacity>
        </View>
      
    </View>
    </View>
  )
}

export default selfietake