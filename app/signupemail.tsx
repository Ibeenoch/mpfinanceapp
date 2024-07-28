import { View, Text, useColorScheme, TextInput, Keyboard } from 'react-native'
import React, { useLayoutEffect, useState } from 'react'
import className from 'twrnc'
import { TouchableOpacity } from 'react-native-gesture-handler';
import Envelope from '../assets/letter-svgrepo-com.svg'
import { router } from 'expo-router';

const SignUpEmail = () => {
  const [isFocused, setIsFocused] = useState<boolean>(false);
    const colorScheme = useColorScheme();

    useLayoutEffect(() => {
      Keyboard.dismiss();
    }, [])

    const handleNext = () => {
      router.push('passcode')
    }

    return (
    <View style={className` ${ colorScheme === 'light' ? 'bg-[#f7f7f7]' : 'bg-[#0e1a32]'} h-screen flex-1 `}>
         <View style={className` ${colorScheme === 'light' ? 'bg-[#f7f7f7] border-t-[#0261ef]' : 'bg-[#0e1a32] border-t-[#ffd75b]'}  border-t-[3px] w-[100%] `}>
         </View>

        <View style={className`px-4`}>
        <Text style={className` ${ colorScheme === 'light' ? 'text-black' : 'text-white'} font-bold text-xl text-left pt-5 pb-1`}>What's Your Email Address</Text>
        <Text style={className` ${ colorScheme === 'light' ? 'text-black' : 'text-white'} text-xs text-left pb-7`}>Enter the Email address you want to use for this account</Text>
        </View>

        <View style={className` flex-row mx-4 p-2 items-center overflow-hidden rounded-xl ${ colorScheme === 'light' ? 'bg-[#e6edfd] border border-[#0261ef]' : 'bg-[#1a263e] border border-[#ffd75b]'}`}>
        <View style={className`pr-2`}>
          <Envelope width={20} height={20} strokeWidth={4}   fill={`${ colorScheme === 'light' ?  '#b9c1ce' : '#b9c1ce' }`} />
        </View>
        <View style={className`relative w-[90%]`}>
          {
            isFocused && (
              <Text style={className`absolute z-8 top-0 left-3 text-[12px] text-gray-400`}>
                Email Address
              </Text>
            )
          }
          <TextInput  cursorColor={`${ colorScheme === 'light' ? '#0261ef' : '#ffd75b'}`}  onFocus={() => setIsFocused(true)} onBlur={() => setIsFocused(false)} placeholder={isFocused ? '': 'Email Address'}  placeholderTextColor={colorScheme === 'light' ? 'black' : 'gray'} style={className`py-2 px-1 w-[90%] rounded-lg  ${ colorScheme === 'light' ? 'bg-[#e6edfd] text-black' : 'bg-[#1a263e] text-white'} `} />
        </View>
        </View>

        <View style={className`p-4 absolute bottom-0 w-full`}>
      
    
      <View style={className`max-w-sm`}>
        <TouchableOpacity onPress={handleNext}  style={className`rounded-xl w-full ${colorScheme === 'light' ? 'bg-[#0261ef] text-white' : 'bg-[#ffd75b] text-black'}  py-6 px-4 flex-row items-center justify-center`}  >
          <Text style={className`${ colorScheme === 'dark' ? 'text-white' : 'text-white'} text-sm font-semibold`}>Next</Text>
        </TouchableOpacity>
      </View>

      <Text style={className`text-xs text-center py-2 ${ colorScheme === 'dark' ? 'text-[#ffd75b]' : 'text-white'}`}>i don't have an email</Text>

    </View>

    </View>
  )
}

export default SignUpEmail