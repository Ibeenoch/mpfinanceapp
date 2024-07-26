import { View, Text, useColorScheme, TextInput } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import className from 'twrnc'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { shouldShowModal } from '../features/auth/auth';
import { useAppDispatch, useAppSelector } from '../features/hooks';
import Exclaimation from '../assets/exclamation-mark-sign-alert-warning-important-svgrepo-com.svg'
import { router } from 'expo-router';

const Verifyphone = () => {
    const dispatch = useAppDispatch();
    const { showmodal } = useAppSelector((state) => state.auth );
    const [arrNum, setArrNum] = useState<string[]>(Array(6).fill(''));
    const colorScheme = useColorScheme();
    const [isFocus, setISfocus] = useState<boolean>(false);
    const [currentIndex, setCurrentIndex] = useState<number>();
    const [focusIndex, setFocusIndex] = useState<number>();
  
    // Create refs for each TextInput
    const inputRefs = useRef<TextInput[]>([]);
  
    // Update number and focus the next input
    const updateNum = (val: string) => {
      if(arrNum.length < 7){
      const nextIndex = arrNum.findIndex(num => num === ''); // Find the first empty index
      if (nextIndex !== -1) {
        const newArrNum = [...arrNum];
        newArrNum[nextIndex] = val;
        setArrNum(newArrNum);
        
  
        // Focus the next TextInput
        if (inputRefs.current[nextIndex + 1]) {
          inputRefs.current[nextIndex + 1].focus();
          setCurrentIndex(nextIndex + 1);
          setFocusIndex(nextIndex + 1)
        }

        
      }
    }
    };

    useEffect(() => {
      inputRefs.current[0].focus();
    }, [])

    const deleteLastNum = () => {
      const newArrNum = [...arrNum];
      const lastIndex = arrNum.findLastIndex(num => num !== '');
      if (lastIndex !== -1) {
        newArrNum[lastIndex] = '';
        setArrNum(newArrNum);
        setFocusIndex(lastIndex);
        inputRefs.current[lastIndex].focus();
      }
    };
    const handleNext = () => {
        router.push('signupemail')
    }
  return (
    <View style={className`${ colorScheme === 'light' ? 'bg-[#f7f7f7]' : 'bg-[#000e28]'} h-screen flex-1 `}>
         <View style={className` ${colorScheme === 'light' ? 'bg-[#f7f7f7] border-t-[#0261ef]' : 'bg-[#0e1a32] border-t-[#ffd75b]'}  border-t-[3px] w-[55%] `}>
         </View>

        <View style={className`px-6`}>
          <Text style={className` ${ colorScheme === 'light' ? 'text-black' : 'text-white'} font-bold text-xl text-left pt-5 pb-1`}>Verify Your Phone Number</Text>
          <Text style={className` ${ colorScheme === 'light' ? 'text-black' : 'text-white'} text-xs text-left pb-7`}>we've just sent you a digit code. Check your messages and enter here</Text>
        </View>

        <View style={className`mx-4 p-4 rounded-xl ${ colorScheme === 'light' ? 'bg-[#e6edfd]' : 'bg-[#0e1a32]'}`}>
            <View style={className`flex flex-row w-full justify-center gap-1 mb-4`}>
            {arrNum.map((num, index) => (
          <TextInput
            key={index}
            ref={ref => inputRefs.current[index] = ref!}
            value={num}
            keyboardType='number-pad'
            onKeyPress={({nativeEvent}) => {
              nativeEvent.key === 'Backspace' && index >= 0 && deleteLastNum() 
            }}
            onChangeText={(text) => {
              // Allow only single character input
              if (text.length <= 1) {
                // Update the number
                updateNum(text);
                
                // If the input is empty, focus on the previous input
                if (text === '') {
                  const newArrNum = [...arrNum];
                  newArrNum[index] = ''; // Clear the current input
                  setArrNum(newArrNum);
                  
                  // Focus the previous input
                  if (inputRefs.current[index - 1]) {
                    inputRefs.current[index - 1].focus();
                    setCurrentIndex(index - 1);
                  }
                }
              }
            }}
            cursorColor={`${ currentIndex === index && colorScheme === 'light' ? 'black' : 'white'}`}
            // editable={false}
            // showSoftInputOnFocus={false}
            // onFocus={() => handleFocus(index)}
            style={className`p-2 rounded-md font-bold text-lg text-center ${ focusIndex === index   ? `${colorScheme === 'light' ? 'bg-white border border-[#0361f0] text-black' : 'bg-[#0d1a32] text-white border border-[#f4c563]' }` : `${colorScheme === 'light' ? 'bg-[#f3f5f8] text-black' : 'bg-[#333e52] text-white' }` }  `}
            maxLength={1} // Ensure only one character
          />
        ))}
            </View>

            <View style={className`${ colorScheme === 'light' ? 'bg-white' : 'bg-[#19212c]'} py-3 px-6 rounded-lg flex-row items-center justify-between`}>
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
      
    
      <View style={className`max-w-sm`}>
        <TouchableOpacity onPress={handleNext}  style={className`rounded-xl w-full ${colorScheme === 'light' ? 'bg-[#0261ef] text-white' : 'bg-[#ffd75b] text-black'}  py-6 px-4 flex-row items-center justify-center`}  >
          <Text style={className`text-white text-sm font-bold`}>Next</Text>
        </TouchableOpacity>
      </View>



    </View>

    </View>
  )
}

export default Verifyphone