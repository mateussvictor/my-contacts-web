import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 2.4rem;

  span {
    color: ${({ theme }) => theme.colors.gray.normal};
    word-break: break-word;
  }
`
