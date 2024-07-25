import { View, Text, Pressable,TextInput, StyleSheet, useColorScheme, TouchableWithoutFeedback, Keyboard, KeyboardAvoidingView, Platform, TouchableOpacity, Modal } from 'react-native'
import { Image } from 'expo-image';
import React, { useEffect, useRef, useState } from 'react';
import className from 'twrnc'
import Flag from '../assets/Flag_of_Nigeria.svg';
import Gift from '../assets/gift-card-svgrepo-com.svg';
import ArrowDown from '../assets/arrow-down-3101.svg';
import ArrowUp from '../assets/up-arrow-svgrepo-com.svg';
import countries from '../utils/countries';
import { Picker } from '@react-native-picker/picker';
import { router, useNavigation } from 'expo-router';
import AppModal from '../components/Modal';
import { StatusBar } from 'expo-status-bar';
import { shouldShowModal } from '../features/auth/auth';
import { useAppDispatch, useAppSelector } from '../features/hooks';



const signup = () => {
    let colorScheme = useColorScheme();
    const dispatch = useAppDispatch();
    const navigation = useNavigation();
    const [showReferral, setShowReferral] = useState<boolean>(false);
    const [isFocus, setIsFocus] = useState<boolean>(false);
    const [isFocusRef, setIsFocusRef] = useState<boolean>(false);
    const [isBlur, setIsBlur] = useState<boolean>(false);
    const [isBlurRef, setIsBlurRef] = useState<boolean>(false);
    const [isInputErr, setIsInputErr] = useState<boolean>(false);
    const [btnActive, setBtnActive] = useState<boolean>(false);
    const [phone, setPhone] = useState<string>();
    const [referral, setreferral] = useState<string>('');
    const [selectedCountry, setSelectedCountry] = useState<string>('+234');
    const [ hideFooter, setHideFooter ] = useState<boolean>(false);
    const [ showModal, setShowModal ] = useState<boolean>(false);
    const [openModal, setOpenModal] = useState(false);
    const { showmodal } = useAppSelector((state) => state.auth);


   

   const handleFocus = () => {
    setIsBlur(false);
      setIsFocus(true);
    }

   const handleFocusRef = () => {
    setIsBlurRef(false);
      setIsFocusRef(true);
    }

  const HandlehideFooter = () => {
    setHideFooter(true);
  };

  const HandleshowFooter = () => {
    setHideFooter(false);
  };
  
  const handlePhone = (textInput: string) => {
    setPhone(textInput)
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
  

  const handleOutsideClickTwo = () => {
    console.log('bulth')
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
  

  useEffect(() => {
    enableBtn()
  }, [phone])
    
  const enableBtn = () => {
    if(phone){
      if(phone.length === 10){
        setBtnActive(true)
      }else{
        setBtnActive(false);
      }
    }
  }
  
   const handleBlur = () => {
    console.log('blurred')
    HandleshowFooter()
    setIsFocus(false);
    Keyboard.dismiss();
    if(phone){
      if(phone?.length <= 9){
        setIsInputErr(true)
      }else{
        setIsInputErr(false)
      }
    }
    
      
    }

   const handleReferralBlur = () => {
    console.log('blurahred')
    HandleshowFooter()
    setIsFocus(false);
    Keyboard.dismiss();
      
    }

    const handleNext = () => {
      setShowModal(true);
      // dispatch(shouldShowModal(true))
      router.push('verifyphone')
    }

    // npm i  @react-native-async-storage/async-storage@1.23.1 @react-native-picker/picker@2.7.5 react-native-reanimated@3.10.1 typescript@5.3.3

    const handleSelectCountry = (value: string) => {
      setSelectedCountry(value);
    };

    const getCountries = countries.map(country => ({
        name: country.name.common,
        code: country.cca2,
        callingCode: country.idd.root + (country.idd.suffixes[0] || ''),
        flag: `https://flagcdn.com/w320/${country.cca2.toLowerCase()}.png`
      }));

  
    const selectedCountryData = getCountries.find(country => country.code === selectedCountry);

    // light mode thick blue #0261ef 
    // light mode light blue bg #e6edfd 
    // light mode lighter blue bg btn #ffffff 
    // light mode bg #f7f7f7
    // light mode next button #e5e5e5
    // red #dc4846
    // black light mode #212121
    // dark mode bg #000e28
    // dark mode bg btn #1a263e
    // dark mode text placeholder color #1a263c
    // dark mode yellow #ffd75b
    // dark mode gray #b9c1ce
    // dark mode green #1fb02f
    // dark mode orange at dashboard = #e48c35
    // dark mode orange bg at dashboard #312726
    // dark mode yellow bg at login/sign up #343631
    // button number color at sign up #5b5b5b


    
  return (
    <TouchableWithoutFeedback onPress={handleOutsideClick}>
    <View style={className`${ colorScheme === 'light' ? 'bg-[#f7f7f7]' : 'bg-[#0e1a32]'} h-full flex-1 `}>
     
    

      {/* main content  */}
      <View style={className`flex-1`}>
          <View style={className` ${colorScheme === 'light' ? 'bg-[#f7f7f7] border-t-[#0261ef]' : 'bg-[#0e1a32] border-t-[#ffd75b]'}  border-t-[3px] w-[25%] `}>
            </View>
            
            <View style={className`px-4`}>
              <Text style={className` ${ colorScheme === 'light' ? 'text-black' : 'text-white'} font-bold text-xl text-left pt-5 pb-1`}>What's Your Phone Number?</Text>
              <Text style={className` ${ colorScheme === 'light' ? 'text-black' : 'text-white'} text-xs text-left pb-7`}>Enter the phone number you want to use for this account</Text>
            </View>

          <View style={className`p-4 max-w-sm `}>
            <View style={className`p-4 ${ colorScheme === 'light' ? 'bg-[#ffffff]' : 'bg-[#0e1a32]'} rounded-2xl w-full`}>
              <View style={className`w-full flex-row rounded-xl ${ isInputErr ? 'border border-red-500' : ''} ${ isFocus ? `border ${ colorScheme === 'light' ? 'border-[#0261ef]' : 'border-[#ffd75b]' } ` : ''}   ${ colorScheme === 'light' ? 'bg-[#e6edfd]' : 'bg-[#1a263e]'}  `}>
                  <View style={className`flex-row rounded-tl-xl rounded-bl-xl border-r border-gray-300 border-opacity-50 items-center p-2    ${ colorScheme === 'light' ? 'bg-[#e6edfd]' : 'bg-[#1a263e]'}`}>
                      <Image source={require('../assets/flag.png')} style={className`w-8 h-8`} />
                      <Text style={className` px-1 ${colorScheme === 'light' ? 'text-black' : 'text-white'}`}>+234</Text>
                  </View>
                
                  <TextInput onPress={HandlehideFooter} keyboardType='number-pad' maxLength={10} onFocus={handleFocus} onBlur={handleBlur}  onChangeText={handlePhone} value={phone} placeholder='Phone number'  placeholderTextColor={colorScheme === 'light' ? 'black' : 'white'} style={className`p-2 w-[60%] rounded-tr-xl rounded-br-xl  ${ colorScheme === 'light' ? 'bg-[#e6edfd] text-black' : 'bg-[#1a263e] text-white'} `} />
                
             

              </View>
              {
                isInputErr &&  <Text style={className`text-[12px] text-red-500 `}>Phone number is required</Text>
              } 
            </View>

            <View>

     
          </View>

          </View>

          

          <View style={className`max-w-sm mx-4 rounded-xl my-8 ${ colorScheme === 'light' ? 'bg-[#e6edfd]' : 'bg-[#343631]'} py-1 px-6`}>
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
        ( <View style={className`p-3`}>
          {
            colorScheme === 'light' ? (
              <TextInput onPress={HandlehideFooter}  onChangeText={handleReferralChange}  value={referral} placeholder='Referral Code (Optional)' placeholderTextColor='#b9c1ce'  style={className`px-4 py-2 text-sm rounded-lg bg-white text-gray-200`} />
            ) : (
              <TextInput  onPress={HandlehideFooter} onChangeText={handleReferralChange} value={referral} placeholder='Referral Code (Optional)' placeholderTextColor='#b9c1ce' style={className`px-4 py-2 text-sm rounded-lg  bg-[#1a263e] text-gray-200 `}  />
            )
          }
         </View>)
      }
      
      {/* <AppModal modalOn={showModal} /> */}

         </View>
    </View>

    

   

{/* footer  */}
      {
        hideFooter ? (
          <View></View>
        ) : 
        <TouchableWithoutFeedback >
            <KeyboardAvoidingView style={className`flex-1`} behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
            <View style={className`p-4 absolute bottom-0 w-full`}>
      
              <View style={className`flex-row max-w-sm text-left text-xs py-4`}>
              <Text style={className` ${ colorScheme === 'light' ? 'text-black' : 'text-white' } font-bold text-[12px] `}>By Clicking on "Create Profile", you agree to Moniepoint's <Text style={className`text-[#0261ef] text-[11px] font-bold dark:text-[#343631]`}>Terms and Conditions </Text>and <Text>Privacy Policy</Text> </Text>
              </View>
              {/* disabled={!btnActive} */}
      
              <View style={className`max-w-sm`}>
                <TouchableOpacity onPress={handleNext}  style={className`rounded-xl w-full ${ btnActive ? `${colorScheme === 'light' ? 'bg-[#e5e5e5] text-white' : 'bg-[#343631] text-black'}`  :  'bg-[#343631]'} py-6 px-4 flex-row items-center justify-center`}  >
                  <Text style={className`${btnActive && colorScheme === 'dark' ? 'text-white' : 'text-white'} text-sm font-semibold`}>Next</Text>
                </TouchableOpacity>
              </View>
            </View>
            </KeyboardAvoidingView>
        </TouchableWithoutFeedback>
      }
  
    {/* modal  */}

  {
    showModal && (
      
      <AppModal modalOn={showModal} />
    )
  }
  
    </View>
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
  

export default signup