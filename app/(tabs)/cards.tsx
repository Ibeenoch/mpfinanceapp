import { View, Text, StyleSheet, TouchableOpacity, ScrollView, useColorScheme } from 'react-native'
import React, { useEffect } from 'react';
import className from 'twrnc';
import useThemeStyles from '../../utils/dynamic';
import { Image } from 'expo-image';
import Shield from '../../assets/fraudprotectmajor-svgrepo-com.svg';
import CustomerService from '../../assets/customer-service-agent-svgrepo-com.svg';
import CustomerServiceOrange from '../../assets/customer-service-agent-svgrepo-com (1).svg';
import Delivery from '../../assets/delivery-svgrepo-com.svg';
import Globe from '../../assets/global-grid-logo-svgrepo-com.svg';
import GlobeBlue from '../../assets/global-grid-logo-svgrepo-comblue.svg';
import { router } from 'expo-router';
import { Skeleton } from 'moti/skeleton';
import { useAppDispatch, useAppSelector } from '../../features/hooks';
import { selectUser, setSkeletonCard } from '../../features/auth/auth';

const Cards = () => {
  const getmode = useThemeStyles();
  const currentMode = useColorScheme();
  const dispatch = useAppDispatch();
  const { skeletonCard } = useAppSelector(selectUser);

  useEffect(() => {
    stopCardSkeleton()
  }, []);
  console.log('skeletonCard ', skeletonCard)


const stopCardSkeleton = () => {
  const stopSkeletonInterval = setTimeout(() => {
    dispatch(setSkeletonCard(false));
  }, 2000)

  return () => clearTimeout(stopSkeletonInterval)
};

  const handleNext = () => {
    router.push('requestcard')
  }
  const skeletonCommonProps = {
    backgroundColor: currentMode === 'light' ? '#e9eaec' : '#17233b',
    colorMode: currentMode === 'light' ? 'light' : 'dark'
  } as const;

  

  return (
    <ScrollView>
      <Skeleton.Group show={skeletonCard} >
        <View style={className`pt-4 px-4 pb-24 flex-1 ${getmode.backGroundColorTwo}`}>
          <View style={className`p-2 flex-1 rounded-xl ${getmode.firstLayerBgColor}`}>
          <Skeleton  height={160} width={315} {...skeletonCommonProps}  >          
            <View style={className`rounded-xl ${getmode.firstLayerBgColor}`}>
                <Image source={require('../../assets/s14.png')} style={className`w-full h-40 rounded-xl`} />
            </View>
            </Skeleton>
            <Skeleton  height={45} width={200} {...skeletonCommonProps}  >
            <Text style={className`text-xl font-bold my-4 ${getmode.textColorTwo} `}>A Card That Works...</Text>
            </Skeleton>

          <View style={[className`p-4 mb-4 rounded-xl border border-gray-300`, styles.dashBorder]}>
          <Skeleton  height={15} width={80} {...skeletonCommonProps}  >
              <Text style={className`text-xs text-gray-500 pb-2 `}>What you get</Text>
              </Skeleton>

              <Skeleton  height={60} width={280} {...skeletonCommonProps}  >  
              <View style={className`flex-row items-center gap-2 p-2 ${getmode.backGroundlightYellowColor}`}>
                <View style={className`flex-row justify-center items-center rounded-lg`}>
                  <Shield width={20} height={20} fill={`${getmode.fillColor}`} />
                </View>

                <View style={className`pr-3`}>
                  <Text style={className`text-sm font-bold ${getmode.textColorTwo}`}>Reliable Card</Text>
                  <Text style={className`text-xs text-gray-500 pb-4 w-[80%] `}>Avoid stories that touch. Get the card that always works.</Text>
                </View>
              </View>
              </Skeleton>

              <Skeleton  height={80} width={280} {...skeletonCommonProps}  >
              <View style={className`flex-row items-center gap-2 p-2 ${getmode.backGroundlightYellowColor}`}>
                <View style={className`flex-row justify-center items-center rounded-lg`}>
                  {
                    currentMode === 'light' ? (
                      <CustomerService width={20} height={20}  />
                    ) : (
                      <CustomerServiceOrange width={20} height={20}  />
                    )
                  }
                  
                </View>

                <View style={className`pr-3`}>
                  <Text style={className`text-sm font-bold ${getmode.textColorTwo}`}>Fast Dispute Resolution</Text>
                  <Text style={className`text-xs text-gray-500 pb-4 text-justify pr-2 w-[40%]`}>Say goodbye to unreversed debits. Log disputes within your app, and monitior them till you get a full refund.</Text>
                </View>
              </View>
              </Skeleton>

            <Skeleton  height={80} width={280} {...skeletonCommonProps}  > 
              <View style={className`flex-row items-center gap-2 p-2 ${getmode.backGroundlightYellowColor}`}>
                <View style={className`flex-row justify-center items-center rounded-lg`}>
                  <Delivery width={20} height={20} fill={`${getmode.fillColor}`} />
                </View>

                <View style={className`pr-3`}>
                  <Text style={className`text-sm font-bold ${getmode.textColorTwo}`}>48 Hrs Delivery</Text>
                  <Text style={className`text-xs text-gray-500 pb-4 text-left w-[50%]`}>We'll deliver it to you within 48 hours. Activate it in seconds, and start using it right away.</Text>
                </View>
              </View>
              </Skeleton>

              <Skeleton  height={60} width={280} {...skeletonCommonProps}  >
              <View style={className`flex-row items-center gap-2 p-2 ${getmode.backGroundlightYellowColor}`}>
                <View style={className`flex-row justify-center items-center rounded-lg `}>
                  {
                    currentMode === 'light' ? (
                      <GlobeBlue width={20} height={20} strokeWidth={3} />
                    ) : (
                      <Globe width={20} height={20} strokeWidth={3} />
                    )
                  }
                  
                </View>

                <View style={className`pr-3`}>
                  <Text style={className`text-sm font-bold ${getmode.textColorTwo}`}>Online Payment</Text>
                  <Text style={className`text-xs text-gray-500 pb-4 `}>Pay all your favorite online merchants.</Text>
                </View>
              </View>
              </Skeleton>

            </View>

            <View style={[className`p-4 rounded-xl border border-gray-300`, styles.dashBorder]}>
            <Skeleton  height={30} width={280} {...skeletonCommonProps}  >
                <View style={className`flex-row justify-between px-2`}>
                  <Text style={className`text-xs text-gray-500 pb-4 `}>Card Price:</Text>
                  <Text style={className`text-xs ${getmode.textColorTwo} pb-4 `}>₦1000.0</Text>
                </View>
            </Skeleton>

            <Skeleton  height={30} width={280} {...skeletonCommonProps}  >
                <View style={className`flex-row justify-between px-2`}>
                  <Text style={className`text-xs text-gray-500 pb-4 `}>Delivery:</Text>
                  <Text style={className`text-xs ${getmode.textColorTwo} pb-4 `}>₦1000.0</Text>
                </View>
            </Skeleton>

                <View style={className`border-b border-gray-300 px-2 mb-4`}>
                </View>
              <Skeleton  height={30} width={280} {...skeletonCommonProps}  >
                <View style={className`flex-row justify-between px-2`}>
                  <Text style={className`text-xs text-gray-500 pb-4 `}>Total</Text>
                  <Text style={className`text-xs ${getmode.textColorTwo} pb-4 `}>₦2000.0</Text>
                </View>
              </Skeleton>
            </View>
            <Skeleton  height={30} width={320} {...skeletonCommonProps}  >
            <Text style={className`text-xs text-gray-500 pt-2 pb-4 `}>*Delivery prices may vary based on your location</Text>
            </Skeleton>
          </View>

          
        <View style={className`p-4  w-full`}>
          <View style={className`max-w-sm`}>
            <TouchableOpacity onPress={handleNext}  style={className`rounded-xl w-full ${getmode.buttonBgColor}  py-6 px-4 flex-row items-center justify-center`}  >
              <Text style={className`${ getmode.textColorTwo} text-sm font-bold`}>Order A Card</Text>
            </TouchableOpacity>
          </View>
        </View>
        </View>
      </Skeleton.Group>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  dashBorder: {
      borderStyle: 'dashed'
  }
})

export default Cards