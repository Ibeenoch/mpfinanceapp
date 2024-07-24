import { View, Text, TouchableOpacity, useColorScheme } from 'react-native'
import React, { useState } from 'react'
import className from 'twrnc'
import useThemeStyles from '../utils/dynamic'
import ArrowUp from '../assets/up-arrow-svgrepo-com.svg'
import ArrowDown from '../assets/arrow-down-3101.svg'
import { router } from 'expo-router'
import { RadioButton } from 'react-native-paper'

const Income = () => {
    const currentMode = useColorScheme();
    const [selectedValue, setSelectedValue] = useState('option1'); 
    const getmode = useThemeStyles();


  return (
    <View style={className`flex-1 ${getmode.backGroundColorTwo} p-4`}>
      
      <View style={className`px-4`}>
        <Text style={className` ${ getmode.textColorTwo} font-bold text-xl text-left pt-5 pb-1`}>Source Of Income</Text>
        <Text style={className` ${ getmode.textColorTwo} text-xs text-left pb-7`}>Provide deatils of your source of income</Text>
    </View>

    <View style={className`${getmode.firstLayerBgColor} rounded-xl p-2`}>
        <Text style={className`text-gray-500 py-2 `}>What is your occupation</Text>
        <View style={className`${getmode.thirdLayerBgColor} flex-row justify-between items-center rounded-lg py-2 px-4`}>
        <Text style={className`text-gray-500 p-2 `}>Select your occupation</Text>
          <ArrowDown width={15} height={15} fill={'gray'} />  
        </View>
    </View>

    <View style={className`${getmode.firstLayerBgColor} my-2 rounded-xl p-2`}>
        <Text style={className`text-gray-500 py-2 `}>What is your annual income</Text>
        <View style={className`${getmode.thirdLayerBgColor} flex-row justify-between items-center rounded-lg py-2 px-4`}>
        <Text style={className`text-gray-500 p-2 `}>Select your annual income</Text>
          <ArrowDown width={15} height={15} fill={'gray'} />  
        </View>
    </View>

   

    <View style={className`${getmode.firstLayerBgColor} rounded-xl p-4`}>
        <Text style={className`${getmode.secondLayerBgColor} text-gray-500 py-2 px-2`}>Do you have other sources of income different from your occupation?</Text>
        <View style={className`${getmode.thirdLayerBgColor} flex-row rounded-lg py-2 px-4`}>
            
            <View style={className`flex-row items-center gap-1`}>
                <TouchableOpacity  >
                        {
                        currentMode === 'light' ? (
                            <RadioButton.Android 
                                value="option1"
                                status={selectedValue === 'option1' ?  
                                        'checked' : 'unchecked'} 
                                onPress={() => setSelectedValue('option1')} 
                                color={ `${selectedValue === 'option1' && '#007BFF' }`}
                            /> 
                        ) : (
                            <RadioButton.Android 
                                value="option1"
                                status={selectedValue === 'option1' ?  
                                        'checked' : 'unchecked'} 
                                onPress={() => setSelectedValue('option1')} 
                                color={ `${selectedValue === 'option1' && '#fcd762' }`}
                            /> 
                        )
                        }
                            
                </TouchableOpacity>
                <Text style={className`${getmode.textColorTwo} text-sm font-semibold`}>Yes</Text>
            </View> 
            
            <View style={className`flex-row items-center gap-1`}>
                <TouchableOpacity  >
                    
                        {
                        currentMode === 'light' ? (
                            <RadioButton.Android 
                                value="option1"
                                status={selectedValue === 'option1' ?  
                                        'checked' : 'unchecked'} 
                                onPress={() => setSelectedValue('option1')} 
                                color={ `${selectedValue === 'option1' && '#007BFF' }`}
                            /> 
                        ) : (
                            <RadioButton.Android 
                                value="option1"
                                status={selectedValue === 'option1' ?  
                                        'checked' : 'unchecked'} 
                                onPress={() => setSelectedValue('option1')} 
                                color={ `${selectedValue === 'option1' && '#fcd762' }`}
                            /> 
                        )
                        }
                            
                </TouchableOpacity>
                <Text style={className`${getmode.textColorTwo} text-sm font-semibold`}>No</Text>
            </View> 
        </View>
    </View>

      



        <View style={className`absolute bottom-4 right-4 left-4`}>
        <TouchableOpacity onPress={() => router.push('attestation')}  style={className`rounded-xl w-full ${getmode.backGroundColor}  py-6 px-4 flex-row items-center justify-center`}  >
          <Text style={className`${ getmode.textColor} text-sm font-semibold`}>Next</Text>
        </TouchableOpacity>
      </View>

      
   

    </View>
  )
}

export default Income