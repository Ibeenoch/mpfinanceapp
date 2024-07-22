import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Modal, View, Text, Button, StyleSheet, TouchableOpacity } from 'react-native';
import Spinner from '../app/spinner';
import { useAppSelector } from '../features/hooks';
interface ModalProps {
    modalOn: boolean;
}

const AppModal = ({ modalOn } : ModalProps) => {
  const { showmodal } = useAppSelector((state) => state.auth );

  console.log('modal is ', modalOn);

  return (
    <View style={ styles.container}>
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Modal
        visible={modalOn}
        statusBarTranslucent={true}
        transparent={true}
        animationType="slide"
      >
        <View >
          <Spinner  />
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

export default AppModal;
