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
    <View style={className`${getmode.backGroundColor} flex-1 justify-center items-center`}>
      
      <View style={className`flex-row w-20 h-20 rounded-full ${getmode.backGroundBlueColor} justify-center items-center`}>
              <CheckMark width={30} height={30} fill={'white'} />
          </View>

      <View>
            <Text style={className`max-w-sm text-center py-4 text-3xl font-bold ${getmode.textColor}`}>Selfie Capture Complete</Text>
            <Text style={className`max-w-sm text-center pb-4 text-sm ${getmode.textColor}`}>Your selfie was successfully taken. You can now proceed</Text>
       </View>

       <View style={className`rounded-xl ${getmode.backGroundBlueColor}`}>
            <TouchableOpacity onPress={() => router.push('idverified')}>
                <Text style={className`text-center text-sm text-bold py-2 px-6 rounded-xl ${getmode.backGroundBlueColor}`}>Continue</Text>
            </TouchableOpacity>
       </View>


    </View>
  )
}

export default SelfieCapture