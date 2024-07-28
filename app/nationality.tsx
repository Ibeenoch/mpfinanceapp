import React, {useEffect, useLayoutEffect, useRef, useState} from 'react';
import { Image } from 'expo-image';
import className from 'twrnc';
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
  TouchableOpacity,
  useColorScheme,
} from 'react-native';
import image from '../assets/img.js';
import ArrowLeft from '../assets/arrow-back-svgrepo-com.svg'
import ArrowRight from '../assets/arrow-forward-svgrepo-com.svg'
import { router } from 'expo-router';
import { Picker } from '@react-native-picker/picker';
import { FlatList, GestureHandlerRootView } from 'react-native-gesture-handler';
import { BottomSheetModal, BottomSheetModalProvider } from '@gorhom/bottom-sheet';
import BottomSheet from '@gorhom/bottom-sheet/lib/typescript/components/bottomSheet/BottomSheet.js';
import { RadioButton } from 'react-native-paper';
import { BlurView } from 'expo-blur';
import { useAppDispatch, } from '../features/hooks';
import { setSelectionModal, shouldShowModal } from '../features/auth/auth';
import HeaderStatus from '../components/HeaderStatus';
import useThemeStyles from '../utils/dynamic';


const Nationality = () => {
    const [selectedValue, setSelectedValue] = useState<string>('java');
    const [countryActive, setcountryActive] = useState<boolean>(false);
    const [countryLists, setcountryLists] = useState<string[]>([]);
    const [selectedState, setSelectedState] = useState<string>('');
    const [selectedflag, setSelectedFlag] = useState<string>('');
    const countryModalRef = useRef<BottomSheetModal>(null);
    const getmode = useThemeStyles();
    const currentMode = useColorScheme();
    const dispatch = useAppDispatch();

  useEffect(() => {
    if(selectedflag){
      countryModalRef.current?.close();
      setcountryActive(false);
      dispatch(setSelectionModal(false));
    }
  }, [ selectedflag]);

  useEffect(() => {
    countryActive && countryModalRef.current?.present();
  }, [countryActive])

  const handleRadioPress = (value: string, f: string) => {
    setSelectedValue(value);
    setSelectedState(value);
    setSelectedFlag(f);
   
  }



  const chooseCountry = () => {
    setcountryActive(true);
    dispatch(setSelectionModal(true));
    countryModalRef.current?.present();
  }

 const countries = [
  {
      "name": "Afghanistan",
      "flag": "https://flagcdn.com/w320/af.png"
  },
  {
      "name": "Albania",
      "flag": "https://flagcdn.com/w320/al.png"
  },
  {
      "name": "Algeria",
      "flag": "https://flagcdn.com/w320/dz.png"
  },
  {
      "name": "Andorra",
      "flag": "https://flagcdn.com/w320/ad.png"
  },
  {
      "name": "Angola",
      "flag": "https://flagcdn.com/w320/ao.png"
  },
  {
      "name": "Antigua and Barbuda",
      "flag": "https://flagcdn.com/w320/ag.png"
  },
  {
      "name": "Argentina",
      "flag": "https://flagcdn.com/w320/ar.png"
  },
  {
      "name": "Armenia",
      "flag": "https://flagcdn.com/w320/am.png"
  },
  {
      "name": "Australia",
      "flag": "https://flagcdn.com/w320/au.png"
  },
  {
      "name": "Austria",
      "flag": "https://flagcdn.com/w320/at.png"
  },
  {
      "name": "Azerbaijan",
      "flag": "https://flagcdn.com/w320/az.png"
  },
  {
      "name": "Bahamas",
      "flag": "https://flagcdn.com/w320/bs.png"
  },
  {
      "name": "Bahrain",
      "flag": "https://flagcdn.com/w320/bh.png"
  },
  {
      "name": "Bangladesh",
      "flag": "https://flagcdn.com/w320/bd.png"
  },
  {
      "name": "Barbados",
      "flag": "https://flagcdn.com/w320/bb.png"
  },
  {
      "name": "Belarus",
      "flag": "https://flagcdn.com/w320/by.png"
  },
  {
      "name": "Belgium",
      "flag": "https://flagcdn.com/w320/be.png"
  },
  {
      "name": "Belize",
      "flag": "https://flagcdn.com/w320/bz.png"
  },
  {
      "name": "Benin",
      "flag": "https://flagcdn.com/w320/bj.png"
  },
  {
      "name": "Bhutan",
      "flag": "https://flagcdn.com/w320/bt.png"
  },
  {
      "name": "Bolivia",
      "flag": "https://flagcdn.com/w320/bo.png"
  },
  {
      "name": "Bosnia and Herzegovina",
      "flag": "https://flagcdn.com/w320/ba.png"
  },
  {
      "name": "Botswana",
      "flag": "https://flagcdn.com/w320/bw.png"
  },
  {
      "name": "Brazil",
      "flag": "https://flagcdn.com/w320/br.png"
  },
  {
      "name": "Brunei",
      "flag": "https://flagcdn.com/w320/bn.png"
  },
  {
      "name": "Bulgaria",
      "flag": "https://flagcdn.com/w320/bg.png"
  },
  {
      "name": "Burkina Faso",
      "flag": "https://flagcdn.com/w320/bf.png"
  },
  {
      "name": "Burundi",
      "flag": "https://flagcdn.com/w320/bi.png"
  },
  {
      "name": "Cabo Verde",
      "flag": "https://flagcdn.com/w320/cv.png"
  },
  {
      "name": "Cambodia",
      "flag": "https://flagcdn.com/w320/kh.png"
  },
  {
      "name": "Cameroon",
      "flag": "https://flagcdn.com/w320/cm.png"
  },
  {
      "name": "Canada",
      "flag": "https://flagcdn.com/w320/ca.png"
  },
  {
      "name": "Central African Republic",
      "flag": "https://flagcdn.com/w320/cf.png"
  },
  {
      "name": "Chad",
      "flag": "https://flagcdn.com/w320/td.png"
  },
  {
      "name": "Chile",
      "flag": "https://flagcdn.com/w320/cl.png"
  },
  {
      "name": "China",
      "flag": "https://flagcdn.com/w320/cn.png"
  },
  {
      "name": "Colombia",
      "flag": "https://flagcdn.com/w320/co.png"
  },
  {
      "name": "Comoros",
      "flag": "https://flagcdn.com/w320/km.png"
  },
  {
      "name": "Congo (Congo-Brazzaville)",
      "flag": "https://flagcdn.com/w320/cg.png"
  },
  {
      "name": "Costa Rica",
      "flag": "https://flagcdn.com/w320/cr.png"
  },
  {
      "name": "Croatia",
      "flag": "https://flagcdn.com/w320/hr.png"
  },
  {
      "name": "Cuba",
      "flag": "https://flagcdn.com/w320/cu.png"
  },
  {
      "name": "Cyprus",
      "flag": "https://flagcdn.com/w320/cy.png"
  },
  {
      "name": "Czechia (Czech Republic)",
      "flag": "https://flagcdn.com/w320/cz.png"
  },
  {
      "name": "Democratic Republic of the Congo",
      "flag": "https://flagcdn.com/w320/cd.png"
  },
  {
      "name": "Denmark",
      "flag": "https://flagcdn.com/w320/dk.png"
  },
  {
      "name": "Djibouti",
      "flag": "https://flagcdn.com/w320/dj.png"
  },
  {
      "name": "Dominica",
      "flag": "https://flagcdn.com/w320/dm.png"
  },
  {
      "name": "Dominican Republic",
      "flag": "https://flagcdn.com/w320/do.png"
  },
  {
      "name": "Ecuador",
      "flag": "https://flagcdn.com/w320/ec.png"
  },
  {
      "name": "Egypt",
      "flag": "https://flagcdn.com/w320/eg.png"
  },
  {
      "name": "El Salvador",
      "flag": "https://flagcdn.com/w320/sv.png"
  },
  {
      "name": "Equatorial Guinea",
      "flag": "https://flagcdn.com/w320/gq.png"
  },
  {
      "name": "Eritrea",
      "flag": "https://flagcdn.com/w320/er.png"
  },
  {
      "name": "Estonia",
      "flag": "https://flagcdn.com/w320/ee.png"
  },
  {
      "name": "Eswatini",
      "flag": "https://flagcdn.com/w320/sz.png"
  },
  {
      "name": "Ethiopia",
      "flag": "https://flagcdn.com/w320/et.png"
  },
  {
      "name": "Fiji",
      "flag": "https://flagcdn.com/w320/fj.png"
  },
  {
      "name": "Finland",
      "flag": "https://flagcdn.com/w320/fi.png"
  },
  {
      "name": "France",
      "flag": "https://flagcdn.com/w320/fr.png"
  },
  {
      "name": "Gabon",
      "flag": "https://flagcdn.com/w320/ga.png"
  },
  {
      "name": "Gambia",
      "flag": "https://flagcdn.com/w320/gm.png"
  },
  {
      "name": "Georgia",
      "flag": "https://flagcdn.com/w320/ge.png"
  },
  {
      "name": "Germany",
      "flag": "https://flagcdn.com/w320/de.png"
  },
  {
      "name": "Ghana",
      "flag": "https://flagcdn.com/w320/gh.png"
  },
  {
      "name": "Greece",
      "flag": "https://flagcdn.com/w320/gr.png"
  },
  {
      "name": "Grenada",
      "flag": "https://flagcdn.com/w320/gd.png"
  },
  {
      "name": "Guatemala",
      "flag": "https://flagcdn.com/w320/gt.png"
  },
  {
      "name": "Guinea",
      "flag": "https://flagcdn.com/w320/gn.png"
  },
  {
      "name": "Guinea-Bissau",
      "flag": "https://flagcdn.com/w320/gw.png"
  },
  {
      "name": "Guyana",
      "flag": "https://flagcdn.com/w320/gy.png"
  },
  {
      "name": "Haiti",
      "flag": "https://flagcdn.com/w320/ht.png"
  },
  {
      "name": "Honduras",
      "flag": "https://flagcdn.com/w320/hn.png"
  },
  {
      "name": "Hungary",
      "flag": "https://flagcdn.com/w320/hu.png"
  },
  {
      "name": "Iceland",
      "flag": "https://flagcdn.com/w320/is.png"
  },
  {
      "name": "India",
      "flag": "https://flagcdn.com/w320/in.png"
  },
  {
      "name": "Indonesia",
      "flag": "https://flagcdn.com/w320/id.png"
  },
  {
      "name": "Iran",
      "flag": "https://flagcdn.com/w320/ir.png"
  },
  {
      "name": "Iraq",
      "flag": "https://flagcdn.com/w320/iq.png"
  },
  {
      "name": "Ireland",
      "flag": "https://flagcdn.com/w320/ie.png"
  },
  {
      "name": "Israel",
      "flag": "https://flagcdn.com/w320/il.png"
  },
  {
      "name": "Italy",
      "flag": "https://flagcdn.com/w320/it.png"
  },
  {
      "name": "Jamaica",
      "flag": "https://flagcdn.com/w320/jm.png"
  },
  {
      "name": "Japan",
      "flag": "https://flagcdn.com/w320/jp.png"
  },
  {
      "name": "Jordan",
      "flag": "https://flagcdn.com/w320/jo.png"
  },
  {
      "name": "Kazakhstan",
      "flag": "https://flagcdn.com/w320/kz.png"
  },
  {
      "name": "Kenya",
      "flag": "https://flagcdn.com/w320/ke.png"
  },
  {
      "name": "Kiribati",
      "flag": "https://flagcdn.com/w320/ki.png"
  },
  {
      "name": "Kuwait",
      "flag": "https://flagcdn.com/w320/kw.png"
  },
  {
      "name": "Kyrgyzstan",
      "flag": "https://flagcdn.com/w320/kg.png"
  },
  {
      "name": "Laos",
      "flag": "https://flagcdn.com/w320/la.png"
  },
  {
      "name": "Latvia",
      "flag": "https://flagcdn.com/w320/lv.png"
  },
  {
      "name": "Lebanon",
      "flag": "https://flagcdn.com/w320/lb.png"
  },
  {
      "name": "Lesotho",
      "flag": "https://flagcdn.com/w320/ls.png"
  },
  {
      "name": "Liberia",
      "flag": "https://flagcdn.com/w320/lr.png"
  },
  {
      "name": "Libya",
      "flag": "https://flagcdn.com/w320/ly.png"
  },
  {
      "name": "Liechtenstein",
      "flag": "https://flagcdn.com/w320/li.png"
  },
  {
      "name": "Lithuania",
      "flag": "https://flagcdn.com/w320/lt.png"
  },
  {
      "name": "Luxembourg",
      "flag": "https://flagcdn.com/w320/lu.png"
  },
  {
      "name": "Madagascar",
      "flag": "https://flagcdn.com/w320/mg.png"
  },
  {
      "name": "Malawi",
      "flag": "https://flagcdn.com/w320/mw.png"
  },
  {
      "name": "Malaysia",
      "flag": "https://flagcdn.com/w320/my.png"
  },
  {
      "name": "Maldives",
      "flag": "https://flagcdn.com/w320/mv.png"
  },
  {
      "name": "Mali",
      "flag": "https://flagcdn.com/w320/ml.png"
  },
  {
      "name": "Malta",
      "flag": "https://flagcdn.com/w320/mt.png"
  },
  {
      "name": "Marshall Islands",
      "flag": "https://flagcdn.com/w320/mh.png"
  },
  {
      "name": "Mauritania",
      "flag": "https://flagcdn.com/w320/mr.png"
  },
  {
      "name": "Mauritius",
      "flag": "https://flagcdn.com/w320/mu.png"
  },
  {
      "name": "Mexico",
      "flag": "https://flagcdn.com/w320/mx.png"
  },
  {
      "name": "Micronesia",
      "flag": "https://flagcdn.com/w320/fm.png"
  },
  {
      "name": "Moldova",
      "flag": "https://flagcdn.com/w320/md.png"
  },
  {
      "name": "Monaco",
      "flag": "https://flagcdn.com/w320/mc.png"
  },
  {
      "name": "Mongolia",
      "flag": "https://flagcdn.com/w320/mn.png"
  },
  {
      "name": "Montenegro",
      "flag": "https://flagcdn.com/w320/me.png"
  },
  {
      "name": "Morocco",
      "flag": "https://flagcdn.com/w320/ma.png"
  },
  {
      "name": "Mozambique",
      "flag": "https://flagcdn.com/w320/mz.png"
  },
  {
      "name": "Myanmar (formerly Burma)",
      "flag": "https://flagcdn.com/w320/mm.png"
  },
  {
      "name": "Namibia",
      "flag": "https://flagcdn.com/w320/na.png"
  },
  {
      "name": "Nauru",
      "flag": "https://flagcdn.com/w320/nr.png"
  },
  {
      "name": "Nepal",
      "flag": "https://flagcdn.com/w320/np.png"
  },
  {
      "name": "Netherlands",
      "flag": "https://flagcdn.com/w320/nl.png"
  },
  {
      "name": "New Zealand",
      "flag": "https://flagcdn.com/w320/nz.png"
  },
  {
      "name": "Nicaragua",
      "flag": "https://flagcdn.com/w320/ni.png"
  },
  {
      "name": "Niger",
      "flag": "https://flagcdn.com/w320/ne.png"
  },
  {
      "name": "Nigeria",
      "flag": "https://flagcdn.com/w320/ng.png"
  },
  {
      "name": "North Korea",
      "flag": "https://flagcdn.com/w320/kp.png"
  },
  {
      "name": "North Macedonia",
      "flag": "https://flagcdn.com/w320/mk.png"
  },
  {
      "name": "Norway",
      "flag": "https://flagcdn.com/w320/no.png"
  },
  {
      "name": "Oman",
      "flag": "https://flagcdn.com/w320/om.png"
  },
  {
      "name": "Pakistan",
      "flag": "https://flagcdn.com/w320/pk.png"
  },
  {
      "name": "Palau",
      "flag": "https://flagcdn.com/w320/pw.png"
  },
  {
      "name": "Palestine State",
      "flag": "https://flagcdn.com/w320/ps.png"
  },
  {
      "name": "Panama",
      "flag": "https://flagcdn.com/w320/pa.png"
  },
  {
      "name": "Papua New Guinea",
      "flag": "https://flagcdn.com/w320/pg.png"
  },
  {
      "name": "Paraguay",
      "flag": "https://flagcdn.com/w320/py.png"
  },
  {
      "name": "Peru",
      "flag": "https://flagcdn.com/w320/pe.png"
  },
  {
      "name": "Philippines",
      "flag": "https://flagcdn.com/w320/ph.png"
  },
  {
      "name": "Poland",
      "flag": "https://flagcdn.com/w320/pl.png"
  },
  {
      "name": "Portugal",
      "flag": "https://flagcdn.com/w320/pt.png"
  },
  {
      "name": "Qatar",
      "flag": "https://flagcdn.com/w320/qa.png"
  },
  {
      "name": "Romania",
      "flag": "https://flagcdn.com/w320/ro.png"
  },
  {
      "name": "Russia",
      "flag": "https://flagcdn.com/w320/ru.png"
  },
  {
      "name": "Rwanda",
      "flag": "https://flagcdn.com/w320/rw.png"
  },
  {
      "name": "Saint Kitts and Nevis",
      "flag": "https://flagcdn.com/w320/kn.png"
  },
  {
      "name": "Saint Lucia",
      "flag": "https://flagcdn.com/w320/lc.png"
  },
  {
      "name": "Saint Vincent and the Grenadines",
      "flag": "https://flagcdn.com/w320/vc.png"
  },
  {
      "name": "Samoa",
      "flag": "https://flagcdn.com/w320/ws.png"
  },
  {
      "name": "San Marino",
      "flag": "https://flagcdn.com/w320/sm.png"
  },
  {
      "name": "Sao Tome and Principe",
      "flag": "https://flagcdn.com/w320/st.png"
  },
  {
      "name": "Saudi Arabia",
      "flag": "https://flagcdn.com/w320/sa.png"
  },
  {
      "name": "Senegal",
      "flag": "https://flagcdn.com/w320/sn.png"
  },
  {
      "name": "Serbia",
      "flag": "https://flagcdn.com/w320/rs.png"
  },
  {
      "name": "Seychelles",
      "flag": "https://flagcdn.com/w320/sc.png"
  },
  {
      "name": "Sierra Leone",
      "flag": "https://flagcdn.com/w320/sl.png"
  },
  {
      "name": "Singapore",
      "flag": "https://flagcdn.com/w320/sg.png"
  },
  {
      "name": "Slovakia",
      "flag": "https://flagcdn.com/w320/sk.png"
  },
  {
      "name": "Slovenia",
      "flag": "https://flagcdn.com/w320/si.png"
  },
  {
      "name": "Solomon Islands",
      "flag": "https://flagcdn.com/w320/sb.png"
  },
  {
      "name": "Somalia",
      "flag": "https://flagcdn.com/w320/so.png"
  },
  {
      "name": "South Africa",
      "flag": "https://flagcdn.com/w320/za.png"
  },
  {
      "name": "South Korea",
      "flag": "https://flagcdn.com/w320/kr.png"
  },
  {
      "name": "South Sudan",
      "flag": "https://flagcdn.com/w320/ss.png"
  },
  {
      "name": "Spain",
      "flag": "https://flagcdn.com/w320/es.png"
  },
  {
      "name": "Sri Lanka",
      "flag": "https://flagcdn.com/w320/lk.png"
  },
  {
      "name": "Sudan",
      "flag": "https://flagcdn.com/w320/sd.png"
  },
  {
      "name": "Suriname",
      "flag": "https://flagcdn.com/w320/sr.png"
  },
  {
      "name": "Sweden",
      "flag": "https://flagcdn.com/w320/se.png"
  },
  {
      "name": "Switzerland",
      "flag": "https://flagcdn.com/w320/ch.png"
  },
  {
      "name": "Syria",
      "flag": "https://flagcdn.com/w320/sy.png"
  },
  {
      "name": "Tajikistan",
      "flag": "https://flagcdn.com/w320/tj.png"
  },
  {
      "name": "Tanzania",
      "flag": "https://flagcdn.com/w320/tz.png"
  },
  {
      "name": "Thailand",
      "flag": "https://flagcdn.com/w320/th.png"
  },
  {
      "name": "Timor-Leste",
      "flag": "https://flagcdn.com/w320/tl.png"
  },
  {
      "name": "Togo",
      "flag": "https://flagcdn.com/w320/tg.png"
  },
  {
      "name": "Tonga",
      "flag": "https://flagcdn.com/w320/to.png"
  },
  {
      "name": "Trinidad and Tobago",
      "flag": "https://flagcdn.com/w320/tt.png"
  },
  {
      "name": "Tunisia",
      "flag": "https://flagcdn.com/w320/tn.png"
  },
  {
      "name": "Turkey",
      "flag": "https://flagcdn.com/w320/tr.png"
  },
  {
      "name": "Turkmenistan",
      "flag": "https://flagcdn.com/w320/tm.png"
  },
  {
      "name": "Tuvalu",
      "flag": "https://flagcdn.com/w320/tv.png"
  },
  {
      "name": "Uganda",
      "flag": "https://flagcdn.com/w320/ug.png"
  },
  {
      "name": "Ukraine",
      "flag": "https://flagcdn.com/w320/ua.png"
  },
  {
      "name": "United Arab Emirates",
      "flag": "https://flagcdn.com/w320/ae.png"
  },
  {
      "name": "United Kingdom",
      "flag": "https://flagcdn.com/w320/gb.png"
  },
  {
      "name": "United States",
      "flag": "https://flagcdn.com/w320/us.png"
  },
  {
      "name": "Uruguay",
      "flag": "https://flagcdn.com/w320/uy.png"
  },
  {
      "name": "Uzbekistan",
      "flag": "https://flagcdn.com/w320/uz.png"
  },
  {
      "name": "Vanuatu",
      "flag": "https://flagcdn.com/w320/vu.png"
  },
  {
      "name": "Vatican City",
      "flag": "https://flagcdn.com/w320/va.png"
  },
  {
      "name": "Venezuela",
      "flag": "https://flagcdn.com/w320/ve.png"
  },
  {
      "name": "Vietnam",
      "flag": "https://flagcdn.com/w320/vn.png"
  },
  {
      "name": "Yemen",
      "flag": "https://flagcdn.com/w320/ye.png"
  },
  {
      "name": "Zambia",
      "flag": "https://flagcdn.com/w320/zm.png"
  },
  {
      "name": "Zimbabwe",
      "flag": "https://flagcdn.com/w320/zw.png"
  }
]

const closeModal = () => {
    setcountryActive(false);
    countryModalRef.current?.dismiss();
}


  const snapPoints = [ '60%', '80%']

  return (
    <GestureHandlerRootView style={{ flex: 1}}> 
      <View style={className`flex-1  ${currentMode === 'light' ? 'bg-[#f7f7f7]' : 'bg-[#000e28]'} `}>
      <BottomSheetModalProvider>
      <SafeAreaView style={className`flex-1 py-6 px-5 items-center ${currentMode === 'light' ? 'bg-[#f7f7f7]' : 'bg-[#000e28]'} `}>
         

          <View style={className`font-bold flex-row mt-6 justify-between items-center w-full pb-6`}>
            <View></View>
            <Text style={className`text-lg font-bold ${getmode.textColorTwo}`}>Upgrade to Level 1</Text>
            <HeaderStatus progress={0.1} leftNum={1} rightNum={7} />
            </View>

          <View style={className`font-bold w-full pb-6`}>
            <Text style={className`text-left text-xl font-bold ${currentMode === 'light' ? 'text-black' : 'text-white'} py-1`}>What is your Nationality?</Text>
            <Text style={className`text-left text-xs font-bold ${currentMode === 'light' ? 'text-black' : 'text-white'} py-1`}>Select the country you are from</Text>
          </View>
      
          <View style={className`w-full flex-row rounded-xl items-center p-2 justify-between  ${ currentMode === 'light' ? 'bg-[#e6edfd]' : 'bg-[#1a263e]'}  `}>
                    <View style={className`flex-row rounded-tl-xl rounded-bl-xl border-r border-gray-300 border-opacity-50 items-center p-2    ${ currentMode === 'light' ? 'bg-[#e6edfd]' : 'bg-[#1a263e]'}`}>
                        <Image source={selectedflag ? selectedflag : require( '../assets/flag.png')} style={className`w-9 h-9 rounded-full`} />
                        
                        <Text style={className` px-1 ${currentMode === 'light' ? 'text-black' : 'text-white'} pl-2`}>{ selectedState ? selectedState : 'Nigeria'}</Text>
                    </View>
                    <View style={className``}>
                      <TouchableOpacity onPress={chooseCountry}>
                        <Text style={className`pr-4 font-semibold ${currentMode === 'light' ? 'text-[#0261ef]' : 'text-[#ffd75b]'}`} >Change</Text>
                      </TouchableOpacity>
                    </View>
          </View>

          
          <View style={className`flex-row gap-4 justify-center absolute bottom-7`}>
            <TouchableOpacity onPress={() => router.push('verification')} style={className`px-2 py-6 w-full ${currentMode === 'light' ? 'bg-[#0261ef]' : 'bg-[#ffd75b]'} rounded-xl flex-row justify-center items-center`}>
              <Text style={className`text-xs font-bold ${currentMode === 'light' ? 'text-white' : 'text-white'} `}>Proceed</Text>
            </TouchableOpacity>
          </View>
          

      </SafeAreaView>

      {
                countryActive && (
                <BlurView style={{ zIndex: 0, width: '100%', height: '100%', position: 'absolute'}} experimentalBlurMethod='dimezisBlurView' tint='regular' intensity={10}>
                    <BottomSheetModal 
                    ref={countryModalRef}
                    index={0}
                    snapPoints={snapPoints}
                    backdropComponent={(props) => (
                        <View {...props} onTouchEnd={closeModal}   />
                    )}
                    backgroundStyle={className`rounded-3xl w-full ${currentMode === 'light' ? 'bg-[#e6edfd]' : 'bg-[#162640]'} `}
                    style={className`rounded-3xl z-3 w-full ${currentMode === 'light' ? 'bg-[#e6edfd]' : 'bg-[#162640]'} `}
                    >
                    <Text style={className`${currentMode === 'light'  ? 'text-black' : 'text-white'}  ${currentMode === 'light' ? 'bg-[#e6edfd]' : 'bg-[#162640]'} font-bold pl-5 py-6 text-left text-sm`}>Choose Country</Text>

                        {
                        
        <FlatList
        data={countries}
        keyExtractor={(item, index) => index.toString()} // Use index as a key if items do not have unique IDs
        renderItem={({ item }) => (
        
                <TouchableOpacity style={styles.container} >
            <View style={className`w-full ${currentMode === 'light' ? 'bg-[#e6edfd]' : 'bg-[#162640]'} flex-row justify-between p-5`}>
                <Text style={className`${currentMode === 'light' ? 'text-black' : 'text-white'} text-sm font-bold`}>{item.name}</Text>
                <View>
                    <RadioButton.Android 
                    value={item.name}
                    status={selectedValue === item.name ? 'checked' : 'unchecked'} 
                    onPress={() => handleRadioPress(item.name, item.flag)}
                    color={selectedValue === item.name ? (currentMode === 'light' ? '#0663f0' : '#ffd75b') : 'gray'}
                    />
                </View>
            
            </View>
        </TouchableOpacity>
        )}
        />
                        } 
                    </BottomSheetModal>
                </BlurView>
            )
            }
        
    </BottomSheetModalProvider>
    </View>
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  scrollContainer: {
    height: 400,
    alignItems: 'center',
    justifyContent: 'center',
  },
  card: {
    flex: 1,
    marginVertical: 0,
    marginHorizontal: 19,
    borderRadius: 5,
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textContainer: {
    backgroundColor: 'rgba(0,0,0, 0.7)',
    paddingHorizontal: 24,
    paddingVertical: 8,
    borderRadius: 5,
  },
  infoText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  normalDot: {
    height: 8,
    width: 8,
    borderRadius: 4,
    backgroundColor: '#ffd75b',
    marginHorizontal: 4,
  },
  indicatorContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 9,
  },
});

export default Nationality;