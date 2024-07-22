import { View, Text, useColorScheme, TextInput } from 'react-native'
import React, { useEffect } from 'react'
import className from 'twrnc'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { shouldShowModal } from '../features/auth/auth';
import { useAppDispatch, useAppSelector } from '../features/hooks';
import Exclaimation from '../assets/exclamation-mark-sign-alert-warning-important-svgrepo-com.svg'
import { router } from 'expo-router';

const verifyphone = () => {
    const dispatch = useAppDispatch();
    const { showmodal } = useAppSelector((state) => state.auth )
    const colorScheme = useColorScheme();

    useEffect(() => {
        dispatch(shouldShowModal(false))
    }, [])

    const handleNext = () => {
        router.push('signupemail')
    }
  return (
    <View style={className`${ colorScheme === 'light' ? 'bg-[#f7f7f7]' : 'bg-[#0e1a32]'} h-screen flex-1 `}>
         <View style={className` ${colorScheme === 'light' ? 'bg-[#f7f7f7] border-t-[#0261ef]' : 'bg-[#0e1a32] border-t-[#ffd75b]'}  border-t-[3px] w-[55%] `}>
         </View>

        <View style={className`px-6`}>
        <Text style={className` ${ colorScheme === 'light' ? 'text-black' : 'text-white'} font-bold text-xl text-left pt-5 pb-1`}>Verify Your Phone Number</Text>
        <Text style={className` ${ colorScheme === 'light' ? 'text-black' : 'text-white'} text-xs text-left pb-7`}>we've just sent you a digit code. Check your messages and enter here</Text>
        </View>

        <View style={className`mx-4 p-4 rounded-xl ${ colorScheme === 'light' ? 'bg-[#e6edfd]' : 'bg-[#343631]'}`}>
            <View style={className`flex flex-row w-full justify-center gap-1 mb-4`}>
                <TextInput value='1' style={className`p-2 rounded-md font-bold text-lg text-center  ${ colorScheme === 'light' ? 'text-black bg-white' : 'text-white bg-[#1a263e]'}`} />
                <TextInput value='1' style={className`p-2 rounded-md font-bold text-lg text-center  ${ colorScheme === 'light' ? 'text-black bg-white' : 'text-white bg-[#1a263e]'}`} />
                <TextInput value='1' style={className`p-2 rounded-md font-bold text-lg text-center  ${ colorScheme === 'light' ? 'text-black bg-white' : 'text-white bg-[#1a263e]'}`} />
                <TextInput value='1' style={className`p-2 rounded-md font-bold text-lg text-center  ${ colorScheme === 'light' ? 'text-black bg-white' : 'text-white bg-[#1a263e]'}`} />
                <TextInput value='1' style={className`p-2 rounded-md font-bold text-lg text-center  ${ colorScheme === 'light' ? 'text-black bg-white' : 'text-white bg-[#1a263e]'}`} />
                <TextInput value='1' style={className`p-2 rounded-md font-bold text-lg text-center  ${ colorScheme === 'light' ? 'text-black bg-white' : 'text-white bg-[#1a263e]'}`} />
            </View>

            <View style={className`${ colorScheme === 'light' ? 'bg-white' : 'bg-[#0e1a32]'} py-3 px-6 rounded-lg flex-row items-center justify-between`}>
                <View style={className`flex-row items-center gap-2`}>
                    <View style={className` ${colorScheme === 'light' ? 'bg-[#0261ef]' : 'bg-[#ffd75b]' }  rounded-full p-1`}>
                    <Exclaimation width={11} height={11} strokeWidth={4}   fill={`${colorScheme === 'light' ?  'white' : 'black' }`} />
                    </View>
                    <Text style={className`text-xs ${colorScheme === 'light' ? 'text-black' : 'text-white'} `}>Didn't get OTP?</Text>
                </View>
                <Text style={className`text-xs ${colorScheme === 'light' ? 'text-[#0261ef]' : 'text-[#ffd75b]' } `}>Resend OTP</Text>
            </View>
        </View>

        <View style={className`p-4 absolute bottom-0 w-full`}>
      
    
      {/* <View style={className`max-w-sm`}>
        <TouchableOpacity onPress={handleNext}  style={className`rounded-xl w-full ${colorScheme === 'light' ? 'bg-[#0261ef] text-white' : 'bg-[#ffd75b] text-black'}  py-6 px-4 flex-row items-center justify-center`}  >
          <Text style={className`${ colorScheme === 'dark' ? 'text-white' : 'text-black'} text-sm font-semibold`}>Next</Text>
        </TouchableOpacity>
      </View> */}



    </View>

    </View>
  )
}

export default verifyphone