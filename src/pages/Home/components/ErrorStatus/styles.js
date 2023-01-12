import styled from 'styled-components'

export const ErrorContainer = styled.div`
  margin-top: 1.6rem;
  display: flex;
  align-items: center;
  gap: 2.4rem;
`

export const ErrorIcon = styled.img``

export const ErrorDetails = styled.div``

export const ErrorMessage = styled.strong`
  font-size: 2.2rem;
  color: ${({ theme }) => theme.colors.danger.normal};
  display: block;
  margin-bottom: .8rem;
`
