import { View, Text, TouchableOpacity, useColorScheme } from 'react-native'
import React, { useEffect } from 'react'
import className from 'twrnc'
import useThemeStyles from '../utils/dynamic';
import UserImage from '../assets/user.svg';
import Focus from '../assets/focus-8.svg';
import { router } from 'expo-router';
import { ProgressBar } from 'react-native-paper';
import { useAppDispatch, useAppSelector } from '../features/hooks';
import { selectUser, setProcessPhoto } from '../features/auth/auth';

const Processimg = () => {
    const getmode = useThemeStyles();
    const currentMode = useColorScheme();
    const dispatch = useAppDispatch();
    const { processPhoto } = useAppSelector(selectUser);

    const progressing = () => {
      const interval = setTimeout(() => {
        console.log('processing...')
        router.push('selfiecapture')
      }, 4000);
     
      dispatch(setProcessPhoto(false));

      console.log('processPhoto status ', processPhoto)
      return () => {
        clearTimeout(interval)
      }
    }

    useEffect(() => {
      if(processPhoto){
        progressing()
      }
    }, [processPhoto])


  return (
    <View style={className`flex-1 py-[60%] px-[3%] bg-black`}>
    <View style={className`${getmode.backGroundColorTwo} flex-1 rounded-3xl px-4 justify-center items-center`}>
      
      <View style={className`flex-row justify-center items-center relative`}>
        <Focus fill={getmode.fillPhotoColor} strokeWidth={1} width={50} height={50} />
        <View style={className`absolute `}>
            <UserImage fill={getmode.fillPhotoColor} width={20} height={20} />
        </View>
      </View>

      <View>
            <Text style={className`max-w-sm text-center py-4 text-3xl font-semibold ${getmode.textColorTwo}`}>Processing selfie</Text>
            <Text style={className`max-w-sm text-center pb-4 text-sm ${getmode.textColorTwo}`}>Just a few more seconds</Text>
       </View>

       {/* loading modal   */}
       <ProgressBar indeterminate={true} color={`${currentMode === 'light' ? '#0261ef' : '#ffd75b' }`} style={className`w-[250px] h-[3px] ${getmode.dasboardSvgButton}`} />

      



    </View>
    </View>
  )
}

export default Processimg