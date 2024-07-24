import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import className from 'twrnc'
import useThemeStyles from '../utils/dynamic'
import { Image } from 'expo-image';
import EditLogo from '../assets/edit-box-svgrepo-com.svg'
import { router } from 'expo-router';

const attestation = () => {
    const getmode = useThemeStyles();
  return (
    <View style={className`${getmode.backGroundColor} flex-1 p-4`}>

        <View style={className`px-6`}>
          <Text style={className` ${ getmode.textColor} font-bold text-xl text-left pt-5 pb-1`}>Attestation</Text>
          <Text style={className` ${ getmode.textColor} text-xs text-left pb-7`}>Review the following information and attest to it below</Text>
        </View>

        <Text style={className`text-gray-300 text-xs text-left`}>Nationality</Text>
        <View style={className`w-full flex-col rounded-xl p-2  ${ getmode.lightBackGroundColor}  `}>
                  <View style={className`flex-row rounded-tl-xl rounded-bl-xl border-r border-gray-300 border-opacity-50 items-center p-2 `}>
                      <Image source={require('../assets/flag.png')} style={className`w-8 h-8`} />
                      <Text style={className` px-1 ${getmode.textColor}`}>Nigeria</Text>
                  </View>

                  <View style={className`flex justify-center items-center`}>
                    <TouchableOpacity>
                        <EditLogo width={30} height={30} fill={`${getmode.fillColor}`} />
                        <Text>Edit</Text>
                    </TouchableOpacity>
                  </View>
        </View>

        <View style={className`w-full flex-row justify-between px-6 rounded-xl   ${ getmode.lightBackGroundColor}  `}>
            <Text style={className`${ getmode.textColor} text-sm`}>Face Verification</Text>
            <Text style={className`text-[#1fb02f] p-1 bg-[#062f27] text-sm`}>Successful</Text>
        </View>

        <Text style={className`text-gray-300 text-xs text-left`}>Residential Address</Text>
        <View style={className`w-full flex-col rounded-xl p-2  ${ getmode.lightBackGroundColor}  `}>
                  
                  <View style={className`flex-col rounded-tl-xl rounded-bl-xl border-r border-gray-300 border-opacity-50 items-center p-2 `}>
                      <Text style={className` px-1 text-left text-[11px] text-gray-300`}>address</Text>
                      <Text style={className` px-1 text-left text-[12px] ${getmode.textColor}`}>25</Text>
                  </View>
                  
                  <View style={className`flex-col rounded-tl-xl rounded-bl-xl border-r border-gray-300 border-opacity-50 items-center p-2 `}>
                      <Text style={className` px-1 text-left text-[11px] text-gray-300`}>Street Name</Text>
                      <Text style={className` px-1 text-left text-[12px] ${getmode.textColor}`}>olowo street, ladipo</Text>
                  </View>
                  
                  <View style={className`flex-col rounded-tl-xl rounded-bl-xl border-r border-gray-300 border-opacity-50 items-center p-2 `}>
                      <Text style={className` px-1 text-left text-[11px] text-gray-300`}>State</Text>
                      <Text style={className` px-1 text-left text-[12px] ${getmode.textColor}`}>Lagos</Text>
                  </View>
                  
                  <View style={className`flex-col rounded-tl-xl rounded-bl-xl border-r border-gray-300 border-opacity-50 items-center p-2 `}>
                      <Text style={className` px-1 text-left text-[11px] text-gray-300`}>LGA</Text>
                      <Text style={className` px-1 text-left text-[12px] ${getmode.textColor}`}>OSHODI/ISOLO</Text>
                  </View>

                  
                  <View style={className`flex justify-center items-center`}>
                    <TouchableOpacity>
                        <EditLogo width={30} height={30} fill={`${getmode.fillColor}`} />
                        <Text>Edit</Text>
                    </TouchableOpacity>
                  </View>

        </View>

        <Text style={className`text-gray-300 text-xs text-left`}>Pep Status</Text>
        <View style={className`w-full flex-col rounded-xl p-2  ${ getmode.lightBackGroundColor}  `}>
                  <View style={className`flex-col rounded-tl-xl rounded-bl-xl border-r border-gray-300 border-opacity-50 items-center p-2 `}>
                      <Text style={className` px-1 text-left text-[11px] max-w-xs text-gray-300`}>Are you a politically exposed person or are you related to one</Text>
                      <Text style={className` px-1 text-left text-[12px] ${getmode.textColor}`}>No, i'm not</Text>
                  </View>

                  <View style={className`flex justify-center items-center`}>
                    <TouchableOpacity>
                        <EditLogo width={30} height={30} fill={`${getmode.fillColor}`} />
                        <Text>Edit</Text>
                    </TouchableOpacity>
                  </View>
        </View>

        <Text style={className`text-gray-300 text-xs text-left`}>Source of income</Text>
        <View style={className`w-full flex-col rounded-xl p-2  ${ getmode.lightBackGroundColor}  `}>
                  <View style={className`flex-col rounded-tl-xl rounded-bl-xl border-r border-gray-300 border-opacity-50 items-center p-2 `}>
                      <Text style={className` px-1 text-left text-[11px] max-w-xs text-gray-300`}>What is your occupation?</Text>
                      <Text style={className` px-1 text-left text-[12px] ${getmode.textColor}`}>Software Developer</Text>
                  </View>

                  <View style={className`flex-col rounded-tl-xl rounded-bl-xl border-r border-gray-300 border-opacity-50 items-center p-2 `}>
                      <Text style={className` px-1 text-left text-[11px] max-w-xs text-gray-300`}>What is your annual income?</Text>
                      <Text style={className` px-1 text-left text-[12px] ${getmode.textColor}`}>N51,000 - 250,000</Text>
                  </View>

                  <View style={className`flex-col rounded-tl-xl rounded-bl-xl border-r border-gray-300 border-opacity-50 items-center p-2 `}>
                      <Text style={className` px-1 text-left text-[11px] max-w-xs text-gray-300`}>Do you have other source of income different from your occupation?</Text>
                      <Text style={className` px-1 text-left text-[12px] ${getmode.textColor}`}>No</Text>
                  </View>

                  <View style={className`flex justify-center items-center`}>
                    <TouchableOpacity>
                        <EditLogo width={30} height={30} fill={`${getmode.fillColor}`} />
                        <Text>Edit</Text>
                    </TouchableOpacity>
                  </View>
        </View>

        <View>
            <Text style={className`${getmode.textColor} text-sm font-semibold`}>I Attest that all the information provided above is correct</Text>
        </View>

        <View style={className`max-w-sm`}>
        <TouchableOpacity onPress={() => router.push('congrat')}  style={className`rounded-xl w-full ${getmode.backGroundColor}  py-6 px-4 flex-row items-center justify-center`}  >
          <Text style={className`${ getmode.textColor} text-sm font-semibold`}>Next</Text>
        </TouchableOpacity>
      </View>


    </View>
  )
}

export default attestation