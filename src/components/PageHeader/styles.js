import styled from 'styled-components'

export const Container = styled.header`
  margin-bottom: 2.4rem;

  a {
    display: flex;
    align-items: center;
    gap: 1.2rem;
    max-width: 6.8rem;
  }

img {
  transform: rotate(-90deg);
}

  h1 {
    font-size: ${({ theme }) => theme.font.sizes.xlarge}
  }
`
