import React, {useRef} from 'react';
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
  TouchableOpacity,
  useColorScheme,
} from 'react-native';
import image from '../assets/img.js';
import ArrowLeft from '../assets/arrow-ios-back-svgrepo-com.svg'
import ArrowRight from '../assets/arrow-ios-forward.svg'
import { router } from 'expo-router';

let s1 = image.s6, s2= image.s7;
const images = [s1, s2];
const textBig = [
  'In accordance with CBN regulations, there are 3 levels of compliance and documentation evidence you will need to supply for your account',
   'Each level has its own requirements and benefits. the higher your level, the more you can do with your account',
  "But don't worry. You don't have to do it all at once. You can provide all the information at your own pace. You will get a functional account at Level 1", 
];


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

const CbnInfo = () => {
  const currentMode = useColorScheme();
  const scrollX = useRef(new Animated.Value(0)).current;
  const {width: windowWidth} = useWindowDimensions();

  return (
    <SafeAreaView style={className`flex-1 h-screen justify-center items-center  ${currentMode === 'light' ? 'bg-[#f7f7f7]' : 'bg-[#000e28]'}`}>

        <View style={className`text-center text-2xl font-bold mt-8 pb-6`}>
          <Text style={className`text-center text-2xl font-bold  ${currentMode === 'light' ? 'text-black' : 'text-white'}`}>MoniePoint</Text>
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
          ], {
            useNativeDriver: true
          })}
          scrollEventThrottle={1}>
          {images.map((image, imageIndex) => {
            return (
              <View style={{width: windowWidth, height: 400}} key={imageIndex}>
                <Image source={image} style={styles.card} />
                 <Text style={className`${currentMode === 'light' ? 'text-black' : 'text-white'} text-center font-bold text-xs px-5 mt-4`}>{textBig[imageIndex]}</Text>
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
          
           <View style={className`flex-row items-center gap-2 justify-between pl-39`}>
            <TouchableOpacity onPress={() => router.back()}>
              <View  style={className`p-2 rounded-full ${ currentMode === 'light' ? 'bg-[#e6edfd]' : 'bg-[#19253d]'}`} >
                  <ArrowLeft  width={27} height={27} fill={`${ currentMode === 'light' ? 'blue' : 'white'}`} />
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => router.push('cbnlast')}>
              <View style={className`p-2 rounded-full ${ currentMode === 'light' ? 'bg-[#e6edfd]' : 'bg-[#ffd75b]'}`} >
                  <ArrowRight  width={27} height={27} fill={`${ currentMode === 'light' ? 'blue' : 'white'}`} />
              </View>
            </TouchableOpacity>
          </View>
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
    borderRadius: 5,
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
    justifyContent: 'space-between',
    marginTop: 12,
    gap: 2,
    paddingTop: 16,
  },
});

export default CbnInfo;