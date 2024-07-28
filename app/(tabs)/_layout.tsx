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
import SafeBoxBlue from '../../assets/safebox-blue.svg';
import SafeBoxYellow from '../../assets/safebox-yellow.svg';
import SafeBoxInactive from '../../assets/safebox-inactive.svg';
import IncomeBlue from '../../assets/income-blue.svg';
import IncomeYellow from '../../assets/income-yellow.svg';
import IncomeInactive from '../../assets/income-inactive.svg';
import useThemeStyles from '../../utils/dynamic';
import className from 'twrnc';
import Bell from '../../assets/bell-svgrepo-com.svg'
import Signal from '../../assets/signal-02-svgrepo-com.svg'
import { Image } from 'expo-image';
import { useAppDispatch, useAppSelector } from '../../features/hooks'
import { selectUser, setActiveTab } from '../../features/auth/auth'


const  Tablayout = () => {
  const getmode = useThemeStyles();
  const currentMode = useColorScheme();
  const dispatch = useAppDispatch();
  const { activeTabs } = useAppSelector(selectUser);
  return (
    <Tabs screenOptions={{
      headerRight: () => {
        return <View style={className`flex-row gap-3 pr-4`}>
            <Bell width={25}  height={25} fill={`${currentMode === 'light' ? `#9eacc7` : `#b9c1ce`}`}  />
            <Signal width={25}  height={25} stroke={`${currentMode === 'light' ? `#9eacc7` : `#b9c1ce`}`}  />
        </View>
      },
      headerLeft: () => {
        return <View style={className`flex-row pl-4 items-center`}>
            <Image source={require('../../assets/s14.png')} style={className`w-9 h-9 px-2 rounded-xl`} />
            <Text style={className`text-sm font-semibold py-1 px-2 rounded-xl ${`${currentMode === 'light' ? `bg-[#fdf3e9] text-[#f3a352]` : `bg-[#312726] text-[#de8d3c]`}`} `}>Level 1</Text>
        </View>
      },
      headerTitle: '',
      tabBarActiveTintColor: currentMode === 'light' ? `#0261ef` : `#ffd75b`,
      tabBarInactiveTintColor: currentMode === 'light' ? `#9eacc7` : `#b9c1ce`,
      tabBarStyle: {
        borderRadius: 50,
        position: 'absolute',
        bottom: 5,
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
              return currentMode === 'light' ? (
                activeTabs === 'home' ? <HomeIconBlue width={25} height={25} color={color}  /> : <HomeIcon width={25} height={25} color={color}  />
              ) : (
                activeTabs === 'home' ? <HomeIconOrange width={25} height={25} color={color} /> : <HomeIcon width={25} height={25} color={color}  />
              )
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
           
            tabBarIcon: ({ color, size}) => {
              return <View style={className`${currentMode === 'light' ? 'bg-[#f7f7f7]' : 'bg-[#0e1a32]' } mb-4 p-2 rounded-full`}>
                  <View style={className`${currentMode === 'light' ? `bg-[#0261ef]` : `bg-[#ffd75b]`} p-6 rounded-full`}>
                        <Plus width={25} height={25} strokeWidth={2} stroke={`${currentMode === 'light' ? '#ffffff' : '#000000' } `} fill={`${currentMode === 'light' ? '#ffffff' : '#000000' }`} />
                    </View>
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
  )
}

export default  Tablayout