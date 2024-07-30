import { View, Text, TouchableOpacity, useColorScheme } from 'react-native'
import React, { useState } from 'react'
import className from 'twrnc';
import { Image } from 'expo-image';
import useThemeStyles from '../utils/dynamic';
import { RadioButton } from 'react-native-paper';

const Requestcard = () => {
    const getmode = useThemeStyles();
    const currentMode = useColorScheme();
    const [selectedCardType, setselectedCardType] = useState<string>('');

    const handleRadioPress = (value: string) => {
        setselectedCardType(value);
      }

        //  bg #ffffff / #000e28
    //  upgrade ${currentMode === 'light' ? 'bg-[#ffffff]' : 'bg-[#0e1a32]' }
    //cyan track blue  ${currentMode === 'light' ? 'bg-[#1b98db]' : 'bg-[#ffd75b]' } 
    //cyan track lighter blue  ${currentMode === 'light' ? 'bg-[#f5fafe]' : 'bg-[#19212c]' } 
    // info container light ${currentMode === 'light' ? 'bg-[#f5fafe]' : 'bg-[#19212c]' } 
    // bvn-number  light  ${currentMode === 'light' ? 'text-[#f5fafe]' : 'text-[#1a263e]' }  
    // btn up blue light   ${currentMode === 'light' ? 'bg-[#0261ef]' : 'bg-[#ffd75b]' }  
    // btn down lightblue light  ${currentMode === 'light' ? 'bg-[#e6edfd]' : 'bg-[#19212c]' }  
    // gray bg    ${currentMode === 'light' ? 'bg-[#808080]' : 'bg-[#9099a8]'}   
    // gray text    ${currentMode === 'light' ? 'text-[#808080]' : 'text-[#9099a8]'}   
    // black and white text    ${currentMode === 'light' ? 'text-black' : 'text-white'} 

  return (
    <View style={className`flex-1 p-4 ${ currentMode === 'light' ? 'bg-[#f7f7f7]' : 'bg-[#000e28]'}`}>
        <View style={className`mb-4`}>
            <Text style={className` ${ getmode.textColorTwo} font-bold text-2xl text-left pb-1`}>Card Type</Text>
            <Text style={className`text-gray-500 text-xs text-left pb-2`}>Select a Card type</Text>
        </View>

        <View style={className`p-4  rounded-xl ${currentMode === 'light' ? 'bg-[#fff]' : 'bg-[#0e1a32]'}`}>
            <View style={className`flex-row items-center gap-1 pb-4`}>
                <View style={className`flex-row items-center gap-1`}>
                <TouchableOpacity style={className`flex-row item-center`} >
              <View > 
                {
                  currentMode === 'light' ? (
                    <RadioButton.Android 
                        value="agreed"
                        status={selectedCardType === 'physical' ?  
                                'checked' : 'unchecked'} 
                        // onPress={() => setSelectedValue('bvn')}  // yellow #ffd75b   blue #0663f0 white  #ffffff
                        onPress={() => handleRadioPress('physical')} 
                        color={selectedCardType === 'physical' ? `#0663f0` : 'gray'}
                    /> 
                  ) : (
                    <RadioButton.Android 
                        value="agreed"
                        status={selectedCardType === 'physical' ?  
                                'checked' : 'unchecked'} 
                        onPress={() => handleRadioPress('physical')} 
                        color={selectedCardType === 'physical' ? '#ffd75b' : 'gray'}
                    /> 
                  )
                }
                    
                </View> 
              </TouchableOpacity>
                <View>
                    <Text style={className` ${ getmode.textColorTwo} font-bold text-xl text-left pt-4 `}>Physical Card</Text>
                    <Text style={className` text-gray-500 text-xs font-bold text-left `}>Get your moniepoint card delivered to you</Text>
                </View>
             </View>
            </View>

            <View>
                <Image source={require('../assets/s15.png')} style={className`w-full h-40 rounded-xl`} />
            </View>
        </View>

        <View style={className`p-4 mt-5 rounded-xl ${currentMode === 'light' ? 'bg-[#e7eaf1]' : 'bg-[#0e1a32]' }`}>
            <View style={className`  rounded-xl flex-row justify-between items-center`}>
            <Text style={className` ${ getmode.textColorTwo} font-bold text-sm text-left`}>Virtual Card</Text>
            <Text style={className` ${currentMode === 'light' ? 'text-white' : 'text-black'} font-bold text-xs py-1 px-2 rounded-xl ${currentMode === 'light' ? 'bg-[#0b3275]' : 'bg-[#0a2a65]' } text-left `}>Coming soon</Text>
            </View>
        </View>

        <View style={className`ml-4 absolute bottom-5 w-full`}>
            <TouchableOpacity  style={className`rounded-xl w-full ${getmode.buttonBgColor}  py-4 px-2 flex-row items-center justify-center`}  >
            <Text style={className`${currentMode === 'light' ? 'text-white' : 'text-black'} text-sm font-bold`}>Get A Physical Card</Text>
            </TouchableOpacity>
        </View>

        

    </View>
  )
}

export default Requestcard