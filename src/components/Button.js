import styled from 'styled-components'

export default styled.button`
  width: 100%;
  height: 5.2rem;
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
`
