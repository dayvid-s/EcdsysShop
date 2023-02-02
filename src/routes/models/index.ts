import type { NativeStackScreenProps } from '@react-navigation/native-stack'

export type RootStackParamList = {
    SignUp: undefined
    SignIn: undefined
    Home: undefined
    MainDrawer: undefined
    Cart: undefined
    About: undefined
    SearchProduct: undefined
}


export type propsStack = NativeStackScreenProps <RootStackParamList>
