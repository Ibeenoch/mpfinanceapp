import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import className from 'twrnc';
import useThemeStyles from '../../utils/dynamic';
import { Image } from 'expo-image';
import CheckMark from '../../assets/check-mark-10126.svg'

const Salary = () => {
  const getmode = useThemeStyles();
  const handleNext = () => {
  }
  return (
    <View style={className`p-4 flex-1 ${getmode.backGroundColorTwo}`}>
    <View style={className`p-2 flex-1 rounded-xl ${getmode.firstLayerBgColor}`}>
      <View style={className` rounded-xl`}>
          <Image source={require('../../assets/comingcampain.png')} style={className`w-full h-40 rounded-xl`} />
      </View>

      <Text style={className`text-xl text-center font-bold my-4 ${getmode.textColorTwo} `}>Get Paid Before Payday</Text>

      <View style={[className`p-2 mb-4 rounded-xl border border-gray-300`, styles.dashBorder]}>

        <View style={className`flex-row items-center py-2 gap-2`}>
          <View style={className`flex-row justify-center items-center rounded-full p-1 bg-[#b9c1ce]`}>
            <View style={className`flex-row justify-center items-center rounded-lg p-1 bg-[#1fb02f]`}>
              <CheckMark width={6} height={6} fill={`${getmode.fillColor}`} />
            </View>
          </View>

          <View style={className`pr-3`}>
            <Text style={className`text-xs font-semibold ${getmode.textColorTwo}`}>Get up to 100% of your earned salary</Text>
          </View>
        </View>

        <View style={className`flex-row items-center py-2 gap-2`}>
          <View style={className`flex-row justify-center items-center rounded-full p-1 bg-[#b9c1ce]`}>
            <View style={className`flex-row justify-center items-center rounded-lg p-1 bg-[#1fb02f]`}>
              <CheckMark width={6} height={6} fill={`${getmode.fillColor}`} />
            </View>
          </View>

          <View style={className`pr-3`}>
            <Text style={className`text-xs font-semibold ${getmode.textColorTwo}`}>No interest rate</Text>
          </View>
        </View>

        <View style={className`flex-row items-center py-2 gap-2`}>
          <View style={className`flex-row justify-center items-center rounded-full p-1 bg-[#b9c1ce]`}>
            <View style={className`flex-row justify-center items-center rounded-lg p-1 bg-[#1fb02f]`}>
              <CheckMark width={6} height={6} fill={`${getmode.fillColor}`} />
            </View>
          </View>

          <View style={className`pr-3`}>
            <Text style={className`text-xs font-semibold ${getmode.textColorTwo}`}>Minimal charges</Text>
          </View>
        </View>

      </View>

      <View style={className`max-w-sm`}>
      <TouchableOpacity onPress={handleNext}  style={className`rounded-xl w-full ${getmode.buttonBgColor}  py-6 px-4 flex-row items-center justify-center`}  >
        <Text style={className`${ getmode.textColorTwo} text-sm font-bold`}>Join WaitList</Text>
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

export default Salary