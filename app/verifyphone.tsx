import { View, Text, useColorScheme, TextInput, Keyboard } from 'react-native'
import React, { useEffect, useLayoutEffect, useRef, useState } from 'react'
import className from 'twrnc'
import { GestureHandlerRootView, TouchableOpacity } from 'react-native-gesture-handler';
import { shouldShowModal } from '../features/auth/auth';
import { useAppDispatch, useAppSelector } from '../features/hooks';
import Exclaimation from '../assets/info-svgrepo-com.svg';
import Message from '../assets/letter-svgrepo-com.svg';
import DialPad from '../assets/dial-pad-svgrepo-com.svg';
import Whatsapp from '../assets/whatsapp-128-svgrepo-com.svg';
import ArrowBack from '../assets/arrow-back-svgrepo-com.svg';
import { router } from 'expo-router';
import { BottomSheetModal, BottomSheetModalProvider } from '@gorhom/bottom-sheet';
import { BlurView } from 'expo-blur';
import useThemeStyles from '../utils/dynamic';

const Verifyphone = () => {
  const [isFocus, setISfocus] = useState<boolean>(false);
  const [resend, setResend] = useState<boolean>(false);
  const [currentIndex, setCurrentIndex] = useState<number>();
  const [focusIndex, setFocusIndex] = useState<number>();
  const [arrNum, setArrNum] = useState<string[]>(Array(6).fill(''));
  const resendModalRef = useRef<BottomSheetModal>(null);
  const inputRefs = useRef<TextInput[]>([]);
  const colorScheme = useColorScheme();
  const getmode = useThemeStyles();
  const dispatch = useAppDispatch();
  useLayoutEffect(() => {
    Keyboard.dismiss();
  }, [])
    
    useEffect(() => {
      inputRefs.current[0].focus();
    }, [])

    useEffect(() => {
     resend && resendModalRef.current?.present();
    }, [resend])

    const { showmodal } = useAppSelector((state) => state.auth );

    const snapShot = [70, 80]
  
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

    const deleteLastNum = () => {
      const newArrNum = [...arrNum];
      const lastIndex = arrNum.findLastIndex(num => num !== '');
      if (lastIndex !== -1) {
        newArrNum[lastIndex] = '';
        setArrNum(newArrNum);
        setFocusIndex(lastIndex - 1);
        inputRefs.current[lastIndex-1].focus();
      }
    };
    const handleNext = () => {
        router.push('signupemail')
    }

    const handleResendModal = () => {
      Keyboard.dismiss();
      setResend(true);
    }

    console.log('resend ', resend)
    const closeModal = () => {
      setResend(false);
      resendModalRef.current?.dismiss();
    }
  return (
    <GestureHandlerRootView style={{ flex: 1}}> 
      <View style={className`flex-1  ${colorScheme === 'light' ? 'bg-[#f7f7f7]' : 'bg-[#000e28]'} `}>
      <BottomSheetModalProvider>
    <View style={className`${ colorScheme === 'light' ? 'bg-[#f7f7f7]' : 'bg-[#000e28]'} h-screen flex-1 `}>

        <View style={className`flex-row justify-between items-center px-4 mt-10 mb-4`}>
          <TouchableOpacity onPress={() => router.back() }>
            <ArrowBack width={25} height={25} strokeWidth={3} fill={getmode.fillColor}  />
          </TouchableOpacity>
            <Text style={className`text-sm ${colorScheme === 'light' ? 'text-[#0261ef]' : 'text-[#ffd75b}' }`}>Needs help</Text>
        </View>

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
                    console.log('my index is ', index)
                    setCurrentIndex(index - 1);
                    inputRefs.current[index - 1].focus();
                  }
                }
              }
            }}
            cursorColor={`${ !currentIndex ? 'black' : currentIndex === index && colorScheme === 'light' ? 'black' : 'white'}`}
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
                <TouchableOpacity onPress={() => handleResendModal()}>
                  <Text style={className`text-xs ${colorScheme === 'light' ? 'text-[#0261ef]' : 'text-[#ffd75b]' } `}>Resend OTP</Text>
                </TouchableOpacity>
            </View>
        </View>

        <View style={className`p-4 absolute bottom-0 w-full`}>
          <View style={className`max-w-sm`}>
            <TouchableOpacity onPress={handleNext}  style={className`rounded-xl w-full ${colorScheme === 'light' ? 'bg-[#0261ef] text-white' : 'bg-[#ffd75b] text-black'}  py-6 px-4 flex-row items-center justify-center`}  >
              <Text style={className`text-white text-sm font-bold`}>Next</Text>
            </TouchableOpacity>
          </View>
       </View>

       {
                resend && (
                <BlurView style={{ zIndex: 0, width: '100%', height: '100%', position: 'absolute'}} experimentalBlurMethod='dimezisBlurView' tint='regular' intensity={10}>
                    <BottomSheetModal 
                    ref={resendModalRef}
                    index={0}
                    snapPoints={snapShot}
                    backdropComponent={(props) => (
                      <View {...props} onTouchEnd={closeModal}   />
                    )}
                    backgroundStyle={className`rounded-3xl w-full ${colorScheme === 'light' ? 'bg-[#e6edfd]' : 'bg-[#162640]'} `}
                    style={className`rounded-3xl flex-1 z-3 w-full ${colorScheme === 'light' ? 'bg-[#e6edfd]' : 'bg-[#162640]'} `}
                    >
                    <View style={className`p-4 flex-1 h-[100%]`}>

                      <View style={className`flex-row justify-center `}>
                        <View style={className`flex-row rounded-full justify-center items-center p-4 ${colorScheme === 'light' ? 'bg-[#0261ef]' : 'bg-[#ffd75b]'}`}>
                          <Exclaimation width={22} height={22} fill={colorScheme === 'light' ? 'black' : 'white'} />
                        </View>
                      </View>
                    <Text style={className`${colorScheme === 'light'  ? 'text-black' : 'text-white'}  ${colorScheme === 'light' ? 'bg-[#e6edfd]' : 'bg-[#162640]'} font-bold  py-6 text-center text-sm`}>Resend OTP</Text>

                     

                      <View style={className`flex-row items-center my-2  gap-2`}>
                        <View style={className`flex-row rounded-xl justify-center items-center p-2 ${colorScheme === 'light' ? 'bg-[#0261ef]' : 'bg-[#ffd75b]'}`}>
                            <DialPad width={20} height={20} fill={getmode.fillColor} />
                        </View>
                        <View>
                          <Text  style={className`${getmode.textColorTwo} text-sm font-semibold flex-row items-center`}>Dial <Text  style={className` ${colorScheme === 'light' ? 'text-[#0261ef]' : 'text-[#ffd75b]'} text-sm font-semibold`}>*5573*74*1088#</Text></Text>
                          <Text style={className`text-gray-500 text-xs`}>From phone number ***7878</Text>
                        </View>
                      </View>

                      <View style={className`flex-row items-center my-2  gap-2`}>
                        <View style={className`flex-row rounded-xl justify-center items-center p-2 ${colorScheme === 'light' ? 'bg-[#0261ef]' : 'bg-[#ffd75b]'}`}>
                            <Message width={20} height={20} fill={'gray'} />
                        </View>
                        <View>
                          <Text  style={className` text-sm font-semibold flex-row items-center`}>                          
                            <Text style={className`text-gray-500 text-xs`}>Send via SMS in</Text>
                            <Text style={className` ${colorScheme === 'light' ? 'text-[#0261ef]' : 'text-[#ffd75b]'}` }>9:36</Text>
                          </Text>
                        </View>
                      </View>

                      <View style={className`flex-row items-center my-2  gap-2`}>
                        <View style={className`flex-row rounded-xl justify-center items-center p-2 ${colorScheme === 'light' ? 'bg-[#0261ef]' : 'bg-[#ffd75b]'}`}>
                            <Whatsapp width={20} height={20} fill={getmode.fillColor} />
                        </View>
                        <View>
                          <Text  style={className`${getmode.textColorTwo} text-sm font-semibold flex-row items-center`}>Send via WhatsApp</Text>
                        </View>
                      </View>
                    </View>
                        
                    </BottomSheetModal>
                </BlurView>
            )
            }

    </View>
    </BottomSheetModalProvider>
    </View>
    </GestureHandlerRootView>
  )
}

export default Verifyphone