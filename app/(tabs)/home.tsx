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
  Dimensions,
} from 'react-native';
import React, { useEffect, useLayoutEffect, useRef, useState } from 'react'
import className from 'twrnc';
import useThemeStyles from '../../utils/dynamic';
import Copy from '../../assets/copy-svgrepo-com (2).svg';
import Clock from '../../assets/clock-historyoteka-icon-svgrepo-com.svg';
import ArrowRight from '../../assets/arrow-forward-simple-svgrepo-com.svg';
import ArrowDown from '../../assets/arrow-down-3101.svg';
import TransferLight from '../../assets/telegram-blue.svg';
import TransferDark from '../../assets/telegram-yellow.svg';
import Phone from '../../assets/call-189-svgrepo-com.svg';
import Bookmark from '../../assets/bookmark-multiple-solid-svgrepo-com.svg';
import NoTransaction from '../../assets/transaction-money-svgrepo-com.svg';
import Referral from '../../assets/advertising-svgrepo-com.svg';
import { Skeleton } from 'moti/skeleton';
import { useAppDispatch, useAppSelector } from '../../features/hooks';
import { selectUser, setActiveTab, setSkeletonHome, shouldShowModal } from '../../features/auth/auth';
import img from '../../assets/img';
import TopUp from '../../assets/outgoing-call.svg';
import TopUpBlue from '../../assets/outgoing-callblue.svg';
import { Image } from 'expo-image';

const Home = () => {
  const [currentIndex, setCurrentIndex ] = useState<number>(0);
  const getmode = useThemeStyles();
  const currentMode = useColorScheme();
  const [intervalId, setIntervalId] = useState<NodeJS.Timer | null>(null);
  const scrollX = useRef(new Animated.Value(0)).current;
  const scrollRef = useRef<ScrollView>(null);
  const dispatch = useAppDispatch();
  const { skeletonHome } = useAppSelector(selectUser);

  useLayoutEffect(() => {
    dispatch(shouldShowModal(false));
}, [])

// const {width: windowWidth} = useWindowDimensions();
const windowWidth = Dimensions.get('window').width;


  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        const nextIndex = (prevIndex + 1) % images.length;
        scrollRef.current?.scrollTo({
          x: nextIndex * (windowWidth - 30),
          animated: true,
        });
        return nextIndex;
      });
    }, 3000); // 

    return () => {
      clearInterval(intervalId);
    }
  }, []);




  useEffect(() => {
    makeHomeActive()
  }, []);
  console.log('skeletonHome ', skeletonHome)


const stopHomeSkeleton = () => {
  const stopSkeletonInterval = setTimeout(() => {
    dispatch(setSkeletonHome(false));
  }, 2000)

  return () => clearTimeout(stopSkeletonInterval)
}


  const makeHomeActive = () => {
    dispatch(setActiveTab('home'));
    stopHomeSkeleton();
  }
  const skeletonCommonProps = {
    backgroundColor: currentMode === 'light' ? '#e9eaec' : '#17233b',
    colorMode: currentMode === 'light' ? 'light' : 'dark'
  } as const;

  const img1= img.s13, img2 = img.s17;

  const images = [img1, img2];
  
  

  return (
    <ScrollView >
      <Skeleton.Group show={skeletonHome} >
      <View style={className`pl-4 pr-4 pt-4 pb-34 flex-1 ${currentMode === 'light' ? 'bg-[#f7f7f7]' : 'bg-[#000e28]'}`}>

          <View style={className`rounded-xl ${getmode.dasboardBackgroundSecondLayerColor} p-4 `}>
            
                  <Skeleton height={60} width={300}  
                  {...skeletonCommonProps}
                  >
            <View style={className`flex-row w-full gap-2 rounded-full mb-3 p-2`}>
              
                <View style={className`flex-row w-[80%] pl-2 items-center gap-1 rounded-full border border-gray-300  border-opacity-50`}>
                  <View style={className`rounded-full py-1 px-[6px] bg-blue-600`}>
                    <Text style={className`font-bold text-xs ${getmode.textColor}`}>M</Text>
                  </View>

                  <Text style={className`${getmode.textColorTwo} text-xs`}>John wickton Doe</Text>
                  <View style={className`p-1 h-full border-l border-gray-300`}></View>
                 
                  <Text style={className`text-gray-500 text-xs pr-1`}>709829383</Text>
                </View>
             

                  
                <View style={className`py-1 px-2 rounded-full border border-gray-300`}>
                    <Copy width={25} height={25} fill={getmode.dasboardSvgButton} />
                </View>
            </View>
                </Skeleton>
            

            <View style={className` pl-4 flex-row items-center justify-between rounded-xl ${getmode.dasboardBackgroundButtonColor}`}>
            <Skeleton  height={30} width={80} {...skeletonCommonProps} >
              <Text style={className`${getmode.textColorTwoInverse} font-bold text-xl`}>₦0.00</Text>
            </Skeleton>
            <Skeleton  height={35} width={100} {...skeletonCommonProps} >
              <View style={className`flex-row items-center gap-1 ml-4 p-4`}>
                <Text  style={className`text-xs font-semibold ${getmode.textColorTwoInverse}`}>History</Text>
                <ArrowRight width={15} height={15} strokeWidth={3} stroke={getmode.fillColorInverse} />
              </View>
              </Skeleton>
            </View>
            
            <Text  style={className`text-xs text-left py-2 text-gray-500`}>Recent Transactions </Text>
            <Skeleton  height={60} width={300}  
                  {...skeletonCommonProps}
                  >

            <View style={className` pb-8 flex-row items-center gap-2`}>
              <View style={className`p-1 rounded-full bg-[#f7f7f7]`}>
                <Clock width={17} height={17} fill={'gray'} />
              </View>
              <Text  style={className`text-xs text-gray-600`}>No recent transactions yet</Text>
              <View>

              </View>
            </View>
            </Skeleton>
            
          </View>

         

          <View style={styles.scrollContainer}>
        <ScrollView
          ref={scrollRef}
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
          ], { useNativeDriver: false})}
          scrollEventThrottle={1}>
          {images.map((image, imageIndex) => {
            return (
              <View style={{width: windowWidth - 30, height: 100, }} key={imageIndex}>
                <Image source={image} style={styles.card} />
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
              outputRange: [4, 8, 4],
              extrapolate: 'clamp',
            });
            const backgroundColor = scrollX.interpolate({
              inputRange: [
                windowWidth * (imageIndex - 1),
                windowWidth * imageIndex,
                windowWidth * (imageIndex + 1),
              ],
              outputRange: [
                `${currentMode === 'light' ? 'gray' : 'rgba(255, 255, 255, 0.5)'}`, // Inactive color
                `${currentMode === 'light' ? '#0261ef' : '#ffd75b'}`, // Active color
                `${currentMode === 'light' ? 'gray' : 'rgba(255, 255, 255, 0.5)'}`, // Inactive color
              ],
              extrapolate: 'clamp',
            });
            return (
              <Animated.View
                key={imageIndex}
                style={[styles.normalDot, {width, backgroundColor}]}
              />
            );
          })}
          
        </View>

          <Text style={className`py-3 text-left text-gray-500`}>Make Payment</Text>
          <Skeleton  height={70} width={300}
                  {...skeletonCommonProps}
                  >
          <View style={className`flex-row gap-3 pb-4`}>
            
            <View style={className`flex-col rounded-xl p-2 ${getmode.dasboardBackgroundSecondLayerColor} `}>
                <View style={className`flex justify-center items-center  px-1 py-2 rounded-xl ${currentMode === 'light' ? 'bg-[#f2f7fe]' : 'bg-[#192434]'} `}>
                  {
                    currentMode === 'light' ? (
                      <TransferLight width={25} height={25}  fill={getmode.dasboardSvgButton} />
                    ) : (
                      <TransferDark width={25} height={25}  fill={getmode.dasboardSvgButton} />
                    )
                  }
                </View>
                <Text style={className`text-gray-500 text-xs font-bold`}>Transfer</Text>
            </View>

            <View style={className`flex-col rounded-xl p-2 ${getmode.dasboardBackgroundSecondLayerColor} `}>
                <View style={className`flex justify-center items-center p-2 rounded-xl ${currentMode === 'light' ? 'bg-[#f2f7fe]' : 'bg-[#192434]'} `}>
                  {
                    currentMode === 'light' ? (
                      <TopUpBlue width={25} height={25}  fill={getmode.dasboardSvgButton} stroke={getmode.dasboardSvgButton}  />
                    ) : (
                      <TopUp width={25} height={25}  fill={getmode.dasboardSvgButton} stroke={getmode.dasboardSvgButton}  />
                    )
                  }
                </View>
                <Text style={className`text-gray-500 text-xs font-bold`}>Top-Up</Text>
            </View>

            <View style={className`flex-col rounded-xl p-2 ${getmode.dasboardBackgroundSecondLayerColor} `}>
                <View style={className`flex justify-center items-center  py-2 rounded-xl ${currentMode === 'light' ? 'bg-[#f2f7fe]' : 'bg-[#192434]'} `}>
                  <Bookmark width={25} height={25}  fill={getmode.dasboardSvgButton}  />
                </View>
                <Text style={className`text-gray-500 text-xs font-bold`}>Pay Bills</Text>
            </View>

          </View>
          </Skeleton>

          <Skeleton height={150} width={330}  {...skeletonCommonProps}  >
          <View style={className`relative w-full rounded-xl overflow-hidden`}>
            <Image source={require('../../assets/s16.png')}  style={className`w-full h-30 rounded-3xl`}/>
       
              <View style={className`rounded-xl  -mt-28 w-full p-4`}>
                <View style={className`rounded-xl overflow-hidden w-full p-3`}>
                    <Text style={className`text-sm text-left font-semibold text-black`}>Reward Balance</Text>
                    <Text style={className`text-sm font-bold text-black`}>₦0.00</Text>
                </View>
                
                    <View style={className`flex-row w-[330px] items-center justify-between -ml-4  p-4 rounded-lg bg-[#142f5c] `}>
                      <Text style={className`text-sm ${getmode.textColor}`}>No recent transaction</Text>
                      <View style={className`p-2 rounded-full bg-[#000]`}>
                        <ArrowRight width={13} height={13} strokeWidth={3} stroke={getmode.fillColor} />
                      </View>
                    </View>
                </View>
          </View>
          </Skeleton>

          <Text style={className`text-gray-500 text-left my-2`}>Suggested For you</Text>
          <Skeleton  height={160} width={100} {...skeletonCommonProps}  >
          <View style={className`rounded-xl w-[100px] h-[150px]  mb-4 ${getmode.dasboardBackgroundSecondLayerColor}`}>
            <Text style={className`${getmode.textColorTwo} font-bold px-2 pt-2 text-xs pb-8 w-18`}>Earn from Referrals</Text>
            <View style={className``}>
              {
                currentMode === 'light' ? (
                  <Image source={require('../../assets/lightmodecampaign.png')} style={className`w-[100%] h-[80px]`} />
                ) : (
                  <Image source={require('../../assets/darkmodecampaign.png')} style={className`w-[100%] h-[80px]`} />
                )
              }
              
            </View>
          </View>
          </Skeleton>

          <Text style={className`text-gray-500 my-2 `}>Spending Trend</Text>
          
          <Skeleton  height={250} width={330} {...skeletonCommonProps}  >
          <View style={className`rounded-xl w-full px-4 pt-4 pb-8 ${getmode.dasboardBackgroundSecondLayerColor}`}>
            <View style={className`flex-row gap-1 mb-2 items-center ${currentMode === 'light' ? 'bg-[#e6edfd]' : 'bg-[#19212c]'}  max-w-[95px] p-2 rounded-lg`}>
              <Text style={className`${currentMode === 'light' ? 'text-[#0261ef]' :'text-[#ffd75b]'  } font-bold text-left text-xs `}>This Week </Text>
              <ArrowDown width={8} height={8} strokeWidth={3} fill={`${currentMode === 'light' ? '#0261ef' : '#ffd75b'}`} />
            </View>

            <View style={className`p-3 rounded-xl ${getmode.secondLayerBgColor}`}>

              <View  style={className`flex-row gap-3 mb-3`}>

              <View  style={className`flex-col`}>
                <View  style={className`flex-row items-center gap-1 my-3`}>
                  <View style={className`w-1 h-1 rounded-full p-1 bg-sky-500`}></View>
                  <Text style={className`text-gray-500 text-xs`}>Money in</Text>
                </View>

                <Text style={className`font-bold text-xs ${getmode.textColorTwo}`}>N0.00</Text>
              </View>

              <View  style={className`flex-col`}>
                <View  style={className`flex-row  items-center gap-1 my-3`}>
                  <View style={className`w-1 h-1 rounded-full p-1 bg-sky-500`}></View>
                  <Text style={className`text-gray-500 text-xs`}>Money Out</Text>
                </View>

                <Text style={className`font-bold text-xs ${getmode.textColorTwo}`}>N0.00</Text>
              </View>

              </View>

              <View style={className`${getmode.dasboardBackgroundSecondLayerColor} p-3 rounded-xl`}>
                <View style={className`flex-row justify-center items-center w-full`}>
                  <NoTransaction width={28} height={28} />
                </View>
                <Text style={className`text-gray-500`}>Nothing to show yet. Click the dropdown filter for more options</Text>
              </View>
            </View>
          </View>
          </Skeleton>

      </View>
      </Skeleton.Group>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover', // or 'contain', 'repeat', etc.
    justifyContent: 'center', // Center the content
    borderRadius: 10,
  },
  content: {
    padding: 20,
  },
  text: {
    color: 'white',
    fontSize: 24,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  scrollContainer: {
    height: 110,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 7
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
    paddingVertical: 2,
    borderRadius: 5,
  },
  infoText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  normalDot: {
    height: 5,
    width: 5,
    borderRadius: 4,
    backgroundColor: '#ffd75b',
    marginHorizontal: 1,
  },
  indicatorContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Home