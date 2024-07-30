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

const UserExist = () => {
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
        delayNavigation('userexist');
        // delayNavigation('(tabs)/home');
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

       


          <View style={className`fonsi`}> 
            <Text style={className`text-center text-xs ${currentMode === 'light' ? 'text-[#0261ef]' : 'text-[#ffd75b]'} `}>Dismiss</Text>
            <Text style={className`text-center text-xs ${currentMode === 'light' ? 'text-[#0261ef]' : 'text-[#ffd75b]'} `}>Dismiss</Text>
          </View>
    </View>
  )
}

export default UserExist