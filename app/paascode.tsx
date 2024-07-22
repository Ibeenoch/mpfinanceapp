import { View, Text, useColorScheme, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import className from 'twrnc'
import { router } from 'expo-router'

const paascode = () => {
    const currentMode = useColorScheme()
  return (
    <View style={className` ${currentMode === 'light' ? 'bg-[#f7f7f7]' : 'bg-[#0e1a32]'}`}>

        <View>
            <Text style={className` ${ currentMode === 'light' ? 'text-black' : 'text-white'} font-bold text-xl text-center pt-5 pb-1`}>Setup your Passcode</Text>
            <Text style={className` ${ currentMode === 'light' ? 'text-black' : 'text-white'} text-[15px] text-center pb-7`}>Enter a 6 digit passcode</Text>
        </View>

        <View style={className`mx-4 p-4 rounded-xl ${ currentMode === 'light' ? 'bg-[#e6edfd]' : 'bg-[#343631]'}`}>
            <View style={className`flex flex-row w-full justify-center gap-1 mb-4`}>
                <TextInput value='1' style={className`p-2 rounded-md font-bold text-lg text-center  ${ currentMode === 'light' ? 'text-black bg-white' : 'text-white bg-[#1a263e]'}`} />
                <TextInput value='1' style={className`p-2 rounded-md font-bold text-lg text-center  ${ currentMode === 'light' ? 'text-black bg-white' : 'text-white bg-[#1a263e]'}`} />
                <TextInput value='1' style={className`p-2 rounded-md font-bold text-lg text-center  ${ currentMode === 'light' ? 'text-black bg-white' : 'text-white bg-[#1a263e]'}`} />
                <TextInput value='1' style={className`p-2 rounded-md font-bold text-lg text-center  ${ currentMode === 'light' ? 'text-black bg-white' : 'text-white bg-[#1a263e]'}`} />
                <TextInput value='1' style={className`p-2 rounded-md font-bold text-lg text-center  ${ currentMode === 'light' ? 'text-black bg-white' : 'text-white bg-[#1a263e]'}`} />
                <TextInput value='1' style={className`p-2 rounded-md font-bold text-lg text-center  ${ currentMode === 'light' ? 'text-black bg-white' : 'text-white bg-[#1a263e]'}`} />
            </View>
        </View>


     <View style={className`mx-4 absolute bottom-0 p-4 rounded-xl  ${ currentMode === 'light' ? 'bg-[#ffffff]' : 'bg-[#0e1a32]'}`}>
        <View style={className`flex-row flex-wrap w-full justify-between gap-1 mb-4`}>
            <View style={className`rounded-full p-6 w-[33%]  ${ currentMode === 'light' ? 'bg-[#e6edfd]' : 'bg-[#1a263e]'} `} >
              <TouchableOpacity>
                <TextInput value='1' style={className` font-bold text-lg text-center  ${ currentMode === 'light' ? 'text-black bg-white' : 'text-white bg-[#1a263e]'}`} />
                </TouchableOpacity>                
            </View> 

            <View style={className`rounded-full p-6 w-[33%]  ${ currentMode === 'light' ? 'bg-[#e6edfd]' : 'bg-[#1a263e]'} `}>
              <TouchableOpacity>
                <TextInput value='2' style={className` font-bold text-lg text-center  ${ currentMode === 'light' ? 'text-black bg-white' : 'text-white bg-[#1a263e]'}`} />
               </TouchableOpacity>                
            </View>  
            <View  style={className`rounded-full p-6 w-[33%]  ${ currentMode === 'light' ? 'bg-[#e6edfd]' : 'bg-[#1a263e]'} `}>
              <TouchableOpacity>
                <TextInput value='3' style={className` font-bold text-lg text-center  ${ currentMode === 'light' ? 'text-black bg-white' : 'text-white bg-[#1a263e]'}`} />
              </TouchableOpacity>              
            </View>  

            <View  style={className`rounded-full p-6 w-[33%]  ${ currentMode === 'light' ? 'bg-[#e6edfd]' : 'bg-[#1a263e]'} `}>
              <TouchableOpacity>
                <TextInput value='4' style={className` font-bold text-lg text-center  ${ currentMode === 'light' ? 'text-black bg-white' : 'text-white bg-[#1a263e]'}`} />
                </TouchableOpacity>              
            </View>  

            <View  style={className`rounded-full p-6 w-[33%]  ${ currentMode === 'light' ? 'bg-[#e6edfd]' : 'bg-[#1a263e]'} `}>
              <TouchableOpacity>
                <TextInput value='5' style={className` font-bold text-lg text-center  ${ currentMode === 'light' ? 'text-black bg-white' : 'text-white bg-[#1a263e]'}`} />
                </TouchableOpacity>               
            </View>

            <View  style={className`rounded-full p-6 w-[33%]  ${ currentMode === 'light' ? 'bg-[#e6edfd]' : 'bg-[#1a263e]'} `}>
              <TouchableOpacity>
                <TextInput value='6' style={className` font-bold text-lg text-center  ${ currentMode === 'light' ? 'text-black bg-white' : 'text-white bg-[#1a263e]'}`} />
                </TouchableOpacity>              
            </View> 

            <View  style={className`rounded-full p-6 w-[33%]  ${ currentMode === 'light' ? 'bg-[#e6edfd]' : 'bg-[#1a263e]'} `}>
              <TouchableOpacity>
                <TextInput value='7' style={className` font-bold text-lg text-center  ${ currentMode === 'light' ? 'text-black bg-white' : 'text-white bg-[#1a263e]'}`} />
                </TouchableOpacity>              
            </View> 

            <View  style={className`rounded-full p-6 w-[33%]  ${ currentMode === 'light' ? 'bg-[#e6edfd]' : 'bg-[#1a263e]'} `}>
              <TouchableOpacity>
                <TextInput value='8' style={className` font-bold text-lg text-center  ${ currentMode === 'light' ? 'text-black bg-white' : 'text-white bg-[#1a263e]'}`} />
                </TouchableOpacity>              
            </View> 

            <View  style={className`rounded-full p-6 w-[33%]  ${ currentMode === 'light' ? 'bg-[#e6edfd]' : 'bg-[#1a263e]'} `}>
                <TouchableOpacity>
                <TextInput value='9' style={className` font-bold text-lg text-center  ${ currentMode === 'light' ? 'text-black bg-white' : 'text-white bg-[#1a263e]'}`} />
                </TouchableOpacity>              
            </View>

              <View  style={className`rounded-full p-6 w-[33%]  ${ currentMode === 'light' ? 'bg-[#e6edfd]' : 'bg-[#1a263e]'} `}>
                <TouchableOpacity>
                    <TextInput value='<-' style={className` font-bold text-lg text-center  ${ currentMode === 'light' ? 'text-black bg-white' : 'text-white bg-[#1a263e]'}`} />
                </TouchableOpacity>              
               </View>

              <View  style={className`rounded-full p-6 w-[33%]  ${ currentMode === 'light' ? 'bg-[#e6edfd]' : 'bg-[#1a263e]'} `}>
              <TouchableOpacity>
                <TextInput value='0' style={className` font-bold text-lg text-center  ${ currentMode === 'light' ? 'text-black bg-white' : 'text-white bg-[#1a263e]'}`} />
                </TouchableOpacity>              
              </View>  

              <View   style={className`rounded-full p-6 w-[33%]  ${ currentMode === 'light' ? 'bg-[#e6edfd]' : 'bg-[#1a263e]'} `}>
                <TouchableOpacity onPress={() => router.push('success')}>
                <TextInput value='->' style={className` font-bold text-lg text-center  ${ currentMode === 'light' ? 'text-black bg-white' : 'text-white bg-[#1a263e]'}`} />
                </TouchableOpacity>
              </View>  
              
              
            </View>
        </View>

    </View>
  )
}

export default paascode