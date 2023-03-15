import PropTypes from 'prop-types'

import magnifier from '../../../../assets/images/magnifier-question.svg'

import * as S from './styles'

export default function SearchNotFound({ searchTerm }) {
  return (
    <S.Container>
      <img src={magnifier} alt="Magnifier" />

      <span>
        Result not found for <strong>&quot;{searchTerm}&quot;</strong>
      </span>
    </S.Container>
  )
}

SearchNotFound.propTypes = {
  searchTerm: PropTypes.string
}
