import ReactDOM from 'react-dom'
import * as S from './styles'

function Loader () {
  return ReactDOM.createPortal(
    <S.Overlay>
      <S.Loader></S.Loader>
    </S.Overlay>,
    document.getElementById('loader-root')
  )
}

export { Loader }
