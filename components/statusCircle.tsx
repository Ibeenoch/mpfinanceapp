import { View, Text, StyleSheet, useColorScheme,  } from 'react-native'
import React, { useEffect } from 'react'
import { Circle, G, Svg, } from 'react-native-svg';
import Animated, { Easing, useAnimatedProps, useAnimatedStyle, useDerivedValue, useSharedValue, withRepeat, withSequence, withTiming } from 'react-native-reanimated';
import { ReText } from 'react-native-redash';
import className from 'twrnc';

const AnimatedCircle = Animated.createAnimatedComponent(Circle);

interface StatusNum {
    num: number;
    upper: number;
    lower: number
}

const StatusSpinner = ({ num, upper, lower }: StatusNum) => {
    const currentMode = useColorScheme();
    const circumference = 200;
    const R = circumference/(2 * Math.PI);
    const strokeWidth = 8;
    const halfCircle = R + strokeWidth;
    const diameter = halfCircle * 2;

    const progress = useSharedValue(0);

    const animatedProps = useAnimatedProps(() => {
        return {
            strokeDashoffset: circumference * (1 - num)
        }
    },  []);

   




    // useEffect(() => {
    //     if(!progress){
    //         progressValue.value = withTiming(0, { duration: 2000 })
    //     }else{
    //         progressValue.value = withTiming(progress, { duration: 2000 })
    //     }

    // }, [progress]);

    

  return (
    <View style={styles.container}>
        <View  style={styles.text} >
            <View style={className`flex-row`}>
                <Text style={className`text-[16px] font-bold ${currentMode === 'light' ? 'text-black' : 'text-white'} `}>{upper}</Text>
                <Text style={className`text-[12px] ${currentMode === 'light' ? 'text-black' : 'text-white'}`}>/{lower}</Text>
            </View>
        </View>
        <Animated.View >
            <Svg width={diameter} height={diameter}  viewBox={`0 0 ${diameter} ${diameter} `}> 
                <G origin={`${halfCircle}, ${halfCircle} ` } rotation={'-90'}>
                    <AnimatedCircle 
                    animatedProps={animatedProps}
                    fill={'transparent'}
                    stroke={'#ffd75b'}
                    r={R}
                    cx={'50%'}
                    cy={'50%'}
                    strokeWidth={strokeWidth}
                    strokeLinecap='round'
                    strokeDasharray={circumference}
                    
                    />
                    <Circle 
                    fill={'transparent'}
                    stroke={'yellow'}
                    r={R}
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
        </Animated.View>
    </View>
  )
}

const styles = StyleSheet.create({
container: {
    display: 'flex',
   justifyContent: 'center',
   alignItems: 'center', 
   height: '100%',
},
text: {
    color: '#ffd75b',
    fontSize: 30,
    fontWeight: '900',
    position: 'absolute',
}

})

export default StatusSpinner