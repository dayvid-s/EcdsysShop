import { render, RenderAPI } from '@testing-library/react-native'
import 'jest-styled-components'
import React from 'react'
import styled from 'styled-components/native'
import renderer from 'react-test-renderer'
import 'jest-styled-components'
import { ThemeProvider } from 'styled-components'

// Importe o componente que você deseja testar
import BottomOfThePageAbout from '../../components/BottomOfThePageAbout'
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

          <BottomOfThePageAbout product={{
            'productId': '6',
            'category': 'gamer',
            'name': 'XBOX SERIES X',
            'price': 3989,
            'mainPhoto': 'https://assets.xboxservices.com/assets/fb/d2/fbd2cb56-5c25-414d-9f46-e6a164cdf5be.png?n=XBX_A-BuyBoxBGImage01-D.png',
            'secondaryPhotos': ['hhttps://assets.xboxservices.com/assets/fb/d2/fbd2cb56-5c25-414d-9f46-e6a164cdf5be.png?n=XBX_A-BuyBoxBGImage01-D.png',
              'https://assets.xboxservices.com/assets/b2/51/b2518691-0175-4bf4-8c2e-9086e8a2c2db.png?n=XBX_A-BuyBoxBGImage02-D.png',
              'https://assets.xboxservices.com/assets/39/66/39663ac6-e98d-44ce-8fc1-f15a796fe6d6.png?n=XBX_A-BuyBoxBGImage03-D.png',
              'https://assets.xboxservices.com/assets/13/85/138560bf-8a3b-47d2-b32c-ab5a053a25ab.png?n=XBX_A-BuyBoxBGImage04-D.png'
            ],
            'description': 'Com seu console Xbox Series x você terá entretenimento garantido todos os dias. Sua tecnologia foi criada para colocar novos desafios para jogadores novatos e especialistas. A nova geração de consoles é comandada por Xbox Series x que chegou ao mercado para surpreender a todos. Sua potência e alto desempenho permitirão que você reduza consideravelmente as horas de download de jogos e conteúdo em comparação com outros consoles. Além disso, você poderá jogar por horas enquanto se diverte com jogadores de todo o mundo.',
            'specifications': ['12'],
            'rating': 4.9,
            'evaluationsTotal': 347,
            'isDayOffer': false,
            'isRecommended': false,
            'knownBy': 'games'
          }} />
        </ThemeProvider>
      </Provider>
    )
  })
})