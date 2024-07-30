import { View, Text, useColorScheme, TextInput, TouchableOpacity, Keyboard } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import className from 'twrnc'
import { router } from 'expo-router';
import ArrowForward from '../assets/arrow-forward-svgrepo-com.svg';
import DeleteIcon from '../assets/backspace-svgrepo-com.svg';
import useThemeStyles from '../utils/dynamic';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useAppDispatch } from '../features/hooks';
import { shouldShowModal } from '../features/auth/auth';
import { delayNavigation } from '../utils/useIntervalHook';
import Phone from '../assets/call-answer-svgrepo-com.svg'
import { Image } from 'expo-image';

const Login = () => {
    const [isFocus, setISfocus] = useState<boolean>(false);
    const [currentIndex, setCurrentIndex] = useState<number>();
    const [passcodeReady, setPasscodeReady] = useState<boolean>(false);
    const [arrNum, setArrNum] = useState<string[]>(Array(6).fill(''));
    const [showModal, setShowModal] = useState<boolean>(false);
    const dispatch = useAppDispatch()
    const getmode = useThemeStyles();
    const currentMode = useColorScheme();
    const inputRefs = useRef<TextInput[]>([]);

    useEffect(() => {
      setCurrentIndex(0);
      inputRefs.current[0].focus();
    }, [])

    useEffect(() => {
      let newArr = arrNum.filter((t) => t.length > 0);
      if(newArr.length === 6){
        setPasscodeReady(true);
      }else{
        setPasscodeReady(false);
      }
    }, [arrNum])


    useEffect(() => {
      if(showModal){
        dispatch(shouldShowModal(true));
        delayNavigation('(tabs)/home');
      }
    }, [showModal])
    
    useEffect(() => {
      dispatch(shouldShowModal(false));
  }, [])
    
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
        setCurrentIndex(lastIndex);
        inputRefs.current[lastIndex].focus();
      }
    };

    const handleNext = () => {
      if(!passcodeReady)return;
      const passcode = arrNum.join('');
    //   AsyncStorage.setItem('passcode', JSON.stringify(passcode));
      setShowModal(true);
    }

 // dark '#000e28' : light '#f7f7f7'        

  return (
    <View style={className`flex-1 ${currentMode === 'light' ? 'bg-[#f7f7f7]' : 'bg-[#000e28]'}`}>
        <View style={className`flex-row justify-center  items-center w-full rounded-xl`}>
        <View style={className`flex-col gap-1 justify-center mt-3 items-center w-full rounded-xl`}>
            <Image source={require('../assets/s13.png')} style={className`w-15 h-15 py-1 px-2 rounded-xl`} />
            <View style={className` ${currentMode === 'light' ? '#0261ef' : '#ffd75b'} flex-row items-center gap-1 `}>
                <Phone width={10} height={10} fill={`${currentMode === 'light' ? '#0261ef' : 'white'}`} />
                <Text style={{ color: currentMode === 'dark' ? '#ffd75b' : '#0261ef'  }}>***5566</Text>
            </View>
        </View>
        </View>

        <View>
            <Text style={className` ${ currentMode === 'light' ? 'text-black' : 'text-white'} font-bold text-xl text-center pt-5 pb-1`}>Welcome back!</Text>
            <Text style={className` ${ currentMode === 'light' ? 'text-black' : 'text-white'} text-[15px] text-center pb-7`}>Enter your 6 digit passcode</Text>
        </View>

        <View style={className`mx-6 p-4 rounded-xl ${ currentMode === 'light' ? 'bg-[#e6edfd]' : 'bg-[#1a263e]'}`}>
             <View style={className`flex flex-row w-full justify-center gap-1`}>
        {arrNum.map((num, index) => (
          <TextInput
            key={index}
            ref={ref => inputRefs.current[index] = ref!}
            value={num}
            secureTextEntry={true}
            onChangeText={(text) => {
              // Allow only single character input
              if (text.length <= 1) {
                updateNum(text);
              }
            }}
            cursorColor={`${currentMode === 'light' ? 'black' : 'white'}`}
            // editable={false}
            showSoftInputOnFocus={false}
            // onFocus={() => handleFocus(index)}
            style={className`p-2 rounded-md font-bold text-lg text-center ${ currentIndex === index ? `${currentMode === 'light' ? 'text-black bg-white border border-[#000000]' : 'border border-[#ffd75b] text-white bg-[#000e28]'} ` : `${currentMode === 'light' ? 'text-black bg-white' : 'text-white bg-[#000e28]'} ` }  `}
            maxLength={1} // Ensure only one character
          />
        ))}
      </View>
        </View>


        <View style={className`mx-4 my-2 p-4 rounded-xl ${currentMode === 'light' ? '' : ''}`}>
        <View style={className`flex-row flex-wrap w-full justify-between gap-2 mb-2`}>
          {['1', '2', '3', '4', '5', '6', '7', '8', '9'].map(num => (
            <View key={num} style={className`rounded-full p-6 w-[25%] ${currentMode === 'light' ? 'bg-[#e6edfd]' : 'bg-[#1a263e]'}`}>
              <TouchableOpacity onPress={() => updateNum(num)}>
                <Text style={className`font-bold text-lg text-center ${currentMode === 'light' ? 'text-black' : 'text-white bg-[#1a263e]'}`}>{num}</Text>
              </TouchableOpacity>
            </View>
          ))}

              <View  style={className`rounded-full p-6 w-[25%]  ${ currentMode === 'light' ? 'bg-[#e6edfd]' : 'bg-[#1a263e]'}` }>
                <TouchableOpacity onPress={deleteLastNum}>
                    <DeleteIcon width={30} height={30} fill={ `${ currentMode === 'light' ? 'gray' : '#b9c1ce'}`} stroke={'white'}  />
                </TouchableOpacity>              
               </View>


               <View  style={className`rounded-full p-6 w-[25%]  ${ currentMode === 'light' ? 'bg-[#e6edfd]' : 'bg-[#1a263e]'}` }>
                <TouchableOpacity onPress={() => updateNum('0')}>
                <Text style={className`font-bold text-lg text-center ${currentMode === 'light' ? 'text-black' : 'text-white bg-[#1a263e]'}`}>0</Text>
                </TouchableOpacity>              
               </View>

            <View   style={className`rounded-full p-6 w-[25%]  ${ currentMode === 'light' ? `${passcodeReady ? 'bg-[#0261ef]' : 'bg-[#e6edfd]'   } ` : `${passcodeReady ? 'bg-[#ffd75b]' : 'bg-[#1a263e]'  }`  }` }>
                <TouchableOpacity onPress={handleNext}>
                  <ArrowForward  width={30} height={30} fill={currentMode === 'light' ? 'white' : 'white'} stroke={'white'} />
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

export default Login