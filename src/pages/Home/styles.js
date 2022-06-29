import styled, { css } from 'styled-components'

export const InputSearchContainer = styled.div`
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

export const Container = styled.header`
  ${({ theme, hasError }) => css`
    margin-top: ${theme.spacings.medium};
    display: flex;
    justify-content: ${hasError ? 'flex-end' : 'space-between'};
    align-items: center;
    border-bottom: 2px solid ${theme.colors.gray.light};
    padding-bottom: 1.6rem;

    strong {
      font-size: ${theme.font.sizes.xlarge};
      color: ${theme.colors.gray.dark}
    }

    a {
      color: ${theme.colors.primary.normal};
      font-weight: ${theme.font.weight.bold};
      border: 2px solid ${theme.colors.primary.normal};
      border-radius: ${theme.borderRadius.small};
      padding: ${theme.spacings.xxsmall};
      transition: background 200ms ease;

      &:hover {
        color: ${theme.colors.white};
        background: ${theme.colors.primary.normal};
      }
    }
  `}
`

export const ContactsNumber = styled.strong``

export const ListContainer = styled.section`
  margin-top: 3.2rem;
`

export const OrderButton = styled.button`
  ${({ theme }) => css`
    display: flex;
    gap: ${theme.spacings.xxsmall};
    color: ${theme.colors.primary.normal};
    font-weight: ${theme.font.weight.bold};
    border: none;
    background: transparent;
  `}
`

export const ArrowIcon = styled.img`
  transition: transform 150ms ease-in;

  ${({ orderBy }) => orderBy === 'desc' && `
    transform: rotate(180deg)
  `}
`

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
