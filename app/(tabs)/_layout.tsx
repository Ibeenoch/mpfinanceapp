import { View, Text, useColorScheme } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import HomeIcon from '../../assets/home-1-svgrepo-com.svg'
import Card from '../../assets/credit-card-01-svgrepo-com.svg';
import Plus from '../../assets/up-arrow-svgrepo-com (1).svg';
import SafeBox from '../../assets/safebox-svgrepo-com.svg';
import Income from '../../assets/noun-income-834265.svg';
import useThemeStyles from '../../utils/dynamic';
import className from 'twrnc';
import Bell from '../../assets/bell-svgrepo-com.svg'
import Signal from '../../assets/signal-02-svgrepo-com.svg'
import { Image } from 'expo-image';


const getmode = useThemeStyles();
const currentMode = useColorScheme();

const  Tablayout = () => {
  return (
    <Tabs screenOptions={{
      headerRight: () => {
        return <View style={className`flex-row gap-3`}>
            <Bell width={13}  height={13} fill={`${currentMode === 'light' ? `#9eacc7` : `#b9c1ce`}`}  />
            <Signal width={13}  height={13} fill={`${currentMode === 'light' ? `#9eacc7` : `#b9c1ce`}`}  />
        </View>
      },
      headerLeft: () => {
        return <View style={className`flex-row gap-3`}>
            <Image source={require('../../assets/s14.png')} />
            <Text style={className`text-sm font-semibold py-1 px-2 rounded-md ${`${currentMode === 'light' ? `bg-[#fdf3e9] text-[#f3a352]` : `bg-[#312726] text-[#de8d3c]`}`} `}>Level 1</Text>
        </View>
      },
      tabBarStyle: {
        borderRadius: 50,
        marginBottom: 15,
        marginHorizontal: 9,
        paddingHorizontal: 10,
        paddingVertical: 10,
        height: 75,
        backgroundColor: currentMode === 'light' ? '#f7f7f7' : '#000e28',
        display: 'flex',
        alignItems: 'center'
      },
      

      
    }}>
        <Tabs.Screen name='home' options={{
            title: 'Home',
            tabBarLabelStyle: {
              fontSize: 13,
              padding: 10,
              color: currentMode === 'light' ? `#9eacc7` : `#b9c1ce`,
            },
            tabBarActiveTintColor: currentMode === 'light' ? `#0261ef` : `#ffd75b`,
            tabBarInactiveTintColor: currentMode === 'light' ? `#9eacc7` : `#b9c1ce`,
            tabBarIcon: () => {
              return <HomeIcon width={25} height={25} stroke={`${currentMode === 'light' ? `#9eacc7` : `#b9c1ce`}`} fill={`${currentMode === 'light' ? `#9eacc7` : `#b9c1ce`}`} />
            }
        }}/>
        <Tabs.Screen name='cards' options={{
            title: 'Cards',
            tabBarLabelStyle: {
              fontSize: 13,
              padding: 10,
              color: currentMode === 'light' ? `#9eacc7` : `#b9c1ce`,
            },
            tabBarActiveTintColor: currentMode === 'light' ? `#0261ef` : `#ffd75b`,
            tabBarInactiveTintColor: currentMode === 'light' ? `#9eacc7` : `#b9c1ce`,
            tabBarIcon: () => {
              return <Card width={25} height={25} stroke={`${currentMode === 'light' ? `#9eacc7` : `#b9c1ce`}`} fill={`${currentMode === 'light' ? `#9eacc7` : `#b9c1ce`}`} />
            }
        }}/>
        <Tabs.Screen name='main' options={{
              title: '',
           
            tabBarIcon: () => {
              return <View style={className`${currentMode === 'light' ? 'bg-[#f7f7f7]' : 'bg-[#000e28]' } mb-4 p-2 rounded-full`}>
                  <View style={className`${currentMode === 'light' ? `bg-[#0261ef]` : `bg-[#ffd75b]`} p-6 rounded-full`}>
                        <Plus width={25} height={25} strokeWidth={2} stroke={`${currentMode === 'light' ? `white` : `black`}`} fill={`${currentMode === 'light' ? `white` : `black`}`} />
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
              color: currentMode === 'light' ? `#9eacc7` : `#b9c1ce`,
            },
            tabBarActiveTintColor: currentMode === 'light' ? `#0261ef` : `#ffd75b`,
            tabBarInactiveTintColor: currentMode === 'light' ? `#9eacc7` : `#b9c1ce`,
            tabBarIcon: () => {
              return <SafeBox width={25} height={25} stroke={`${currentMode === 'light' ? `#9eacc7` : `#b9c1ce`}`} fill={`${currentMode === 'light' ? `#9eacc7` : `#b9c1ce`}`} />
            }
        }}/>
        <Tabs.Screen name='salary' options={{
            title: 'Salary',
            tabBarLabelStyle: { 
              fontSize: 13,
              padding: 10,
              color: currentMode === 'light' ? `#9eacc7` : `#b9c1ce`,
            },
            tabBarActiveTintColor: currentMode === 'light' ? `#0261ef` : `#ffd75b`,
            tabBarInactiveTintColor: currentMode === 'light' ? `#9eacc7` : `#b9c1ce`,
            tabBarIcon: () => {
              return <Income width={25} height={25} stroke={`${currentMode === 'light' ? `#9eacc7` : `#b9c1ce`}`} fill={`${currentMode === 'light' ? `#9eacc7` : `#b9c1ce`}`} />
            }
        }}/>

        {/* <Tabs.Screen name='requestcard' options={{
            headerTitle: 'Card Request',
          headerStyle: {
            backgroundColor: `${getmode.backGroundColorTwo}`
          },
          headerTintColor: currentMode === 'light' ? 'blue' : 'white',
          headerTitleAlign: 'center'
        }}/> */}
    </Tabs>
  )
}

export default  Tablayout