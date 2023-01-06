import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
`

export const InputSearch = styled.input`
  background: ${({ theme }) => theme.colors.white};
  border: none;
  border-radius: ${({ theme }) => theme.borderRadius.large};
  height: 5rem;
  width: 100%;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.04);
  outline: 0;
  padding: 0 1.6rem;

  &::placeholder {
    color: ${({ theme }) => theme.colors.gray.normal};
  }
`
