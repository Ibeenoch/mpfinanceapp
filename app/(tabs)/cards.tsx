import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react';
import className from 'twrnc';
import useThemeStyles from '../../utils/dynamic';
import { Image } from 'expo-image';
import Shield from '../../assets/protect-svgrepo-com.svg';
import CustomerService from '../../assets/customer-service-agent-svgrepo-com.svg';
import Delivery from '../../assets/delivery-svgrepo-com.svg';
import Globe from '../../assets/globe-svgrepo-com.svg';
import { router } from 'expo-router';

const cards = () => {
  const getmode = useThemeStyles();
  const handleNext = () => {
    router.push('(tabs)/requestcard')
  }

  return (
    <View style={className`p-4 flex-1 ${getmode.backGroundColorTwo}`}>
      <View style={className`p-2 flex-1 rounded-xl ${getmode.firstLayerBgColor}`}>
        <View style={className`px-[25%] ${getmode.backGroundColor} rounded-xl ${getmode.firstLayerBgColor}`}>
            <Image source={require('../../assets/s14.png')} />
        </View>

        <Text style={className`text-xl font-bold my-4 ${getmode.textColorTwo} `}>A Card That Works...</Text>

        <View style={[className`p-2 rounded-full border border-gray-300`, styles.dashBorder]}>
          <Text style={className`text-xs text-gray-500 pb-4 `}>What you get</Text>

          <View style={className`flex-row gap-1`}>
            <View style={className`flex-row justify-center items-center rounded-lg ${getmode.backGroundBlueColor}`}>
              <Shield width={11} height={11} fill={`${getmode.fillColor}`} />
            </View>

            <View style={className`pr-3`}>
              <Text style={className`text-sm font-bold ${getmode.textColorTwo}`}>Reliable Card</Text>
              <Text style={className`text-xs text-gray-500 pb-4 `}>Avoid stories that touch. Get the card that always works.</Text>
            </View>
          </View>

          <View style={className`flex-row gap-1`}>
            <View style={className`flex-row justify-center items-center rounded-lg ${getmode.backGroundBlueColor}`}>
              <CustomerService width={11} height={11} fill={`${getmode.fillColor}`} />
            </View>

            <View style={className`pr-3`}>
              <Text style={className`text-sm font-bold ${getmode.textColorTwo}`}>Fast Dispute Resolution</Text>
              <Text style={className`text-xs text-gray-500 pb-4 `}>Say goodbye to unreversed debits. Log disputes within your app, and monitior them till you get a full refund.</Text>
            </View>
          </View>

          <View style={className`flex-row gap-1`}>
            <View style={className`flex-row justify-center items-center rounded-lg ${getmode.backGroundBlueColor}`}>
              <Delivery width={11} height={11} fill={`${getmode.fillColor}`} />
            </View>

            <View style={className`pr-3`}>
              <Text style={className`text-sm font-bold ${getmode.textColorTwo}`}>48 Hrs Delivery</Text>
              <Text style={className`text-xs text-gray-500 pb-4 `}>We'll deliver it to you within 48 hours. Activate it in seconds, and start using it right away.</Text>
            </View>
          </View>

          <View style={className`flex-row gap-1`}>
            <View style={className`flex-row justify-center items-center rounded-lg ${getmode.backGroundBlueColor}`}>
              <Globe width={11} height={11} fill={`${getmode.fillColor}`} />
            </View>

            <View style={className`pr-3`}>
              <Text style={className`text-sm font-bold ${getmode.textColorTwo}`}>Online Payment</Text>
              <Text style={className`text-xs text-gray-500 pb-4 `}>Pay all your favorite online merchants.</Text>
            </View>
          </View>

        </View>

        <View style={[className`p-2 rounded-full border border-gray-300`, styles.dashBorder]}>
        
            <View style={className`flex-row justify-between px-2`}>
              <Text style={className`text-xs text-gray-500 pb-4 `}>Card Price:</Text>
              <Text style={className`text-xs ${getmode.textColorTwo} pb-4 `}>₦1000.0</Text>
            </View>

            <View style={className`flex-row justify-between px-2`}>
              <Text style={className`text-xs text-gray-500 pb-4 `}>Delivery:</Text>
              <Text style={className`text-xs ${getmode.textColorTwo} pb-4 `}>₦1000.0</Text>
            </View>

            <View style={className`border-b border-gray-300 px-2`}>
            </View>

            <View style={className`flex-row justify-between px-2`}>
              <Text style={className`text-xs text-gray-500 pb-4 `}>Total</Text>
              <Text style={className`text-xs ${getmode.textColorTwo} pb-4 `}>₦2000.0</Text>
            </View>
        </View>

        <Text style={className`text-xs text-gray-500 pt-2 pb-4 `}>*Delivery prices may vary based on your location</Text>

      </View>

      
    <View style={className`p-4 absolute bottom-0 w-full`}>
      <View style={className`max-w-sm`}>
        <TouchableOpacity onPress={handleNext}  style={className`rounded-xl w-full ${getmode.buttonBgColor}  py-6 px-4 flex-row items-center justify-center`}  >
          <Text style={className`${ getmode.textColorTwo} text-sm font-bold`}>Order A Card</Text>
        </TouchableOpacity>
      </View>
    </View>
    </View>
  )
}

const styles = StyleSheet.create({
  dashBorder: {
      borderStyle: 'dashed'
  }
})

export default cards