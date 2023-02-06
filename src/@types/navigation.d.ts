export declare global {
import { IProduct } from './../redux/features/cartSlice'
    namespace ReactNavigation{
        interface RootParamList  {
            SignUp: undefined
            SignIn: undefined
            Home: product<IProduct>
            MainDrawer: undefined
            Cart: undefined
            About: {name: string}
            // SearchProduct: {

            // }
            //alert: this must be changed in the future, dont must pass 
            //all this params trough navigation
        }
    }
}