import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { View, Text, TouchableOpacity,  Pressable, useColorScheme, StyleSheet } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import className from 'twrnc'
import useThemeStyles from '../utils/dynamic'
import ArrowUp from '../assets/up-arrow-svgrepo-com.svg'
import ArrowDown from '../assets/arrow-down-3101.svg'
import { router } from 'expo-router';
import { BottomSheetModal, BottomSheetModalProvider } from '@gorhom/bottom-sheet'
import { RadioButton } from 'react-native-paper';
import { ScrollView, FlatList } from 'react-native-gesture-handler';


const Address = () => {
    const getmode = useThemeStyles();
    const currentMode = useColorScheme()
    const bottomModalInputRef = useRef<BottomSheetModal>(null);
    const bottomModalLgaInputRef = useRef<BottomSheetModal>(null);
    const [stateActive, setStateActive] = useState<boolean>(false);
    const [lgaActive, setLgaActive] = useState<boolean>(false);
    const [selectedState, setSelectedState] = useState<string>('');
    const [selectedLga, setSelectedLga] = useState<string[]>([]);
    const [stateLga, setStateLga] = useState<string>('');
    
  const [selectedValue, setSelectedValue] = useState(''); 

  const handleRadioPress = (value: string) => {
     setSelectedValue(value);
     setSelectedState(value);
   }

  const handleLgaRadioPress = (value: string) => {
     setStateLga(value);
   }

    const snaPoints = [ '70%'];
    
   useEffect(() => {
    stateActive && bottomModalInputRef.current?.present();
   }, [stateActive])
    
   useEffect(() => {
    lgaActive && bottomModalInputRef.current?.present();
   }, [stateActive])

    const handlePresentModal = () => {
        bottomModalInputRef.current?.present();
        setStateActive(true);
    };
console.log(lgaActive)
    const handleLgaModal = () => {
        setLgaActive(true);
        bottomModalLgaInputRef.current?.present();
    };

    const states = [
        'Abia',
        'Adamawa',
        'Akwa Ibom',
        'Anambra',
        'Bauchi',
        'Bayelsa',
        'Benue',
        'Borno',
        'Cross River',
        'Delta',
        'Ebonyi',
        'Edo',
        'Ekiti',
        'Enugu',
        'Gombe',
        'Imo',
        'Jigawa',
        'Kaduna',
        'Kano',
        'Katsina',
        'Kebbi',
        'Kogi',
        'Kwara',
        'Lagos',
        'Nasarawa',
        'Niger',
        'Ogun',
        'Ondo',
        'Osun',
        'Oyo',
        'Plateau',
        'Rivers',
        'Sokoto',
        'Taraba',
        'Yobe',
        'Zamfara',
        'Abuja'
    ];

    useEffect(() => {
        if(selectedState){
            setSelectedLga(LGAEachState.Nigeria[`${selectedState}`]);
            setLgaActive(true);
            bottomModalInputRef.current?.close();
            setStateActive(false);
        }
    }, [selectedState]);

    useEffect(() => {
        if(stateLga){
            bottomModalLgaInputRef.current?.close();
            setLgaActive(false);
        }
    }, [stateLga]);

    const LGAEachState: any = {
        "Nigeria": {
          "Abia": [
            "Aba North",
            "Aba South",
            "Arochukwu",
            "Bende",
            "Ikwuano",
            "Isiala Ngwa North",
            "Isiala Ngwa South",
            "Isuikwuato",
            "Obingwa",
            "Ohafia",
            "Osisioma",
            "Ugwunagbo",
            "Ukwa East",
            "Ukwa West",
            "Umuneochi"
          ],
          "Adamawa": [
            "Demsa",
            "Fufore",
            "Ganye",
            "Girei",
            "Gombi",
            "Guyuk",
            "Hong",
            "Jada",
            "Larmurde",
            "Madagali",
            "Maiha",
            "Mayo-Belwa",
            "Mubi North",
            "Mubi South",
            "Numan",
            "Shelleng",
            "Song",
            "Toungo",
            "Yola North",
            "Yola South"
          ],
          "Akwa Ibom": [
            "Abak",
            "Ekett",
            "Essien Udim",
            "Etim Ekpo",
            "Etinan",
            "Ibeno",
            "Ibesikpo Asutan",
            "Ibiono Ibom",
            "Ikono",
            "Ikot Abasi",
            "Ikot Ekpene",
            "Ini",
            "Itu",
            "Mkpat Enin",
            "Nsit Atai",
            "Nsit Ibom",
            "Obot Akara",
            "Okobo",
            "Onna",
            "Oron",
            "Ukanafun",
            "Uruan",
            "Urue Offong Oruko",
            "Victor Attah International Airport"
          ],
          "Anambra": [
            "Aguata",
            "Awka North",
            "Awka South",
            "Dunukofia",
            "Ekwusigo",
            "Idemili North",
            "Idemili South",
            "Ihiala",
            "Njikoka",
            "Nnewi North",
            "Nnewi South",
            "Ogbaru",
            "Onitsha North",
            "Onitsha South",
            "Orumba North",
            "Orumba South",
            "Oyi"
          ],
          "Bauchi": [
            "Alkaleri",
            "Bauchi",
            "Bogoro",
            "Darazo",
            "Dass",
            "Ganjuwa",
            "Giant",
            "Ningi",
            "Shira",
            "Tafawa Balewa",
            "Toro",
            "Warji",
            "Zaki"
          ],
          "Bayelsa": [
            "Brass",
            "Ekeremor",
            "Kolokuma/Opokuma",
            "Nembe",
            "Ogbia",
            "Sagbama",
            "Salga",
            "Southern Ijaw",
            "Yenagoa"
          ],
          "Benue": [
            "Ado",
            "Agatu",
            "Apa",
            "Buruku",
            "Gboko",
            "Guma",
            "Gwer East",
            "Gwer West",
            "Katsina Ala",
            "Konshisha",
            "Obi",
            "Ogbadibo",
            "Ohimini",
            "Otukpo",
            "Tarka",
            "Ukum",
            "Vandeikya"
          ],
          "Borno": [
            "Abadam",
            "Askira/Uba",
            "Bama",
            "Bayo",
            "Chibok",
            "Damboa",
            "Dikwa",
            "Gubio",
            "Guzamala",
            "Hawul",
            "Jere",
            "Kaga",
            "Konduga",
            "Mafa",
            "Magumeri",
            "Maiduguri",
            "Ngala",
            "Nganzai",
            "Shani"
          ],
          "Cross River": [
            "Akamkpa",
            "Akpabuyo",
            "Bakassi",
            "Calabar Municipal",
            "Calabar South",
            "Etung",
            "Ikom",
            "Obubra",
            "Obudu",
            "Odukpani",
            "Ogba/Ebonyi",
            "Yakuur",
            "Yala"
          ],
          "Delta": [
            "Aniocha North",
            "Aniocha South",
            "Bomadi",
            "Burutu",
            "Ethiope East",
            "Ethiope West",
            "Ika North East",
            "Ika South",
            "Isoko North",
            "Isoko South",
            "Ndokwa East",
            "Ndokwa West",
            "Okpe",
            "Oshimili North",
            "Oshimili South",
            "Patani",
            "Sapele",
            "Udu",
            "Ughelli North",
            "Ughelli South",
            "Warri North",
            "Warri South",
            "Warri South West"
          ],
          "Ebonyi": [
            "Abakaliki",
            "Afikpo North",
            "Afikpo South",
            "Ebonyi",
            "Ishielu",
            "Ivo",
            "Ohaozara",
            "Ohaukwu",
            "Onicha"
          ],
          "Edo": [
            "Akoko-Edo",
            "Esan Central",
            "Esan North-East",
            "Esan South-East",
            "Esan West",
            "Egor",
            "Igueben",
            "Ikpoba Okha",
            "Oredo",
            "Orhionmwon",
            "Ovia North-East",
            "Ovia South-West",
            "Uhunmwonde"
          ],
          "Ekiti": [
            "Ado Ekiti",
            "Ekiti East",
            "Ekiti South-West",
            "Ekiti West",
            "Emure",
            "Ilejemeje",
            "Ikere",
            "Irepodun/Ifelodun",
            "Ise/Orun",
            "Moba",
            "Oye"
          ],
          "Enugu": [
            "Awgu",
            "Enugu East",
            "Enugu North",
            "Enugu South",
            "Ezeagu",
            "Igbo-Etiti",
            "Igbo Eze North",
            "Igbo Eze South",
            "Nkanu East",
            "Nkanu West",
            "Nsukka",
            "Oji River",
            "Udenu",
            "Udi"
          ],
          "Gombe": [
            "Akko",
            "Balanga",
            "Billiri",
            "Dukku",
            "Gombe",
            "Kaltungo",
            "Kwami",
            "Nafada",
            "Shongom",
            "Yamaltu/Deba"
          ],
          "Imo": [
            "Aboh Mbaise",
            "Ahiazu Mbaise",
            "Ikeduru",
            "Isiala Mbano",
            "Isu",
            "Mbaitoli",
            "Ngor Okpala",
            "Njaba",
            "Nkwerre",
            "Obowo",
            "Oguta",
            "Ohaji/Egbema",
            "Okigwe",
            "Orlu",
            "Owerri Municipal",
            "Owerri North",
            "Owerri West"
          ],
          "Jigawa": [
            "Auyo",
            "Babura",
            "Birniwa",
            "Buji",
            "Dutse",
            "Gagarawa",
            "Garki",
            "Gumel",
            "Hadejia",
            "Jahun",
            "Kafin Hausa",
            "Kazaure",
            "Kirikasamma",
            "Maigatari",
            "Miga",
            "Ringim",
            "Yankwashi"
          ],
          "Kaduna": [
            "Birnin Gwari",
            "Chikun",
            "Giwa",
            "Jaba",
            "Jema'a",
            "Kachia",
            "Kaduna North",
            "Kaduna South",
            "Kaura",
            "Kauru",
            "Lere",
            "Makarfi",
            "Sabon Gari",
            "Sanga",
            "Zaria"
          ],
          "Kano": [
            "Albasu",
            "Bagwai",
            "Bebeji",
            "Bichi",
            "Dala",
            "Dawakin Kudu",
            "Dawakin Tofa",
            "Doguwa",
            "Fagge",
            "Gaya",
            "Gwarzo",
            "Kano Municipal",
            "Karaye",
            "Kibiya",
            "Kiru",
            "Kumbotso",
            "Makoda",
            "Minjibir",
            "Nasarawa",
            "Rogo",
            "Shanono",
            "Tarauni",
            "Tofa",
            "Tsanyawa",
            "Warawa",
            "Wudil"
          ],
          "Katsina": [
            "Charanchi",
            "Dandume",
            "Danja",
            "Daura",
            "Dutsi",
            "Funtua",
            "Jibia",
            "Kafur",
            "Kankara",
            "Katsina",
            "Kurfi",
            "Mai'adua",
            "Malumfashi",
            "Mani",
            "Mashi",
            "Matazu",
            "Musawa",
            "Rimi",
            "Sabuwa",
            "Sandamu",
            "Zango"
          ],
          "Kogi": [
            "Adavi",
            "Ajaokuta",
            "Ankpa",
            "Bassa",
            "Dekina",
            "Ibaji",
            "Igalamela-Odolu",
            "Ijumu",
            "Kabba/Bunu",
            "Kogi",
            "Mopa-Muro",
            "Ofu",
            "Ogori/Magongo",
            "Okehi",
            "Okene",
            "Olamaboro",
            "Omala",
            "Yagba East",
            "Yagba West"
          ],
          "Kwara": [
            "Asa",
            "Baruten",
            "Ekiti",
            "Ifelodun",
            "Ilorin East",
            "Ilorin South",
            "Ilorin West",
            "Irepodun",
            "Isin",
            "Kaiama",
            "Offa",
            "Oke Ero",
            "Oyun",
            "Patigi"
          ],
          "Lagos": [
            "Agege",
            "Alimosho",
            "Amuwo-Odofin",
            "Apapa",
            "Badagry",
            "Epe",
            "Eti Osa",
            "Ibeju Lekki",
            "Ifako Ijaiye",
            "Ikeja",
            "Ikorodu",
            "Kosofe",
            "Lagos Island",
            "Lagos Mainland",
            "Mushin",
            "Oshodi-Isolo",
            "Somolu",
            "Surulere"
          ],
          "Nasarawa": [
            "Akwanga",
            "Doma",
            "Karu",
            "Keana",
            "Keffi",
            "Nasarawa",
            "Nasarawa Eggon",
            "Obi",
            "Toto",
            "Wamba"
          ],
          "Niger": [
            "Agwara",
            "Bida",
            "Borgu",
            "Bosso",
            "Chanchaga",
            "Edati",
            "Gbako",
            "Gurara",
            "Katcha",
            "K Niger",
            "Lapai",
            "Lavun",
            "Magama",
            "Mokwa",
            "Paikoro",
            "Rafi",
            "Shiroro",
            "Suleja",
            "Tafa",
            "Wushishi"
          ],
          "Ogun": [
            "Abeokuta North",
            "Abeokuta South",
            "Ado-Odo/Ota",
            "Ewekoro",
            "Ifo",
            "Ijebu East",
            "Ijebu North",
            "Ijebu North East",
            "Ijebu Ode",
            "Obafemi Owode",
            "Odeda",
            "Odogbolu",
            "Remo North",
            "Sagamu",
            "Yewa North",
            "Yewa South"
          ],
          "Ondo": [
            "Akoko North East",
            "Akoko North West",
            "Akoko South East",
            "Akoko South West",
            "Akure North",
            "Akure South",
            "Ese Odo",
            "Idanre",
            "Ifedore",
            "Ilaje",
            "Odigbo",
            "Okitipupa",
            "Ondo East",
            "Ondo West",
            "Ose",
            "Owerri North",
            "Owerri West",
            "Owerri East"
          ],
          "Osun": [
            "Aiyedade",
            "Aiyedire",
            "Atakunmosa East",
            "Atakunmosa West",
            "Boluwaduro",
            "Boripe",
            "Ife Central",
            "Ife East",
            "Ife North",
            "Ife South",
            "Ilesa East",
            "Ilesa West",
            "Isokan",
            "Obokun",
            "Odo Otin",
            "Oluyole",
            "Oriade",
            "Oshogbo"
          ],
          "Oyo": [
            "Afijio",
            "Akinyele",
            "Atiba",
            "Egbeda",
            "Ibadan North",
            "Ibadan North East",
            "Ibadan North West",
            "Ibadan South East",
            "Ibadan South West",
            "Ibarapa Central",
            "Ibarapa East",
            "Ibarapa North",
            "Ido",
            "Iseyin",
            "Itefun",
            "Ogbomosho North",
            "Ogbomosho South",
            "Oyo East",
            "Oyo West",
            "Saki East",
            "Saki West",
            "Surulere"
          ],
          "Plateau": [
            "Bokkos",
            "Jos East",
            "Jos North",
            "Jos South",
            "Kanke",
            "Langtang North",
            "Langtang South",
            "Mangu",
            "Pankshin",
            "Qua'an Pan",
            "Riyom",
            "Shendam",
            "Wase"
          ],
          "Rivers": [
            "Abua/Odual",
            "Ahoada East",
            "Ahoada West",
            "Akuku-Toru",
            "Andoni",
            "Asari-Toru",
            "Bonny",
            "Degema",
            "Emohua",
            "Etche",
            "Gokana",
            "Ikwerre",
            "Obio-Akpor",
            "Port Harcourt",
            "Tai"
          ],
          "Sokoto": [
            "Binji",
            "Bodinga",
            "Dange/Shuni",
            "Gada",
            "Goronyo",
            "Gudu",
            "Illela",
            "Kebbe",
            "Kware",
            "Rabah",
            "Sokoto North",
            "Sokoto South",
            "Tambuwal",
            "Tangaza",
            "Wamakko",
            "Wurno",
            "Yabo"
          ],
          "Taraba": [
            "Ardo-Kola",
            "Bali",
            "Donga",
            "Gashaka",
            "Gassol",
            "Jalingo",
            "Karim Lamido",
            "Karin-Lamido",
            "Sunkani",
            "Takum",
            "Ussa",
            "Wukari",
            "Yorro"
          ],
          "Yobe": [
            "Bade",
            "Bursari",
            "Damaturu",
            "Fika",
            "Fune",
            "Geidam",
            "Gujba",
            "Gashua",
            "Nguru",
            "Potiskum",
            "Tarmuwa",
            "Yunusari",
            "Jakusko"
          ],
          "Zamfara": [
            "Anka",
            "Bakura",
            "Bakau",
            "Bukkuyum",
            "Chafe",
            "Gummi",
            "Gusau",
            "Maradun",
            "Shinkafi",
            "Talata Mafara",
            "Tsafe",
            "Zurmi"
          ]
        }
      }
      

  return (
   <GestureHandlerRootView style={{ flex: 1}}>
            <View style={className`flex-1 p-4 ${getmode.backGroundColorTwo}`}>
             <BottomSheetModalProvider>
        <ScrollView>
            <View style={className`px-4`}>
                <Text style={className` ${ getmode.textColorTwo} font-bold text-xl text-left pt-5 pb-1`}>Residential Address</Text>
                <Text style={className` ${ getmode.textColorTwo} text-xs text-left pb-7`}>Provide deatils of where you live</Text>
            </View>

            <View style={className`${getmode.firstLayerBgColor} rounded-xl mb-3 p-4`}>
                
                <View style={className`${getmode.secondLayerBgColor} rounded-lg mb-3 p-4`}>
                    <Text style={className`${getmode.textColorTwo} `}>House Number</Text>
                </View>

                <View style={className`${getmode.secondLayerBgColor} rounded-lg mb-3 p-4`}>
                    <Text style={className`${getmode.textColorTwo} `}>Street Name</Text>
                </View>

                <View style={className`${getmode.secondLayerBgColor} rounded-lg mb-3 p-4`}>
                    <TouchableOpacity onPress={handlePresentModal}>
                        <View style={className`${getmode.secondLayerBgColor} flex-row items-center justify-between px-4`}>
                            <Text style={className`${getmode.textColorTwo} `}>{selectedValue ? selectedValue : 'State'}</Text>
                            <ArrowDown width={12} height={12}  fill={`${getmode.fillColor}`} />
                        </View>
                    </TouchableOpacity>
                </View>

                <View style={className`${getmode.secondLayerBgColor} rounded-lg mb-3 p-4`}>
                    <TouchableOpacity onPress={handleLgaModal}>
                    <View style={className`${getmode.secondLayerBgColor} flex-row items-center justify-between px-4`}> 
                        <Text style={className`${getmode.textColorTwo} `}>{stateLga ? stateLga : 'LGA'}</Text>
                        <ArrowDown width={12} height={12} fill={`${getmode.fillColor}`} />
                    </View>
                    </TouchableOpacity>
                </View>
            </View>
            {
                stateActive && (
            
                <BottomSheetModal 
                ref={bottomModalInputRef}
                index={0}
                snapPoints={snaPoints}
                backgroundStyle={className`rounded-3xl ${currentMode === 'light' ? 'bg-[#f4f5f9]' : 'bg-[#162640]'} `}
                style={className`rounded-3xl ${currentMode === 'light' ? 'bg-[#f4f5f9]' : 'bg-[#162640]'} `}
                >
                <Text style={className`${getmode.textColorTwo}  ${currentMode === 'light' ? 'bg-[#f4f5f9]' : 'bg-[#162640]'} font-bold px-3 py-6 text-left text-md`}>State</Text>

                    {
                       
      <FlatList
      data={states}
      keyExtractor={(item, index) => index.toString()} // Use index as a key if items do not have unique IDs
      renderItem={({ item }) => (
        <View style={className` ${currentMode === 'light' ? 'bg-[#f4f5f9]' : 'bg-[#162640]'}`}>
          <View style={className`flex-row justify-between px-3`}>
            <Text style={className`${getmode.textColorTwo} text-sm font-bold`}>{item}</Text>
            <TouchableOpacity style={styles.container}>
              <View>
                <RadioButton.Android 
                  value={item}
                  status={selectedValue === item ? 'checked' : 'unchecked'} 
                  onPress={() => handleRadioPress(item)} 
                  color={selectedValue === item ? (currentMode === 'light' ? '#0663f0' : '#ffd75b') : 'gray'}
                />
              </View>
            </TouchableOpacity>
          </View>
        </View>
      )}
    />
                    } 
                </BottomSheetModal>
            )
            }

            {
                 lgaActive && selectedState && (
            
                <BottomSheetModal 
                ref={bottomModalLgaInputRef}
                index={0}
                snapPoints={snaPoints}
                backgroundStyle={className`rounded-3xl ${currentMode === 'light' ? 'bg-[#f4f5f9]' : 'bg-[#162640]'} `}
                style={className`rounded-3xl ${currentMode === 'light' ? 'bg-[#f4f5f9]' : 'bg-[#162640]'}`}
                >
                <Text style={className`${getmode.textColorTwo} ${currentMode === 'light' ? 'bg-[#f4f5f9]' : 'bg-[#162640]'} font-bold px-3 py-6 text-left text-md`}>LGA</Text>

                    {
                       
                        <FlatList
                        data={selectedLga}
                        keyExtractor={(item, index) => index.toString()} // Use index as a key if items do not have unique IDs
                        renderItem={({ item }) => (
                            <View style={className` ${currentMode === 'light' ? 'bg-[#f4f5f9]' : 'bg-[#162640]'}`}>
                            <View style={className`flex-row justify-between px-3`}>
                                <Text style={className`${getmode.textColorTwo} text-sm font-bold`}>{item}</Text>
                                <TouchableOpacity style={styles.container}>
                                <View>
                                    <RadioButton.Android 
                                    value={item}
                                    status={selectedValue === item ? 'checked' : 'unchecked'} 
                                    onPress={() => handleLgaRadioPress(item)} 
                                    color={selectedValue === item ? (currentMode === 'light' ? '#0663f0' : '#ffd75b') : 'gray'}
                                    />
                                </View>
                                </TouchableOpacity>
                            </View>
                            </View>
                        )}
                        />
                    } 
                </BottomSheetModal>
            )
            }

            <View style={className`w-full mt-[200px]`}>
                <TouchableOpacity onPress={() => router.push('pepstatus')}  style={className`rounded-xl w-full ${getmode.backGroundColor}  py-6 px-4 flex-row items-center justify-center`}  >
                <Text style={className`${ getmode.textColor} text-sm font-semibold`}>Next</Text>
                </TouchableOpacity>
            </View>
            
            
   </ScrollView>
    </BottomSheetModalProvider>
            </View>
            </GestureHandlerRootView>
     
  )
}

const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      alignItems: 'center',
      marginVertical: 8,
    },
    outerCircle: {
      width: 20,
      height: 20,
      borderRadius: 10,
      borderWidth: 2,
      borderColor: '#0261ef',
      justifyContent: 'center',
      alignItems: 'center',
      marginRight: 10,
      backgroundColor: 'transparent',
    },
    innerCircle: {
      width: 12,
      height: 12,
      borderColor: '#0261ef',
      borderRadius: 6,
      backgroundColor: '#E3CC7E',
    },
    outerCirclenight: {
      width: 20,
      height: 20,
      borderRadius: 10,
      borderWidth: 2,
      borderColor: '#fcd762',
      justifyContent: 'center',
      alignItems: 'center',
      marginRight: 10,
      backgroundColor: '#fcd762',
    },
    innerCirclenight: {
      width: 12,
      height: 12,
      zIndex: 20,
      borderColor: '#000',
      borderRadius: 6,
      backgroundColor: '#fcd762',
    },
    label: {
      fontSize: 16,
    },
    midCircle: {
      width: 15,
      height: 15,
      zIndex: 20,
      borderColor: '#000',
      borderRadius: 8,
    }
  });
export default Address