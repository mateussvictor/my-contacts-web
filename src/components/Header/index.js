import logo from '../../assets/images/logo.svg'
import * as S from './styles'

function Header () {
  return (
    <S.Container>
      <img src={logo} alt="MyContacts logo" width={201}/>

      <S.InputSearchContainer>
        <input type="text" name="search" placeholder='Search contact by name...'/>
      </S.InputSearchContainer>
    </S.Container>
  )
}

export { Header }
