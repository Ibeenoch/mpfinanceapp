import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import className from 'twrnc';
import useThemeStyles from '../utils/dynamic';
import Bulb from '../assets/light_bulb_icon_152593.svg'
import Glass from '../assets/spectacles-icon.svg'
import { router } from 'expo-router';



const photocapture = () => {
    const getmode = useThemeStyles()
  return (
    <View style={className`${getmode.backGroundColor} flex-1 p-4`}>
      
      <View style={className`py-6  mx-auto px-4 w-35 h-35 `}>
            <Image source={require('../assets/s9.png')} style={className`w-35 h-35 `}  />
      </View>

      <View style={className`px-4 py-6`}>
              <Text style={className` ${ getmode.textColor} font-bold text-2xl text-center pt-5 pb-1`}>Photo Capture</Text>
              <Text style={className` ${ getmode.textColor} text-xs text-center pb-7`}>Your face needs to be verified against your BVN information. Please follow the guidelines below to ensure proper capture.</Text>
      </View>

      <View style={[className`p-3 rounded-lg border border-gray-400`, styles.dashBorder]}>
        <Text style={className` ${ getmode.textColor} text-xs text-left px-2 pb-7`}>We recommend that you ...</Text>

        <View style={className`flex-row gap-3 p-2`}>
            <View style={className`p-1 rounded-full`}>
                <Bulb width={20} height={20} fill={getmode.fillPhotoColor} />
            </View>
            <Text style={className`${getmode.textColor} text-sm`}>Stay in a brightly lit environment</Text>
        </View>

        <View style={className`flex-row gap-3 p-2 w-68`}>
            <View style={className`p-1 rounded-full`}>
                <Glass width={20} height={20} fill={getmode.fillPhotoColor} />
            </View>
            <Text style={className`${getmode.textColor} text-sm`}>Remove glasses, hats, hijabs, face masks or any other face coverings</Text>
        </View>

      </View>

      <View style={className`flex-row gap-2 justify-center items-center ml-2 absolute bottom-7`}>
          <TouchableOpacity onPress={() => router.back()} style={className`px-2 py-4 w-[50%] ${getmode.lightBackGroundColor} rounded-lg flex-row justify-center items-center`}>
            <Text style={className`text-xs font-bold text-[#ffd75b]`}>Dismiss</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => router.push('selfietake')} style={className`px-2 py-4 w-[50%]  ${getmode.lightBackGroundColor} rounded-lg flex-row justify-center items-center`}>
            <Text style={className`text-xs font-bold text-black`}>Proceed</Text>
          </TouchableOpacity>
        </View>

    </View>
  )
}

const styles = StyleSheet.create({
    dashBorder: {
        borderStyle: 'dashed'
    }
})

export default photocapture