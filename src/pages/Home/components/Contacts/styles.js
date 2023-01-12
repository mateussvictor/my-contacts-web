import styled, { css } from 'styled-components'

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
