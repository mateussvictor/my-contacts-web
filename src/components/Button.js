import styled, { css } from 'styled-components'

export const Button = styled.button`
  height: 5.2rem;
  padding: 0.8rem ${({ theme }) => theme.spacings.xsmall};
  border: none;
  background: ${({ theme }) => theme.colors.primary};
  border-radius: ${({ theme }) => theme.borderRadius.small};
  color: ${({ theme }) => theme.colors.white};
  font-weight: bold;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.09);
  transition: background 150ms ease-in;

  &:hover {
    background: ${({ theme }) => theme.colors.primaryLight};
  }

  &:active {
    background: ${({ theme }) => theme.colors.primaryDark};
  }

  &[disabled] {
    background-color: #CCC;
    cursor: default;
  }

  ${({ theme, danger }) => danger && css`
    background: ${theme.colors.danger};

    &:hover {
    background: ${({ theme }) => theme.colors.dangerLight};
  }

    &:active {
      background: ${({ theme }) => theme.colors.dangerDark};
    }
  `}
`
