import { GestureHandlerRootView, TextInput } from 'react-native-gesture-handler';
import { View, Text, TouchableOpacity,  Pressable, useColorScheme, StyleSheet } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import className from 'twrnc'
import useThemeStyles from '../utils/dynamic'
import ArrowUp from '../assets/up-arrow-svgrepo-com.svg'
import ArrowDown from '../assets/arrow-down-3101.svg'
import { router } from 'expo-router';
import { BottomSheetModal, BottomSheetModalProvider } from '@gorhom/bottom-sheet'
import { RadioButton } from 'react-native-paper';
import { ScrollView, FlatList } from 'react-native-gesture-handler';
import HeaderStatus from '../components/HeaderStatus';
import { BlurView } from 'expo-blur';
import { useAppDispatch, useAppSelector } from '../features/hooks';
import { selectUser, setAddress, setEditAddress, setSelectionModal, shouldShowModal } from '../features/auth/auth';
import { delayNavigation } from '../utils/useIntervalHook';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { LGAEachState, states } from '../utils/countries';


const Address = () => {
  const { selectionmodal, isEditAddress, address  } = useAppSelector(selectUser);
  const [stateActive, setStateActive] = useState<boolean>(false);
  const [lgaActive, setLgaActive] = useState<boolean>(false);
  const [selectedState, setSelectedState] = useState<string>('');
  const [house, setHouse] = useState<string>(isEditAddress ? address?.house : '');
  const [street, setStreet] = useState<string>(isEditAddress ? address?.street :'');
  const [selectedLga, setSelectedLga] = useState<string[]>([]);
  const [stateLga, setStateLga] = useState<string>(isEditAddress ? address && address.stateLga :  '');
  const [selectedValue, setSelectedValue] = useState(isEditAddress ? address && address.selectedState : ''); 
    const getmode = useThemeStyles();
    const currentMode = useColorScheme()
    const bottomModalInputRef = useRef<BottomSheetModal>(null);
    const bottomModalLgaInputRef = useRef<BottomSheetModal>(null);
    const [showModal, setShowModal] = useState<boolean>(false);
    const [btnActive, setBtnActive] = useState<boolean>(false);
    const dispatch = useAppDispatch();

    
    useEffect(() => {
      dispatch(shouldShowModal(false));
      if(isEditAddress){
        setBtnActive(true);
      }
  }, [])

  useEffect(() => {
    if(selectedState.length > 0 && selectedLga.length > 0 && house.length > 0 && street.length > 0  ){
      setBtnActive(true);
    }
  }, [selectedState, selectedLga, house, street])
        
   useEffect(() => {
    stateActive && bottomModalInputRef.current?.present();
   }, [stateActive])
    
   useEffect(() => {
    lgaActive && bottomModalLgaInputRef.current?.present();
   }, [lgaActive])
    
   useEffect(() => {
    if(selectedState){
        setSelectedLga(LGAEachState.Nigeria[`${selectedState}`]);
        setLgaActive(true);
        bottomModalInputRef.current?.close();
        setStateActive(false);
    }
}, [selectedState]);

useEffect(() => {
    if(stateLga){
        bottomModalLgaInputRef.current?.close();
        setLgaActive(false);
    }
}, [stateLga]);

  const handleRadioPress = (value: string) => {
     setSelectedValue(value);
     setStateActive(false);
     setSelectedState(value);
     dispatch(setSelectionModal(false));
   }

  const handleLgaRadioPress = (value: string) => {
     setStateLga(value);
     setLgaActive(false);
     dispatch(setSelectionModal(false));
   }

    const snaPoints = [ '70%'];


    const handlePresentModal = () => {
        bottomModalInputRef.current?.present();
        setStateActive(true);
        dispatch(setSelectionModal(true))
    };


    const handleLgaModal = () => {
      setLgaActive(true);
      bottomModalLgaInputRef.current?.present();
        dispatch(setSelectionModal(true))
    };

    
    const closeStateModal = () => {
      setStateActive(false);
      bottomModalInputRef.current?.dismiss();
    }
      
    
    const closeLgaModal = () => {
      setLgaActive(false);
      bottomModalLgaInputRef.current?.dismiss();
    }

    const handleNext = async() => {
      if(btnActive){
        const address = {
          house, street, stateLga, selectedState
        };
        dispatch(setAddress(address));
        dispatch(shouldShowModal(true));
        dispatch(setEditAddress(false));
        delayNavigation('pepstatus');
      }
    }
      
  return (
   <GestureHandlerRootView style={{ flex: 1}}>
            <View style={className`flex-1 p-4 ${ currentMode === 'light' ? 'bg-[#f7f7f7]' : 'bg-[#000e28]'}`}>
             <BottomSheetModalProvider>
        <ScrollView>

            
          <View style={className`font-bold flex-row mt-6 justify-between items-center w-full pb-6`}>
            <View></View>
            <Text style={className`text-lg font-bold ${getmode.textColorTwo}`}>Upgrade to Level 1</Text>
            <HeaderStatus progress={0.4} leftNum={2} rightNum={5} />
            </View>

            <View style={className`px-4`}>
                <Text style={className` ${ getmode.textColorTwo} font-bold text-xl text-left pt-5 pb-1`}>Residential Address</Text>
                <Text style={className` ${ getmode.textColorTwo} text-xs text-left pb-2`}>Provide details of where you live</Text>
            </View>

            <View style={className`${currentMode === 'light' ? 'bg-[#fff]' : 'bg-[#0e1a32]'} rounded-xl mb-3 p-4`}>
                
                <View style={className`${getmode.secondLayerBgColor} rounded-lg mb-3 p-4`}>
                    <TextInput value={house} cursorColor={currentMode === 'light' ? '#0261ef' : '#ffd75b'} keyboardType='number-pad' style={className`${getmode.textColorTwo} `} onChangeText={(e) => setHouse(e)} placeholder='House Number'  placeholderTextColor={currentMode === 'light' ? 'black' : 'white'} />
                </View>

                <View style={className`${getmode.secondLayerBgColor} rounded-lg mb-3 p-4`}>
                    <TextInput value={street}  cursorColor={currentMode === 'light' ? '#0261ef' : '#ffd75b'} style={className`${getmode.textColorTwo} `}  onChangeText={(e) => setStreet(e)} placeholder='Street Name'  placeholderTextColor={currentMode === 'light' ? 'black' : 'white'} />
                </View>

                <View style={className`${getmode.secondLayerBgColor} rounded-lg mb-3 p-4`}>
                    <TouchableOpacity onPress={handlePresentModal}>
                        <View style={className`${getmode.secondLayerBgColor} flex-row items-center justify-between px-2`}>
                            <Text style={className`${getmode.textColorTwo} `}>{ selectedValue ? selectedValue : 'State'}</Text>
                            <ArrowDown width={12} height={12}  fill={`${getmode.fillColor}`} />
                        </View>
                    </TouchableOpacity>
                </View>

                <View style={className`${getmode.secondLayerBgColor} rounded-lg mb-3 p-4`}>
                    <TouchableOpacity onPress={handleLgaModal}>
                    <View style={className`${getmode.secondLayerBgColor} flex-row items-center justify-between px-2`}> 
                        <Text style={className`${getmode.textColorTwo} `}>{ stateLga ? stateLga : 'LGA'}</Text>
                        <ArrowDown width={12} height={12} fill={`${getmode.fillColor}`} />
                    </View>
                    </TouchableOpacity>
                </View>
            </View>
            {
                stateActive && selectionmodal && (
                  <BlurView style={{ zIndex: 2, width: '100%', height: '100%', position: 'absolute'}} experimentalBlurMethod='dimezisBlurView' tint='regular' intensity={10}>
                    <BottomSheetModal 
                    ref={bottomModalInputRef}
                    index={0}
                    snapPoints={snaPoints}
                    backdropComponent={(props) => (
                      <View {...props} onTouchEnd={closeStateModal}   />
                  )}
                    backgroundStyle={className`rounded-3xl ${currentMode === 'light' ? 'bg-[#f4f5f9]' : 'bg-[#162640]'} `}
                    style={className`rounded-3xl ${currentMode === 'light' ? 'bg-[#f4f5f9]' : 'bg-[#162640]'} `}
                    >
                    <Text style={className`${getmode.textColorTwo}  ${currentMode === 'light' ? 'bg-[#f4f5f9]' : 'bg-[#162640]'} font-bold px-3 py-6 text-left text-xl `}>State</Text>

                        {
                          
          <FlatList
          data={states}
          keyExtractor={(item, index) => index.toString()} // Use index as a key if items do not have unique IDs
          renderItem={({ item }) => (
            <View style={className` ${currentMode === 'light' ? 'bg-[#f4f5f9]' : 'bg-[#162640]'}`}>
                  <TouchableOpacity onPress={() => handleRadioPress(item)}>
                  <View style={className`flex-row items-center justify-between px-3`}>
                    <Text style={className`${getmode.textColorTwo} text-sm font-bold`}>{item}</Text>
                        <TouchableOpacity   style={styles.container}>
                              <View>
                                <RadioButton.Android 
                                  value={item}
                                  status={selectedValue === item ? 'checked' : 'unchecked'} 
                                  
                                  color={selectedValue === item ? (currentMode === 'light' ? '#0663f0' : '#ffd75b') : 'gray'}
                                />
                              </View>
                        </TouchableOpacity>
                  </View>
                  </TouchableOpacity>
            </View>
          )}
        />
                        } 
                    </BottomSheetModal>
                  </BlurView>
            )
            }

            {
                 lgaActive && selectedState.length > 1  && (
                  <BlurView style={{ zIndex: 2, width: '100%', height: '100%', position: 'absolute'}} experimentalBlurMethod='dimezisBlurView' tint='regular' intensity={10}>
                <BottomSheetModal 
                ref={bottomModalLgaInputRef}
                index={0}
                snapPoints={snaPoints}
                backdropComponent={(props) => (
                  <View {...props} onTouchEnd={closeLgaModal}   />
              )}
                backgroundStyle={className`rounded-3xl ${currentMode === 'light' ? 'bg-[#f4f5f9]' : 'bg-[#162640]'} `}
                style={className`rounded-3xl ${currentMode === 'light' ? 'bg-[#f4f5f9]' : 'bg-[#162640]'}`}
                >
                <Text style={className`${getmode.textColorTwo} ${currentMode === 'light' ? 'bg-[#f4f5f9]' : 'bg-[#162640]'} font-bold px-3 py-6 text-left text-[18px] `}>LGA</Text>

                    {
                       
                        <FlatList
                        data={selectedLga}
                        keyExtractor={(item, index) => index.toString()} // Use index as a key if items do not have unique IDs
                        renderItem={({ item }) => (
                            <View style={className` ${currentMode === 'light' ? 'bg-[#f4f5f9]' : 'bg-[#162640]'}`}>
                                  <TouchableOpacity onPress={() => handleLgaRadioPress(item)} >
                                  <View style={className`flex-row items-center justify-between px-3`}>
                                      <Text style={className`${getmode.textColorTwo} text-sm font-bold`}>{item}</Text>
                                      <TouchableOpacity style={styles.container}>
                                            <View>
                                                <RadioButton.Android 
                                                value={item}
                                                status={selectedValue === item ? 'checked' : 'unchecked'} 
                                              
                                                color={selectedValue === item ? (currentMode === 'light' ? '#0663f0' : '#ffd75b') : 'gray'}
                                                />
                                            </View>
                                      </TouchableOpacity>
                                  </View>
                                  </TouchableOpacity>
                            </View>
                        )}
                        />
                    } 
                </BottomSheetModal>
                </BlurView>
            )
            }

            <View style={className`w-full mt-[200px]`}>
                <TouchableOpacity onPress={handleNext}  style={className`rounded-xl w-full ${ btnActive ? `${currentMode === 'light' ? 'bg-[#0261ef]' : 'bg-[#ffd75b]'}`  :   `${currentMode === 'light' ? 'bg-[#e5e5e5]' : 'bg-[#19222c]'}` } py-4 px-4 flex-row items-center justify-center`}  >
                  <Text style={className` ${currentMode === 'light' ? `${btnActive ? 'text-white' : 'text-[#999999]'  }` : `${btnActive ? 'text-black' : 'text-[#675e3d]'  }` } text-sm font-semibold`}>Next</Text>
                </TouchableOpacity>
            </View>
            
            
   </ScrollView>
    </BottomSheetModalProvider>
            </View>
            </GestureHandlerRootView>
     
  )
}

const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      alignItems: 'center',
      marginVertical: 8,
    },
    outerCircle: {
      width: 20,
      height: 20,
      borderRadius: 10,
      borderWidth: 2,
      borderColor: '#0261ef',
      justifyContent: 'center',
      alignItems: 'center',
      marginRight: 10,
      backgroundColor: 'transparent',
    },
    innerCircle: {
      width: 12,
      height: 12,
      borderColor: '#0261ef',
      borderRadius: 6,
      backgroundColor: '#E3CC7E',
    },
    outerCirclenight: {
      width: 20,
      height: 20,
      borderRadius: 10,
      borderWidth: 2,
      borderColor: '#fcd762',
      justifyContent: 'center',
      alignItems: 'center',
      marginRight: 10,
      backgroundColor: '#fcd762',
    },
    innerCirclenight: {
      width: 12,
      height: 12,
      zIndex: 20,
      borderColor: '#000',
      borderRadius: 6,
      backgroundColor: '#fcd762',
    },
    label: {
      fontSize: 16,
    },
    midCircle: {
      width: 15,
      height: 15,
      zIndex: 20,
      borderColor: '#000',
      borderRadius: 8,
    }
  });
export default Address