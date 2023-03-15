import { ThemeProvider } from 'styled-components'
import { BrowserRouter } from 'react-router-dom'

import { ToastContainer } from '../Toast/ToastContainer'
import { Header } from '../Header'
import Router from '../../Router'

import theme from '../../assets/styles/theme'
import Global from '../../assets/styles/global'

import * as S from './styles'

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <Global />
        <ToastContainer />

        <S.Container>
          <Header />
          <Router />
        </S.Container>
      </ThemeProvider>
    </BrowserRouter>
  )
}

export { App }
