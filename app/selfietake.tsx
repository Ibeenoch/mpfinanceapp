import { View, Text, TouchableOpacity, useColorScheme } from 'react-native'
import React, { useState } from 'react'
import className from 'twrnc';
import useThemeStyles from '../utils/dynamic';
import { Image } from 'expo-image';
import { router } from 'expo-router';
import { useAppSelector, useAppDispatch } from '../features/hooks';
import { selectUser, setImage, setProcessPhoto } from '../features/auth/auth';
import * as ImagePicker from 'expo-image-picker'
import { saveImageCaptured } from '../features/auth/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';


const Selfietake = () => {
    const [img, setImg] = useState<string>('');
    const getmode = useThemeStyles();
    const currentMode = useColorScheme();
    const dispatch = useAppDispatch();
    const { imageUrl } = useAppSelector(selectUser);

    const handleRetake = async() => {
        let result =  await ImagePicker.launchCameraAsync({
            quality: 1,
            exif: true,
            cameraType: ImagePicker.CameraType.front,
            allowsEditing: true,
            aspect: [1, 1],
          })
    
          if(!result.canceled){
            console.log('results ',  result.assets[0].uri);
            let url =  result.assets[0].uri;
            setImg(url);
            dispatch(setImage(url))
            dispatch(saveImageCaptured(url));
            
          }
    };

    const handleProcessing = () => {
        AsyncStorage.setItem('photo', JSON.stringify(img));
        dispatch(setProcessPhoto(true))
        router.push('processimg');
    }
    
  return (
    <View style={className`bg-black flex-1 justify-center items-center`}>
    <View style={className`${getmode.backGroundColorTwo} h-[85%]  rounded-3xl p-4`}>
        <View>
            <Text style={className`max-w-sm text-center py-4 text-3xl font-bold ${getmode.textColorTwo}`}>Is this a good quality selfie?</Text>
            <Text style={className`max-w-sm text-center pb-4 text-[13px] ${getmode.textColorTwo}`}>Make sure your whole face is visible and clear</Text>
        </View>

        <View style={className`my-4  mx-auto px-1 w-[100%] h-85 `}>
            <Image source={ imageUrl ? imageUrl : require('../assets/gift.png')} style={className`w-70 h-85 rounded-3xl`} />
        </View>

        <View style={className`flex-col gap-4 my-2`}>
        {/* border-t-[#0261ef]' : 'bg-[#0e1a32] border-t-[#ffd75b] */}
            <TouchableOpacity onPress={handleProcessing} style={className`rounded-xl border border-gray-400 w-full py-4 px-6 ${currentMode === 'light' ? 'bg-[#0261ef] border-[#0261ef]' : 'bg-[#ffd75b] border-[#000e28]'}`}>
                <Text style={className`${currentMode === 'light' ? 'text-white' : 'text-white'} text-center `}>Yes, use this</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={handleRetake} style={className`rounded-xl border border-gray-400 w-full py-4 px-6 ${currentMode === 'light' ? 'text-[#f7f7f7] bg-white border border-[#0261ef]' : 'text-[#ffd75b]  border border-[#ffd75b]'}`}>
                <Text style={className`${currentMode === 'light' ? 'text-[#0261ef]' : 'text-[#ffd75b]'} text-center `}>No, retake selfie</Text>
            </TouchableOpacity>
        </View>
      
    </View>
    </View>
  )
}

export default Selfietake