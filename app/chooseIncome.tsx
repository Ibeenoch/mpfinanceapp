import { View, Text, useColorScheme } from 'react-native'
import React from 'react'
import className from 'twrnc';
import Plus from '../assets/plus-large-svgrepo-com.svg'
import ArrowForward from '../assets/arrow-forward-svgrepo-com.svg';
import useThemeStyles from '../utils/dynamic';
import { TextInput } from 'react-native-paper';

const chooseIncome = () => {
    const getmode = useThemeStyles();
    const currentMode = useColorScheme();
  
  return (
    <View style={className`flex-1 p-4 ${getmode.backGroundColorTwo}`}>
      <Text style={className`text-2xl font-bold my-4 ${getmode.textColorTwo} `}>Select expected annual income</Text>
      
      <View style={className`flex-1 p-4 ${getmode.secondLayerBgColor}`}>
        <TextInput style={className`p-4 text-gray-500`} />
        
        <View style={className`flex-row justify-between p-2`}>
            <View style={className`flex-row gap-2`}>
                <View style={className`p-2 rounded-md ${getmode.backGroundlightYellowColor} `}>
                  <Plus width={8} height={8} fill={getmode.buttonBgColor} />
                </View>
                <Text style={className`text-sm ${currentMode === 'light' ? `text-[#9eacc7]` : `text-[#b9c1ce]`}`}>Accountant</Text>
            </View>

            <View>
                <ArrowForward width={8} height={8} fill={getmode.buttonBgColor} />
            </View>
        </View>
        </View>
    </View>
  )
}

export default chooseIncome