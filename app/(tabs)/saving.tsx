import { View, Text, useColorScheme, ScrollView } from 'react-native'
import React, { useEffect } from 'react'
import className from 'twrnc';
import useThemeStyles from '../../utils/dynamic';
import { Image } from 'expo-image';
import { Skeleton } from 'moti/skeleton';
import { useAppDispatch, useAppSelector } from '../../features/hooks';
import { selectUser, setSkeletonSaving } from '../../features/auth/auth';

const Saving = () => {
  const getmode = useThemeStyles();
  const currentMode = useColorScheme();

  const dispatch = useAppDispatch();
  const { skeletonSaving } = useAppSelector(selectUser);

  useEffect(() => {
    stopSavingSkeleton()
  }, []);

const stopSavingSkeleton = () => {
  const stopSkeletonInterval = setTimeout(() => {
    dispatch(setSkeletonSaving(false));
  }, 2000)

  return () => clearTimeout(stopSkeletonInterval)
}

  // currentMode === 'light' ? 'bg-[#e6eefd] text-[#0361f0]' : 'bg-[#001231] text-[#4f89f3]'
  const skeletonCommonProps = {
    backgroundColor: currentMode === 'light' ? '#e9eaec' : '#17233b',
    colorMode: currentMode === 'light' ? 'light' : 'dark'
  } as const;
  return (
    <ScrollView style={className`flex-1 ${getmode.backGroundColorTwo}`}>
      <Skeleton.Group show={skeletonSaving}>
      <View style={className`pt-4 px-4 pb-8 flex-1 ${getmode.backGroundColorTwo}`}>
      <Skeleton  height={55} width={250} {...skeletonCommonProps}  >
          <Text style={className` ${ getmode.textColorTwo} font-bold text-2xl text-left my-5`}>Choose a savings Plan</Text>
          </Skeleton>
          <Skeleton  height={150} width={320} {...skeletonCommonProps}  >
          <View style={className`p-4  my-2 rounded-xl ${getmode.secondLayerBgColor}`}>
            <View style={className`flex-row gap-2 px-2`}>
              <View>
              <Text style={className` ${ getmode.textColorTwo} font-bold text-xs text-left`}>Flexible Savings</Text>
              <Text style={className` text-gray-500 max-w-[200px] text-xs text-left`}>Flexible Savings is designed to help you set asides funds for emergencies, save towards a...</Text>
              <Text style={className` ${ currentMode === 'light' ? 'bg-[#e6f9ff] text-[#05b0e9]' : 'bg-[#01203d] text-[#05c2ff]'} p-1 text-xs text-left my-5`}>9% interest p.a</Text>
              </View>
              <View style={className`${getmode.secondLayerBgColor} p-2`}>
                {
                  currentMode === 'light' ? (
                    <Image source={require('../../assets/lightmodebottle.png')} style={className`w-25 h-25 rounded-3xl`} />
                  ) : (
                    <Image source={require('../../assets/darkmodebottle.png')} style={className`w-25 h-25 rounded-3xl`}  />
                  )
                }
                
              </View>
              
            </View>
          </View>
          </Skeleton>
          
          <Skeleton  height={150} width={320} {...skeletonCommonProps}  >
          <View style={className`p-4  my-2 rounded-xl ${getmode.secondLayerBgColor}`}>
            <View style={className`flex-row gap-2 px-2`}>
              <View>
              <Text style={className` ${ getmode.textColorTwo} font-bold text-xs text-left`}>Locked Savings</Text>
              <Text style={className` text-gray-500 max-w-[200px] text-xs text-left`}>Locked Savings is a disclipined savings plan that encourages the development...</Text>
              <Text style={className` ${ currentMode === 'light' ? 'bg-[#e6eefd] text-[#0361f0]' : 'bg-[#001231] text-[#4f89f3]'} p-1 text-xs text-left my-5`}>9% - 16% interest p.a</Text>
              </View>
              <View style={className`${getmode.secondLayerBgColor} p-2`}>
                {
                  currentMode === 'light' ? (
                    <Image source={require('../../assets/lightmodepiggy.png')} style={className`w-25 h-25 rounded-3xl`} />
                  ) : (
                    <Image source={require('../../assets/darkmodepiggy.png')} style={className`w-25 h-25 rounded-3xl`}  />
                  )
                }
                
              </View>

            </View>
          </View>
          </Skeleton>

          <Skeleton  height={150} width={340} {...skeletonCommonProps}  >
          <View style={className`p-4  my-2 rounded-xl ${getmode.secondLayerBgColor}`}>
            <View style={className`flex-row gap-2 px-2`}>
              <View>
              <Text style={className` ${ getmode.textColorTwo} font-bold text-xs text-left`}>Fixed Savings</Text>
              <Text style={className` text-gray-500 max-w-[200px] text-xs text-left`}>Fixed Savings is an effective way to manage liquidity. By commiting a lump sum for a...</Text>
              <Text style={className` ${ currentMode === 'light' ? 'bg-[#e6eefd] text-[#0361f0]' : 'bg-[#001231] text-[#4f89f3]'} p-1 text-xs text-left my-5`}>9% - 16% interest p.a</Text>
              </View>
              <View style={className`${getmode.secondLayerBgColor} p-2`}>
                {
                  currentMode === 'light' ? (
                    <Image source={require('../../assets/lightmodesafebox.png')} style={className`w-25 h-25 rounded-3xl`} />
                  ) : (
                    <Image source={require('../../assets/darkmodesafebox.png')} style={className`w-25 h-25 rounded-3xl`}  />
                  )
                }
                
              </View>

            </View>
          </View>
          </Skeleton>
      </View>
      </Skeleton.Group>
    </ScrollView>
  )
}

export default Saving