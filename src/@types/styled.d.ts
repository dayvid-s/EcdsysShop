import 'styled-components/native'

declare module 'styled-components' {
  export interface DefaultTheme {

    colors: {
      backGround: string;
      onBackGround: string;
      secondary: string;
      rose: string;
      roseBlue: string;
      gray300: string;
      opacity?: number
    };
  }
}