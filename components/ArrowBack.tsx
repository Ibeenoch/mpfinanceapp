import { View, Text } from 'react-native'
import React from 'react'
import ArrowBackLogo from '../assets/arrow-back-svgrepo-com.svg'
import className from 'twrnc'

const ArrowBack = () => {
  return (
    <View>
      <ArrowBackLogo width={20} height={20} style={className`rounded-full`} />
    </View>
  )
}

export default ArrowBack