import { View, Text, useColorScheme } from 'react-native'
import React from 'react'
import className from 'twrnc';
import useThemeStyles from '../../utils/dynamic';
import Plus from '../../assets/plus-large-svgrepo-com.svg'
import SendLight from '../../assets/telegram-blue.svg'
import SendDark from '../../assets/telegram-yellow.svg'
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
        
        <View style={className`flex-row ${getmode.backGroundlightYellowColor} rounded-xl my-2 items-center justify-between items-center p-2`}>
            <View style={className`flex-row items-center gap-2`}>
                <View style={className`p-2 rounded-md ${getmode.backGroundlightYellowColor} `}>
                  <Plus width={18} height={18} strokeWidth={2} stroke={getmode.fillColor} />
                </View>
                <Text style={className`text-sm ${currentMode === 'light' ? `text-[#9eacc7]` : `text-[#b9c1ce]`}`}>Add Money</Text>
            </View>

            <View>
                <ArrowForward width={18} height={18} fill={getmode.fillColor} />
            </View>
        </View>
        
        <View style={className`flex-row  ${getmode.backGroundlightYellowColor} rounded-xl my-2 items-center justify-between p-2`}>
            <View style={className`flex-row  items-center gap-2`}>
                <View style={className`p-2 rounded-md ${getmode.backGroundlightYellowColor} `}>
                  {
                    currentMode === 'light' ? (
                      <SendLight width={18} height={18} fill={getmode.buttonBgColor} />
                    ) : (
                      <SendDark width={18} height={18} fill={getmode.buttonBgColor} />
                    )
                  }
                  
                </View>
                <Text style={className`text-sm ${currentMode === 'light' ? `text-[#9eacc7]` : `text-[#b9c1ce]`}`}>Send Money</Text>
            </View>

            <View>
                <ArrowForward width={18} height={18} fill={getmode.fillColor} />
            </View>
        </View>
        
        <View style={className`flex-row  ${getmode.backGroundlightYellowColor} rounded-xl my-2 items-center justify-between p-2`}>
            <View style={className`flex-row items-center gap-2`}>
                <View style={className`p-2 rounded-md ${getmode.backGroundlightYellowColor} `}>
                  <Phone width={18} height={18} fill={getmode.fillColor} />
                </View>
                <Text style={className`text-sm ${currentMode === 'light' ? `text-[#9eacc7]` : `text-[#b9c1ce]`}`}>Buy Airtime</Text>
            </View>

            <View>
                <ArrowForward width={18} height={18} fill={getmode.fillColor} />
            </View>
        </View>
        
        <View style={className`flex-row  ${getmode.backGroundlightYellowColor} rounded-xl my-2 items-center justify-between p-2`}>
            <View style={className`flex-row items-center gap-2`}>
                <View style={className`p-2 rounded-md ${getmode.backGroundlightYellowColor} `}>
                  <PayBill width={18} height={18} fill={getmode.fillColor} />
                </View>
                <Text style={className`text-sm ${currentMode === 'light' ? `text-[#9eacc7]` : `text-[#b9c1ce]`}`}>Pay Bills</Text>
            </View>

            <View>
                <ArrowForward width={18} height={18} fill={getmode.fillColor} />
            </View>
        </View>
      </View>
    </View>
  )
}

export default Main