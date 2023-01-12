import styled from 'styled-components'

export const Container = styled.div`
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
