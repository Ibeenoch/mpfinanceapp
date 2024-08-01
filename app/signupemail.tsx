import { View, Text, useColorScheme, TextInput, Keyboard, TouchableWithoutFeedback } from 'react-native'
import React, { useEffect, useLayoutEffect, useState } from 'react'
import className from 'twrnc'
import { TouchableOpacity } from 'react-native-gesture-handler';
import Envelope from '../assets/letter-svgrepo-com.svg'
import { router } from 'expo-router';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useAppDispatch } from '../features/hooks';
import { delayNavigation } from '../utils/useIntervalHook';
import { setEmailAddress, shouldShowModal } from '../features/auth/auth';

const SignUpEmail = () => {
  const [isFocused, setIsFocused] = useState<boolean>(false);
  const [btnActive, setIsBtnActive] = useState<boolean>(false);
  const [isInputErr, setIsInputErr] = useState<boolean>(false);
  const [showModal, setShowModal] = useState<boolean>(false);
  const [email, setEmail] = useState<string>('');
    const colorScheme = useColorScheme();
    const dispatch = useAppDispatch()

    useLayoutEffect(() => {
      Keyboard.dismiss();
    }, [])

   useEffect(() => {
        dispatch(shouldShowModal(false));
    }, [])

    useEffect(() => {
      if(email){
        handleBlurEvent()
      }
    }, [email])

    const validateEmail = (email: string) => {
      const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      return emailRegex.test(email);
    };


    const handleNext = async() => {
      if(!validateEmail(email)){
        return;
      }
      email && dispatch(setEmailAddress(email));
      setShowModal(true);
      dispatch(shouldShowModal(true));
      delayNavigation('passcode');
    }
    

    const handleText = (e: string) => {
      setEmail(e);
      handleBlurEvent()
    }
  
    
    const handleBlurEvent = () => {
      if(!validateEmail(email)){
        console.log('invalid email');
        setIsBtnActive(false)
      }else{
        setIsInputErr(false)
        setIsBtnActive(true);
      }
    }

    const handleFocus  = () => {
      setIsFocused(true)
        setIsInputErr(false);
    };

    const noInput = () => {
      handleBlurEvent();
      if(btnActive){
        setIsInputErr(false);
      }else{
        setIsInputErr(true);
      }
      Keyboard.dismiss();
    }
    return (
    <TouchableWithoutFeedback onPress={noInput}>
    <View style={className` ${ colorScheme === 'light' ? 'bg-[#f7f7f7]' : 'bg-[#0e1a32]'}  flex-1`}>
         <View style={className` ${colorScheme === 'light' ? 'bg-[#f7f7f7] border-t-[#0261ef]' : 'bg-[#0e1a32] border-t-[#ffd75b]'}  border-t-[3px] w-[100%] `}>
         </View>

      
        <View style={className`px-4`}>
        <Text style={className` ${ colorScheme === 'light' ? 'text-black' : 'text-white'} font-bold text-xl text-left pt-5 pb-1`}>What's Your Email Address</Text>
        <Text style={className` ${ colorScheme === 'light' ? 'text-black' : 'text-white'} text-xs text-left pb-7`}>Enter the Email address you want to use for this account</Text>
        </View>

      <View style={className`px-4`}>

        <View style={className` flex-row items-center overflow-hidden rounded-xl  py-3  ${ colorScheme === 'light' ? ` bg-[#fff]` : ` bg-[#1a263e] `}`}>
          <View style={className` flex-row ml-3  p-2 items-center overflow-hidden rounded-xl  ${ colorScheme === 'light' ? `${isFocused ? 'bg-white border border-[#0261ef]' : 'bg-[#e5e5e5]' } text-black` :    `${isFocused ? 'border border-[#ffd75b]' : 'bg-[#1a263e]' }` }`}>
            <View style={className``}>
              <Envelope width={20} height={20} strokeWidth={4}   fill={`${ colorScheme === 'light' ?  '#b9c1ce' : '#b9c1ce' }`} />
            </View>
            <View style={className`relative w-[90%]`}>
              {
                isFocused && (
                  <Text style={className`absolute z-8 top-0 left-3 text-[8px] text-gray-400`}>
                    Email Address
                  </Text>
                )
              }
              <TextInput onChangeText={handleText}  cursorColor={`${ colorScheme === 'light' ? '#0261ef' : '#ffd75b'}`}  onFocus={handleFocus} onBlur={handleBlurEvent} placeholder={isFocused ? '': 'Email Address'}  placeholderTextColor={colorScheme === 'light' ? 'black' : 'gray'} style={className`py-1 pl-2 w-[90%] rounded-lg  ${ colorScheme === 'light' ? `${isFocused ? 'bg-white' : 'bg-[#e5e5e5]' } text-black` : 'bg-[#1a263e] text-white'} `} />
            </View>
          </View>
        </View>
        {
          isInputErr &&  <Text style={className`text-[12px] pl-6 text-red-500 `}>Email is invalid or incomplete</Text>
        } 
      </View>

        <View style={className`p-4 absolute bottom-0 w-full`}>
      
    
      <View style={className`max-w-sm`}>
      {/* <TouchableOpacity onPress={handleNext}  style={className`rounded-xl w-full ${ btnActive ? `${colorScheme === 'light' ? 'bg-[#0261ef]' : 'bg-[#ffd75b]'}`  :   `${colorScheme === 'light' ? 'bg-[#e5e5e5]' : 'bg-[#19222c]'}` } py-4 px-4 flex-row items-center justify-center`}  >
                          <Text style={className` ${colorScheme === 'light' ? `${btnActive ? 'text-white' : 'text-[#999999]'  }` : `${btnActive ? 'text-black' : 'text-[#675e3d]'  }` } text-sm font-semibold`}>Next</Text>
                        </TouchableOpacity> */}

        <TouchableOpacity onPress={handleNext}  style={className`rounded-xl w-full ${ btnActive ? `${colorScheme === 'light' ? 'bg-[#0261ef]' : 'bg-[#ffd75b]'}`  :   `${colorScheme === 'light' ? 'bg-[#e5e5e5]' : 'bg-[#19222c]'}` } py-4 px-4 flex-row items-center justify-center`}  >
          <Text style={className` ${colorScheme === 'light' ? `${btnActive ? 'text-white' : 'text-[#999999]'  }` : `${btnActive ? 'text-black' : 'text-[#675e3d]'  }` } text-sm font-semibold`}>Next</Text>
        </TouchableOpacity>
      </View>

      <Text style={className`text-xs text-center py-2 ${ colorScheme === 'dark' ? 'text-[#ffd75b]' : 'text-[#0261ef]'}`}>i don't have an email</Text>

         </View>

    </View>
    </TouchableWithoutFeedback>

  )
}

export default SignUpEmail