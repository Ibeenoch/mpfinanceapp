import { View, Text, StyleSheet,  } from 'react-native'
import React, { useEffect } from 'react'
import { Circle, G, Svg, } from 'react-native-svg';
import Animated, { Easing, useAnimatedProps, useAnimatedStyle, useDerivedValue, useSharedValue, withRepeat, withSequence, withTiming } from 'react-native-reanimated';
import { ReText } from 'react-native-redash';

const AnimatedCircle = Animated.createAnimatedComponent(Circle);


const Spinner = () => {

    const circumference = 200;
    const R = circumference/(2 * Math.PI);
    const strokeWidth = 8;
    const halfCircle = R + strokeWidth;
    const diameter = halfCircle * 2;

    const progress = useSharedValue(0);
    const rotation = useSharedValue(0);

    const animatedProps = useAnimatedProps(() => {
        return {
            strokeDashoffset: circumference * (1 - progress.value)
        }
    },  []);

    const startAnimation = () => {
        progress.value =  withTiming(0, { duration: 1000 });
        // 0 -> 0.7 -> 0.1 -> 0.7
        progress.value = withRepeat(
            withSequence(
                withTiming( 0.7, { duration: 800 }),
                withTiming( 0.1, { duration: 1000 }),
            ), -1, true
        )

        rotation.value = withRepeat(
            withTiming(360, { duration: 900, easing: Easing.linear }), -1, false
        )
    }

    useEffect(() => {
        startAnimation();
    }, []);

    const animatedViewStyle = useAnimatedStyle(() => {
        return {
            transform: [{ rotate: rotation.value + 'deg' }]
        }
    }, [])

    // useEffect(() => {
    //     if(!progress){
    //         progressValue.value = withTiming(0, { duration: 2000 })
    //     }else{
    //         progressValue.value = withTiming(progress, { duration: 2000 })
    //     }

    // }, [progress]);

    

  return (
    <View style={styles.container}>
        <Text  style={styles.text} >M</Text>
        <Animated.View style={animatedViewStyle}>
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

export default Spinner