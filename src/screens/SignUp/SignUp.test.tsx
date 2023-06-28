import { render, RenderAPI } from '@testing-library/react-native'
import 'jest-styled-components'
import React from 'react'
import styled from 'styled-components'
import renderer from 'react-test-renderer'
import 'jest-styled-components'
import { ThemeProvider } from 'styled-components'

// Importe o componente que você deseja testar
import { LoginOptions } from '../../components/LoginOptions'
import DiscountBanner from '../../components/DiscountBanner'
import { darkTheme } from '../../theme/dark'
import { Provider } from 'react-redux'
import { store } from '../../redux/store'

// Descreva o teste
describe('SignUp', () => {

  test('renders correctly', () => {
    // Renderize o componente
    render(
      <Provider store={store} >
        <ThemeProvider theme={darkTheme}>

          <DiscountBanner />
        </ThemeProvider>
      </Provider>
    )
  })
})