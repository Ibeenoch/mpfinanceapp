declare module "*.svg" {
    import React from "react";
    import { SvgProps } from "react-native-svg";
    const content: React.FC<SvgProps>;
    export default content;
  }

  declare module '../assets/image' {
    const value: any; 
    export default value;
  }

  declare module '../assets/flag.png' {
    const value: any; 
    export default value;
  }
  
  declare module 'react-native-remote-svg';