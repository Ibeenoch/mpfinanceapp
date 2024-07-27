import { View, Text, StyleSheet, ActivityIndicator, useColorScheme } from 'react-native'
import React from 'react'
import { BlurView } from 'expo-blur';
import className from 'twrnc';

const SpinnerModal = () => {
    const currentMode = useColorScheme();
  return (
    <BlurView style={[className``, StyleSheet.absoluteFill, styles.modalIntensity]} experimentalBlurMethod='none' tint='light' intensity={10}>
    <View style={styles.modalContainer}>
      {/* Background circular tube */}
      <View style={styles.tubeContainer}>
        <View style={styles.tube} />
      </View>
      {/* ActivityIndicator  */}
      <Text style={className`text-3xl ${currentMode === 'light' ? 'text-[#0261ef]' : 'text-[#ffd75b]' } font-bold`}>M</Text>
      <ActivityIndicator size={120} color={currentMode === 'light' ? '#0261ef' : '#ffd75b'  } style={styles.spinner} />
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
      width: '100%',
      height: '100%',
      borderRadius: 50, // Make it circular
      borderWidth: 10, // Width of the tube
      borderColor: '#D3D3D3', // Light gray color for the tube
      position: 'absolute',
    },
    spinner: {
      position: 'absolute',
    },
  });
  

export default SpinnerModal