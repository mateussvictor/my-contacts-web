import styled, { css, keyframes } from 'styled-components'

const messageIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(100px);
  }

  to {
    opacity: 1;
    transform: translateY(0px);
  }
`

const messageOut = keyframes`
  from {
    opacity: 1;
    transform: translateY(0px);
  }

  to {
    opacity: 0;
    transform: translateY(100px);
  }
`

const containerModifiers = {
  default: css`
    background: ${({ theme }) => theme.colors.primary.normal};
  `,
  success: css`
    background: ${({ theme }) => theme.colors.success.normal};
  `,
  danger: css`
    background: ${({ theme }) => theme.colors.danger.normal};
  `
}

export const Container = styled.div`
  padding: 1.6rem 3.2rem;
  background: ${({ theme }) => theme.colors.primary.normal};
  color: #fff;
  border-radius: 4px;
  box-shadow: 0px 20px 20px -16px rgba(0, 0, 0, 0.25);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: .8rem;
  cursor: pointer;
  animation: ${messageIn} 0.3s;

  ${({ isLeaving }) => isLeaving && css`animation: ${messageOut} 0.2s forwards;`}

  ${({ type }) => containerModifiers[type] || containerModifiers.default};

  & + & {
    margin-top: 1.2rem;
  }
`
