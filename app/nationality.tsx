import React, {useEffect, useLayoutEffect, useRef, useState} from 'react';
import { Image } from 'expo-image';
import className from 'twrnc';
import {
  SafeAreaView,
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
  useColorScheme,
} from 'react-native';
import { router } from 'expo-router';
import { FlatList, GestureHandlerRootView } from 'react-native-gesture-handler';
import { BottomSheetModal, BottomSheetModalProvider } from '@gorhom/bottom-sheet';
import { RadioButton } from 'react-native-paper';
import { BlurView } from 'expo-blur';
import { useAppDispatch, useAppSelector, } from '../features/hooks';
import { selectUser, setEditNationality, setNationality, setNationalityFlag, setSelectionModal, shouldShowModal } from '../features/auth/auth';
import HeaderStatus from '../components/HeaderStatus';
import useThemeStyles from '../utils/dynamic';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { delayNavigation } from '../utils/useIntervalHook';
import { countries, } from '../utils/countries';


const Nationality = () => {
    const [selectedValue, setSelectedValue] = useState<string>('Nigeria');
    const [countryActive, setcountryActive] = useState<boolean>(false);
    const { isEditNationationality, nationality } = useAppSelector(selectUser)
    const [selectedState, setSelectedState] = useState<string>( isEditNationationality ? nationality : 'Nigeria');
    const [selectedflag, setSelectedFlag] = useState<string>('');
    const [showModal, setShowModal] = useState<boolean>(false);
    const countryModalRef = useRef<BottomSheetModal>(null);
    const getmode = useThemeStyles();
    const currentMode = useColorScheme();
    const dispatch = useAppDispatch();

    
    useEffect(() => {
        dispatch(shouldShowModal(false))
    }, [])

  useEffect(() => {
    if(selectedflag){
      countryModalRef.current?.close();
      setcountryActive(false);
      dispatch(setSelectionModal(false));
    }
  }, [ selectedflag]);

  useEffect(() => {
    countryActive && countryModalRef.current?.present();
  }, [countryActive])

  const handleRadioPress = (value: string, f: string) => {
    console.log(value, f)
    setSelectedValue(value);
    setSelectedState(value);
    setSelectedFlag(f);
   dispatch(setNationalityFlag(f));
  }


  const chooseCountry = () => {
    setcountryActive(true);
    dispatch(setSelectionModal(true));
    countryModalRef.current?.present();
  }



const closeModal = () => {
    setcountryActive(false);
    countryModalRef.current?.dismiss();
}

const handleNext = async() => {
    dispatch(setNationality(selectedState))
    dispatch(shouldShowModal(true));
    dispatch(setEditNationality(false));
    delayNavigation('verification');
}

  const snapPoints = [ '60%', '80%']

  return (
    <GestureHandlerRootView style={{ flex: 1}}> 
      <View style={className`flex-1  ${currentMode === 'light' ? 'bg-[#f7f7f7]' : 'bg-[#000e28]'} `}>
      <BottomSheetModalProvider>
      <SafeAreaView style={className`flex-1 py-6 px-5 items-center ${currentMode === 'light' ? 'bg-[#f7f7f7]' : 'bg-[#000e28]'} `}>
         

          <View style={className`font-bold flex-row mt-6 justify-between items-center w-full pb-6`}>
            <View></View>
            <Text style={className`text-lg font-bold ${getmode.textColorTwo}`}>Upgrade to Level 1</Text>
            <HeaderStatus progress={0.1} leftNum={1} rightNum={7} />
            </View>

          <View style={className`font-bold w-full pb-6`}>
            <Text style={className`text-left text-xl font-bold ${currentMode === 'light' ? 'text-black' : 'text-white'} py-1`}>What is your Nationality?</Text>
            <Text style={className`text-left text-xs font-bold ${currentMode === 'light' ? 'text-black' : 'text-white'} py-1`}>Select the country you are from</Text>
          </View>
      
          <View style={className`w-full flex-row rounded-xl items-center p-4 justify-between  ${ currentMode === 'light' ? 'bg-[#fff]' : 'bg-[#0e1a32]'}  `}>
          <View style={className`w-full flex-row rounded-xl items-center  justify-between  ${ currentMode === 'light' ? 'bg-[#f7f7f7]' : 'bg-[#1a263e]'}  `}>
                    <View style={className`flex-row rounded-tl-xl rounded-bl-xl border-r border-gray-300 border-opacity-50 items-center p-2    ${ currentMode === 'light' ? '' : 'bg-[#1a263e]'}`}>
                        <Image source={selectedflag ? selectedflag : require( '../assets/flag.png')} style={className`w-9 h-9 rounded-full`} />
                        
                        <Text style={className` px-1 ${currentMode === 'light' ? 'text-black' : 'text-white'} pl-2`}>{selectedState ? selectedState : 'Nigeria'}</Text>
                    </View>
                    <View style={className``}>
                      <TouchableOpacity onPress={chooseCountry}>
                        <Text style={className`pr-4 font-semibold ${currentMode === 'light' ? 'text-[#0261ef]' : 'text-[#ffd75b]'}`} >Change</Text>
                      </TouchableOpacity>
                    </View>
          </View>
          </View>

          
          <View style={className`flex-row gap-4 justify-center absolute bottom-7`}>
            <TouchableOpacity onPress={handleNext} style={className`px-2 py-6 w-full ${currentMode === 'light' ? 'bg-[#0261ef]' : 'bg-[#ffd75b]'} rounded-xl flex-row justify-center items-center`}>
              <Text style={className`text-xs font-bold ${currentMode === 'light' ? 'text-white' : 'text-white'} `}>Proceed</Text>
            </TouchableOpacity>
          </View>
          

      </SafeAreaView>

      {
                countryActive && (
                <BlurView style={{ zIndex: 0, width: '100%', height: '100%', position: 'absolute'}} experimentalBlurMethod='dimezisBlurView' tint='regular' intensity={10}>
                    <BottomSheetModal 
                    ref={countryModalRef}
                    index={0}
                    snapPoints={snapPoints}
                    backdropComponent={(props) => (
                        <View {...props} onTouchEnd={closeModal}   />
                    )}
                    backgroundStyle={className`rounded-3xl w-full ${currentMode === 'light' ? 'bg-[#fff]' : 'bg-[#162640]'} `}
                    style={className`rounded-3xl z-3 w-full ${currentMode === 'light' ? 'bg-[#fff]' : 'bg-[#162640]'} `}
                    >
                    <Text style={className`${currentMode === 'light'  ? 'text-black' : 'text-white'}  ${currentMode === 'light' ? 'bg-[#fff]' : 'bg-[#162640]'} font-bold pl-5 py-6 text-left text-sm`}>Choose Country</Text>

                        {
                        
                        <FlatList
                        data={countries}
                        keyExtractor={(item, index) => index.toString()} // Use index as a key if items do not have unique IDs
                        renderItem={({ item }) => (
                        
                                <TouchableOpacity  onPress={() => handleRadioPress(item.name, item.flag)} style={styles.container} >
                            <View style={className`w-full ${currentMode === 'light' ? 'bg-[#fff]' : 'bg-[#162640]'} flex-row justify-between p-5`}>
                                <Text style={className`${currentMode === 'light' ? 'text-black' : 'text-white'} text-sm font-bold`}>{item.name}</Text>
                                <View>
                                    <RadioButton.Android 
                                    value={item.name}
                                    status={selectedValue === item.name ? 'checked' : 'unchecked'} 
                                   
                                    color={selectedValue === item.name ? (currentMode === 'light' ? '#0663f0' : '#ffd75b') : 'gray'}
                                    />
                                </View>
                            
                            </View>
                        </TouchableOpacity>
                        )}
                        />
                        } 
                    </BottomSheetModal>
                </BlurView>
            )
            }
        
    </BottomSheetModalProvider>
    </View>
    </GestureHandlerRootView>
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