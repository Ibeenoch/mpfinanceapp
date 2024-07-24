import React, {useRef, useState} from 'react';
import { Image } from 'expo-image';
import className from 'twrnc';
import {
  SafeAreaView,
  ScrollView,
  Text,
  StyleSheet,
  View,
  ImageBackground,
  Animated,
  useWindowDimensions,
  Pressable,
  TouchableOpacity,
  useColorScheme,
} from 'react-native';
import image from '../assets/img.js';
import ArrowLeft from '../assets/arrow-back-svgrepo-com.svg'
import ArrowRight from '../assets/arrow-forward-svgrepo-com.svg'
import { router } from 'expo-router';
import { Picker } from '@react-native-picker/picker';
// import StatusSpinner from '../components/statusCircle.js';



const Nationality = () => {
  const currentMode = useColorScheme();
  const [selectedValue, setSelectedValue] = useState<string>('java');


  return (
    <SafeAreaView style={className`flex-1 py-6 px-5 items-center ${currentMode === 'light' ? 'bg-[#f7f7f7]' : 'bg-[#0e1a32]'} `}>
        <View style={className`my-4 flex-row justify-between px-5 `}>
            <View></View>
            <Text style={className`${currentMode === 'light' ? 'text-black' : 'text-white'} font-semibold`}>Upgrade To Level 1</Text>
            {/* <View>
                <StatusSpinner lower={7} upper={1} num={0.25} />
            </View> */}
        </View>

        <View style={className`text-center font-bold pb-6`}>
          <Text style={className`text-center text-xl font-bold ${currentMode === 'light' ? 'text-black' : 'text-white'} py-2`}>What is your Nationality?</Text>
          <Text style={className`text-center text-xs font-bold ${currentMode === 'light' ? 'text-black' : 'text-white'} py-3`}>Select the country you are from</Text>
        </View>
    
        <View style={className`w-full flex-row rounded-xl items-center p-2 justify-between  ${ currentMode === 'light' ? 'bg-[#e6edfd]' : 'bg-[#1a263e]'}  `}>
                  <View style={className`flex-row rounded-tl-xl rounded-bl-xl border-r border-gray-300 border-opacity-50 items-center p-2    ${ currentMode === 'light' ? 'bg-[#e6edfd]' : 'bg-[#1a263e]'}`}>
                      <Image source={require('../assets/flag.png')} style={className`w-8 h-8`} />
                      <Text style={className` px-1 ${currentMode === 'light' ? 'text-black' : 'text-white'}`}>Nigeria</Text>
                  </View>
                  <View style={className``}>
                  <Text style={className`${currentMode === 'light' ? 'text-[#0261ef]' : 'text-[#19212c]'}`} >Change</Text>
                    {/* <Picker
                        selectedValue={selectedValue}
                        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
                    >
                        <Picker.Item label="Java" value="java" />
                        <Picker.Item label="JavaScript" value="js" />
                        <Picker.Item label="Python" value="python" />
                        <Picker.Item label="C++" value="cpp" />
                    </Picker> */}
                  </View>
         </View>

        
        <View style={className`flex-row gap-4 justify-center absolute bottom-7`}>
          <TouchableOpacity onPress={() => router.push('verification')} style={className`px-2 py-4 w-full ${currentMode === 'light' ? 'bg-[#0261ef]' : 'bg-[#ffd75b]'} rounded-lg flex-row justify-center items-center`}>
            <Text style={className`text-xs font-bold ${currentMode === 'light' ? 'text-white' : 'text-white'} `}>Proceed</Text>
          </TouchableOpacity>
        </View>
        

    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  scrollContainer: {
    height: 400,
    alignItems: 'center',
    justifyContent: 'center',
  },
  card: {
    flex: 1,
    marginVertical: 0,
    marginHorizontal: 19,
    borderRadius: 5,
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textContainer: {
    backgroundColor: 'rgba(0,0,0, 0.7)',
    paddingHorizontal: 24,
    paddingVertical: 8,
    borderRadius: 5,
  },
  infoText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  normalDot: {
    height: 8,
    width: 8,
    borderRadius: 4,
    backgroundColor: '#ffd75b',
    marginHorizontal: 4,
  },
  indicatorContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 9,
  },
});

export default Nationality;