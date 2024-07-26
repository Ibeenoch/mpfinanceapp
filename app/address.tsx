import { View, Text, TouchableOpacity, ScrollView, Pressable } from 'react-native'
import React, { useRef } from 'react'
import className from 'twrnc'
import useThemeStyles from '../utils/dynamic'
import ArrowUp from '../assets/up-arrow-svgrepo-com.svg'
import ArrowDown from '../assets/arrow-down-3101.svg'
import { router } from 'expo-router';
import { BottomSheetModal, BottomSheetModalProvider } from '@gorhom/bottom-sheet'

const Address = () => {
    const getmode = useThemeStyles();
    const bottomModalInputRef = useRef(null)
    const snaPoints = ['25%', '48%', '68%'];

    const handlePresentModal = () => {

    }
  return (
    <BottomSheetModalProvider>
        <ScrollView>
            <View style={className`flex-1 p-4 ${getmode.backGroundColorTwo}`}>
            
            <View style={className`px-4`}>
                <Text style={className` ${ getmode.textColorTwo} font-bold text-xl text-left pt-5 pb-1`}>Residential Address</Text>
                <Text style={className` ${ getmode.textColorTwo} text-xs text-left pb-7`}>Provide deatils of where you live</Text>
            </View>

            <View style={className`${getmode.firstLayerBgColor} rounded-xl mb-3 p-4`}>
                
                <View style={className`${getmode.secondLayerBgColor} rounded-lg mb-3 p-4`}>
                    <Text style={className`${getmode.textColorTwo} `}>House Number</Text>
                </View>

                <View style={className`${getmode.secondLayerBgColor} rounded-lg mb-3 p-4`}>
                    <Text style={className`${getmode.textColorTwo} `}>Street Name</Text>
                </View>

                <View style={className`${getmode.secondLayerBgColor} rounded-lg mb-3 p-4`}>
                    <Pressable onPress={handlePresentModal}>
                        <View style={className`${getmode.secondLayerBgColor} flex-row items-center justify-between px-4`}>
                            <Text style={className`${getmode.textColorTwo} `}>State</Text>
                            <ArrowDown width={8} height={8} fill={`${getmode.fillColor}`} />
                        </View>
                    </Pressable>
                </View>

                <View style={className`${getmode.secondLayerBgColor} rounded-lg mb-3 p-4`}>
                    <View style={className`${getmode.secondLayerBgColor} flex-row items-center justify-between px-4`}> 
                        <Text style={className`${getmode.textColorTwo} `}>LGA</Text>
                        <ArrowDown width={8} height={8} fill={`${getmode.fillColor}`} />
                    </View>
                </View>
            </View>
            <BottomSheetModal 
            ref={bottomModalInputRef}
            index={0}
            snapPoints={snaPoints}
            style={className`border border-gray-300 bg-sky-500`}
            >
                <View  style={className`border border-gray-300 bg-sky-500`}>
                    <Text style={className`text-white font-bold border border-gray-300 text-md`}>State</Text>
                    <View>
                        <Text>Lagos</Text>
                    </View>
                </View>

            </BottomSheetModal>


            <View style={className`w-[full] absolute bottom-4 left-4 right-4`}>
                <TouchableOpacity onPress={() => router.push('pepstatus')}  style={className`rounded-xl w-full ${getmode.backGroundColor}  py-6 px-4 flex-row items-center justify-center`}  >
                <Text style={className`${ getmode.textColor} text-sm font-semibold`}>Next</Text>
                </TouchableOpacity>
            </View>
            
            

            </View>
        </ScrollView>
    </BottomSheetModalProvider>
  )
}

export default Address