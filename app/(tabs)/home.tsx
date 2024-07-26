import { View, Text, Image, useColorScheme, ImageBackground, StyleSheet, ScrollView } from 'react-native'
import React from 'react'
import className from 'twrnc';
import useThemeStyles from '../../utils/dynamic';
import Copy from '../../assets/copy-svgrepo-com.svg';
import Clock from '../../assets/clock-historyoteka-icon-svgrepo-com.svg';
import ArrowRight from '../../assets/arrow-forward-simple-svgrepo-com.svg';
import ArrowDown from '../../assets/arrow-down-3101.svg';
import TransferLight from '../../assets/telegram-blue.svg';
import TransferDark from '../../assets/telegram-yellow.svg';
import Phone from '../../assets/telephone-outgoing-svgrepo-com.svg';
import Bookmark from '../../assets/bookmark-multiple-solid-svgrepo-com.svg';
import NoTransaction from '../../assets/transaction-money-svgrepo-com.svg';
import Referral from '../../assets/advertising-svgrepo-com.svg';

const Home = () => {
  const getmode = useThemeStyles();
  const currentMode = useColorScheme();
  return (
    <ScrollView >
      <View style={className`p-4 flex-1 ${getmode.dasboardBackgroundFirstLayerColor}`}>

          <View style={className`rounded-xl ${getmode.dasboardBackgroundSecondLayerColor} p-4 `}>
            <View style={className`flex-row w-full gap-2 rounded-full mb-3 p-2`}>
                <View style={className`flex-row w-[80%] items-center gap-1 rounded-full border border-gray-300  border-opacity-50`}>
                  <View style={className`rounded-full py-1 px-2 bg-blue-600`}>
                    <Text style={className`font-bold ${getmode.textColor}`}>M</Text>
                  </View>
                  <Text style={className`${getmode.textColorTwo} text-xs`}>John Doe</Text>
                  <Text style={className`text-gray-500 text-sm`}>709829383</Text>
                </View>

                <View style={className`py-1 px-2 rounded-full border border-gray-300`}>
                    <Copy width={25} height={25} fill={getmode.dasboardSvgButton} />
                </View>

            </View>

            <View style={className`py-4 px-6 flex-row items-center justify-between rounded-xl ${getmode.dasboardBackgroundButtonColor}`}>
              <Text style={className`${getmode.textColorTwoInverse} font-bold text-xl`}>₦0.00</Text>

              <View style={className`flex-row items-center gap-1 p-4`}>
                <Text  style={className`text-xs ${getmode.textColorTwoInverse}`}>History</Text>
                <ArrowRight width={15} height={15} fill={getmode.fillColorInverse} stroke={getmode.fillColorInverse} />
              </View>
            </View>

          

            <View style={className`px-4 pt-4 pb-8 flex-row items-center gap-2`}>
              <View style={className`p-1 rounded-full bg-[#f7f7f7]`}>
                <Clock width={17} height={17} fill={'gray'} />
              </View>
              <Text  style={className`text-xs text-gray-500`}>No recent transactions yet</Text>
              <View>

              </View>
            </View>
            
          </View>

          <View style={className`my-6 w-full`}>
            <Image width={100} height={25} style={className`rounded-full`} />
          </View>

          <Text style={className`py-3 text-left text-gray-500`}>Make Payment</Text>
          <View style={className`flex-row gap-3 pb-4`}>
            
            <View style={className`flex-col rounded-xl p-2 ${getmode.dasboardBackgroundSecondLayerColor} `}>
                <View style={className`flex justify-center items-center`}>
                  {
                    currentMode === 'light' ? (
                      <TransferLight width={25} height={25}  fill={getmode.dasboardSvgButton} />
                    ) : (
                      <TransferDark width={25} height={25}  fill={getmode.dasboardSvgButton} />
                    )
                  }
                </View>
                <Text style={className`text-gray-500 text-md`}>Transfer</Text>
            </View>

            <View style={className`flex-col rounded-xl p-2 ${getmode.dasboardBackgroundSecondLayerColor} `}>
                <View style={className`flex justify-center items-center `}>
                  <Phone width={25} height={25}  fill={getmode.dasboardSvgButton} stroke={getmode.dasboardSvgButton}  />
                </View>
                <Text style={className`text-gray-500 text-md`}>Top-Up</Text>
            </View>

            <View style={className`flex-col rounded-xl p-2 ${getmode.dasboardBackgroundSecondLayerColor} `}>
                <View style={className`flex justify-center items-center `}>
                  <Bookmark width={25} height={25}  fill={getmode.dasboardSvgButton}  />
                </View>
                <Text style={className`text-gray-500 text-md`}>Pay Bills</Text>
            </View>

          </View>

          <View style={className`relative w-full`}>
            <ImageBackground
            source={{ uri: '../../assets/s16.png'}}
            style={[className`w-full h-14`, styles.backgroundImage]}
            >
              <View style={className`rounded-xl overflow-hidden w-full p-3`}>
                  <Text style={className`text-sm text-left font-semibold text-black`}>Reward Balance</Text>
                  <Text style={className`text-xs font-bold text-black`}>₦0.00</Text>
              </View>
            </ImageBackground>

              <View style={className`rounded-xl absolute bottom-0 left-4 right-4 -mt-8 w-full p-4`}>
                  <View style={className`flex-row items-center justify-between p-2 rounded-lg ${getmode.dasboardBackgroundSecondLayerColor} px-2 w-full`}>
                    <Text style={className`text-xs ${getmode.textColorTwo}`}>No recent transaction</Text>
                    <View style={className`p-2 rounded-full ${getmode.dasboardBackgroundFirstLayerColor}`}>
                      <ArrowRight width={13} height={13} fill={getmode.fillColor} />
                    </View>
                  </View>
              </View>
          </View>

          <Text style={className`text-gray-500 text-left my-2`}>Suggested For you</Text>
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

          <Text style={className`text-gray-500 my-2 `}>Spending Trend</Text>
          <View style={className`rounded-xl w-full px-4 pt-4 pb-8 ${getmode.dasboardBackgroundSecondLayerColor}`}>
            <View style={className`flex-row gap-1 mb-2 items-center ${currentMode === 'light' ? 'bg-[#0e1a32]' : 'bg-[#19212c]'}  max-w-[95px] p-2 rounded-lg`}>
              <Text style={className`text-[#ffd75b] text-left text-xs `}>This Week </Text>
              <ArrowDown width={8} height={8} strokeWidth={6} fill={'#ffd75b'} />
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
          

      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover', // or 'contain', 'repeat', etc.
    justifyContent: 'center', // Center the content
  },
  content: {
    padding: 20,
  },
  text: {
    color: 'white',
    fontSize: 24,
  },
});

export default Home