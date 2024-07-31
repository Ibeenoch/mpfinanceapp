import { View, Text, useColorScheme, TextInput, TouchableOpacity, Keyboard } from 'react-native'
import React, { useEffect, useLayoutEffect, useRef, useState } from 'react'
import className from 'twrnc'
import { router } from 'expo-router';
import UserIcon from '../assets/user-identity-svgrepo-com.svg';
import useThemeStyles from '../utils/dynamic';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useAppDispatch } from '../features/hooks';
import { shouldShowModal } from '../features/auth/auth';
import { delayNavigation } from '../utils/useIntervalHook';
import { Image } from 'expo-image';

const UserExist = () => {
    const [isFocused, setIsFocused] = useState<boolean>(false);
    const [currentIndex, setCurrentIndex] = useState<number>();
    const [passcodeReady, setPasscodeReady] = useState<boolean>(false);
    const [arrNum, setArrNum] = useState<string[]>(Array(6).fill(''));
    const [showModal, setShowModal] = useState<boolean>(false);
    const dispatch = useAppDispatch()
    const getmode = useThemeStyles();
    const currentMode = useColorScheme();
    const inputRefs = useRef<TextInput[]>([]);

  
  useLayoutEffect(() => {
      dispatch(shouldShowModal(false));
  }, [])
   

    useEffect(() => {
      if(showModal){
        dispatch(shouldShowModal(true));
        delayNavigation('userexist');
        // delayNavigation('(tabs)/home');
      }
    }, [showModal])
    
  
    
   
    const handleFocus = () => {
        setIsFocused(true)
    }

    const handleText = () => {

    }

  return (
    <View style={className`flex-1 ${currentMode === 'light' ? 'bg-[#f7f7f7]' : 'bg-[#000e28]'}`}>
        <View style={className`mt-8`}>
            <Image source={require('../assets/s18.png')} style={className`w-full h-60`} />
        </View>

        <View>
            <Text style={className` ${ currentMode === 'light' ? 'text-black' : 'text-white'} font-bold text-2xl text-center mt-3 `}>John, You already have a Moniepoint profile</Text>
            <Text style={className` ${ currentMode === 'light' ? 'text-black' : 'text-white'} text-xs text-center px-4 pb-8`}>
                looks like you have an account with us already! We have found an existing profile with the information you provided. Login to continue.
            </Text>
        </View>

        <View style={className`px-4 `}>
            <View style={className` flex-col gap-4 items-center overflow-hidden rounded-xl  p-4  ${ currentMode === 'light' ? ` bg-[#fff]` : ` bg-[#1a263e] `}`}>
            <View style={className` flex-row   p-2 items-center overflow-hidden rounded-xl  ${ currentMode === 'light' ? `${isFocused ? 'bg-white border border-[#0261ef]' : 'bg-[#e5e5e5]' } text-black` :    `${isFocused ? 'border border-[#ffd75b]' : 'bg-[#1a263e]' }` }`}>
                <View style={className``}>
                <UserIcon width={20} height={20} strokeWidth={4}   fill={`${ currentMode === 'light' ?  '#b9c1ce' : '#b9c1ce' }`} />
                </View>
                <View style={className`relative w-[90%]`}>
                {
                    isFocused && (
                      <Text style={className`absolute z-8 top-0 left-3 text-[8px] text-gray-400`}>
                        Username or phone number
                      </Text>
                    )
                }
                <TextInput onChangeText={handleText}  cursorColor={`${ currentMode === 'light' ? '#0261ef' : '#ffd75b'}`}  onFocus={handleFocus}  placeholder={isFocused ? '': 'Username or phone number'}  placeholderTextColor={currentMode === 'light' ? 'black' : 'gray'} style={className`py-1 pl-2 w-[90%] rounded-lg  ${ currentMode === 'light' ? `${isFocused ? 'bg-white' : 'bg-[#e5e5e5]' } text-black` : 'bg-[#1a263e] text-white'} `} />
                </View>
            </View>

                <TouchableOpacity   style={className`rounded-xl w-full ${currentMode === 'light' ? 'bg-[#0261ef]' : 'bg-[#ffd75b]'}  py-4 px-2 flex-row items-center justify-center`}  >
                <Text style={className`${ currentMode === 'dark' ? 'text-white' : 'text-black'} text-sm font-semibold`}>Next</Text>
                </TouchableOpacity>
            </View>
        </View>

       


          <View style={className`flex-row gap-1 mt-8 items-center justify-center`}> 
            <Text style={className`text-center text-sm ${currentMode === 'light' ? 'text-gray-800' : 'text-[#ffd75b]'} `}>Not John? </Text>
            <TouchableOpacity onPress={() => router.back()}>
                <Text style={className`text-center font-semibold text-xs ${currentMode === 'light' ? 'text-[#0261ef]' : 'text-[#ffd75b]'} `}>Dismiss</Text>
            </TouchableOpacity>
          </View>
    </View>
  )
}

export default UserExist