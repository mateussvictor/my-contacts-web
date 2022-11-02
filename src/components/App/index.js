import { ThemeProvider } from 'styled-components'
import { BrowserRouter as Router } from 'react-router-dom'

import { ToastContainer } from '../Toast/ToastContainer'
import { Header } from '../Header'
import Routes from '../../Routes'

import theme from '../../assets/styles/theme'
import Global from '../../assets/styles/global'

import * as S from './styles'

function App () {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <Global />
        <ToastContainer />

        <S.Container>
          <Header />
          <Routes />
        </S.Container>
      </ ThemeProvider>
    </Router>
  )
}

export { App }
