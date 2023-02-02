export declare global {
    namespace ReactNavigation{
        interface RootParamList  {
            SignUp: undefined
            SignIn: undefined
            Home: undefined
            MainDrawer: undefined
            Cart: undefined
            About: undefined
            SearchProduct: undefined
            Feed: { sort: 'latest' | 'top' } | undefined;
        
        }
    }
}