import { View, Text, useColorScheme } from 'react-native'
import React from 'react'
import className from 'twrnc';
import useThemeStyles from '../../utils/dynamic';
import Plus from '../../assets/plus-large-svgrepo-com.svg'
import Send from '../../assets/telegram-communication-chat-interaction-network-connection-svgrepo-com.svg'
import Phone from '../../assets/call-answer-svgrepo-com.svg'
import PayBill from '../../assets/bookmark-multiple-svgrepo-com.svg';
import ArrowForward from '../../assets/arrow-forward-svgrepo-com.svg';


const Main = () => {
  const getmode = useThemeStyles();
  const currentMode = useColorScheme();

  return (
    <View style={className`flex-1 p-4 ${getmode.backGroundColorTwo}`}>
      {/* create the modal  */}
      <View style={className`flex-1 p-4 ${getmode.backGroundColorTwo}`}>
        
        <View style={className`flex-row justify-between p-2`}>
            <View style={className`flex-row gap-2`}>
                <View style={className`p-2 rounded-md ${getmode.backGroundlightYellowColor} `}>
                  <Plus width={8} height={8} fill={getmode.buttonBgColor} />
                </View>
                <Text style={className`text-sm ${currentMode === 'light' ? `text-[#9eacc7]` : `text-[#b9c1ce]`}`}>Add Money</Text>
            </View>

            <View>
                <ArrowForward width={8} height={8} fill={getmode.buttonBgColor} />
            </View>
        </View>
        
        <View style={className`flex-row justify-between p-2`}>
            <View style={className`flex-row gap-2`}>
                <View style={className`p-2 rounded-md ${getmode.backGroundlightYellowColor} `}>
                  <Send width={8} height={8} fill={getmode.buttonBgColor} />
                </View>
                <Text style={className`text-sm ${currentMode === 'light' ? `text-[#9eacc7]` : `text-[#b9c1ce]`}`}>Send Money</Text>
            </View>

            <View>
                <ArrowForward width={8} height={8} fill={getmode.buttonBgColor} />
            </View>
        </View>
        
        <View style={className`flex-row justify-between p-2`}>
            <View style={className`flex-row gap-2`}>
                <View style={className`p-2 rounded-md ${getmode.backGroundlightYellowColor} `}>
                  <Phone width={8} height={8} fill={getmode.buttonBgColor} />
                </View>
                <Text style={className`text-sm ${currentMode === 'light' ? `text-[#9eacc7]` : `text-[#b9c1ce]`}`}>Buy Airtime</Text>
            </View>

            <View>
                <ArrowForward width={8} height={8} fill={getmode.buttonBgColor} />
            </View>
        </View>
        
        <View style={className`flex-row justify-between p-2`}>
            <View style={className`flex-row gap-2`}>
                <View style={className`p-2 rounded-md ${getmode.backGroundlightYellowColor} `}>
                  <PayBill width={8} height={8} fill={getmode.buttonBgColor} />
                </View>
                <Text style={className`text-sm ${currentMode === 'light' ? `text-[#9eacc7]` : `text-[#b9c1ce]`}`}>Pay Bills</Text>
            </View>

            <View>
                <ArrowForward width={8} height={8} fill={getmode.buttonBgColor} />
            </View>
        </View>
      </View>
    </View>
  )
}

export default Main