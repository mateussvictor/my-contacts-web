import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

import arrow from '../../assets/icons/arrow.svg'

import * as S from './styles.js'

function PageHeader ({ title }) {
  return (
    <S.Container>
        <Link to="/">
          <img src={arrow} alt="Back" />
          <span>Back</span>
        </Link>
      <h1>{title}</h1>
    </S.Container>
  )
}

export { PageHeader }

PageHeader.propTypes = {
  title: PropTypes.string.isRequired
}
