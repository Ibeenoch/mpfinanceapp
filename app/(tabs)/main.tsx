import { View, Text, useColorScheme } from 'react-native'
import React, { useRef, useState } from 'react'
import className from 'twrnc';
import useThemeStyles from '../../utils/dynamic';
import Plus from '../../assets/plus-large-svgrepo-com.svg'
import SendLight from '../../assets/telegram-blue.svg'
import SendDark from '../../assets/telegram-yellow.svg'
import Phone from '../../assets/call-answer-svgrepo-com.svg'
import PayBill from '../../assets/bookmark-multiple-svgrepo-com.svg';
import ArrowForward from '../../assets/arrow-forward-simple-svgrepo-com.svg';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { BottomSheetModal, BottomSheetModalProvider } from '@gorhom/bottom-sheet';
import { BlurView } from 'expo-blur';
import { useAppSelector } from '../../features/hooks';
import { selectUser } from '../../features/auth/auth';


const Main = () => {
  const [mainActive, setMainActive] = useState();
  const getmode = useThemeStyles();
  const currentMode = useColorScheme();
  const mainRef = useRef<BottomSheetModal>(null);
  const { activeTabs } = useAppSelector(selectUser);

console.log('tab active is ', activeTabs)
  const snapPoints = ['55%', '75%'];
  const closeModal = () => {

  }
  return (
    <GestureHandlerRootView style={{ flex: 1}}> 
    <View style={className`flex-1  ${currentMode === 'light' ? 'bg-[#f7f7f7]' : 'bg-[#000e28]'} `}>
    <BottomSheetModalProvider>
    <View style={className`flex-1 p-4 ${getmode.backGroundColorTwo}`}>
      {/* create the modal  */}

      {
                mainActive === 'main' && (
                <BlurView style={{ zIndex: 0, width: '100%', height: '100%', position: 'absolute'}} experimentalBlurMethod='dimezisBlurView' tint='regular' intensity={10}>
                    <BottomSheetModal 
                    ref={mainRef}
                    index={0}
                    snapPoints={snapPoints}
                    backgroundStyle={className`rounded-3xl w-full ${currentMode === 'light' ? 'bg-[#e6edfd]' : 'bg-[#162640]'} `}
                    style={className`rounded-3xl z-3 w-full ${currentMode === 'light' ? 'bg-[#e6edfd]' : 'bg-[#162640]'} `}
                    >
                    
                    <View style={className`flex-1 p-4 ${getmode.backGroundColorTwo}`}>
        
                        <View style={className`flex-row ${getmode.backGroundlightYellowColor} rounded-xl my-2 items-center justify-between items-center p-2`}>
                            <View style={className`flex-row items-center gap-2`}>
                                <View style={className`p-2 rounded-md ${getmode.backGroundlightYellowColor} `}>
                                  <Plus width={18} height={18} strokeWidth={2} stroke={getmode.fillColor} />
                                </View>
                                <Text style={className`text-sm ${currentMode === 'light' ? `text-[#9eacc7]` : `text-[#b9c1ce]`}`}>Add Money</Text>
                            </View>

                            <View>
                                <ArrowForward width={18} height={18} strokeWidth={2} stroke={getmode.fillColor} />
                            </View>
                        </View>
                        
                        <View style={className`flex-row  ${getmode.backGroundlightYellowColor} rounded-xl my-2 items-center justify-between p-2`}>
                            <View style={className`flex-row  items-center gap-2`}>
                                <View style={className`p-2 rounded-md ${getmode.backGroundlightYellowColor} `}>
                                  {
                                    currentMode === 'light' ? (
                                      <SendLight width={18} height={18} fill={getmode.buttonBgColor} />
                                    ) : (
                                      <SendDark width={18} height={18} fill={getmode.buttonBgColor} />
                                    )
                                  }
                                  
                                </View>
                                <Text style={className`text-sm ${currentMode === 'light' ? `text-[#9eacc7]` : `text-[#b9c1ce]`}`}>Send Money</Text>
                            </View>

                            <View>
                                <ArrowForward width={18} height={18} strokeWidth={2} stroke={getmode.fillColor}  />
                            </View>
                        </View>
                        
                        <View style={className`flex-row  ${getmode.backGroundlightYellowColor} rounded-xl my-2 items-center justify-between p-2`}>
                            <View style={className`flex-row items-center gap-2`}>
                                <View style={className`p-2 rounded-md ${getmode.backGroundlightYellowColor} `}>
                                  <Phone width={18} height={18} fill={getmode.fillColor} />
                                </View>
                                <Text style={className`text-sm ${currentMode === 'light' ? `text-[#9eacc7]` : `text-[#b9c1ce]`}`}>Buy Airtime</Text>
                            </View>

                            <View>
                                <ArrowForward width={18} height={18} strokeWidth={2} stroke={getmode.fillColor}  />
                            </View>
                        </View>
                        
                        <View style={className`flex-row  ${getmode.backGroundlightYellowColor} rounded-xl my-2 items-center justify-between p-2`}>
                            <View style={className`flex-row items-center gap-2`}>
                                <View style={className`p-2 rounded-md ${getmode.backGroundlightYellowColor} `}>
                                  <PayBill width={18} height={18} fill={getmode.fillColor} />
                                </View>
                                <Text style={className`text-sm ${currentMode === 'light' ? `text-[#9eacc7]` : `text-[#b9c1ce]`}`}>Pay Bills</Text>
                            </View>

                            <View>
                                <ArrowForward width={18} height={18} strokeWidth={2} stroke={getmode.fillColor}  />
                            </View>
                        </View>
                    </View>
                    
                    </BottomSheetModal>
                </BlurView>
            )
            }

      {/* the modal ends  */}
     
    </View>
    </BottomSheetModalProvider>
    </View>
    </GestureHandlerRootView>
  )
}

export default Main