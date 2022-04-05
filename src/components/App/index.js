import { ThemeProvider } from 'styled-components'

import Global from '../../assets/styles/global'
import theme from '../../assets/styles/theme'

import { Header } from '../Header'

import { Container } from './styles'

function App () {
  return (
    <ThemeProvider theme={theme}>
      <Global />
      <Container>
        <Header />
      </Container>
    </ ThemeProvider>
  )
}

export { App }
