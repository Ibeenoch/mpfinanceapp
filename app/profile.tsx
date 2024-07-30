import { View, Text, ScrollView, useColorScheme, TouchableOpacity } from 'react-native'
import React from 'react';
import className from 'twrnc'
import { Image } from 'expo-image';
import ArrowForward from '../assets/arrow-forward-simple-svgrepo-com.svg';
import CheckMark from '../assets/check-mark-10126.svg';
import Triangle from '../assets/triangle-svgrepo-com.svg';
import Info from '../assets/info-svgrepo-com.svg';
import FaceRecongnition from '../assets/face-recognition-1-svgrepo-com.svg';
import FaceRecongnitionDark from '../assets/face-recognition-1-svgrepo-comnight.svg';
import Paper from '../assets/news-svgrepo-com.svg'
import { router } from 'expo-router';


const Profile = () => {
    const currentMode = useColorScheme();
    //  bg #ffffff / #000e28
    //  upgrade ${currentMode === 'light' ? 'bg-[#ffffff]' : 'bg-[#0e1a32]' }
    //cyan track blue  ${currentMode === 'light' ? 'bg-[#1b98db]' : 'bg-[#ffd75b]' } 
    //cyan track lighter blue  ${currentMode === 'light' ? 'bg-[#f5fafe]' : 'bg-[#19212c]' } 
    // info container light ${currentMode === 'light' ? 'bg-[#f5fafe]' : 'bg-[#19212c]' } 
    // bvn-number  light  ${currentMode === 'light' ? 'text-[#f5fafe]' : 'text-[#1a263e]' }  
    // btn up blue light   ${currentMode === 'light' ? 'bg-[#0261ef]' : 'bg-[#ffd75b]' }  
    // btn down lightblue light  ${currentMode === 'light' ? 'bg-[#e6edfd]' : 'bg-[#19212c]' }  
    // gray bg    ${currentMode === 'light' ? 'bg-[#808080]' : 'bg-[#9099a8]'}   
    // gray text    ${currentMode === 'light' ? 'text-[#808080]' : 'text-[#9099a8]'}   
    // black and white text    ${currentMode === 'light' ? 'text-black' : 'text-white'}   
  return (
    <View style={className`flex-1`}>
    <ScrollView style={className`flex-1`}>
    <View style={className`${ currentMode === 'light' ? 'bg-[#f7f7f7]' : 'bg-[#000e28]'}  flex-1 pt-4 p-4 pb-9`}>
        <View style={className`flex-col gap-1 justify-center mt-6 items-center w-full rounded-xl`}>
            <Image source={require('../assets/profile.png')} style={className`w-20 h-20 py-1 px-2 rounded-xl`} />
            <View style={className` ${currentMode === 'light' ? '#0261ef' : '#ffd75b'} flex-row items-center gap-1 `}>
                <Text style={{ color: currentMode === 'dark' ? '#fff' : '#000', fontSize: 22, fontWeight: 800  }}>Upgrade to level 2</Text>
            </View>
        </View>

        <View style={className`rounded-2xl p-4 mt-4 ${currentMode === 'light' ? 'bg-[#ffffff]' : 'bg-[#0e1a32]' }`}>
            <View style={className`flex-row justify-between items-center px-1`}>
                <Text style={className`${currentMode === 'light' ? 'text-[#808080]' : 'text-[#9099a8]'} font-semibold text-sm`}>Upgrade Progress</Text>
                <View style={className`flex-row  items-center`}>
                    <Text style={className`text-xs font-semibold ${currentMode === 'light' ? 'text-[#0261ef]' : 'text-[#ffd75b]'}`}>View More</Text>
                    <ArrowForward width={15} height={15} strokeWidth={2}  stroke={`${currentMode === 'light' ? '#0261ef' : '#ffd75b'}`}  />
                </View>
            </View>

            <View style={className`flex-row w-full my-4 relative p-1`}>
                <View style={className`${currentMode === 'light' ? 'bg-[#1b98db]' : 'bg-[#ffd75b]' } p-[1.5px] w-[25%]`}></View>
                <View style={className`${currentMode === 'light' ? 'bg-[#f5fafe]' : 'bg-[#19212c]' } p-[1.5px] w-[25%]`}></View>
                <View style={className`${currentMode === 'light' ? 'bg-[#1b98db]' : 'bg-[#ffd75b]' } p-[1.5px] w-[25%]`}></View>
                <View style={className`${currentMode === 'light' ? 'bg-[#f5fafe]' : 'bg-[#19212c]' } p-[1.5px] w-[25%]`}></View>
                <View style={className`absolute top-0`}>
                    <View style={className`${currentMode === 'light' ? 'bg-[#1b98db]' : 'bg-[#ffd75b]' } p-1 -mt-[3px] rounded-full`}>
                        <CheckMark width={8} height={8} fill={'white'} />
                    </View>
                </View>
            </View>

            <View style={className`flex-row justify-between`}>
                <View style={className`flex-col justify-center -mt-3 -ml-2 items-center`}>
                    <Triangle width={14} height={14} fill={`${currentMode === 'light' ? '#1b98db' : '#ffd75b'}`} />
                    <View style={className`${currentMode === 'light' ? 'bg-[#1b98db]' : 'bg-[#ffd75b]'} -mt-1 rounded-sm p-1`}>
                    <Text style={className`text-[10px]  rounded-xl text-white font-semibold `}>Lvl 1</Text>
                    </View>
                </View>
                <Text style={className`text-[10px] font-semibold ${currentMode === 'light' ? 'text-[#808080]' : 'text-[#9099a8]'}`}>Lvl 2</Text>
                <Text style={className`text-[10px] font-semibold ${currentMode === 'light' ? 'text-[#808080]' : 'text-[#9099a8]'}`}>Lvl 3</Text>
            </View>

            <View style={className`rounded-xl flex-row gap-1 my-2 p-2 ${currentMode === 'light' ? 'bg-[#f5fafe]' : 'bg-[#19212c]' } `}>
                
                <View style={className``}>
                    <View style={className`${currentMode === 'light' ? 'bg-[#1b98db]' : 'bg-[#ffd75b]' } flex-row items-center justify-center p-1 rounded-full`}>
                        <Info width={9} height={9} fill={'white'} />
                    </View>
                </View>

                <View>
                    <Text style={className`${currentMode === 'light' ? 'text-black' : 'text-white'} font-bold text-xs`}>You are currently on Level 1.</Text>
                    <Text style={className`${currentMode === 'light' ? 'text-black' : 'text-white'}  max-w-[250px] text-xs`} >provide the requirement below to enjoy the benefit of Level 2.</Text>
                </View>
            </View>
        </View>

        <Text style={className`${currentMode === 'light' ? 'text-[#808080]' : 'text-[#9099a8]'} p-4 font-semibold text-sm`}>Level 2 Requirements</Text>

        <View style={className`rounded-2xl p-4  ${currentMode === 'light' ? 'bg-[#ffffff]' : 'bg-[#0e1a32]' }`}>
          
           <View style={className`flex-row items-center gap-3 my-1`}>
                <View style={className`${currentMode === 'light' ? 'bg-[#f4f5f9]' : 'bg-[#14263e]'} flex-row items-center justify-center  rounded-lg ` }>
                    <Paper width={28} height={28} fill={`${ currentMode === 'light' ? '#b6c1d5' : '#808696'}`} />
                </View>
                <Text style={className`${currentMode === 'light' ? 'text-black' : 'text-white'} font-bold text-sm`}>BVN</Text>
           </View>
          
           <View style={className`flex-row items-center gap-3 my-1`}>
                <View style={className`${currentMode === 'light' ? 'bg-[#f4f5f9]' : 'bg-[#14263e]'} p-1 flex-row items-center justify-center  rounded-lg ` }>
                    {
                        currentMode === 'light' ? (
                            <FaceRecongnition width={18} height={18}  />
                        ) : (
                            <FaceRecongnition width={18} height={18} />

                        )
                    }
                </View>
                <Text style={className`${currentMode === 'light' ? 'text-black' : 'text-white'} font-bold text-sm`}>Next of Kin</Text>
                <View style={className`${currentMode === 'light' ? 'bg-[#f4f5f9]' : 'bg-[#14263e]'} p-1 rounded-md`}>
                    <Text style={className`${currentMode === 'light' ? 'text-gray-500' : 'text-white'} font-bold text-[11px]`}>Pending</Text>
                </View>
           </View>

        </View>

        <Text style={className`${currentMode === 'light' ? 'text-[#808080]' : 'text-[#9099a8]'} p-4 font-semibold text-sm`}>Level 2 Benefits</Text>
        
            <View style={className`p-4  ${currentMode === 'light' ? 'bg-[#ffffff]' : 'bg-[#0e1a32]' } rounded-3xl`}>
            <Text style={className`${currentMode === 'light' ? 'text-[#808080]' : 'text-[#9099a8]'} p-2 font-semibold text-sm`}>Account Limits</Text>
            <View style={className`flex-row justify-center gap-3 `}>
            <View style={[className`p-2  border border-gray-200 rounded-2xl`, { borderStyle: 'dashed'}] }>
                <View style={className`p-2 `}>
                    <Text style={className` pl-1 pr-4 text-left text-[11px] max-w-xs text-gray-500`}>Single Credit Limit</Text>
                    <Text style={className` pl-1 pr-4 text-left text-[14px] font-bold ${currentMode === 'light' ? 'text-black' : 'text-white'}`}>₦100,000.00</Text>
                </View>

                <View style={className`p-2 `}>
                    <Text style={className` pl-1 pr-4 text-left text-[11px] max-w-xs text-gray-500`}>Daily Credit Limit</Text>
                    <Text style={className` pl-1 pr-4 text-left text-[14px] font-bold ${currentMode === 'light' ? 'text-black' : 'text-white'}`}>₦500,000.00</Text>
                </View>
            </View>

            <View style={[className`rounded-2xl p-2 border border-gray-200 `, { borderStyle: 'dashed'}]}>
                <View style={className`p-2 `}>
                    <Text style={className` pl-1 pr-4 text-left text-[11px] max-w-xs text-gray-500`}>Single Debit Limit:</Text>
                    <Text style={className` pl-1 pr-4 text-left text-[14px] font-bold ${currentMode === 'light' ? 'text-black' : 'text-white'}`}> ₦100,000.00</Text>
                </View>

                <View style={className`p-2 `}>
                    <Text style={className` pl-1 pr-4 text-left text-[11px] max-w-xs text-gray-500`}>Daily Debit Limit:</Text>
                    <Text style={className` pl-1 pr-4 text-left text-[14px] font-bold ${currentMode === 'light' ? 'text-black' : 'text-white'}`}>₦500,000.00</Text>
                </View>
            </View>
        </View>
            </View>


            <View style={className`h-50`}>
            </View>
    </View>
    
    </ScrollView>
    <View style={className`absolute bottom-0 flex-col mt-4 gap-3 w-full ${currentMode === 'light' ? 'bg-[#ffffff]' : 'bg-[#0e1a32]' } px-4 py-4`}>
            <TouchableOpacity style={className`rounded-xl flex-row justify-center items-center px-4 py-4 ${currentMode === 'light' ? 'bg-[#0261ef]' : 'bg-[#ffd75b]' }`}>
                <Text style={className`text-white font-bold`}>Continue Upgrade</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => router.back()} style={className`rounded-xl flex-row justify-center items-center px-4 py-4 ${currentMode === 'light' ? 'bg-[#e6edfd]' : 'bg-[#19212c]' }`}>
                <Text style={className`${currentMode === 'light' ? 'text-[#0261ef]' : 'text-[#ffd75b]'} font-bold`}>Back</Text>
            </TouchableOpacity>
        </View>

    
    </View>
  )
}

export default Profile