import { ThemeProvider } from 'styled-components'
import { BrowserRouter as Router } from 'react-router-dom'
import theme from '../../assets/styles/theme'
import Global from '../../assets/styles/global'

import { Header } from '../Header'

import Routes from '../../Routes'

import * as S from './styles'

function App () {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <Global />

        <S.Container>
          <Header />
          <Routes />
        </S.Container>
      </ ThemeProvider>
    </Router>
  )
}

export { App }
