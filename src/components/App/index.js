import { ThemeProvider } from 'styled-components'

import theme from '../../assets/styles/theme'
import Global from '../../assets/styles/global'

import { Header } from '../Header'
import { ContactsList } from '../ContactsList'

import * as S from './styles'

function App () {
  return (
    <ThemeProvider theme={theme}>
      <Global />
      <S.Container>
        <Header />
        <ContactsList />
      </S.Container>
    </ ThemeProvider>
  )
}

export { App }
