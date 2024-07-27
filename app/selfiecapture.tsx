import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import className from 'twrnc'
import useThemeStyles from '../utils/dynamic';
import CheckMark from '../assets/check-mark-10126.svg';
import Focus from '../assets/focus-8.svg';
import { router } from 'expo-router';

const SelfieCapture = () => {
    const getmode = useThemeStyles();
  return (
    <View style={className`flex-1 py-[50%] px-[3%] bg-black`}>
        <View style={className`${getmode.backGroundColorTwo} flex-1 rounded-xl  justify-center items-center px-5`}>
        
        <View style={className`flex-row w-15 h-15 mb-4 rounded-full ${getmode.backGroundBlueColor} justify-center items-center`}>
                <CheckMark width={20} height={20} fill={'white'} />
        </View>

        <View>
                <Text style={className`max-w-sm text-center py-4 text-3xl font-bold px-6 ${getmode.textColorTwo}`}>Selfie Capture Complete</Text>
                <Text style={className`max-w-sm text-center pb-4 text-sm px-6 ${getmode.textColorTwo}`}>Your selfie was successfully taken. You can now proceed</Text>
        </View>

        
        <View style={className`rounded-xl w-full ${getmode.backGroundBlueColor}`}>
                <TouchableOpacity onPress={() => router.push('idverified')}>
                    <Text style={className`text-center text-sm font-bold py-4 px-8  rounded-xl ${getmode.textColor}`}>Continue</Text>
                </TouchableOpacity>
        </View>


        </View>
    </View>
  )
}

export default SelfieCapture