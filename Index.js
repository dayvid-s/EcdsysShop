import React, { useEffect } from 'react';
import { Provider, useSelector } from 'react-redux'
import App from './App'
import store from './src/redux/store'

export default function Index (){
    return(
    // this is the initial point of the app, I edited AppEntry file.
    <Provider store={store} >
        <App></App>
    </Provider>
    )
}
