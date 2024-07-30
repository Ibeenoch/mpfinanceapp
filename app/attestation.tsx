import { View, Text, TouchableOpacity, ScrollView, useColorScheme, StyleSheet } from 'react-native'
import React, { useEffect, useState } from 'react'
import className from 'twrnc'
import useThemeStyles from '../utils/dynamic'
import { Image } from 'expo-image';
import EditLogo from '../assets/edit-box-svgrepo-com.svg'
import { router } from 'expo-router';
import { RadioButton } from 'react-native-paper'; 
import { useAppDispatch } from '../features/hooks';
import { shouldShowModal } from '../features/auth/auth';
import { delayNavigation } from '../utils/useIntervalHook';


const Attestation = () => {
    const [selectedValue, setSelectedValue] = useState(''); 
    const [showModal, setShowModal] = useState<boolean>(false);
    const [btnActive, setBtnActive] = useState<boolean>(false);
    const getmode = useThemeStyles();
    const currentMode = useColorScheme();
    const dispatch = useAppDispatch()


    useEffect(() => {
      if(showModal){
        dispatch(shouldShowModal(true));
        delayNavigation('congrat');
      }
    }, [showModal])
    
    useEffect(() => {
      dispatch(shouldShowModal(false));
  }, [])

  useEffect(() => {
    if(selectedValue.length === 6){
        setBtnActive(true)
    }
  }, [selectedValue])
  
    const handleRadioPress = (value: string) => {
      setSelectedValue(value);
    }

    const handleNext = () => {
        if(selectedValue.length === 6){
            setShowModal(true);
        }
    }
  return (
    <ScrollView style={className`flex-1`}>
        <View style={className`${getmode.backGroundColorTwo} flex-1 p-4`}>

            <View style={className``}>
            <Text style={className` ${ getmode.textColorTwo} font-bold text-xl text-left pt-5 pb-1`}>Attestation</Text>
            <Text style={className` ${ getmode.textColorTwo} text-xs text-left pb-7`}>Review the following information and attest to it below</Text>
            </View>

            <Text style={className`text-gray-500 text-xs text-left`}>Nationality</Text>
            <View style={className`w-full flex-col rounded-xl p-2  ${ getmode.secondLayerBgColorblue}  `}>
                    <View style={className`flex-row rounded-tl-xl rounded-bl-xl items-center p-2 `}>
                        <Image source={require('../assets/flag.png')} style={className`w-8 h-8`} />
                        <Text style={className` px-1 ${getmode.textColorTwo}`}>Nigeria</Text>
                    </View>

                    <View style={className`flex-row justify-center items-center`}>
                        <TouchableOpacity onPress={() => router.push('nationality')} style={className`flex-row justify-center items-center`}>
                            <EditLogo width={14} height={14} fill={`${getmode.fillColor}`} />
                            <Text style={className` px-1 ${getmode.textColorTwo}`}>Edit</Text>
                        </TouchableOpacity>
                    </View>
            </View>

            <View style={className`w-full flex-row justify-between px-6 my-4 py-4 rounded-xl   ${ getmode.secondLayerBgColorblue}  `}>
                <Text style={className`${ getmode.textColorTwo} text-sm`}>Face Verification</Text>
                <Text style={className`text-[#1fb02f] py-1 px-2 ${currentMode === 'light' ? 'bg-[#dcedc8]' : 'bg-[#062f27]'}  rounded-xl text-sm`}>Successful</Text>
            </View>

            <Text style={className`text-gray-500 text-xs mt-4 text-left`}>Residential Address</Text>
            <View style={className`w-full rounded-xl p-2  ${ getmode.secondLayerBgColorblue}  `}>
                    
                    <View style={className`p-2 `}>
                        <Text style={className` px-1 text-left text-[11px] font-bold text-gray-500`}>Address</Text>
                        <Text style={className` px-1 py-1 font-bold text-left text-[12px] ${getmode.textColorTwo}`}>25</Text>
                    </View>
                    
                    <View style={className`p-2 `}>
                        <Text style={className` px-1 font-bold text-left text-[11px] text-gray-500`}>Street Name</Text>
                        <Text style={className` px-1 py-1 font-bold text-left text-[12px] ${getmode.textColorTwo}`}>olowo street, ladipo</Text>
                    </View>
                    
                    <View style={className`p-2 `}>
                        <Text style={className` px-1 font-bold text-left text-[11px] text-gray-500`}>State</Text>
                        <Text style={className` px-1 py-1 font-bold text-left text-[12px] ${getmode.textColorTwo}`}>Lagos</Text>
                    </View>
                    
                    <View style={className`p-2 `}>
                        <Text style={className` px-1 font-bold text-left text-[11px] text-gray-500`}>LGA</Text>
                        <Text style={className` px-1 py-1 font-bold text-left text-[12px] ${getmode.textColorTwo}`}>OSHODI/ISOLO</Text>
                    </View>

                    
                    <View style={className`flex-row justify-center`}>
                        <TouchableOpacity onPress={() => router.push('address')}  style={className`flex-row gap-1 justify-center items-center`}>
                            <EditLogo width={14} height={14} fill={`${getmode.fillColor}`} />
                            <Text style={className`${getmode.textColorTwo} font-bold`}>Edit</Text>
                        </TouchableOpacity>
                    </View>

            </View>

            <Text style={className`text-gray-500 pt-4 text-xs  pb-1 font-bold text-left`}>Pep Status</Text>
            <View style={className`w-full flex-col rounded-xl p-2  ${ getmode.secondLayerBgColorblue}  `}>
                    <View style={className`p-2 `}>
                        <Text style={className` px-1 font-bold text-left text-xs max-w-xs text-gray-500`}>Are you a politically exposed person or are you related to one</Text>
                        <Text style={className` px-1 py-1 font-bold py-1 text-left text-xs ${getmode.textColorTwo}`}>No, i'm not</Text>
                    </View>

                    <View style={className`flex-row justify-center items-center`}>
                        <TouchableOpacity onPress={() => router.push('pepstatus')}  style={className`flex-row gap-1 justify-center items-center`}>
                            <EditLogo width={14} height={14} fill={`${getmode.fillColor}`} />
                            <Text style={className`${getmode.textColorTwo} font-bold`}>Edit</Text>
                        </TouchableOpacity>
                    </View>
            </View>

            <Text style={className`text-gray-500 text-xs pt-4  pb-1 font-bold text-left`}>Source of income</Text>
            <View style={className`w-full rounded-xl p-2  ${ getmode.secondLayerBgColorblue}  `}>
                    <View style={className`p-2 `}>
                    <Text style={className` px-1 text-left font-bold text-[11px] max-w-xs text-gray-500`}>What is your occupation?</Text>
                        <Text style={className` px-1 text-left py-1 font-bold text-[12px] ${getmode.textColorTwo}`}>Software Developer</Text>
                    </View>

                    <View style={className`p-2 `}>
                        <Text style={className` px-1 text-left text-[11px] font-bold max-w-xs text-gray-500`}>What is your annual income?</Text>
                        <Text style={className` px-1 text-left text-[12px] py-1 font-bold ${getmode.textColorTwo}`}>N51,000 - 250,000</Text>
                    </View>

                    <View style={className`p-2 `}>
                        <Text style={className` px-1 text-left text-[11px] font-bold max-w-xs text-gray-500`}>Do you have other source of income different from your occupation?</Text>
                        <Text style={className` px-1 text-left text-[12px] py-1 font-bold ${getmode.textColorTwo}`}>No</Text>
                    </View>

                    <View style={className`flex-row  justify-center items-center`}>
                        <TouchableOpacity onPress={() => router.push('income')}  style={className`flex-row gap-1 justify-center items-center`}>
                            <EditLogo width={14} height={14} fill={`${getmode.fillColor}`} />
                            <Text style={className`${getmode.textColorTwo}  font-bold`}>Edit</Text>
                        </TouchableOpacity>
                    </View>
            </View>

            <View style={className`my-4 flex-row gap-2 items-center`}>
            <TouchableOpacity style={styles.container} >
              <View > 
                {
                  currentMode === 'light' ? (
                    <RadioButton.Android 
                        value="agreed"
                        status={selectedValue === 'agreed' ?  
                                'checked' : 'unchecked'} 
                        // onPress={() => setSelectedValue('bvn')}  // yellow #ffd75b   blue #0663f0 white  #ffffff
                        onPress={() => handleRadioPress('agreed')} 
                        color={selectedValue === 'agreed' ? `#0663f0` : 'gray'}
                    /> 
                  ) : (
                    <RadioButton.Android 
                        value="agreed"
                        status={selectedValue === 'agreed' ?  
                                'checked' : 'unchecked'} 
                        onPress={() => handleRadioPress('agreed')} 
                        color={selectedValue === 'agreed' ? '#ffd75b' : 'gray'}
                    /> 
                  )
                }
                    
                </View> 
              </TouchableOpacity>
                <Text style={className`${getmode.textColorTwo} text-xs max-w-[85%] font-bold`}>I Attest that all the information provided above is correct</Text>
            </View>

            <View style={className`max-w-sm`}>
            <TouchableOpacity onPress={handleNext}  style={className`rounded-xl w-full ${ btnActive ? `${currentMode === 'light' ? 'bg-[#0261ef]' : 'bg-[#ffd75b]'}`  :   `${currentMode === 'light' ? 'bg-[#e5e5e5]' : 'bg-[#19222c]'}` } py-4 px-4 flex-row items-center justify-center`}  >
                <Text style={className` ${currentMode === 'light' ? `${btnActive ? 'text-white' : 'text-[#999999]'  }` : `${btnActive ? 'text-black' : 'text-[#675e3d]'  }` } text-sm font-semibold`}>Next</Text>
            </TouchableOpacity>

           
        </View>


        </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 8,
      },
})
export default Attestation