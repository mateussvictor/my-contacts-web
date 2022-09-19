import styled from 'styled-components'

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
`

export const Container = styled.div`
  max-width: 45rem;
  width: 100%;
  background: ${({ theme }) => theme.colors.white};
  padding: ${({ theme }) => theme.spacings.small};
  border-radius: ${({ theme }) => theme.borderRadius.small};
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.04);

  button {
    height: 4rem;
  }
`

export const Title = styled.h4`
  font-size: ${({ theme }) => theme.font.sizes.large};
  color: ${({ theme, danger }) => (
    danger
    ? theme.colors.danger.normal
    : theme.colors.black
  )};
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
