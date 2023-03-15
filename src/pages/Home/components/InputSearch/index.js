import PropTypes from 'prop-types'

import * as S from './styles'

export default function InputSearch({ value, onChange }) {
  return (
    <S.Container>
      <S.InputSearch
        value={value}
        type="text"
        name="search"
        placeholder="Search contact by name..."
        onChange={onChange}
      />
    </S.Container>
  )
}

InputSearch.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
}
