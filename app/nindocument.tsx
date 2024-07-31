import { View, Text, useColorScheme, TouchableOpacity, StyleSheet, TextInput, Keyboard, TouchableWithoutFeedback } from 'react-native'
import React, { useEffect, useState } from 'react'
import className  from 'twrnc';
import ArrowBack from '../assets/arrow-back-svgrepo-com.svg';
import Exclaimation from '../assets/exclamation-mark-sign-alert-warning-important-svgrepo-com.svg';
import { router } from 'expo-router';
import useThemeStyles from '../utils/dynamic';
import HeaderStatus from '../components/HeaderStatus';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useAppDispatch } from '../features/hooks';
import { setId, shouldShowModal } from '../features/auth/auth';
import { delayNavigation } from '../utils/useIntervalHook';

const DocumentVerification = () => {
  const [selectedValue, setSelectedValue] = useState(''); 
  const [isInputErr, setIsInputErr] = useState<boolean>(false); 
  const [isFocus, setIsFocus] = useState<boolean>(false); 
  const [isBlur, setIsBlur] = useState<boolean>(false); 
  const [btnActive, setBtnActive] = useState<boolean>(false); 
  const [showModal, setShowModal] = useState<boolean>(false);
  const [number, setNumber] = useState<string>();
  const getmode = useThemeStyles();
  const currentMode = useColorScheme();
  const dispatch = useAppDispatch();
  
  useEffect(() => {
    dispatch(shouldShowModal(false));
}, [])

  useEffect(() => {
  number?.length === 11 ? setBtnActive(true) : setBtnActive(false);
  }, [number])

  const handleFocus = () => {
    setIsInputErr(false);
    setIsBlur(false);
      setIsFocus(true);
    }

    const handleNumber = (textInput: string) => {
        setNumber(textInput)
      };
  
    const handleBlur = () => {
        console.log('blurred')
        setIsFocus(false);
        Keyboard.dismiss();
        if(number){
          if(number?.length <= 9){
            setIsInputErr(true)
          }else{
            setIsInputErr(false)
          }
        }
        }

      const handleNoInput = () => {
        setIsInputErr(true);
        Keyboard.dismiss();
      }

const  handleNext = async() => {
  if(!btnActive )return;
 number && dispatch(setId(number))
    dispatch(shouldShowModal(true));
    delayNavigation('photocapture');
  }
// yellow #ffd75b   blue #0663f0 white  #ffffff
  return (
    <TouchableWithoutFeedback onPress={handleNoInput}>
    <View style={className`${ currentMode === 'light' ? 'bg-[#f7f7f7]' : 'bg-[#000e28]'} px-2 py-2 h-screen flex-1`}>

        <View style={className`flex-row justify-between items-center px-4 mt-8 mb-4`}>
          <TouchableOpacity onPress={() => router.back() }>
            <ArrowBack width={25} height={25} strokeWidth={3} fill={`${currentMode === 'light' ? '#0663f0' : 'white'}`}  />
          </TouchableOpacity>
          <Text style={className`text-lg font-bold ${getmode.textColorTwo}`}>Upgrade to Level 1</Text>
          <HeaderStatus progress={0.2} leftNum={2} rightNum={7} />        
          </View>


      <View style={className`px-4`}>
        <View style={className``}>
          <Text style={className` ${ currentMode === 'light' ? 'text-black' : 'text-white'} font-bold text-2xl text-left pt-5 pb-1`}>Verify your NIN</Text>
          <Text style={className` ${ currentMode === 'light' ? 'text-black' : 'text-white'} text-xs text-left pb-7`}>Enter your 11 digit NIN</Text>
        </View>

        <View style={className`  max-w-sm `}>
            <View style={className`p-4 ${ currentMode === 'light' ? 'bg-[#ffffff]' : 'bg-[#0e1a32]'} rounded-2xl w-full`}>
                <View style={className`w-full overflow-hidden flex-row rounded-xl ${ isInputErr ? 'border border-red-500' : ''} ${ isFocus ? `border ${ currentMode === 'light' ? 'border-[#0261ef]' : 'border-[#ffd75b]' } ` : ''}   ${ currentMode === 'light' ? 'bg-[#f3f5f8]' : 'bg-[#1a263e]'}  `}>
                    <TextInput cursorColor={currentMode === 'light' ? '#0261ef' : '#ffd75b'} keyboardType='number-pad' maxLength={11} onFocus={handleFocus} onBlur={handleBlur}  onChangeText={handleNumber} value={number} placeholder='NIN number'  placeholderTextColor={currentMode === 'light' ? 'black' : 'gray'} style={className`pl-4 py-2 w-[60%] rounded-tr-xl rounded-br-xl  ${ currentMode === 'light' ? 'bg-[#f3f5f8] text-black' : 'bg-[#1a263e] text-white'} `} />
                </View>
                {
                isInputErr &&  <Text style={className`text-[12px] text-red-500 pl-2 `}>NIN is incorrect or incomplete</Text>
                } 
            </View>

        <View>
        </View>
        </View>

        <View style={className`flex-row items-center gap-1 rounded-lg my-3 p-2  ${currentMode === 'light' ? 'bg-[#ffffff]' : 'bg-[#343631]'}`}>
            <View style={className`flex-col items-center justify-between`}>
              <View style={className` ${getmode.backGroundColor }  rounded-full p-1`}>
                <Exclaimation width={11} height={11} strokeWidth={4}   fill={`${currentMode === 'light' ? 'white' : 'black'}`} />
              </View>
              <View></View>
            </View>
          <View style={className`w-70 p-2`}>
            <Text style={className` ${currentMode === 'light' ? 'text-black' : 'text-white' } text-justify pr-4 text-[12px] font-semibold max-w-lg `}>You can proceed with either one now, but you will be required to provide the other for a level 2 account upgrade</Text>
          </View>
        </View>

        </View>


      <View style={className`p-4 absolute bottom-5 w-full left-2 right-2`}>    
      <View style={className`w-full flex-row items-center justify-center`}>
        {/* <TouchableOpacity onPress={() => router.push('photocapture')}  style={className`rounded-xl w-full ${currentMode === 'light' ? 'bg-[#0261ef] text-white' : 'bg-[#ffd75b] text-black'}  py-6 px-4 flex-row items-center justify-center`}  > */}
        <TouchableOpacity onPress={handleNext}  style={className`rounded-xl w-full ${ btnActive ? `${currentMode === 'light' ? 'bg-[#0261ef]' : 'bg-[#ffd75b]'}`  :   `${currentMode === 'light' ? 'bg-[#e5e5e5]' : 'bg-[#19222c]'}` } py-4 px-4 flex-row items-center justify-center`}  >
          <Text style={className`${ currentMode === 'dark' ? 'text-white' : 'text-white'} text-sm font-semibold`}>Proceed</Text>
        </TouchableOpacity>
      </View>
    </View>


    </View>
    </TouchableWithoutFeedback>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 8,
  },
  outerCircle: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#0261ef',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
    backgroundColor: 'transparent',
  },
  innerCircle: {
    width: 12,
    height: 12,
    borderColor: '#0261ef',
    borderRadius: 6,
    backgroundColor: '#E3CC7E',
  },
  outerCirclenight: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#fcd762',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
    backgroundColor: '#fcd762',
  },
  innerCirclenight: {
    width: 12,
    height: 12,
    zIndex: 20,
    borderColor: '#000',
    borderRadius: 6,
    backgroundColor: '#fcd762',
  },
  label: {
    fontSize: 16,
  },
  midCircle: {
    width: 15,
    height: 15,
    zIndex: 20,
    borderColor: '#000',
    borderRadius: 8,
  }
});


export default DocumentVerification