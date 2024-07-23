import { View, Text, useColorScheme, TextInput, TouchableOpacity, Keyboard } from 'react-native'
import React, { useRef, useState } from 'react'
import className from 'twrnc'
import { router } from 'expo-router';
import ArrowForward from '../assets/arrow-forward-svgrepo-com.svg';
import DeleteIcon from '../assets/backspace-svgrepo-com.svg';

const passcode = () => {
    const currentMode = useColorScheme();
    const [isFocus, setISfocus] = useState<boolean>(false);
    const [currentIndex, setCurrentIndex] = useState<number>();
    const [arrNum, setArrNum] = useState<string[]>(Array(6).fill(''));
  
    // Create refs for each TextInput
    const inputRefs = useRef<TextInput[]>([]);
  
    // Update number and focus the next input
    const updateNum = (val: string) => {
      const nextIndex = arrNum.findIndex(num => num === ''); // Find the first empty index
      if (nextIndex !== -1) {
        const newArrNum = [...arrNum];
        newArrNum[nextIndex] = val;
        setArrNum(newArrNum);
  
        // Focus the next TextInput
        if (inputRefs.current[nextIndex + 1]) {
          setCurrentIndex(nextIndex + 1)
          inputRefs.current[nextIndex + 1].focus();
        }
      }
    };

    const deleteLastNum = () => {
      const newArrNum = [...arrNum];
      const lastIndex = arrNum.findLastIndex(num => num !== '');
      if (lastIndex !== -1) {
        newArrNum[lastIndex] = '';
        setArrNum(newArrNum);
        inputRefs.current[lastIndex].focus();
      }
    };

    const handleFocus = (index: number) => {
      Keyboard.dismiss(); 
      inputRefs.current[index]?.blur();
      setISfocus(true);
    };
    

  return (
    <View style={className`flex-1 ${currentMode === 'light' ? 'bg-[#f7f7f7]' : 'bg-[#0e1a32]'}`}>

        <View>
            <Text style={className` ${ currentMode === 'light' ? 'text-black' : 'text-white'} font-bold text-xl text-center pt-5 pb-1`}>Setup your Passcode</Text>
            <Text style={className` ${ currentMode === 'light' ? 'text-black' : 'text-white'} text-[15px] text-center pb-7`}>Enter a 6 digit passcode</Text>
        </View>

        <View style={className`mx-6 p-4 rounded-xl ${ currentMode === 'light' ? 'bg-[#e6edfd]' : 'bg-[#343631]'}`}>
             <View style={className`flex flex-row w-full justify-center gap-1 mb-4`}>
        {arrNum.map((num, index) => (
          <TextInput
            key={index}
            ref={ref => inputRefs.current[index] = ref!}
            value={num}
            onChangeText={(text) => {
              // Allow only single character input
              if (text.length <= 1) {
                updateNum(text);
              }
            }}
            cursorColor={`${currentMode === 'light' ? '#0261ef' : 'white'}`}
            // editable={false}
            showSoftInputOnFocus={false}
            // onFocus={() => handleFocus(index)}
            style={className`p-2 rounded-md font-bold text-lg text-center ${ currentIndex === index ? 'border border-[#0261ef]' : ''}  ${currentMode === 'light' ? 'text-black bg-white' : 'text-white bg-[#1a263e]'}`}
            maxLength={1} // Ensure only one character
          />
        ))}
      </View>
        </View>


        <View style={className`mx-4 my-6 p-4 rounded-xl ${currentMode === 'light' ? '' : 'bg-[#0e1a32]'}`}>
        <View style={className`flex-row flex-wrap w-full justify-between gap-1 mb-4`}>
          {['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'].map(num => (
            <View key={num} style={className`rounded-full p-6 w-[25%] ${currentMode === 'light' ? 'bg-[#e6edfd]' : 'bg-[#1a263e]'}`}>
              <TouchableOpacity onPress={() => updateNum(num)}>
                <Text style={className`font-bold text-lg text-center ${currentMode === 'light' ? 'text-black' : 'text-white bg-[#1a263e]'}`}>{num}</Text>
              </TouchableOpacity>
            </View>
          ))}

            <View   style={className`rounded-full p-6 w-[25%]  ${ currentMode === 'light' ? 'bg-[#e6edfd]' : 'bg-[#1a263e]'}` }>
                <TouchableOpacity onPress={() => router.push('success')}>
                  <ArrowForward  width={30} height={30} fill={`${ currentMode === 'light' ? 'black' : 'white'}`} />
                </TouchableOpacity>
              </View>
              <View  style={className`rounded-full p-6 w-[25%]  ${ currentMode === 'light' ? 'bg-[#e6edfd]' : 'bg-[#1a263e]'}` }>
                <TouchableOpacity onPress={deleteLastNum}>
                    <DeleteIcon width={30} height={30} stroke={ `${ currentMode === 'light' ? 'black' : 'white'}`}  />
                </TouchableOpacity>              
               </View>

        </View>
      </View>

          <View style={className``}> 
            <Text style={className`text-center text-xs ${currentMode === 'light' ? 'text-[#0261ef]' : 'text-[#ffd75b]'} `}>Forgot passcode?</Text>
          </View>
    </View>
  )
}

export default passcode