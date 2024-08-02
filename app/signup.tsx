import { View, Text, Pressable,TextInput, StyleSheet, useColorScheme, TouchableWithoutFeedback, Keyboard, KeyboardAvoidingView, Platform, TouchableOpacity, Modal, ScrollView } from 'react-native'
import { Image } from 'expo-image';
import React, { useEffect, useState } from 'react';
import className from 'twrnc'
import Gift from '../assets/gift-card-svgrepo-com.svg';
import ArrowDown from '../assets/arrow-down-3101.svg';
import ArrowUp from '../assets/up-arrow-svgrepo-com.svg';
import { router, useNavigation } from 'expo-router';
import { useAppDispatch, useAppSelector } from '../features/hooks';
import useThemeStyles from '../utils/dynamic';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { sendPhoneSms, setPhoneNum, shouldShowModal, verifyPhoneNum } from '../features/auth/auth';
import { delayNavigation } from '../utils/useIntervalHook';



const  Signup = () => {
  const [showReferral, setShowReferral] = useState<boolean>(false);
  const [isFocus, setIsFocus] = useState<boolean>(false);
  const [isFocused, setIsFocused] = useState<boolean>(false);
  const [isFocusRef, setIsFocusRef] = useState<boolean>(false);
  const [isBlur, setIsBlur] = useState<boolean>(false);
  const [isBlurRef, setIsBlurRef] = useState<boolean>(false);
  const [isInputErr, setIsInputErr] = useState<boolean>(false);
  const [btnActive, setBtnActive] = useState<boolean>(false);
  const [phone, setPhone] = useState<string>();
  const [referral, setreferral] = useState<string>('');
  const [ hideFooter, setHideFooter ] = useState<boolean>(false);
  const [ showModal, setShowModal ] = useState<boolean>(false);
    let colorScheme = useColorScheme();
    const getmode = useThemeStyles();
    const dispatch = useAppDispatch();
    const { showmodal } = useAppSelector((state) => state.auth);

    useEffect(() => {
      if(btnActive){
        setIsInputErr(false);
      }else{
        if(phone && phone?.length > 0){
          setIsInputErr(true);
        }
      }
    }, [btnActive])


  

   const handleFocus = () => {
    setIsBlur(false);
      setIsFocus(true);
      setIsInputErr(false);
    }


  const formatNum = (textInput: string) => {
    const digits = textInput.replace(/\D/g, '');
    const formatted = digits.replace(/(\d{3})(\d{3})(\d{4})/, '$1 $2 $3').trim();
    return formatted;
  }
  
  const handlePhone = (textInput: string) => {
    const formatted = formatNum(textInput);
    setPhone(formatted);
    
    if( phone?.length === 9){
      setBtnActive(true);
    }else{
      setBtnActive(false);
    }
  };

  const handleReferralChange = (textInput: string) => {
    setreferral(textInput);
  }

  const handleOutsideClick = () => {
    if (isFocus) {
      // Check if the input length is less than 10 or empty
      if (phone && phone.length === 0 || phone && phone.length < 10) {
        // Show an alert if the condition is not met
        setIsInputErr(true)
        Keyboard.dismiss(); // Dismiss the keyboard
        setIsFocus(false); // Update the focus state
      }else{
        setIsInputErr(false);
        Keyboard.dismiss(); // Dismiss the keyboard
        setIsFocus(false); // Update the focus state
      }
    }
  };
  


   const handleBlur = () => {
    setIsFocus(false);
    Keyboard.dismiss();
    if(phone?.length !== 12){
      setIsInputErr(true)
    }
      
      
    }
 

    const handleNext = async() => {
      if(!btnActive ) return;
      if(referral){
       await AsyncStorage.setItem('referral', JSON.stringify(referral))
      }
      if(phone){
     
      const formattedPhoneNumber = phone.replace(/\s+/g, '');
      console.log(formattedPhoneNumber); // Output: 1234567890
      phone && dispatch(setPhoneNum(formattedPhoneNumber));
      const data = { formattedPhoneNumber };
      phone && dispatch(sendPhoneSms(data)).then((res: any) => {
        console.log(res)
      })
      await AsyncStorage.setItem(
        'phone',
        `${formattedPhoneNumber}`,
      );
      setShowModal(true);
      dispatch(shouldShowModal(true));
      setPhone('');
      setreferral('');
      setBtnActive(false);    
      setIsInputErr(false);    
      delayNavigation('verifyphone') 
      
    }
    }



 
  
    
    
  return (
    <TouchableWithoutFeedback onPress={handleOutsideClick}>
          <KeyboardAvoidingView style={className`flex-1`} behavior={Platform.OS === 'ios' ? 'padding' : 'height'} keyboardVerticalOffset={Platform.OS === 'ios' ? 80 : 0 }>
            <View style={className`${ colorScheme === 'light' ? 'bg-[#f7f7f7]' : 'bg-[#000e28]'} h-full flex-1 `}>
            <ScrollView>
              {/* main content  */}
              <View style={className`flex-1`}>
                  <View style={className` ${colorScheme === 'light' ? 'bg-[#f7f7f7] border-t-[#0261ef]' : 'bg-[#0e1a32] border-t-[#ffd75b]'}  border-t-[3px] w-[25%] `}>
                    </View>
                    
                    <View style={className`px-4`}>
                      <Text style={className` ${ colorScheme === 'light' ? 'text-black' : 'text-white'} font-bold text-xl text-left pt-5 pb-1`}>What's Your Phone Number?</Text>
                      <Text style={className` ${ colorScheme === 'light' ? 'text-black' : 'text-white'} text-xs text-left pb-7`}>Enter the phone number you want to use for this account</Text>
                    </View>

                  <View style={className`px-4  max-w-sm `}>
                    <View style={className`p-4 ${ colorScheme === 'light' ? 'bg-[#ffffff]' : 'bg-[#0e1a32]'} rounded-2xl w-full`}>
                      <View style={className`w-full flex-row rounded-xl ${ isInputErr ? 'border border-red-500' : ''} ${ isFocus ? `border ${ colorScheme === 'light' ? 'border-[#0261ef]' : 'border-[#ffd75b]' } ` : ''}   ${ colorScheme === 'light' ? 'bg-[#f3f5f8]' : 'bg-[#1a263e]'}  `}>
                          <View style={className`flex-row rounded-tl-xl rounded-bl-xl border-r border-gray-300 items-center p-2    ${ colorScheme === 'light' ? 'bg-[#f3f5f8]' : 'bg-[#1a263e]'}`}>
                              <Image source={require('../assets/flag.png')} style={className`w-8 h-8`} />
                              <Text style={className` px-1 ${colorScheme === 'light' ? 'text-black' : 'text-white'} text-xs`}>+234</Text>
                          </View>
                        
                          <TextInput cursorColor={colorScheme === 'light' ? '#0261ef' : '#ffd75b'} keyboardType='number-pad' maxLength={12} onFocus={handleFocus} onBlur={handleBlur}  onChangeText={handlePhone} value={phone} placeholder='Phone number'  placeholderTextColor={colorScheme === 'light' ? 'black' : 'gray'} style={className`pl-4 py-2 w-[60%] rounded-tr-xl rounded-br-xl  ${ colorScheme === 'light' ? 'bg-[#f3f5f8] text-black' : 'bg-[#1a263e] text-white'} `} />
                      </View>
                      {
                        isInputErr &&  <Text style={className`text-[12px] text-red-500 `}>Phone number is invalid or incomplete</Text>
                      } 
                    </View>

                    <View>

            
                  </View>

                  </View>

                  

                  <View style={className`max-w-sm mx-4 rounded-xl my-2 ${ colorScheme === 'light' ? 'bg-[#e6edfd]' : 'bg-[#343631]'} py-1 px-6`}>
                <View style={className`p-2 max-w-sm flex-row  items-center  ${ colorScheme === 'light' ? 'bg-[#e6edfd]' : 'bg-[#343631]'}`}>
                  <View style={className`p-1 w-full flex-row  ${ colorScheme === 'light' ? 'bg-[#e6edfd]' : 'bg-[#343631]'}  rounded-xl `}>
                      <View style={className`rounded-lg flex-row  items-center p-3  ${ colorScheme === 'light' ? 'bg-white' : 'bg-[#0e1a32]'}`}>
                          <Gift width={20} height={20} stroke={`${ colorScheme === 'light' ? '#0261ef' : '#ffd75b' }`}  style={className``} />
                      </View>

                      <Text  style={className`p-2  ${ colorScheme === 'light' ? 'text-black' : 'text-white'} text-sm `} >Have a referral code?</Text>
                  </View>

                    <Pressable style={className`pr-14 mr-14`} onPress={() => setShowReferral(!showReferral)}>
                        <View style={className``}>
                          {
                            showReferral ?   <ArrowUp  width={13} height={13} strokeWidth={5} fill={`${ colorScheme === 'light' ? '#0261ef' : '#ffd75b' }`} />
                            : <ArrowDown  width={13} height={13} strokeWidth={5} fill={`${ colorScheme === 'light' ? '#0261ef' : '#ffd75b' }`} />

                          }
                        </View>
                    </Pressable>
              </View>

              {
                showReferral &&
                ( <View style={className`p-3 relative`}>
                    {
                      isFocused && (
                        <Text style={className`absolute z-8 top-4 left-6 text-[9px] text-gray-400`}>
                          Referral Code (Optional)
                        </Text>
                      )
                    }

                  {
                    colorScheme === 'light' ? (
                      <TextInput onFocus={() => setIsFocused(true)} onBlur={() => setIsFocused(false)} placeholder={isFocused ? '': 'Referral Code (Optional)'}  onChangeText={handleReferralChange}  cursorColor={'#0261ef'} value={referral}  style={className`px-4 py-2 text-sm rounded-lg bg-white text-gray-200`} />
                    ) : (
                      <TextInput onFocus={() => setIsFocused(true)} onBlur={() => setIsFocused(false)} placeholder={isFocused ? '': 'Referral Code (Optional)'}  onChangeText={handleReferralChange} cursorColor={'#ffd75b'} value={referral}  placeholderTextColor='#b9c1ce' style={className`px-4 py-2 text-sm rounded-lg  bg-[#1a263e] text-gray-200 `}  />
                    )
                  }
                </View>)
              }
              
              {/* <AppModal modalOn={showModal} /> */}

                </View>
            </View>
              </ScrollView>
            
        {/* footer  */}
              {
                hideFooter ? (
                  <View></View>
                ) : 
                <TouchableWithoutFeedback >
                    <View style={className`p-4 mt-1  w-full`}>
              
                      <View style={className`flex-row max-w-sm text-left text-xs py-2`}>
                      <Text style={className` ${ colorScheme === 'light' ? 'text-black' : 'text-white' } text-[10px] `}>By Clicking on "Create Profile", you agree to Moniepoint's <Text style={className`text-[#0261ef] text-[10px] font-bold dark:text-[#343631]`}>Terms and Conditions </Text>and <Text>Privacy Policy</Text> </Text>
                      </View>
              
                      <View style={className`max-w-sm`}>    
                        <TouchableOpacity onPress={handleNext}  style={className`rounded-xl w-full ${ btnActive ? `${colorScheme === 'light' ? 'bg-[#0261ef]' : 'bg-[#ffd75b]'}`  :   `${colorScheme === 'light' ? 'bg-[#e5e5e5]' : 'bg-[#19222c]'}` } py-4 px-4 flex-row items-center justify-center`}  >
                          <Text style={className` ${colorScheme === 'light' ? `${btnActive ? 'text-white' : 'text-[#999999]'  }` : `${btnActive ? 'text-black' : 'text-[#675e3d]'  }` } text-sm font-semibold`}>Next</Text>
                        </TouchableOpacity>
                      </View>
                    </View>
                </TouchableWithoutFeedback>
              }
          
            {/* modal  */}
        
          
            </View>
          </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    picker: {
      width: 200,
      height: 50,
      marginBottom: 20,
    },
    infoContainer: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    flag: {
      width: 40,
      height: 30,
      marginRight: 10,
    },
    info: {
      fontSize: 18,
    },
    btndown: {
      position: 'absolute',
      bottom: 5,
    },
    desc: {
      fontSize: 16,
      lineHeight: 24,
      opacity: 0.7,
    },
    title: {
      fontWeight: "600",
      fontSize: 18,
      marginBottom: 12,
    },
    card: {
      width: "90%",
      padding: 20,
      backgroundColor: "white",
      borderRadius: 8,
    },
    content: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "rgba(0,0,0,0.5)",
    },
    text: {
      fontWeight: "600",
      fontSize: 16,
      color: "white",
    },
    button: {
      width: "90%",
      backgroundColor: "black",
      justifyContent: "center",
      alignItems: "center",
      height: 56,
      borderRadius: 8,
    },
  
  });
  

export default Signup