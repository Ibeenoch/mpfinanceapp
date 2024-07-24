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
    <View style={className`${getmode.backGroundColor} flex-1 p-4`}>
    

        <View style={className``}>
            <Image source={require('../assets/s11.png')} style={className`w-25 h-25 rounded-xl`} />
        </View>

        <View style={className`px-6`}>
          <Text style={className` ${ getmode.textColor} font-bold text-xl text-center pt-5 pb-1`}>Upgrading to Level 3!</Text>
          <Text style={className` ${ getmode.textColor} text-xs text-center pb-1`}>Congrats! Your account is being upgraded to level 3</Text>
          <Text style={className` ${ getmode.textColor} text-xs text-center pb-7`}>These are your new limits.</Text>
        </View>

        <View style={className`flex-row gap-1`}>
            <View style={className`w-full flex-col rounded-xl p-2  ${ getmode.lightBackGroundColor}  `}>
                <View style={className`flex-col rounded-tl-xl rounded-bl-xl border-r border-gray-300 border-opacity-50 items-center p-2 `}>
                    <Text style={className` px-1 text-left text-[11px] max-w-xs text-gray-300`}>Single Credit Limit</Text>
                    <Text style={className` px-1 text-left text-[12px] ${getmode.textColor}`}>Unlimited</Text>
                </View>

                <View style={className`flex-col rounded-tl-xl rounded-bl-xl border-r border-gray-300 border-opacity-50 items-center p-2 `}>
                    <Text style={className` px-1 text-left text-[11px] max-w-xs text-gray-300`}>Daily Credit Limit</Text>
                    <Text style={className` px-1 text-left text-[12px] ${getmode.textColor}`}>Unlimited</Text>
                </View>
            </View>

            <View style={className`w-full flex-col rounded-xl p-2  ${ getmode.lightBackGroundColor}  `}>
                <View style={className`flex-col rounded-tl-xl rounded-bl-xl border-r border-gray-300 border-opacity-50 items-center p-2 `}>
                    <Text style={className` px-1 text-left text-[11px] max-w-xs text-gray-300`}>Single Debit Limit:</Text>
                    <Text style={className` px-1 text-left text-[12px] ${getmode.textColor}`}> ₦5,000,000.00</Text>
                </View>

                <View style={className`flex-col rounded-tl-xl rounded-bl-xl border-r border-gray-300 border-opacity-50 items-center p-2 `}>
                    <Text style={className` px-1 text-left text-[11px] max-w-xs text-gray-300`}>Daily Debit Limit:</Text>
                    <Text style={className` px-1 text-left text-[12px] ${getmode.textColor}`}>₦25,000,000.00</Text>
                </View>
            </View>
        </View>

        <View style={className`absolute bottom-5 px-6`}>
            <TouchableOpacity onPress={() => router.push('(tabs)/dashboard')} style={className`rounded-xl w-full ${getmode.backGroundColor, getmode.borderColor}`}>
                <Text style={className`${getmode.textColor}`}>Proceed To Dashboard</Text>
            </TouchableOpacity>

        </View>
      
    </View>
  )
}

export default Congrats