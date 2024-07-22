import { View, Text, useColorScheme, TouchableOpacity } from 'react-native'
import React from 'react'
import FingerPrint from '../assets/fingerprint-5.svg';
import className from 'twrnc'
import { router } from 'expo-router';

const Biometrics = () => {
    const currentMode = useColorScheme();
    const handleEnableBioMetrics = () => {
        router.push('cbninfo')
    }
  return (
    <View style={className`${ currentMode === 'light' ? 'bg-[#f7f7f7]' : 'bg-[#0e1a32]'} h-screen flex-1 `}>

      <View style={className`flex-row justify-center items-center`}>
        <View style={className`flex-row w-70 rounded-full bg-[#002762] justify-center items-center`}>
        <View style={className`flex-row w-65 rounded-full bg-[#0261ef] justify-center items-center`}>
        <View style={className`flex-row w-60 rounded-full bg-[#0148b4] justify-center items-center`}>
            <FingerPrint width={50} height={50} fill={'white'} />


        </View>

        </View>

        </View>
      </View>

      <View style={className``}>
        <Text style={className` ${ currentMode === 'light' ? 'text-black' : 'text-white'} font-bold text-2xl text-left pt-5 pb-1`}>Enable Biometrics!</Text>
        <Text style={className` ${ currentMode === 'light' ? 'text-black' : 'text-white'} text-xs text-left pb-7`}>Make your login & transaction faster and more secure with Biometrics enabled</Text>
    </View>

    <View style={className`p-4 absolute bottom-0 w-full`}>
      
    
      <View style={className`max-w-sm`}>
             <TouchableOpacity style={className`px-2 py-4 w-[45%] bg-[#19212c] rounded-lg flex-row justify-center items-center`}>
            <Text style={className`text-xs font-bold text-[#ffd75b]`}>Not Now</Text>
          </TouchableOpacity>

          <TouchableOpacity  onPress={handleEnableBioMetrics} style={className`px-2 py-4 w-[45%] bg-[#ffd75b] rounded-lg flex-row justify-center items-center`}>
            <Text style={className`text-xs font-bold text-black`}>Enable</Text>
          </TouchableOpacity>      
      </View>


    </View>
      
    </View>
  )
}

export default Biometrics