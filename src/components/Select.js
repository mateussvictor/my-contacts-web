import styled from 'styled-components'

export const Select = styled.select`
  width: 100%;
  background: ${({ theme }) => theme.colors.white};
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.04);
  border: 2px solid transparent;
  height: 5.2rem;
  border-radius: ${({ theme }) => theme.borderRadius.small};
  outline: none;
  padding: 0 ${({ theme }) => theme.spacings.xsmall};

  transition: border-color 100ms ease-in;

  &:focus {
    border: 2px solid ${({ theme }) => theme.colors.primary.normal};
  }

  &[disabled] {
    background: ${({ theme }) => theme.colors.gray.light};
    opacity: 1;
  }
`
