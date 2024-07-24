import { useColorScheme } from 'react-native';
import tw from 'twrnc'; // Assuming you are using twrnc for tailwindcss styling

const useThemeStyles = () => {
  const currentMode = useColorScheme();

  return {
    textColor: currentMode === 'light' ? 'text-white' : 'text-white',
    textColorTwo: currentMode === 'light' ? 'text-black' : 'text-white',
    fillColor: currentMode === 'light' ? '#0261ef' : '#ffd75b',
    fillPhotoColor: currentMode === 'light' ? '#0261ef' : '#ffffff',
    strokeColor: currentMode === 'light' ? '#0261ef' : '#ffd75b',
    borderColor: currentMode === 'light' ? 'border-[#ffd75b]' : 'border-[#0261ef]',
    backGroundBlueColor: currentMode === 'light' ? 'bg-[#141f71]' : 'bg-[#ffd75b]',
    backGroundColor: currentMode === 'light' ? 'bg-[#0261ef]' : 'bg-[#ffd75b]',
    backGroundColorTwo: currentMode === 'light' ?  'bg-[#f7f7f7]' : 'bg-[#0e1a32]',
    lightBackGroundColor: currentMode === 'light' ? 'bg-[#e6edfd]' : 'bg-[#343631]',
    lighterBackGroundColor: currentMode === 'light' ? 'bg-white' : 'bg-[#0e1a32]',
    firstLayerBgColor: currentMode === 'light' ? 'bg-[#e6edfd]' : 'bg-[#0e1a32]',
    secondLayerBgColor: currentMode === 'light' ? 'bg-[#f4f5f9]' : 'bg-[#1a263e]',
    secondLayerBgColorblue: currentMode === 'light' ? 'bg-[#e6edfd]' : 'bg-[#1a263e]',
    thirdLayerBgColor: currentMode === 'light' ? 'bg-[#f4f5f9]' : 'bg-[#36454f]',
  };
};

export default useThemeStyles;
