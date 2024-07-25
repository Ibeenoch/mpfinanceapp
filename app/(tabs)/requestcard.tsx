import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import className from 'twrnc';
import useThemeStyles from '../../utils/dynamic';
import { Image } from 'expo-image';

const requestcard = () => {
    const getmode = useThemeStyles();
  return (
    <View style={className`flex-1 p-4`}>
        <View style={className`mb-4`}>
            <Text style={className` ${ getmode.textColorTwo} font-bold text-2xl text-left pt-5 pb-1`}>Card Type</Text>
            <Text style={className` ${ getmode.textColorTwo} text-xs text-left pb-7`}>Select a Card type</Text>
        </View>

        <View style={className`p-4  rounded-xl ${getmode.secondLayerBgColor}`}>
            <View style={className`flex-row gap-1`}>
                <View>
                    {/* select icon */}
                </View>
                <View>
                    <Text style={className` ${ getmode.textColorTwo} font-bold text-xl text-left pt-5 pb-1`}>Physical Card</Text>
                    <Text style={className` text-gary-500 text-xs text-left pt-5 pb-1`}>Get your moniepoint card delivered to you</Text>
                </View>
            </View>

            <View>
                <Image source={require('../../assets/s15.png')} style={className`w-full rounded-xl`} />
            </View>
        </View>

        <View style={className`p-4  rounded-xl ${getmode.secondLayerBgColor}`}>
            <View style={className`p-4  rounded-xl ${getmode.secondLayerBgColor}`}>
            <Text style={className` ${ getmode.textColorTwo} font-bold text-xl text-left pt-5 pb-1`}>Virtual Card</Text>
            <Text style={className` ${ getmode.textColorTwo} font-bold text-lg text-left pt-5 pb-1`}>Coming soon</Text>
            </View>
        </View>

        <View style={className`p-4 absolute bottom-0 w-full`}>
        <View style={className`max-w-sm`}>
            <TouchableOpacity  style={className`rounded-xl w-full ${getmode.buttonBgColor}  py-6 px-4 flex-row items-center justify-center`}  >
            <Text style={className`${ getmode.textColorTwo} text-sm font-bold`}>Get A Physical Card</Text>
            </TouchableOpacity>
        </View>
        </View>

    </View>
  )
}

export default requestcard