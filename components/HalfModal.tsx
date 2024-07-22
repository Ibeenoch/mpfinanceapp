import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Modal, View, Text, Button, StyleSheet, TouchableOpacity, useColorScheme } from 'react-native';
import className from 'twrnc';
import Dialer from '../assets/dial-pad-svgrepo-com.svg';
import Envelope from '../assets/letter-svgrepo-com.svg';
import Whatsapp from '../assets/whatsapp-128-svgrepo-com.svg';
import Info from '../assets/exclamation-mark-sign-alert-warning-important-svgrepo-com.svg';


import { useAppSelector } from '../features/hooks';
interface ModalProps {
    halfmodal: boolean;
}

const HalfModal = ({ halfmodal } : ModalProps) => {
    const currentMode = useColorScheme();
  const { showmodal } = useAppSelector((state) => state.auth );

  return (
    <View style={ styles.container}>
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Modal
        visible={halfmodal}
        statusBarTranslucent={true}
        transparent={true}
        animationType="slide"
      >
        <View >
          <Text style={className`text-center font-bold text-md my-3 ${currentMode === 'light' ? 'text-black' : 'text-white'} `}>Resend OTP</Text>
            <View style={className`flex-row items-center gap-3 pl-4 py-4`}>
                <View style={className`p-1 rounded-md ${ currentMode === 'light' ? 'bg-[#e6edfd]' : 'bg-[#343631]'}`}>
                    <Dialer width={15} height={15} strokeWidth={4}   fill={`${ currentMode === 'light' ?  '#0261ef' : '#ffd75b' }`} />
                </View>

                <View>
                    <Text style={className`${ currentMode === 'light' ? 'text-black' : 'text-white'} text-sm `}>Dial <Text style={className`${ currentMode === 'light' ?  'text-[#0261ef]' : 'text-[#ffd75b]' } text-sm`}>*55573*74*1084#</Text> </Text>
                    <Text style={className`text-xs text-gray-400`}>from phone number ***6692</Text>
                </View>

            </View>
            
            <View style={className`flex-row items-center gap-3 pl-4 py-4`}>
                <View style={className`p-1 rounded-md ${ currentMode === 'light' ? 'bg-[#e6edfd]' : 'bg-[#343631]'}`}>
                    <Envelope width={15} height={15} strokeWidth={4}   fill={`${ currentMode === 'light' ?  '#b9c1ce' : '#b9c1ce' }`} />
                </View>

                <View>
                    <Text style={className`text-sm text-gray-400`}>Send via SMS in <Text style={className`${ currentMode === 'light' ?  'text-[#0261ef]' : 'text-[#ffd75b]' } text-sm font-semibold`}>09:36</Text> </Text>
                </View>

            </View>
            
            <View style={className`flex-row items-center gap-3 pl-4 py-4`}>
                <View style={className`p-1 rounded-md ${ currentMode === 'light' ? 'bg-[#e6edfd]' : 'bg-[#343631]'}`}>
                    <Whatsapp width={15} height={15} strokeWidth={4}   fill={`${ currentMode === 'light' ?  '#0261ef' : '#ffd75b' }`} />
                </View>

                <View>
                    <Text style={className`${ currentMode === 'light' ? 'text-black' : 'text-white'} text-sm `}>Send via WhatsApp </Text>
                </View>

            </View>
        </View>
      </Modal>
     
    </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    ...StyleSheet.absoluteFillObject,
    backgroundColor: '#343631',
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

export default HalfModal;
