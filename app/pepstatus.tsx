import { View, Text, TouchableOpacity, useColorScheme } from 'react-native'
import React from 'react'
import className from 'twrnc';
import useThemeStyles from '../utils/dynamic';
import { Image } from 'expo-image';
import { router } from 'expo-router';
import Exclaimation from '../assets/exclamation-mark-sign-alert-warning-important-svgrepo-com.svg'


const PepStatus = () => {
    const getmode = useThemeStyles();
    const currentMode = useColorScheme();
  return (
    <View style={className`bg-black flex-1 py-6 `}>
    <View style={className`${getmode.backGroundColorTwo} flex-1 justify-center items-center my-4 rounded-3xl p-4`}>
      
        <View style={className`px-6`}>
            <Image source={require('../assets/s10.png')} style={className`w-85 h-48 rounded-xl`} />
        </View>

        <View style={className`px-6`}>
          <Text style={className` ${ getmode.textColorTwo} font-bold text-xl text-center pt-5 pb-1`}>Confirm Your PEP Status</Text>
          <Text style={className` ${ getmode.textColorTwo} text-xs text-center pb-7`}>Are you a politically exposed person or are you related to one?</Text>
        </View>

        <View style={className`flex-row items-center gap-1 rounded-lg my-3 p-4  ${currentMode === 'light' ? 'bg-[#ffffff]' : 'bg-[#343631]'}`}>
            <View style={className`flex-col items-center justify-between`}>
              <View style={className` ${getmode.backGroundColor }  rounded-full p-1`}>
                <Exclaimation width={11} height={11} strokeWidth={4}   fill={`${currentMode === 'light' ? 'white' : 'black'}`} />
              </View>
              <View></View>
            </View>
          <View style={className`w-70 p-2`}>
            <Text style={className` ${currentMode === 'light' ? 'text-black' : 'text-white' } text-[12px] font-semibold max-w-lg `}>You can proceed with either one now, but you will be required to provide the other for a level 2 account upgrade</Text>
          </View>
        </View>
   

        
            <View style={className`flex-row absolute left-4 right-4 bottom-4 gap-2 px-4`}>
                <TouchableOpacity onPress={() => router.push('processimg')} style={className`rounded-xl w-1/2 px-8 py-4 ${getmode.backGroundColor}`}>
                    <Text style={className`${getmode.textColor} text-center`}>No, I'm not</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => router.push('income')} style={className`rounded-xl w-1/2 px-8 py-4 ${getmode.backGroundColor}`}>
                    <Text style={className`${getmode.textColor} text-center`}>Yes, i am</Text>
                </TouchableOpacity>
            </View>

       
        </View>
    </View>
  )
}

export default PepStatus