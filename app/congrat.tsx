import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import className from 'twrnc';
import { Image } from 'expo-image';
import { router } from 'expo-router';
import Exclaimation from '../assets/exclamation-mark-sign-alert-warning-important-svgrepo-com.svg'
import useThemeStyles from '../utils/dynamic';


const Congrats = () => {
    const getmode = useThemeStyles();
  return (
    <View style={className`${getmode.backGroundColorTwo} flex-1 p-4`}>
    

        <View style={className`pt-14 flex-row justify-center`}>
            <Image source={require('../assets/s11.png')} style={className`w-35 h-35 rounded-xl`} />
        </View>

        <View style={className`px-6 pb-8`}>
          <Text style={className` ${ getmode.textColorTwo} font-bold text-2xl text-center pt-5 py-2`}>Upgrading to Level 3!</Text>
          <Text style={className` ${ getmode.textColorTwo} text-xs text-center pb-2`}>Congrats! Your account is being upgraded to level 3</Text>
          <Text style={className` ${ getmode.textColorTwo} text-xs text-center pb-7`}>These are your new limits.</Text>
        </View>

        <View style={className`flex-row justify-center gap-3`}>
            <View style={className`rounded-xl p-2  ${ getmode.secondLayerBgColorblue}  `}>
                <View style={className`p-2 `}>
                    <Text style={className` pl-1 pr-4 text-left text-[11px] max-w-xs text-gray-500`}>Single Credit Limit</Text>
                    <Text style={className` pl-1 pr-4 text-left text-[12px] ${getmode.textColorTwo}`}>Unlimited</Text>
                </View>

                <View style={className`p-2 `}>
                    <Text style={className` pl-1 pr-4 text-left text-[11px] max-w-xs text-gray-500`}>Daily Credit Limit</Text>
                    <Text style={className` pl-1 pr-4 text-left text-[12px] ${getmode.textColorTwo}`}>Unlimited</Text>
                </View>
            </View>

            <View style={className`rounded-xl p-2  ${ getmode.secondLayerBgColorblue}  `}>
                <View style={className`p-2 `}>
                    <Text style={className` pl-1 pr-4 text-left text-[11px] max-w-xs text-gray-500`}>Single Debit Limit:</Text>
                    <Text style={className` pl-1 pr-4 text-left text-[12px] ${getmode.textColorTwo}`}> ₦5,000,000.00</Text>
                </View>

                <View style={className`p-2 `}>
                    <Text style={className` pl-1 pr-4 text-left text-[11px] max-w-xs text-gray-500`}>Daily Debit Limit:</Text>
                    <Text style={className` pl-1 pr-4 text-left text-[12px] ${getmode.textColorTwo}`}>₦25,000,000.00</Text>
                </View>
            </View>
        </View>

        <View style={className`absolute bottom-5 right-4 left-4`}>
            <TouchableOpacity onPress={() => router.push('(tabs)/dashboard')} style={className`rounded-xl w-full px-6 py-4 flex-row justify-center items-center ${getmode.backGroundColor}`}>
                <Text style={className`${getmode.textColor} `}>Proceed To Dashboard</Text>
            </TouchableOpacity>

        </View>
      
    </View>
  )
}

export default Congrats