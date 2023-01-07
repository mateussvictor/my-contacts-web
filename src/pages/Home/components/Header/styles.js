import styled, { css } from 'styled-components'

export const Container = styled.header`
  ${({ theme }) => css`
    margin-top: ${theme.spacings.medium};
    display: flex;
    justify-content: ${({ justifyContent }) => justifyContent};
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
