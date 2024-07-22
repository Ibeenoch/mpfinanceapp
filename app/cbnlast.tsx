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
import ArrowLeft from '../assets/arrow-back-svgrepo-com.svg'
import ArrowRight from '../assets/arrow-forward-svgrepo-com.svg'
import { router } from 'expo-router';

let s1 = image.s8;
const images = [s1];
const textBig = [
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

const CbnLast = () => {
  const scrollX = useRef(new Animated.Value(0)).current;

  const {width: windowWidth} = useWindowDimensions();
  const currentMode = useColorScheme();

  return (
    <SafeAreaView style={className`flex-1 justify-center items-center  ${currentMode === 'light' ? 'bg-[#f7f7f7]' : 'bg-[#0e1a32]'}`}>

        <View style={className`text-center text-2xl font-bold -mt-38 pb-6`}>
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
          ])}
          scrollEventThrottle={1}>
          {images.map((image, imageIndex) => {
            return (
              <View style={{width: windowWidth, height: 400}} key={imageIndex}>
                <Image source={image} style={styles.card} />
                 <Text style={className` ${currentMode === 'light' ? 'text-black' : 'text-white'} text-center w-xs font-bold text-3xl mt-4`}>{textBig[imageIndex]}</Text>
              </View>
            );
          })}
        </ScrollView>
       

       
      </View>



        
        <View style={className`flex-row gap-4 justify-center absolute bottom-7`}>
          <TouchableOpacity onPress={() => router.push('nationality')} style={className`px-2 py-4 w-full bg-[#19212c] rounded-lg flex-row justify-center items-center`}>
            <Text style={className`text-xs font-bold text-[#ffd75b]`}>Proceed</Text>
          </TouchableOpacity>
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
    justifyContent: 'center',
    marginTop: 9,
  },
});

export default CbnLast;