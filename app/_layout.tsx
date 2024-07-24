import { View, Text, Image, Button } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'
import { Provider, } from 'react-redux'
import { persistor, store } from '../features/store'
import { PersistGate } from 'redux-persist/integration/react';
import { Appearance, useColorScheme } from 'react-native'
import { useAppSelector } from '../features/hooks'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import Phone from '../assets/call-answer-svgrepo-com.svg'
import className from 'twrnc'

const App = () => {
    let colorScheme = useColorScheme();
    const { showmodal } = useAppSelector((state) => state.auth );

  return (
        <Stack>
            <Stack.Screen name='index'  options={{ headerShown: false }} />
            <Stack.Screen name='signup'  options={{ 
            headerShown: true, 
            headerTitle: '', 
            headerStyle: {
                backgroundColor:  colorScheme === 'dark' ? `${showmodal ? '#000612' : '#0e1a32' }` : `${showmodal ? '#7f7f7f' : '#f7f7f7'} `,
            }, 
            headerTintColor: colorScheme === 'dark' ? `${showmodal ? '#000612' : '#ffd75b'}` : `${showmodal ? '#7f7f7f' : '#0261ef'}`, 
            headerTitleStyle: {
                fontSize: 15,
            },
            headerRight: () => <Text style={{ color: colorScheme === 'dark' ? `${showmodal ? '#000612' : '#ffd75b'}` : `${showmodal ? '#7f7f7f' : '#0261ef'}`  }}>Needs help</Text>,
            
            }} />
            <Stack.Screen name='verification'  
            options={{ 
            headerShown: true, 
            headerTitle: 'Upgrade To Level 1', 
            headerTitleAlign: 'center',
            headerStyle: {
                backgroundColor:  colorScheme === 'dark' ? `${showmodal ? '' : '#0e1a32' }` : `${showmodal ? '' : '#f7f7f7'} `,
            }, 
            headerTintColor: colorScheme === 'dark' ? `${showmodal ? '' : '#ffd75b'}` : `${showmodal ? '' : '#0261ef'}`, 
            headerTitleStyle: {
                fontSize: 15,
            },
            headerRight: () => <Text style={{ color: colorScheme === 'dark' ? `${showmodal ? '' : '#ffd75b'}` : `${showmodal ? '' : '#0261ef'}`  }}>Needs help</Text>,
            
            }} />
            <Stack.Screen name='attestation'  
            options={{ 
            headerShown: true, 
            headerTitle: 'Upgrade To Level 1', 
            headerTitleAlign: 'center',
            headerStyle: {
                backgroundColor:  colorScheme === 'dark' ? `${showmodal ? '' : '#0e1a32' }` : `${showmodal ? '' : '#f7f7f7'} `,
            }, 
            headerTintColor: colorScheme === 'dark' ? `${showmodal ? '' : '#ffd75b'}` : `${showmodal ? '' : '#0261ef'}`, 
            headerTitleStyle: {
                fontSize: 15,
            },
            headerRight: () => <Text style={{ color: colorScheme === 'dark' ? `${showmodal ? '' : '#ffd75b'}` : `${showmodal ? '' : '#0261ef'}`  }}>Needs help</Text>,
            
            }} />
            <Stack.Screen name='verifyphone'  options={{ 
            headerShown: true, 
            headerTitle: '', 
            headerStyle: {
                backgroundColor:  colorScheme === 'dark' ? '#0e1a32' : '#f7f7f7',
            }, 
            headerTintColor: colorScheme === 'dark' ? '#ffd75b' : '#0261ef', 
            headerTitleStyle: {
                fontSize: 15,
            },
            headerRight: () => <Text style={{ color: colorScheme === 'dark' ? '#ffd75b' : '#0261ef'  }}>Needs help</Text>,
            
            }} />
            <Stack.Screen name='signupemail'  options={{ 
            headerShown: true, 
            headerTitle: '', 
            headerStyle: {
                backgroundColor:  colorScheme === 'dark' ? '#0e1a32' : '#f7f7f7',
            }, 
            headerTintColor: colorScheme === 'dark' ? '#ffd75b' : '#0261ef', 
            headerTitleStyle: {
                fontSize: 15,
            },
            headerRight: () =>  <Text style={{ color: colorScheme === 'dark' ? '#ffd75b' : '#0261ef'  }}>Need help?</Text>
            ,
            
            }} />
            <Stack.Screen name='address'  options={{ 
            headerShown: true, 
            headerTitle: 'Upgrade To Level 1', 
            headerTitleAlign: 'center',
            headerStyle: {
                backgroundColor:  colorScheme === 'dark' ? '#0e1a32' : '#f7f7f7',
            }, 
            headerTintColor: colorScheme === 'dark' ? '#ffd75b' : '#0261ef', 
            headerTitleStyle: {
                fontSize: 15,
            },
            headerRight: () =>  <Text style={{ color: colorScheme === 'dark' ? '#ffd75b' : '#0261ef'  }}>Need help?</Text>
            ,
            
            }} />
                <Stack.Screen name='passcode'  options={{ 
            headerShown: true, 
            headerTitle: '', 
            headerStyle: {
                backgroundColor:  colorScheme === 'dark' ? '#0e1a32' : '#f7f7f7',
            }, 
            headerTintColor: colorScheme === 'dark' ? '#ffd75b' : '#0261ef', 
            headerTitleStyle: {
                fontSize: 15,
            },
            headerRight: () => <View style={className` ${colorScheme === 'light' ? '#0261ef' : '#ffd75b'} flex-row items-center gap-1 `}>
                                    <Phone width={10} height={10} fill={`${colorScheme === 'light' ? '#0261ef' : 'white'}`} />
                                    <Text style={{ color: colorScheme === 'dark' ? '#ffd75b' : '#0261ef'  }}>***5566</Text>
                                </View> ,
            
            }} />
            <Stack.Screen name='welcomeTwo'  options={{ headerShown: false, headerStyle: {
                    backgroundColor:  `${colorScheme === 'dark' ?  '#ffd75b' : '#f7f7f7'}`
            } }} />
            <Stack.Screen name='success'  options={{ headerShown: false }} />
            <Stack.Screen name='biometrics'  options={{ headerShown: false }} />
            <Stack.Screen name='cbninfo'  options={{ headerShown: false }} />
            <Stack.Screen name='cbnlast'  options={{ headerShown: false }} />
            <Stack.Screen name='nationality'  options={{ headerShown: false }} />
            <Stack.Screen name='photocapture'  options={{ headerShown: false }} />
            <Stack.Screen name='selfietake'  options={{ headerShown: false }} />
            <Stack.Screen name='processimg'  options={{ headerShown: false }} />
            <Stack.Screen name='selfiecapture'  options={{ headerShown: false }} />
            <Stack.Screen name='idverified'  options={{ headerShown: false }} />
            <Stack.Screen name='pepstatus'  options={{ headerShown: false }} />
            <Stack.Screen name='income'  options={{ headerShown: false }} />
            <Stack.Screen name='congrat'  options={{ headerShown: false }} />
        </Stack>
  )
}

const AppProvider = () => (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <App />
        </GestureHandlerRootView>
      </PersistGate>
    </Provider>
  );
  
  export default AppProvider;
