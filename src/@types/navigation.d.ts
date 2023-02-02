export declare global {
import { IProduct } from './../redux/features/cartSlice'
    namespace ReactNavigation{
        interface RootParamList  {
            SignUp: product<IProduct>
            SignIn: undefined
            Home: undefined
            MainDrawer: undefined
            Cart: undefined
            About: undefined
            // SearchProduct: {

            // }
            //alert: this must be changed in the future, dont must pass 
            //all this params trough navigation
        }
    }
}