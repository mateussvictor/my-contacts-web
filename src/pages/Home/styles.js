import styled, { css } from 'styled-components'

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

export const Container = styled.header`
  ${({ theme }) => css`
    margin-top: ${theme.spacings.medium};

    display: flex;
    justify-content: space-between;
    align-items: center;

    strong {
      font-size: ${theme.font.sizes.xlarge};
      color: ${theme.colors.grayDark}
    }

    a {
      color: ${theme.colors.primary};
      font-weight: ${theme.font.bold};
      border: 2px solid ${theme.colors.primary};
      border-radius: ${theme.borderRadius.small};
      padding: ${theme.spacings.xxsmall};
      transition: background 200ms ease;

      &:hover {
        color: ${theme.colors.white};
        background: ${theme.colors.primary};
      }
    }
  `}
`

export const ContactsNumber = styled.strong``

export const ListContainer = styled.section`
  ${({ theme }) => css`
    margin-top: 3.2rem;
  `}
`

export const ListHeader = styled.header``

export const OrderButton = styled.button`
  ${({ theme }) => css`
    display: flex;
    gap: ${theme.spacings.xxsmall};
    color: ${theme.colors.primary};
    font-weight: ${theme.font.bold};
    border: none;
    background: transparent;
  `}
`

export const ArrowIcon = styled.img``
