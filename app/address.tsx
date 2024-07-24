import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import className from 'twrnc'
import useThemeStyles from '../utils/dynamic'
import ArrowUp from '../assets/up-arrow-svgrepo-com.svg'
import ArrowDown from '../assets/arrow-down-3101.svg'
import { router } from 'expo-router'

const address = () => {
    const getmode = useThemeStyles();
  return (
    <View style={className`p-4`}>
      
      <View style={className`px-4`}>
        <Text style={className` ${ getmode.textColor} font-bold text-xl text-left pt-5 pb-1`}>Residential Address</Text>
        <Text style={className` ${ getmode.textColor} text-xs text-left pb-7`}>Provide deatils of where you live</Text>
    </View>

    <View style={className`${getmode.firstLayerBgColor} rounded-xl p-4`}>
        
        <View style={className`${getmode.secondLayerBgColor} rounded-lg p-4`}>
            <Text style={className`${getmode.textColor} `}>House Number</Text>
        </View>

        <View style={className`${getmode.secondLayerBgColor} rounded-lg p-4`}>
            <Text style={className`${getmode.textColor} `}>Street Name</Text>
        </View>

        <View style={className`${getmode.secondLayerBgColor} rounded-lg p-4`}>
            <View style={className`${getmode.secondLayerBgColor} flex justify-between px-4`}>
                <Text style={className`${getmode.textColor} `}>State</Text>
                <ArrowDown width={8} height={8} style={className`${getmode.fillColor}`} />
            </View>
        </View>

        <View style={className`${getmode.secondLayerBgColor} rounded-lg p-4`}>
            <View style={className`${getmode.secondLayerBgColor} flex justify-between px-4`}> 
                <Text style={className`${getmode.textColor} `}>LGA</Text>
                <ArrowDown width={8} height={8} style={className`${getmode.fillColor}`} />
            </View>
        </View>

        <View style={className`max-w-sm`}>
        <TouchableOpacity onPress={() => router.push('pepstatus')}  style={className`rounded-xl w-full ${getmode.textColor}  py-6 px-4 flex-row items-center justify-center`}  >
          <Text style={className`${ getmode.textColor} text-sm font-semibold`}>Next</Text>
        </TouchableOpacity>
      </View>
      
    </View>

    </View>
  )
}

export default address