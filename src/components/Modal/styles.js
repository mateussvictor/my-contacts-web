import styled, { keyframes, css } from 'styled-components'

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`

const fadeOut = keyframes`
  from { opacity: 1; }
  to { opacity: 0; }
`

const scaleIn = keyframes`
  from { transform: scale(0); }
  to { transform: scale(1); }
`

const scaleOut = keyframes`
  from { transform: scale(1); }
  to { transform: scale(0); }
`

export const Overlay = styled.div`
  background: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(3px);
  position: fixed;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  animation: ${fadeIn} 0.3s forwards;

  ${({ isLeaving }) =>
    isLeaving &&
    css`
      animation: ${fadeOut} 0.3s forwards;
    `}
`

export const Container = styled.div`
  max-width: 45rem;
  width: 100%;
  background: ${({ theme }) => theme.colors.white};
  padding: ${({ theme }) => theme.spacings.small};
  border-radius: ${({ theme }) => theme.borderRadius.small};
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.04);
  animation: ${scaleIn} 0.3s forwards;

  button {
    height: 4rem;
  }

  ${({ isLeaving }) =>
    isLeaving &&
    css`
      animation: ${scaleOut} 0.3s forwards;
    `}
`

export const Title = styled.h4`
  font-size: ${({ theme }) => theme.font.sizes.large};
  color: ${({ theme, danger }) =>
    danger ? theme.colors.danger.normal : theme.colors.black};
`

export const Body = styled.p`
  margin-top: ${({ theme }) => theme.spacings.xsmall};
`

export const Footer = styled.footer`
  margin-top: ${({ theme }) => theme.spacings.medium};
  display: flex;
  align-items: center;
  justify-content: end;
  gap: 1.6rem;

  .cancel-btn {
    background: transparent;
    border: none;
    color: ${({ theme }) => theme.colors.gray.normal};
    transition: color 150ms ease-in;
    padding: 0 ${({ theme }) => theme.spacings.xsmall};

    &:hover {
      color: ${({ theme }) => theme.colors.black};
    }

    &[disabled] {
      cursor: not-allowed;
    }
  }
`
