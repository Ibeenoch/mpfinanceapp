import React, {useEffect, useRef} from 'react';
import { Image } from 'expo-image';
import className from 'twrnc';
import {
  SafeAreaView,
  ScrollView,
  Text,
  StyleSheet,
  View,
  ImageBackground,
  Animated,
  useWindowDimensions,
  Pressable,
  useColorScheme,
} from 'react-native';
import image from '../assets/image';
import { router } from 'expo-router';
import Spinner from '../assets/tube-spinner.svg'
import useThemeStyles from '../utils/dynamic';
import { useAppDispatch } from '../features/hooks';
import { setSelectionModal, shouldShowModal } from '../features/auth/auth';


     // light mode thick blue #0261ef 
    // light mode light blue bg #e6edfd 
    // light mode lighter blue bg btn #ffffff 
    // light mode bg #f7f7f7
    // light mode next button #e5e5e5
    // red #dc4846
    // black light mode #212121
    // dark mode bg #000e28
    // dark mode bg btn #1a263e
    // dark mode text placeholder color #1a263c
    // dark mode yellow #ffd75b
    // dark mode gray #b9c1ce
    // dark mode green #1fb02f
    // dark mode orange at dashboard = #e48c35
    // dark mode orange bg at dashboard #312726
    // dark mode yellow bg at login/sign up #343631
    // button number color at sign up #5b5b5b

const Home = () => {
  const getmode = useThemeStyles();
  const currentMode = useColorScheme();
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(shouldShowModal(false));
    dispatch(setSelectionModal(false));
  }, [])

  const scrollX = useRef(new Animated.Value(0)).current;
  let s1 = image.s1, s2= image.s2, s3 = image.s3, s4 = image.s4, s5 = image.s5;
  const images = [s1, s2, s3, s4, s5];
  const textBig = [
    'Get a debit card that always works', 'Send and receive money with ease',
    'Fast and easy way to pay anywhere', 'Buy Airtime and Data in a few clicks', 'Pay Bills'
  ];
  const textSmall = [
    'withdraw cash and make payments anywhere securely', 'From anyone and to anyone in seconds',
    'Pay with transfer or cash at your favourite Moniepoint merchants in a blink of an eye', 'Recharge your phone seamlessly anytime',
    "Don't get cut off on your TV or Electricity connection. Pay your bills on time seamlessly"
  ];

  const {width: windowWidth} = useWindowDimensions();

  return (
    <SafeAreaView style={className`flex-1 justify-center items-center  ${currentMode === 'light' ? 'bg-[#f7f7f7]' : 'bg-[#000e28]'}`}>

        <View style={className`text-center text-2xl font-bold -mt-38 pb-6`}>
          <Text style={[className`text-center text-2xl font-bold  ${currentMode === 'light' ? 'text-black' : 'text-white'}`]}>MoniePoint</Text>
        </View>
    
      <View style={styles.scrollContainer}>
        <ScrollView
          horizontal={true}
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          onScroll={Animated.event([
            {
              nativeEvent: {
                contentOffset: {
                  x: scrollX,
                },
              },
            },
          ])}
          scrollEventThrottle={1}>
          {images.map((image, imageIndex) => {
            return (
              <View style={{width: windowWidth, height: 400}} key={imageIndex}>
                <Image source={image} style={styles.card} />
                 <Text style={className`${currentMode === 'light' ? 'text-black' : 'text-white'} text-center  font-bold text-3xl mt-4`}>{textBig[imageIndex]}</Text>
                 <Text style={className`${currentMode === 'light' ? 'text-black' : 'text-white'} text-center mx-auto w-[230px] font-bold text-xs py-4`}>{textSmall[imageIndex]}</Text>
              </View>
            );
          })}
        </ScrollView>
       

       
      </View>

       <View style={styles.indicatorContainer}>
          {images.map((image, imageIndex) => {
            const width = scrollX.interpolate({
              inputRange: [
                windowWidth * (imageIndex - 1),
                windowWidth * imageIndex,
                windowWidth * (imageIndex + 1),
              ],
              outputRange: [8, 16, 8],
              extrapolate: 'clamp',
            });
            return (
              <Animated.View
                key={imageIndex}
                style={[styles.normalDot, {width}]}
              />
            );
          })}
          
        </View>

        
        <View style={className`flex-row gap-4 justify-center absolute bottom-7`}>
          <Pressable style={className`px-2 py-4 w-[45%] ${getmode.backGroundColor} rounded-lg flex-row justify-center items-center`}>
            <Text style={className`text-xs font-bold ${getmode.textColor}`}>Login</Text>
          </Pressable>
          <Pressable onPress={() => router.push('signup')} style={className`px-2 py-4 w-[45%] ${getmode.backGroundColor} rounded-lg flex-row justify-center items-center`}>
            <Text style={className`text-xs font-bold  ${getmode.textColor}`}>Sign Up</Text>
          </Pressable>
        </View>

    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  scrollContainer: {
    height: 400,
    alignItems: 'center',
    justifyContent: 'center',
  },
  card: {
    flex: 1,
    marginVertical: 0,
    marginHorizontal: 19,
    borderRadius: 9,
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textContainer: {
    backgroundColor: 'rgba(0,0,0, 0.7)',
    paddingHorizontal: 24,
    paddingVertical: 8,
    borderRadius: 5,
  },
  infoText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  normalDot: {
    height: 8,
    width: 8,
    borderRadius: 4,
    backgroundColor: '#ffd75b',
    marginHorizontal: 4,
  },
  indicatorContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 9,
  },
});

export default Home;