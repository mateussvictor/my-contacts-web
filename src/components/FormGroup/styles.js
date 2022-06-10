import styled from 'styled-components'

export const Container = styled.div`
  & + & {
    margin-top: 1.6rem;
  }

  small {
    color: ${({ theme }) => theme.colors.danger.normal};
    font-size: 1.2rem;
    margin-top: .8rem;
    display: block;
  }
`
