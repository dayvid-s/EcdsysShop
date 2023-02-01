import React from 'react'
import { Provider } from 'react-redux'
import { App } from './src/App'
import {store}from './src/redux/store'

export default function Index (){
  return(
    // this is the initial point of the app, I edited AppEntry file.
    <Provider store={store} >
      <App></App>
    </Provider>
  )
}
