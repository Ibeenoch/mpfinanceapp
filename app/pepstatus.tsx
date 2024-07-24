import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import className from 'twrnc';
import useThemeStyles from '../utils/dynamic';
import { Image } from 'expo-image';
import { router } from 'expo-router';
import Exclaimation from '../assets/exclamation-mark-sign-alert-warning-important-svgrepo-com.svg'


const PepStatus = () => {
    const getmode = useThemeStyles();
  return (
    <View style={className`bg-black `}>
    <View style={className`${getmode.backGroundColor} my-4 rounded-3xl p-4`}>
    

        <View style={className``}>
            <Image source={require('../assets/s10.png')} style={className`w-34 h-21 rounded-xl`} />
        </View>

        <View style={className`px-6`}>
          <Text style={className` ${ getmode.textColor} font-bold text-xl text-center pt-5 pb-1`}>Confirm Your PEP Status</Text>
          <Text style={className` ${ getmode.textColor} text-xs text-center pb-7`}>Are you a politically exposed person or are you related to one?</Text>
        </View>

        <View style={className`flex-row gap-1 rounded-lg my-3 p-4  ${getmode.lighterBackGroundColor}`}>
          <View style={className`${getmode.backGroundColor} px-4 rounded-full justify-center items-center `}>
            <Exclaimation width={10} height={10} fill={`${getmode.fillColor}`} />
          </View>
          <View>
            <Text style={className`text-[12px] ${getmode.textColor } font-semibold max-w-lg `}>A politically exposed person (PEP) is a high profile, prominent political individual, or public office holder, in office now or in the past</Text>
          </View>
        </View>

        <View style={className`flex-row gap-4 px-6`}>
            <TouchableOpacity onPress={() => router.push('processimg')} style={className`rounded-xl w-full ${getmode.backGroundColor, getmode.borderColor}`}>
                <Text style={className`${getmode.textColor}`}>No, I'm not</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => router.push('income')} style={className`rounded-xl w-full ${getmode.backGroundColor, getmode.borderColor}`}>
                <Text style={className`${getmode.textColor}`}>Yes, i am</Text>
            </TouchableOpacity>
        </View>
      
    </View>
    </View>
  )
}

export default PepStatus