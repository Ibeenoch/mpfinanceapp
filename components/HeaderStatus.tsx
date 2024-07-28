import { View, Text, useColorScheme } from 'react-native'
import React, { useEffect } from 'react'
import { Circle, G, Svg } from 'react-native-svg';
import Animated, { useAnimatedProps, useSharedValue, withTiming } from 'react-native-reanimated';
import useThemeStyles from '../utils/dynamic';
import { ReText } from 'react-native-redash';
import className from 'twrnc'

const AnimatedCircle = Animated.createAnimatedComponent(Circle);
interface ProgressProps {
  progress: number,
  leftNum: number,
  rightNum: number,
}

const HeaderStatus = ({ progress, leftNum, rightNum }: ProgressProps) => {
  const getmode = useThemeStyles();
  const currentMode = useColorScheme()
  const circumference = 120;
  const r = circumference / (2 * Math.PI);
  const strokeWidth = 5;
  const halfCircle = r + strokeWidth;
  const diameter = halfCircle * 2;

  const progressValue = useSharedValue(0);

  const animatedProps = useAnimatedProps(() => {
    return {
      strokeDashoffset : circumference * (1- progressValue.value)
    }
  }, [progressValue.value])

  useEffect(() => {
    if(!progress){
      progressValue.value = withTiming(0, { duration: 2000 })
    }else{
      progressValue.value = withTiming(progress, { duration: 2000 })
    }
  }, [progress])

  return (
    <View style={className`flex-row justify-center items-center`}>
      <View style={className`flex-row items-center absolute`}>
        <Text style={className`text-sm font-bold ${currentMode === 'light' ? 'text-[]' : 'text-white'}`}>{leftNum}</Text>
        <Text style={className`text-xs font-bold text-gray-500`}>/{rightNum}</Text>
      </View>
      <Svg width={diameter} height={diameter} viewBox={`0 0 ${diameter} ${diameter}`}>
        <G origin={`${halfCircle}, ${halfCircle}`} rotation={'-90'}>
          <AnimatedCircle 
          animatedProps={animatedProps}
          fill={'transparent'} 
          stroke={currentMode === 'light' ? '#0261ef' : '#ffd75b'}
          r={r} 
          cx={'50%'} 
          cy={'50%'} 
          strokeWidth={strokeWidth}
          strokeLinecap='round'
          strokeDasharray={circumference}
          
          />
          
          <Circle fill={'transparent'} 
          stroke={currentMode === 'light' ? 'gray' : 'white'} 
          r={r} 
          cx={'50%'} 
          cy={'50%'} 
          strokeWidth={strokeWidth}
          strokeLinecap='round'
          strokeDasharray={circumference}
          strokeOpacity={0.2}
          />
          <Circle />
        </G>
      </Svg>
    </View>
  )
}

export default HeaderStatus