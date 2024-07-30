import { View, Text, TouchableOpacity, useColorScheme, StyleSheet } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import className from 'twrnc'
import useThemeStyles from '../utils/dynamic'
import ArrowUp from '../assets/up-arrow-svgrepo-com.svg'
import ArrowDown from '../assets/arrow-down-3101.svg'
import { router } from 'expo-router'
import { RadioButton } from 'react-native-paper'
import { FlatList, GestureHandlerRootView } from 'react-native-gesture-handler'
import { BottomSheetModal, BottomSheetModalProvider } from '@gorhom/bottom-sheet'
import { BlurView } from 'expo-blur'
import { useAppDispatch } from '../features/hooks'
import { shouldShowModal } from '../features/auth/auth'
import { delayNavigation } from '../utils/useIntervalHook'
import AsyncStorage from '@react-native-async-storage/async-storage'

const Income = () => {
    //custom hooks
    const [selectedValue, setSelectedValue] = useState<string>(''); 
    const [selectedIncome, setSelectedIncome] = useState<string>(''); 
    const [selectedOccupation, setSelectedOccupation] = useState<string>(''); 
    const [incomeActive, setIncomeActive] = useState<boolean>(false);
    const [showModal, setShowModal] = useState<boolean>(false);
    const [occupationActive, setOccupationActive] = useState<boolean>(false);
    const [btnActive, setBtnActive] = useState<boolean>(false);
    const getmode = useThemeStyles();
    const currentMode = useColorScheme();

    // state hooks
    //ref hooks
    const incomeModalRef = useRef<BottomSheetModal>(null);
    const occupationModalRef = useRef<BottomSheetModal>(null);
    const dispatch = useAppDispatch()

    useEffect(() => {
      if(showModal){
        dispatch(shouldShowModal(true));
        delayNavigation('attestation');
      }
    }, [showModal])
    
    useEffect(() => {
      dispatch(shouldShowModal(false));
  }, [])

    // effect hook
    useEffect(() => {
        incomeActive && incomeModalRef.current?.present(); 
    }, [incomeActive])

    useEffect(() => {
        occupationActive && occupationModalRef.current?.present(); 
    }, [occupationActive])

    useEffect(() => {
        if(selectedIncome.length > 0 && selectedOccupation.length > 0 && selectedValue.length > 0){
            setBtnActive(true);
        }
    }, [selectedIncome, selectedOccupation, selectedValue])
    
    const snapPoints = [ '70%', '90%'];

    const handleRadioPress = (item: string) => {
        setSelectedIncome(item);
        incomeModalRef.current?.close();
        setIncomeActive(false);
    }

    const handleRadioOccupationPress = (item: string) => {
        setSelectedOccupation(item);
        occupationModalRef.current?.close();
        setOccupationActive(false);
    };

    const openIncomeModal = () => {
       setIncomeActive(true);
       incomeModalRef.current?.present(); 
    }

    const openOcupationModal = () => {
        setOccupationActive(true);
        occupationModalRef.current?.present();
    }



    const occupations = [
        "Accountant",
        "Actor",
        "Architect",
        "Artist",
        "Athlete",
        "Baker",
        "Barber",
        "Chef",
        "Cleaner",
        "Construction Worker",
        "Consultant",
        "Dentist",
        "Designer",
        "Doctor",
        "Driver",
        "Educator",
        "Engineer",
        "Farmer",
        "Firefighter",
        "Flight Attendant",
        "Graphic Designer",
        "Hairdresser",
        "Historian",
        "Insurance Agent",
        "Journalist",
        "Lawyer",
        "Librarian",
        "Mechanic",
        "Nurse",
        "Pharmacist",
        "Photographer",
        "Pilot",
        "Plumber",
        "Police Officer",
        "Programmer",
        "Real Estate Agent",
        "Research Scientist",
        "Salesperson",
        "Secretary",
        "Social Worker",
        "Software Developer",
        "Teacher",
        "Therapist",
        "Translator",
        "Veterinarian",
        "Waiter/Waitress",
        "Web Developer",
        "Writer"
    ]


   const salaryRanges = [
            {
                "range": "₦100,000 - ₦500,000"
            },
            {
                "range": "₦500,001 - ₦1,000,000"
            },
            {
                "range": "₦1,000,001 - ₦2,000,000"
            },
            {
                "range": "₦2,000,001 - ₦5,000,000"
            },
            {
                "range": "₦5,000,001 - ₦10,000,000"
            },
            {
                "range": "₦10,000,001 - ₦20,000,000"
            },
            {
                "range": "₦20,000,001 - ₦50,000,000"
            },
            {
                "range": "₦50,000,001 and above"
            }
        ]
    
    const closeIncomeModal = () => {
        setIncomeActive(false);
        incomeModalRef.current?.dismiss()
    }
    const closeOccupationModal = () => {
        setOccupationActive(false);
        occupationModalRef.current?.dismiss()
    }

    const handleNext = () => {
        console.log(btnActive)
        if(btnActive){
            const income = {
                selectedIncome, selectedOccupation
            };
            AsyncStorage.setItem('income', JSON.stringify(income))
            setShowModal(true);
        }
    }
  return (
    <GestureHandlerRootView style={{ flex: 1}}>
    <View style={className`flex-1  ${currentMode === 'light' ? 'bg-[#f7f7f7]' : 'bg-[#000e28]'} `}>
    <BottomSheetModalProvider>
    <View style={className`flex-1 ${getmode.backGroundColorTwo} px-4 py-8`}>
      
      <View style={className`px-4`}>
        <Text style={className` ${ getmode.textColorTwo} font-bold text-xl text-left pt-5 pb-1`}>Source Of Income</Text>
        <Text style={className` ${ getmode.textColorTwo} text-xs text-left pb-7`}>Provide deatils of your source of income</Text>
    </View>

    <View style={className`${currentMode === 'light' ? "bg-[#ffffff]" : "bg-[#1a263e]"} my-2 mx-1 rounded-xl p-2`}>
        <Text style={className`text-gray-500 py-2 `}>What is your occupation</Text>
        <TouchableOpacity onPress={openOcupationModal}>
            <View style={className`${currentMode === 'light' ? "bg-[#f7f7f7]" : "bg-[#0e1a32]"} flex-row justify-between items-center rounded-lg py-2 px-4`}>
            <Text style={className` ${ getmode.textColorTwo} py-2 px-1 `}>{selectedOccupation ? selectedOccupation : 'Select your occupation'}</Text>
            <ArrowDown width={15} height={15} fill={getmode.fillColor} />  
            </View>
        </TouchableOpacity>
    </View>

    <View style={className`${currentMode === 'light' ? "bg-[#ffffff]" : "bg-[#1a263e]"}  my-2 mx-1 rounded-xl p-2`}>
        <Text style={className`text-gray-500 py-2 `}>What is your annual income</Text>
        <TouchableOpacity onPress={openIncomeModal}>
        <View style={className`${currentMode === 'light' ? "bg-[#f7f7f7]" : "bg-[#0e1a32]"}  flex-row justify-between items-center rounded-lg py-2 px-4`}>
        <Text style={className` ${ getmode.textColorTwo} py-2 px-1`}>{ selectedIncome ? selectedIncome : 'Select your annual income'}</Text>
          <ArrowDown width={15} height={15} fill={getmode.fillColor} />  
        </View>
        </TouchableOpacity>
    </View>

   

    <View style={className`${currentMode === 'light' ? "bg-[#ffffff]" : "bg-[#1a263e]"}  my-2 mx-1 rounded-xl p-2 `}>
        <Text style={className`${getmode.secondLayerBgColor} text-gray-500 py-2 px-2`}>Do you have other sources of income different from your occupation?</Text>
        <View style={className`${currentMode === 'light' ? "bg-[#f7f7f7]" : "bg-[#0e1a32]"} rounded-md  flex-row gap-4 py-2 px-4`}>
            
            <View style={className`flex-row items-center `}>
                <TouchableOpacity  >
                        {
                        currentMode === 'light' ? (
                            <RadioButton.Android 
                                value="yes"
                                status={selectedValue === 'yes' ?  
                                        'checked' : 'unchecked'} 
                                onPress={() => setSelectedValue('yes')} 
                                color={ `${selectedValue === 'yes' ? '#007BFF' : 'gray' }`}
                            /> 
                        ) : (
                            <RadioButton.Android 
                                value="yes"
                                status={selectedValue === 'yes' ?  
                                        'checked' : 'unchecked'} 
                                onPress={() => setSelectedValue('yes')} 
                                color={ `${selectedValue === 'yes' ? '#fcd762' : 'gray' }`}
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
                                value="No"
                                status={selectedValue === 'No' ?  
                                        'checked' : 'unchecked'} 
                                onPress={() => setSelectedValue('No')} 
                                color={ `${selectedValue === 'No' ? '#007BFF' : 'gray' }`}
                            /> 
                        ) : (
                            <RadioButton.Android 
                                value="No"
                                status={selectedValue === 'No' ?  
                                        'checked' : 'unchecked'} 
                                onPress={() => setSelectedValue('No')} 
                                color={`${selectedValue === 'No' ? '#fcd762' : 'gray' }`}
                            /> 
                        )
                        }
                            
                </TouchableOpacity>
                <Text style={className`${getmode.textColorTwo} text-sm font-semibold`}>No</Text>
            </View> 
        </View>
    </View>

        <View style={className`absolute bottom-4 right-4 left-4`}>
            <TouchableOpacity onPress={handleNext}  style={className`rounded-xl w-full ${ btnActive ? `${currentMode === 'light' ? 'bg-[#0261ef]' : 'bg-[#ffd75b]'}`  :   `${currentMode === 'light' ? 'bg-[#e5e5e5]' : 'bg-[#19222c]'}` } py-4 px-4 flex-row items-center justify-center`}  >
                <Text style={className` ${currentMode === 'light' ? `${btnActive ? 'text-white' : 'text-[#999999]'  }` : `${btnActive ? 'text-black' : 'text-[#675e3d]'  }` } text-sm font-semibold`}>Next</Text>
            </TouchableOpacity>

        {/* <TouchableOpacity onPress={handleNext}  style={className`rounded-xl w-full ${getmode.backGroundColor}  py-6 px-4 flex-row items-center justify-center`}  >
          <Text style={className`${ getmode.textColor} text-sm font-semibold`}>Next</Text>
        </TouchableOpacity> */}
      </View>

      
   

    </View>

    {
        incomeActive && (
        <BlurView style={{ zIndex: 0, width: '100%', height: '100%', position: 'absolute'}} experimentalBlurMethod='dimezisBlurView' tint='regular' intensity={10}>
            <BottomSheetModal 
            ref={incomeModalRef}
            index={0}
            snapPoints={snapPoints}
            backdropComponent={(props) => (
                <View {...props} onTouchEnd={closeIncomeModal}   />
            )}
            backgroundStyle={className`rounded-3xl w-full ${currentMode === 'light' ? 'bg-[#f4f5f9]' : 'bg-[#162640]'} `}
            style={className`rounded-3xl w-full ${currentMode === 'light' ? 'bg-[#f4f5f9]' : 'bg-[#162640]'} `}
            >
            <Text style={className`${currentMode === 'light'  ? 'text-black' : 'text-white'}  ${currentMode === 'light' ? 'bg-[#f4f5f9]' : 'bg-[#162640]'} font-bold pl-5 py-6 text-left text-sm`}>Choose Country</Text>

                {
                    
    <FlatList
    data={salaryRanges}
    keyExtractor={(item, index) => index.toString()} // Use index as a key if items do not have unique IDs
    renderItem={({ item }) => (

        <TouchableOpacity style={styles.container} >
        <View  key={item.range} style={className`w-full ${currentMode === 'light' ? 'bg-[#f4f5f9]' : 'bg-[#162640]'} flex-row justify-between p-5`}>
        <Text style={className`${currentMode === 'light' ? 'text-black' : 'text-white'} text-sm font-bold`}>{item.range}</Text>
            <View>
            <RadioButton.Android 
                value={item.range}
                status={selectedIncome === item.range ? 'checked' : 'unchecked'} 
                onPress={() => handleRadioPress(item.range)}
                color={selectedIncome === item.range ? (currentMode === 'light' ? '#0663f0' : '#ffd75b') : 'gray'}
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


    {
        occupationActive && (
        <BlurView style={{ zIndex: 0, width: '100%', height: '100%', position: 'absolute'}} experimentalBlurMethod='dimezisBlurView' tint='regular' intensity={10}>    
        <BottomSheetModal 
        ref={occupationModalRef}
        index={0}
        snapPoints={snapPoints}
        backdropComponent={(props) => (
            <View {...props} onTouchEnd={closeOccupationModal}   />
        )}
        backgroundStyle={className`rounded-3xl w-full ${currentMode === 'light' ? 'bg-[#f4f5f9]' : 'bg-[#162640]'} `}
        style={className`rounded-3xl w-full ${currentMode === 'light' ? 'bg-[#f4f5f9]' : 'bg-[#162640]'} `}
        >
        <Text style={className`${currentMode === 'light'  ? 'text-black' : 'text-white'}  ${currentMode === 'light' ? 'bg-[#f4f5f9]' : 'bg-[#162640]'} font-bold pl-5 py-6 text-left text-sm`}>Choose Country</Text>

            {
                
            <FlatList
            data={occupations}
            keyExtractor={(item, index) => index.toString()} // Use index as a key if items do not have unique IDs
            renderItem={({ item }) => (

                <TouchableOpacity style={styles.container} >
                <View  key={item} style={className`w-full ${currentMode === 'light' ? 'bg-[#f4f5f9]' : 'bg-[#162640]'} flex-row justify-between p-5`}>
                <Text style={className`${currentMode === 'light' ? 'text-black' : 'text-white'} text-sm font-bold`}>{item}</Text>
                    <View>
                    <RadioButton.Android 
                        value={item}
                        status={selectedOccupation === item ? 'checked' : 'unchecked'} 
                        onPress={() => handleRadioOccupationPress(item)}
                        color={selectedOccupation === item ? (currentMode === 'light' ? '#0663f0' : '#ffd75b') : 'gray'}
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
  )
}

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

export default Income