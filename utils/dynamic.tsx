import { useColorScheme } from 'react-native';
import tw from 'twrnc'; // Assuming you are using twrnc for tailwindcss styling

const useThemeStyles = () => {
  const currentMode = useColorScheme();

  return {
    textColor: currentMode === 'light' ? 'text-white' : 'text-white',
    textColorTwo: currentMode === 'light' ? 'text-black' : 'text-white',
    textColorTwoInverse: currentMode === 'light' ? 'text-white' : 'text-black',
    fillColor: currentMode === 'light' ? '#0261ef' : '#ffd75b', // black/white
    fillColorInverse: currentMode === 'light' ? 'white' : 'black', // white/black
    fillPhotoColor: currentMode === 'light' ? '#0261ef' : '#ffffff',
    strokeColor: currentMode === 'light' ? '#0261ef' : '#ffd75b',
    borderColor: currentMode === 'light' ? 'border-[#ffd75b]' : 'border-[#0261ef]',
    backGroundBlueColor: currentMode === 'light' ? 'bg-[#141f71]' : 'bg-[#ffd75b]',
    backGroundlightYellowColor: currentMode === 'light' ? 'bg-[#f2f7fe]' : 'bg-[#192535]',
    backGroundColor: currentMode === 'light' ? 'bg-[#0261ef]' : 'bg-[#ffd75b]',
    backGroundColorTwo: currentMode === 'light' ?  'bg-[#f7f7f7]' : 'bg-[#0e1a32]',
    lightBackGroundColor: currentMode === 'light' ? 'bg-[#e6edfd]' : 'bg-[#343631]',
    lighterBackGroundColor: currentMode === 'light' ? 'bg-white' : 'bg-[#0e1a32]',
    firstLayerBgColor: currentMode === 'light' ? 'bg-[#e6edfd]' : 'bg-[#0e1a32]',
    secondLayerBgColor: currentMode === 'light' ? 'bg-[#f4f5f9]' : 'bg-[#1a263e]',
    secondLayerBgColorblue: currentMode === 'light' ? 'bg-[#e6edfd]' : 'bg-[#1a263e]',
    secondLayerBgColorAsh: currentMode === 'light' ? 'bg-[#fff]' : 'bg-[#1a263e]',
    thirdLayerBgColor: currentMode === 'light' ? 'bg-[#f4f5f9]' : 'bg-[#36454f]',
    buttonBgColor: currentMode === 'light' ? 'bg-[#0261ef] text-white' : 'bg-[#ffd75b] text-black',

    dasboardBackgroundFirstLayerColor: currentMode === 'light' ? 'bg-[#f7f7f7]' : 'bg-[#000e28]', //dark white/dark black
    dasboardBackgroundSecondLayerColor: currentMode === 'light' ? 'bg-[#ffffff]' : 'bg-[#0e1a32]', // light white/light black
    dasboardBackgroundButtonColor: currentMode === 'light' ? 'bg-[#0261ef]' : 'bg-[#ffd75b]', // light white/light black
    dasboardSvgButton: currentMode === 'light' ? '#0261ef' : '#ffd75b', // blue/orange
    dasboardTextButton: currentMode === 'light' ? 'text-[#0261ef]' : 'text-[#ffd75b]', // blue/orange
    inactiveBtnText: currentMode === 'dark' ? 'text-[#675e3d]' : 'text-[#999999]', // 
    inactiveBackground: currentMode === 'light' ? 'bg-[#e5e5e5]' : 'bg-[#19222c]', //
    activeBackground: currentMode === 'light' ? 'bg-[#0261ef]' : 'bg-[#ffd75b]', //
  };
};

export default useThemeStyles;
