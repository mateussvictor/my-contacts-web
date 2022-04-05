import styled from 'styled-components'

export const Container = styled.header`
  margin-top: 7.4rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 4.8rem;
`

export const InputSearchContainer = styled.div`
  width: 100%;

  input {
    background: ${({ theme }) => theme.colors.white};
    border: none;
    border-radius: ${({ theme }) => theme.borderRadius.large};
    height: 5rem;
    width: 100%;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.04);
    outline: 0;
    padding: 0 1.6rem;

    &::placeholder {
      color: ${({ theme }) => theme.colors.gray};
    }
  }
`
