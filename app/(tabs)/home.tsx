import { View, Text, Image, useColorScheme, ImageBackground, StyleSheet } from 'react-native'
import React from 'react'
import className from 'twrnc';
import useThemeStyles from '../../utils/dynamic';
import Copy from '../../assets/copy-svgrepo-com.svg';
import Clock from '../../assets/clock-historyoteka-icon-svgrepo-com.svg';
import ArrowRight from '../../assets/arrow-forward-svgrepo-com.svg';
import ArrowDown from '../../assets/arrow-down-3101.svg';
import Transfer from '../../assets/telegram-communication-chat-interaction-network-connection-svgrepo-com.svg';
import Phone from '../../assets/telephone-outgoing-svgrepo-com.svg';
import Bookmark from '../../assets/bookmark-multiple-solid-svgrepo-com.svg';
import NoTransaction from '../../assets/transaction-money-svgrepo-com.svg';
import Referral from '../../assets/advertising-svgrepo-com.svg';

const index = () => {
  const getmode = useThemeStyles();
  const currentMode = useColorScheme();
  return (
    <View style={className`p-4 flex-1 ${getmode.backGroundColor}`}>

        <View style={className`rounded-xl ${getmode.secondLayerBgColor} `}>
          <View style={className`flex-row rounded-full border border-gray-300 p-2`}>
              <View style={className`flex-row rounded-full border border-gray-300 `}>
                <View style={className`rounded-full p-1 bg-blue-600`}>
                  <Text style={className`font-bold ${getmode.textColor}`}>M</Text>
                </View>
                <Text style={className`${getmode.textColorTwo}`}>John Doe</Text>
                <Text style={className`text-gray-400`}>709829383</Text>
              </View>

              <View style={className`p-1 rounded-full border border-gray-300`}>
                  <Copy width={7} height={7} style={className`${getmode.backGroundColor}`} />
              </View>

          </View>

          <View style={className`py-4 px-6 flex justify-between rounded-xl ${getmode.backGroundColor}`}>
            <Text style={className`${getmode.textColorTwo} font-bold text-xl`}>N0.00</Text>

            <View style={className`p-4`}>
              <Text  style={className`text-xs ${getmode.textColorTwo}`}>History</Text>
              <ArrowRight width={7} height={7} fill={getmode.fillColor} />
            </View>
          </View>

         

          <View style={className`px-4 pt-4 pb-8 flex-row gap-2`}>
            <View style={className`p-1`}>
              <Clock width={7} height={7} fill={'gray'} />
            </View>
            <Text  style={className`text-xs text-gray-500`}>No recent transactions yet</Text>
            <View>

            </View>
          </View>
          
        </View>

        <View style={className`my-6 w-full`}>
          <Image width={100} height={25} style={className`rounded-full`} />
        </View>

        <Text style={className`py-3 text-gray-500`}>Make Payment</Text>
        <View style={className`flex-row gap-2 pb-4`}>
          
          <View style={className`flex-col rounded-xl ${getmode.secondLayerBgColor} `}>
              <View style={className`flex justify-center items-center ${getmode.thirdLayerBgColor}`}>
                <Transfer width={8} height={8} />
              </View>
              <Text style={className`text-gray-500 text-md`}>Transfer</Text>
          </View>

          <View style={className`flex-col rounded-xl ${getmode.secondLayerBgColor} `}>
              <View style={className`flex justify-center items-center ${getmode.thirdLayerBgColor}`}>
                <Phone width={8} height={8} />
              </View>
              <Text style={className`text-gray-500 text-md`}>Top-Up</Text>
          </View>

          <View style={className`flex-col rounded-xl ${getmode.secondLayerBgColor} `}>
              <View style={className`flex justify-center items-center ${getmode.thirdLayerBgColor}`}>
                <Bookmark width={8} height={8} />
              </View>
              <Text style={className`text-gray-500 text-md`}>Pay Bills</Text>
          </View>

        </View>

        <View style={className`relative w-full`}>
          <ImageBackground
          source={{ uri: '../../assets/s16.png'}}
          style={styles.backgroundImage}
          >
            <View style={className`rounded-xl overflow-hidden w-full p-3`}>
                <Text style={className`text-xs text-black`}>Reward Balance</Text>
                <Text style={className`text-xs font-bold text-black`}>₦0.00</Text>
            </View>
          </ImageBackground>

            <View style={className`rounded-xl absolute bottom-0 -mt-8 w-full p-4`}>
                <View style={className`flex-row justify-between px-2 w-full`}>
                  <Text style={className`text-xs ${getmode.textColorTwo}`}>No recent transaction</Text>
                  <View style={className`p-4 ${getmode.backGroundBlueColor}`}>
                    <ArrowRight width={7} height={7} fill={getmode.fillColor} />
                  </View>
                </View>
            </View>
        </View>

        <Text style={className`text-gray-500 my-2`}>Suggested For you</Text>
        <View style={className`rounded-lg max-w-md py-2 ${getmode.secondLayerBgColor}`}>
          <Text style={className`${getmode.textColorTwo} w-sm`}>Earn from Referrals</Text>
          <View style={className`p-2 bg-purple-400`}>
            {
              currentMode === 'light' ? (
                <Image source={require('../../assets/lightmodecampaign.png')}  />
              ) : (
                <Image source={require('../../assets/darkmodecampaign.png')}  />
              )
            }
            
          </View>
        </View>

        <Text style={className`text-gray-500 my-2 `}>Spending Trend</Text>
        <View style={className`rounded-xl w-full px-4 pt-4 pb-8 ${getmode.secondLayerBgColor}`}>
          <View style={className`flex-wow gap-1 items-center`}>
            <Text style={className`${currentMode === 'light' ? 'text-yellow-600' : 'text-blue-600'} p-2 rounded-lg `}>This Week </Text>
            <ArrowDown width={5} height={5} fill={getmode.fillColor} />
          </View>

          <View style={className`p-3 ${getmode.secondLayerBgColor}`}>

            <View  style={className`flex-row`}>

            <View  style={className`flex-col`}>
              <View  style={className`flex-row gap-1`}>
                <View style={className`w-3 h-3 rounded-full p-2 bg-sky-500`}></View>
                <Text style={className`text-gray-500 text-xs`}>Money in</Text>
              </View>

              <Text style={className`font-bold ${getmode.textColorTwo}`}>N0.00</Text>
            </View>

            <View  style={className`flex-col`}>
              <View  style={className`flex-row gap-1`}>
                <View style={className`w-3 h-3 rounded-full p-2 bg-sky-500`}></View>
                <Text style={className`text-gray-500 text-xs`}>Money Out</Text>
              </View>

              <Text style={className`font-bold ${getmode.textColorTwo}`}>N0.00</Text>
            </View>

            </View>

            <View style={className`${getmode.firstLayerBgColor} p-3 rounded-xl`}>
              <View style={className`flex-row justify-center items-center w-full`}>
                <NoTransaction width={8} height={8} />
              </View>
              <Text style={className`text-gray-500`}>Nothing to show yet. Click the dropdown filter for more options</Text>
            </View>
          </View>
        </View>
        

    </View>
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

export default index