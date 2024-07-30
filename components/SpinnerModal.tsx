import { View, Text, StyleSheet, ActivityIndicator, useColorScheme } from 'react-native'
import React from 'react'
import { BlurView } from 'expo-blur';
import className from 'twrnc';
import MLetter from '../assets/monieLetterLogo.svg';
import MLetterBlue from '../assets/monieLetterLogoblue.svg';

const SpinnerModal = () => {
    const currentMode = useColorScheme();
  return (
    <BlurView style={{ zIndex: 2, width: '100%', height: '100%', position: 'absolute'}} experimentalBlurMethod='dimezisBlurView' tint='regular' intensity={20}>
    {/* <View style={styles.modalContainer}> */}
    <View style={className`flex-1 flex-row justify-center items-center`}>
      {/* Background circular tube */}
      <View style={styles.tubeContainer}>
        <View style={styles.tube} />
      </View>
      {/* ActivityIndicator  */}
      {/* <Text style={className`text-3xl ${currentMode === 'light' ? 'text-[#0261ef]' : 'text-[#ffd75b]' } font-bold`}>M</Text> */}
      {
        currentMode === 'light' ? (
          <MLetterBlue width={75} height={75} style={className`mt-2`}  />
        ) : (
          <MLetter width={75} height={75} style={className`mt-2`}  />
        )
      }
      
      <ActivityIndicator size={72}  color={currentMode === 'light' ? '#0261ef' : '#ffd75b'  } style={[styles.spinner, className``]} />
    </View>
  </BlurView>
  )
}

const styles = StyleSheet.create({
    modalContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    tubeContainer: {
      position: 'absolute',
      width: 100, // Set a fixed width for the tube
      height: 100, // Set a fixed height for the tube
      justifyContent: 'center',
      alignItems: 'center',
    },
    modalIntensity: {
        backgroundColor: 'rgba(0, 0, 0, 0.80)', 
    },
    tube: {
      width: '60%',
      height: '60%',
      borderRadius: 50, // Make it circular
      borderWidth: 6, // Width of the tube
      borderColor: 'white', // Light gray color for the tube
      position: 'absolute',
    },
    spinner: {
      position: 'absolute',
    },
  });
  

export default SpinnerModal