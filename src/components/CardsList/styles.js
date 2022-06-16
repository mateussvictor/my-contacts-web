import styled, { css } from 'styled-components'

export const CardsContainer = styled.section`
  margin: ${({ theme }) => theme.spacings.small} 0;
  gap: ${({ theme }) => theme.spacings.small};
  display: flex;
  flex-direction: column;
`

export const Card = styled.ul`
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.04);
  list-style: none;
`

export const CardItem = styled.li`
  ${({ theme }) => css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: ${theme.colors.white};
    padding: ${theme.spacings.small};
    border-radius: ${theme.borderRadius.small};
  `}
`

export const CardInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacings.xxsmall};
`

export const ContactName = styled.h3`
 ${({ theme }) => css`
    margin-bottom: ${theme.spacings.xxsmall};
    gap: ${theme.spacings.xsmall};
    display: flex;
    align-items: center;

    small {
      background: ${theme.colors.primary.light};
      border-radius: ${theme.borderRadius.small};
      color: ${theme.colors.white};
      font-size: 1.2rem;
      padding: .4rem .8rem;
      text-transform: uppercase;
    }
  `}
`

export const ContactEmail = styled.p`
  color: ${({ theme }) => theme.colors.gray.normal};
`

export const ContactPhone = styled.p`
  color: ${({ theme }) => theme.colors.gray.normal};
`

export const CardActionsBox = styled.div`
  display: flex;
  gap: 1.8rem;

  button {
    background: transparent;
    border: none;
  }
`
