import styled, { css } from 'styled-components'

export const StyledButton = styled.button`
  height: 5.2rem;
  padding: 0.8rem ${({ theme }) => theme.spacings.xsmall};
  border: none;
  background: ${({ theme }) => theme.colors.primary.normal};
  border-radius: ${({ theme }) => theme.borderRadius.small};
  color: ${({ theme }) => theme.colors.white};
  font-weight: bold;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.09);
  transition: background 150ms ease-in;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background: ${({ theme }) => theme.colors.primary.light};
  }

  &:active {
    background: ${({ theme }) => theme.colors.primary.dark};
  }

  &[disabled] {
    background-color: #CCC;
    cursor: default;
  }

  ${({ theme, danger }) => danger && css`
    background: ${theme.colors.danger.normal};

    &:hover {
    background: ${({ theme }) => theme.colors.danger.light};
  }

    &:active {
      background: ${({ theme }) => theme.colors.danger.dark};
    }
  `}
`
