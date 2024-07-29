import { View, Text, useColorScheme, TouchableOpacity } from 'react-native'
import React from 'react'
import { router, Tabs } from 'expo-router'
import HomeIcon from '../../assets/home-inactive.svg'
import HomeIconOrange from '../../assets/home-orange.svg'
import HomeIconBlue from '../../assets/home-blue.svg'
import CardBlue from '../../assets/credit-card-01-blue.svg';
import CardOrange from '../../assets/credit-card-01-orange.svg';
import CardInactive from '../../assets/credit-card-inactive.svg';
import Plus from '../../assets/up-arrow-svgrepo-com (1).svg';
import Times from '../../assets/cross-svgrepo-com.svg';
import SafeBoxBlue from '../../assets/safebox-blue.svg';
import SafeBoxYellow from '../../assets/safebox-yellow.svg';
import SafeBoxInactive from '../../assets/safebox-inactive.svg';
import IncomeBlue from '../../assets/income-blue.svg';
import IncomeYellow from '../../assets/income-yellow.svg';
import IncomeInactive from '../../assets/income-inactive.svg';
import useThemeStyles from '../../utils/dynamic';
import className from 'twrnc';
import Bell from '../../assets/bell-svgrepo-com.svg'
import PlusMain from '../../assets/plus-large-svgrepo-com.svg'
import SendLight from '../../assets/telegram-blue.svg'
import SendDark from '../../assets/telegram-yellow.svg'
import Phone from '../../assets/call-answer-svgrepo-com.svg'
import PayBill from '../../assets/bookmark-multiple-svgrepo-com.svg';
import ArrowForward from '../../assets/arrow-forward-simple-svgrepo-com.svg';
import Signal from '../../assets/signal-02-svgrepo-com.svg'
import { Image } from 'expo-image';
import { useAppDispatch, useAppSelector } from '../../features/hooks'
import { selectUser, setActiveTab, setMainModalActive } from '../../features/auth/auth'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import { BottomSheetModalProvider } from '@gorhom/bottom-sheet'
import { BlurView } from 'expo-blur'
import { Skeleton } from 'moti/skeleton'


const  Tablayout = () => {
  const getmode = useThemeStyles();
  const currentMode = useColorScheme();
  const dispatch = useAppDispatch();
  const { activeTabs, mainModalActive, skeletonHome } = useAppSelector(selectUser);

  const cancelMainModal = () => {
    dispatch(setMainModalActive(false))
  }

  const openMainModal = () => {
    dispatch(setMainModalActive(true))
  }

  const skeletonCommonProps = {
    backgroundColor: currentMode === 'light' ? '#e9eaec' : '#17233b',
    colorMode: currentMode === 'light' ? 'light' : 'dark'
  } as const;

  return (
    <>
    <Tabs screenOptions={{
      headerRight: () => {
        return <View style={className`flex-row gap-3 pr-4`}>
          <Skeleton show={skeletonHome} height={30} width={40} {...skeletonCommonProps} radius={'round'} >
            <Bell width={25}  height={25} fill={`${currentMode === 'light' ? `#9eacc7` : `#b9c1ce`}`}  />
            </Skeleton>
            <Skeleton show={skeletonHome} height={30} width={45} {...skeletonCommonProps} radius={'round'} >
            <Signal width={25}  height={25} stroke={`${currentMode === 'light' ? `#9eacc7` : `#b9c1ce`}`}  />
            </Skeleton>
        </View>
      },
      headerLeft: () => {
       return     <Skeleton show={skeletonHome} height={50} width={140} {...skeletonCommonProps} radius={'round'} >
                    <View style={className`flex-row pl-4 gap-3 items-center`}>
                        <Image source={require('../../assets/s14.png')} style={className`w-9 h-9 px-2 rounded-xl`} />
                        <Text style={className`text-sm font-semibold py-1 px-2 rounded-xl ${`${currentMode === 'light' ? `bg-[#fdf3e9] text-[#f3a352]` : `bg-[#312726] text-[#de8d3c]`}`} `}>Level 1</Text>
                    </View>
                  </Skeleton>
      },
      headerTitle: '',
      tabBarActiveTintColor: currentMode === 'light' ? `#0261ef` : `#ffd75b`,
      tabBarInactiveTintColor: currentMode === 'light' ? `#9eacc7` : `#b9c1ce`,
      tabBarStyle: {
        borderRadius: 50,
        position: 'absolute',
        bottom: 5,
        zIndex: 8,
        marginBottom: 15,
        marginHorizontal: 9,
        paddingHorizontal: 10,
        paddingVertical: 10,
        height: 75,
        borderTopWidth: 0,
        backgroundColor:  currentMode === 'dark' ?  '#0e1a32' : '#f7f7f7',
        display: 'flex',
        alignItems: 'center'
      },      
      headerStyle: {
        backgroundColor: currentMode === 'dark' ?  '#0e1a32' : '#f7f7f7',
      }
      
    }}>
        <Tabs.Screen name='home' options={{
            title: 'Home',
            tabBarLabelStyle: {
              fontSize: 13,
              padding: 10,
              fontWeight: 400,
              color: currentMode === 'light' ? `${activeTabs === 'home' ? '#0261ef' : '#9eacc7'}` : `${activeTabs === 'home' ? '#ffd75b' : '#b9c1ce'}`,
            },

            tabBarButton: (props) => (
              <TouchableOpacity {...props} 
              onPress={() => {
                console.log('home');
                dispatch(setActiveTab('home'))
                router.push('home')
              }}
              />
            ),
           
            tabBarIcon: ({ color, size}) => {
              return  <View>
                {
              currentMode === 'light' ? (
                activeTabs === 'home' ? <HomeIconBlue width={25} height={25} color={color}  /> : <HomeIcon width={25} height={25} color={color}  />
              ) : (
                activeTabs === 'home' ? <HomeIconOrange width={25} height={25} color={color} /> : <HomeIcon width={25} height={25} color={color}  />
              )
              }

           
              </View>
            }
        }}/>
        <Tabs.Screen name='cards'  options={{
            title: 'Cards',
            tabBarLabelStyle: {
              fontSize: 13,
              padding: 10,
              fontWeight: 400,
              color: currentMode === 'light' ? `${activeTabs === 'card' ? '#0261ef' : '#9eacc7'}` : `${activeTabs === 'card' ? '#ffd75b' : '#b9c1ce'}`,
            },
            tabBarButton: (props) => (
              <TouchableOpacity {...props} 
              onPress={() => {
                console.log('card');
                dispatch(setActiveTab('card'));
                router.push('cards')
              }}
              />
            ),
            tabBarIcon: ({ color, size }) => {
              return  currentMode === 'light' ? (
                       activeTabs === 'card' ?     <CardBlue width={25} height={25} color={color} /> : <CardInactive width={25} height={25} color={color} />
                      ) : (
                        activeTabs === 'card' ?     <CardOrange width={25} height={25} color={color} /> : <CardInactive width={25} height={25} color={color} />

                      )
            }
        }}/>
        <Tabs.Screen name='main' options={{
              title: '',
              // tabBarButton: (props) => (
              //   <TouchableOpacity {...props} 
              //   onPress={() => {
              //     console.log('main');
              //     dispatch(setMainModalActive(true));
              //   }}
              //   />
              // ),
           
            tabBarIcon: ({ color, size}) => {
              return <View style={className`${currentMode === 'light' ? 'bg-[#f7f7f7]' : 'bg-[#0e1a32]' } mb-4 p-2 rounded-full`}>
                        {
                          mainModalActive  ? (
                            <View style={className`${currentMode === 'light' ? `bg-[#0261ef]` : `bg-[#ffd75b]`} p-8 flex-row justify-center items-center rounded-full`}>
                            <TouchableOpacity style={className`flex-row justify-center items-center`} onPress={cancelMainModal}>
                              <Times width={25} height={25} strokeWidth={2} stroke={`${currentMode === 'light' ? '#ffffff' : '#000000' } `} fill={`${currentMode === 'light' ? '#ffffff' : '#000000' }`} />
                            </TouchableOpacity>
                            </View>
                          ) : (
                            <View style={className`${currentMode === 'light' ? `bg-[#0261ef]` : `bg-[#ffd75b]`} p-8 flex-row justify-center items-center rounded-full`}>
                            <TouchableOpacity style={className`flex-row justify-center  items-center`}  onPress={openMainModal}>
                              <Plus width={25} height={25} strokeWidth={2} stroke={`${currentMode === 'light' ? '#ffffff' : '#000000' } `} fill={`${currentMode === 'light' ? '#ffffff' : '#000000' }`} />
                            </TouchableOpacity>
                            </View>
                          )
                        }
        
                    </View>
            }
        }}/>
        <Tabs.Screen name='saving' options={{
          headerTitle: 'Savings',
          headerTitleAlign: 'center',
          headerTitleStyle: {
            color: getmode.textColorTwo,
            fontSize: 15,
            fontWeight: 400
          },
            title: 'Saving',
            tabBarLabelStyle: { 
              fontSize: 13,
              padding: 10,
              fontWeight: 400,
              color: currentMode === 'light' ? `${activeTabs === 'saving' ? '#0261ef' : '#9eacc7'}` : `${activeTabs === 'saving' ? '#ffd75b' : '#b9c1ce'}`,            
            },
            tabBarButton: (props) => (
              <TouchableOpacity {...props} 
              onPress={() => {
                console.log('saving');
                dispatch(setActiveTab('saving'))
                router.push('saving')
              }}
              />
            ),
            tabBarIcon: ({ color, size }) => {
              return currentMode === 'light' ? (
              activeTabs === 'saving' ?  <SafeBoxBlue width={25} height={25} color={color}/> :  <SafeBoxInactive width={25} height={25} color={color}/> 
              ) : (
                activeTabs === 'saving' ?  <SafeBoxYellow width={25} height={25} color={color}/> :  <SafeBoxInactive width={25} height={25} color={color}/>                 
              )
            }
        }}/>
        <Tabs.Screen name='salary' options={{
            title: 'Salary',
            tabBarLabelStyle: { 
              fontSize: 13,
              padding: 10,
              fontWeight: 400,
              color: currentMode === 'light' ? `${activeTabs === 'salary' ? '#0261ef' : '#9eacc7'}` : `${activeTabs === 'salary' ? '#ffd75b' : '#b9c1ce'}`,            },
            tabBarButton: (props) => (
              <TouchableOpacity {...props} 
              onPress={() => {
                console.log('salary');
                dispatch(setActiveTab('salary'));
                router.push('salary')
              }}
              />
            ),
            tabBarIcon: ({ color, size}) => {
              return currentMode === 'light' ? (
              activeTabs === 'salary' ?  <IncomeBlue width={25} height={25}  color={color} /> : <IncomeInactive width={25} height={25}  color={color} /> 
              ) : (
                activeTabs === 'salary' ?   <IncomeYellow width={25} height={25} color={color}  /> : <IncomeInactive width={25} height={25}  color={color} /> 
              )
            }
        }}/>

       
    </Tabs>

            {/* the main modal  */}
            {
              mainModalActive &&    ( 
                  <BlurView style={{ zIndex: 0, width: '90%', height: '100%', position: 'absolute', marginLeft: 18 }} experimentalBlurMethod='dimezisBlurView' tint='regular' intensity={10}>
                    
                    <View style={className`flex-1 absolute bottom-28 rounded-lg w-full z-4  left-0  p-4 ${currentMode === 'light' ? 'bg-[#ffffff]' : 'bg-[#000e28]'}`}>
    
                        <View style={className`flex-row ${getmode.backGroundlightYellowColor} rounded-xl my-2 items-center justify-between items-center p-2`}>
                            <View style={className`flex-row items-center gap-2`}>
                                <View style={className`p-2 rounded-md ${getmode.backGroundlightYellowColor} `}>
                                  <PlusMain width={18} height={18} strokeWidth={2} stroke={getmode.fillColor} />
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
                  </BlurView>
                    )
             }
    
    </>
  )
}

export default  Tablayout