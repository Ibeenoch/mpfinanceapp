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
    <View style={className`${getmode.backGroundColor} flex-1 justify-center items-center`}>
      
      <View style={className`flex-row justify-center items-center`}>
        <Focus width={200} height={200} />
        <UserImage width={100} height={100} />
      </View>

      <View>
            <Text style={className`max-w-sm text-center py-4 text-3xl font-bold ${getmode.textColor}`}>Processing selfie</Text>
            <Text style={className`max-w-sm text-center pb-4 text-xs font-bold ${getmode.textColor}`}>Just a few more seconds</Text>
       </View>

       <View style={className`rounded-xl ${getmode.backGroundBlueColor}`}>
            <TouchableOpacity onPress={() => router.push('selfiecapture')}>
                <Text style={className`text-center text-sm text-bold py-2 px-6 rounded-xl ${getmode.backGroundBlueColor}`}>Continue</Text>
            </TouchableOpacity>
       </View>


    </View>
  )
}

export default processimg