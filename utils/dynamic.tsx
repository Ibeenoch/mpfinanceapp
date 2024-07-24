import { useColorScheme } from 'react-native';
import tw from 'twrnc'; // Assuming you are using twrnc for tailwindcss styling

const useThemeStyles = () => {
  const currentMode = useColorScheme();

  return {
    textColor: currentMode === 'light' ? 'text-white' : 'text-white',
    fillColor: currentMode === 'light' ? '#0261ef' : '#ffd75b',
    fillPhotoColor: currentMode === 'light' ? '#0261ef' : '#ffffff',
    strokeColor: currentMode === 'light' ? '#0261ef' : '#ffd75b',
    borderColor: currentMode === 'light' ? 'border-[#ffd75b]' : 'border-[#0261ef]',
    backGroundBlueColor: currentMode === 'light' ? 'bg-[#141f71]' : 'bg-[#0e1a32]',
    backGroundColor: currentMode === 'light' ? 'bg-[#0261ef]' : 'bg-[#ffd75b]',
    lightBackGroundColor: currentMode === 'light' ? 'bg-[#e6edfd]' : 'bg-[#343631]',
    lighterBackGroundColor: currentMode === 'light' ? 'bg-white' : 'bg-[#0e1a32]',
    firstLayerBgColor: currentMode === 'light' ? 'bg-[#e6edfd]' : 'bg-[#1a263e]',
    secondLayerBgColor: currentMode === 'light' ? 'bg-[#f4f5f9]' : 'bg-[#0e1a32]',
  };
};

export default useThemeStyles;
