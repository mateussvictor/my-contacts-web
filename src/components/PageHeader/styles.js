import styled from 'styled-components'

export const Container = styled.header`
  margin-bottom: 2.4rem;

  a {
    display: flex;
    align-items: center;
    gap: 1.2rem;
    max-width: 6.8rem;
    color: ${({ theme }) => theme.colors.primary.normal};
    font-weight: 700;

    &:visited {
      text-decoration: none;
    }
  }

  img {
    transform: rotate(-90deg);
  }

  h1 {
    font-size: ${({ theme }) => theme.font.sizes.xlarge};
  }
`
