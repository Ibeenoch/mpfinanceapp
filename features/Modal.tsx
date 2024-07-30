import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Modal, View, Text, Button, StyleSheet, TouchableOpacity, ActivityIndicator, useColorScheme } from 'react-native';
import Spinner from '../assets/tube-spinner.svg';
import className from 'twrnc'
import { useAppSelector } from '../features/hooks';
import useThemeStyles from '../utils/dynamic';
interface ModalProps {
    modalOn: boolean;
}

const AppModal = ({ modalOn } : ModalProps) => {
  const { showmodal } = useAppSelector((state) => state.auth );
  const getmode = useThemeStyles();
  const currentMode = useColorScheme();
  console.log('modal is ', modalOn);

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Modal
        visible={modalOn}
        statusBarTranslucent={true}
        transparent={true}
        animationType="slide"
      >
        <View  style={className`relative h-full flex items-center justify-center`}>
          <ActivityIndicator size={80} color={currentMode === 'light' ? '#f2f7fe' : '#ffd75b'} />
          <Text style={className`text-3xl z-4 font-bold absolute ${getmode.textColorTwo}`}>M</Text>
        </View>
      </Modal>
     
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(255, 0, 0, 0.2)',
    opacity: 0.8,
    
  },
  container2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',    
  },
  modalBackground: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.9)', // Semi-transparent background
  },
  modalContainer: {
    width: 300,
    padding: 20,
    backgroundColor: 'white',
    borderRadius: 10,
    alignItems: 'center',
  },
  modalText: {
    fontSize: 18,
    marginBottom: 20,
  },
  closeButton: {
    padding: 10,
    backgroundColor: '#007BFF',
    borderRadius: 5,
  },
  closeButtonText: {
    color: 'white',
    fontSize: 16,
  },
});

export default AppModal;
