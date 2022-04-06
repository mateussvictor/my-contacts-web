import styled, { css } from 'styled-components'

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
