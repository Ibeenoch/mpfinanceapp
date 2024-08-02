import { View, Text, useColorScheme, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import FingerPrint from '../assets/fingerprint-5.svg';
import className from 'twrnc'
import { router } from 'expo-router';
import useThemeStyles from '../utils/dynamic';
import { useAppDispatch } from '../features/hooks';
import { shouldShowModal } from '../features/auth/auth';

const Biometrics = () => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const dispatch = useAppDispatch()
    const getmode = useThemeStyles();
    const currentMode = useColorScheme();

    
    useEffect(() => {
      dispatch(shouldShowModal(false));
  }, [])
    const handleEnableBioMetrics = () => {
        router.push('cbninfo')
    }
  return (
    <View style={className`${ currentMode === 'light' ? 'bg-[#f7f7f7]' : 'bg-[#0e1a32]'} flex-1 `}>

      <View style={className`flex-1 flex-row justify-center items-center`}>
        <View style={className`flex-col justify-center items-center`}>
            <View style={className`flex-row w-40 h-40 rounded-full bg-[#002762] justify-center items-center`}>
                <View style={className`flex-row w-35 h-35 rounded-full bg-[#0261ef] justify-center items-center`}>
                <View style={className`flex-row w-30 h-30 rounded-full bg-[#0148b4] justify-center items-center`}>
                  <FingerPrint width={50} height={50} fill={'white'} />
              </View>

              </View>

            </View>

            <View style={className``}>
              <Text style={className` ${ currentMode === 'light' ? 'text-black' : 'text-white'} font-bold text-2xl text-center pt-5 pb-1`}>Enable Biometrics!</Text>
              <Text style={className` ${ currentMode === 'light' ? 'text-black' : 'text-white'} text-xs text-center pb-7`}>Make your login & transaction faster and more secure with Biometrics enabled</Text>
            </View>
        </View>

      </View>

      

    <View style={className`p-4 absolute bottom-0 w-full`}>
      
    
      <View style={className`max-w-sm flex-row px-2 gap-1`}>
             <TouchableOpacity onPress={() => router.back()} style={className`px-2 py-4 w-[50%] ${getmode.backGroundColor} rounded-lg flex-row justify-center items-center`}>
            <Text style={className`text-xs font-bold  ${getmode.textColor} `}>Not Now</Text>
          </TouchableOpacity>

          <TouchableOpacity  onPress={handleEnableBioMetrics} style={className`px-2 py-4 w-[50%]  ${getmode.backGroundColor} rounded-lg flex-row justify-center items-center`}>
            <Text style={className`text-xs font-bold ${getmode.textColor} `}>Enable</Text>
          </TouchableOpacity>      
      </View>


    </View>
      
    </View>
  )
}

export default Biometrics