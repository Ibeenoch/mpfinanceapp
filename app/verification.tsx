import { View, Text, useColorScheme, TouchableOpacity, StyleSheet } from 'react-native'
import React, { useEffect, useState } from 'react'
import className  from 'twrnc';
import News from '../assets/news-svgrepo-com.svg';
import BAnk from '../assets/bank-symbol-svgrepo-com.svg';
import Exclaimation from '../assets/exclamation-mark-sign-alert-warning-important-svgrepo-com.svg';
import { RadioButton } from 'react-native-paper'; 
import { router } from 'expo-router';
import useThemeStyles from '../utils/dynamic';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useAppDispatch } from '../features/hooks';
import { shouldShowModal } from '../features/auth/auth';

const Verification = () => {
  const [selectedValue, setSelectedValue] = useState(''); 
  const getmode = useThemeStyles();
  const currentMode = useColorScheme();
  const [btnActive, setBtnActive ] = useState<boolean>(false);
  const dispatch = useAppDispatch()
    
  useEffect(() => {
    dispatch(shouldShowModal(false));
}, [])

  const handleRadioPress = (value: string) => {
    setSelectedValue(value);
    setBtnActive(true);
  }

  const handleNext = () => {
    if(selectedValue === 'nin'){
      router.push('nindocument')
      return;
    }
    if(selectedValue === 'bvn'){
      router.push('bvndocument')
      return;
    }
  }

// yellow #ffd75b   blue #0663f0 white  #ffffff
  return (
    <View style={className`${ currentMode === 'light' ? 'bg-[#f7f7f7]' : 'bg-[#000e28]'} px-2 py-2 h-screen flex-1`}>
      <View style={className`px-4`}>
        <View style={className``}>
          <Text style={className` ${ currentMode === 'light' ? 'text-black' : 'text-white'} font-bold text-2xl text-left pt-5 pb-1`}>Select an Options</Text>
          <Text style={className` ${ currentMode === 'light' ? 'text-black' : 'text-white'} text-xs text-left pb-7`}>select the type of ID to validate</Text>
        </View>

        <View style={className`flex rounded-lg my-3 p-4 ${currentMode === 'light' ? 'bg-[#ffffff]' : 'bg-[#0e1a32]'}`}>
            <View style={className`flex-row  w-auto`}>
            <View style={className`p-1 rounded-lg ${currentMode === 'light' ? 'bg-[#ffffff]' : 'bg-[#343631]'} max-w-sm`}>
              <News width={50} height={50} fill={`${currentMode === 'light' ? '#0663f0' : 'white'}`} />
              </View>
            </View>
            <View style={className`flex-row justify-between items-center px-1`}>
              <Text style={className`font-semibold text-left ${currentMode === 'light' ? 'text-blue' : 'text-white'} `}>National Identification Number (NIN) </Text>

              <TouchableOpacity style={styles.container} >
              <View > 
                {
                  currentMode === 'light' ? (
                    <RadioButton.Android 
                        value="nin"
                        status={selectedValue === 'nin' ?   'checked' : 'unchecked'} 
                        // yellow #ffd75b   blue #0663f0 white  #ffffff
                        onPress={() => handleRadioPress('nin')} 
                        color={selectedValue === 'nin' ? '#0663f0' : 'gray'}
                    /> 
                  ) : (
                    <RadioButton.Android 
                        value="nin"
                        status={selectedValue === 'nin' ?  
                                'checked' : 'unchecked'} 
                        onPress={() => handleRadioPress('nin')} 
                        color={selectedValue === 'nin' ? '#ffd75b' : 'gray'}
                    /> 
                  )
                }
                    
                </View> 
              </TouchableOpacity>
            </View>
        </View>

        <View style={className`flex rounded-lg my-3 p-4 ${currentMode === 'light' ? 'bg-[#ffffff]' : 'bg-[#0e1a32]'}`}>
            <View style={className`flex-row  w-auto`}>
            <View style={className`p-4 rounded-lg ${currentMode === 'light' ? 'bg-[#ffffff]' : 'bg-[#343631]'} max-w-sm`}>
              <BAnk width={20} height={20} fill={`${currentMode === 'light' ? '#0663f0' : 'white'}`} />
            </View>
            </View>
            <View style={className`flex-row justify-between items-center px-1`}>
              <Text style={className`font-semibold text-left ${currentMode === 'light' ? 'text-blue' : 'text-white'} `}>Bank Verfication Number (BVN) </Text>

              <TouchableOpacity style={styles.container} >
              <View > 
                {
                  currentMode === 'light' ? (
                    <RadioButton.Android 
                        value="bvn"
                        status={selectedValue === 'bvn' ?  
                                'checked' : 'unchecked'} 
                        // onPress={() => setSelectedValue('bvn')}  // yellow #ffd75b   blue #0663f0 white  #ffffff
                        onPress={() => handleRadioPress('bvn')} 
                        color={selectedValue === 'bvn' ? `#0663f0` : 'gray'}
                    /> 
                  ) : (
                    <RadioButton.Android 
                        value="bvn"
                        status={selectedValue === 'bvn' ?  
                                'checked' : 'unchecked'} 
                        onPress={() => handleRadioPress('bvn')} 
                        color={selectedValue === 'bvn' ? '#ffd75b' : 'gray'}
                    /> 
                  )
                }
                    
                </View> 
              </TouchableOpacity>
            </View>
        </View>

        <View style={className`flex-row items-center gap-1 rounded-lg my-3 p-4  ${currentMode === 'light' ? 'bg-[#ffffff]' : 'bg-[#343631]'}`}>
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
        {
          selectedValue === 'nin' ? (
       
        <TouchableOpacity onPress={handleNext}   style={className`rounded-xl w-full ${ btnActive ? `${currentMode === 'light' ? 'bg-[#0261ef]' : 'bg-[#ffd75b]'}`  :   `${currentMode === 'light' ? 'bg-[#e5e5e5]' : 'bg-[#19222c]'}` } py-4 px-4 flex-row items-center justify-center`}  >
          <Text style={className`${ currentMode === 'dark' ? 'text-white' : 'text-white'} text-sm font-semibold`}>Proceed</Text>
        </TouchableOpacity>     
          ) : selectedValue === 'bvn' ? (
            <TouchableOpacity onPress={handleNext}  style={className`rounded-xl w-full ${ btnActive ? `${currentMode === 'light' ? 'bg-[#0261ef]' : 'bg-[#ffd75b]'}`  :   `${currentMode === 'light' ? 'bg-[#e5e5e5]' : 'bg-[#19222c]'}` } py-4 px-4 flex-row items-center justify-center`}  >
            <Text style={className`${ currentMode === 'dark' ? 'text-white' : 'text-white'} text-sm font-semibold`}>Proceed</Text>
          </TouchableOpacity>    
          ) : (
            <TouchableOpacity   style={className`rounded-xl w-full ${ btnActive ? `${currentMode === 'light' ? 'bg-[#0261ef]' : 'bg-[#ffd75b]'}`  :   `${currentMode === 'light' ? 'bg-[#e5e5e5]' : 'bg-[#19222c]'}` } py-4 px-4 flex-row items-center justify-center`} >
            <Text style={className`${ currentMode === 'dark' ? 'text-white' : 'text-white'} text-sm font-semibold`}>Proceed</Text>
          </TouchableOpacity>    
          )
        }

                        {/* <TouchableOpacity onPress={handleNext}  style={className`rounded-xl w-full ${ btnActive ? `${colorScheme === 'light' ? 'bg-[#0261ef]' : 'bg-[#ffd75b]'}`  :   `${colorScheme === 'light' ? 'bg-[#e5e5e5]' : 'bg-[#19222c]'}` } py-4 px-4 flex-row items-center justify-center`}  >
                          <Text style={className` ${colorScheme === 'light' ? `${btnActive ? 'text-white' : 'text-[#999999]'  }` : `${btnActive ? 'text-black' : 'text-[#675e3d]'  }` } text-sm font-semibold`}>Next</Text>
                        </TouchableOpacity> */}

      </View>
    </View>


    </View>
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


export default Verification