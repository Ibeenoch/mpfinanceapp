import { View, Text, useColorScheme } from 'react-native'
import React from 'react'
import className from 'twrnc';
import useThemeStyles from '../../utils/dynamic';
import { Image } from 'expo-image';

const saving = () => {
  const getmode = useThemeStyles();
  const currentMode = useColorScheme();
  // currentMode === 'light' ? 'bg-[#e6eefd] text-[#0361f0]' : 'bg-[#001231] text-[#4f89f3]'
  return (
    <View style={className`p-4 flex-1 ${getmode.backGroundColorTwo}`}>
        <Text style={className` ${ getmode.textColorTwo} font-bold text-2xl text-left my-5`}>Choose a savings Plan</Text>

        <View style={className`p-4  my-2 rounded-xl ${getmode.secondLayerBgColor}`}>
          <View style={className`flex-row gap-2 px-2`}>
            <View>
            <Text style={className` ${ getmode.textColorTwo} font-bold text-lg text-left`}>Flexible Savings</Text>
            <Text style={className` text-gray-500 max-w-sm text-md text-left`}>Flexible Savings is designed to help you set asides funds for emergencies, save towards a...</Text>
            <Text style={className` ${ currentMode === 'light' ? 'bg-[#e6f9ff] text-[#05b0e9]' : 'bg-[#01203d] text-[#05c2ff]'} p-1 text-lg text-left my-5`}>9% interest p.a</Text>
            </View>
            <View style={className`${getmode.secondLayerBgColor} p-2`}>
              {
                currentMode === 'light' ? (
                  <Image source={require('../../assets/lightmodebottle.png')} style={className`w-25 h-25`} />
                ) : (
                  <Image source={require('../../assets/darkmodebottle.png')} style={className`w-25 h-25`}  />
                )
              }
              
            </View>
            
          </View>
        </View>

        <View style={className`p-4  my-2 rounded-xl ${getmode.secondLayerBgColor}`}>
          <View style={className`flex-row gap-2 px-2`}>
            <View>
            <Text style={className` ${ getmode.textColorTwo} font-bold text-lg text-left`}>Locked Savings</Text>
            <Text style={className` text-gray-500 max-w-sm text-md text-left`}>Locked Savings is a disclipined savings plan that encourages the development...</Text>
            <Text style={className` ${ currentMode === 'light' ? 'bg-[#e6eefd] text-[#0361f0]' : 'bg-[#001231] text-[#4f89f3]'} p-1 text-lg text-left my-5`}>9% - 16% interest p.a</Text>
            </View>
            <View style={className`${getmode.secondLayerBgColor} p-2`}>
              {
                currentMode === 'light' ? (
                  <Image source={require('../../assets/lightmodepiggy.png')} style={className`w-25 h-25`} />
                ) : (
                  <Image source={require('../../assets/darkmodepiggy.png')} style={className`w-25 h-25`}  />
                )
              }
              
            </View>

          </View>
        </View>

        <View style={className`p-4  my-2 rounded-xl ${getmode.secondLayerBgColor}`}>
          <View style={className`flex-row gap-2 px-2`}>
            <View>
            <Text style={className` ${ getmode.textColorTwo} font-bold text-lg text-left`}>Fixed Savings</Text>
            <Text style={className` text-gray-500 max-w-sm text-md text-left`}>Fixed Savings is an effective way to manage liquidity. By commiting a lump sum for a...</Text>
            <Text style={className` ${ currentMode === 'light' ? 'bg-[#e6eefd] text-[#0361f0]' : 'bg-[#001231] text-[#4f89f3]'} p-1 text-lg text-left my-5`}>9% - 16% interest p.a</Text>
            </View>
            <View style={className`${getmode.secondLayerBgColor} p-2`}>
              {
                currentMode === 'light' ? (
                  <Image source={require('../../assets/lightmodepiggy.png')} style={className`w-25 h-25`} />
                ) : (
                  <Image source={require('../../assets/darkmodepiggy.png')} style={className`w-25 h-25`}  />
                )
              }
              
            </View>

          </View>
        </View>
    </View>
  )
}

export default saving