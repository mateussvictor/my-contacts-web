import styled, { css } from 'styled-components'

export const ListContainer = styled.section`
  margin-top: 3.2rem;
`

export const EmptyListContainer = styled.div`
  display: inline-block;
  display: flex;
  flex-direction: column;
  align-items: center;

  p {
    color: ${({ theme }) => theme.colors.gray.normal};
    text-align: center;
    margin-top: 1.6rem;

    strong {
      color: ${({ theme }) => theme.colors.primary.normal};
    }
  }
`

export const EmptyBox = styled.img``

export const SearchNotFoundContainer = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 2.4rem;

  span {
    color: ${({ theme }) => theme.colors.gray.normal};
    word-break: break-word;
  }
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
