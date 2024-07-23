import { View, Text, useColorScheme, TouchableOpacity } from 'react-native'
import React from 'react'
import CheckMark from '../assets/check-mark-10126.svg';
import className from 'twrnc'
import { router } from 'expo-router';

const Success = () => {
    const currentMode = useColorScheme();
    const handleNext = () => {
        router.push('biometrics')
    }
  return (
    <View style={className`${ currentMode === 'light' ? 'bg-[#f7f7f7]' : 'bg-[#0e1a32]'} h-screen flex-1  `}>

      
      <View style={className`flex-1 flex-row justify-center items-center`}>
        <View style={className`flex-row w-40 h-40 rounded-full bg-[#093f28] justify-center items-center`}>
        <View style={className`flex-row w-35 h-35 rounded-full bg-[#1eb12d] justify-center items-center`}>
        <View style={className`flex-row w-30 h-30 rounded-full bg-[#14802b] justify-center items-center`}>
            <CheckMark width={50} height={50} fill={'white'} />


        </View>

        </View>

        </View>
      </View>

      <View style={className``}>
        <Text style={className` ${ currentMode === 'light' ? 'text-black' : 'text-white'} font-bold text-2xl text-left pt-5 pb-1`}>Profile Created</Text>
        <Text style={className` ${ currentMode === 'light' ? 'text-black' : 'text-white'} text-xs text-left pb-7`}>Congrats! Your profile has been created</Text>
    </View>

     

    <View style={className`p-4 absolute bottom-0 w-full`}>
      
    
      <View style={className`max-w-sm`}>
        <TouchableOpacity onPress={handleNext}  style={className`rounded-xl w-full ${currentMode === 'light' ? 'bg-[#0261ef] text-white' : 'bg-[#ffd75b] text-black'}  py-6 px-4 flex-row items-center justify-center`}  >
          <Text style={className`${ currentMode === 'dark' ? 'text-white' : 'text-black'} text-sm font-semibold`}>Proceed</Text>
        </TouchableOpacity>
      </View>


    </View>
      
    </View>
  )
}

export default Success