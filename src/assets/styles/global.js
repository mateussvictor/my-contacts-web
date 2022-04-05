import { createGlobalStyle, css } from 'styled-components'

export default createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  * {
    margin: 0;
    padding: 0;
  }

  html {
    font-size: 62.5%;
  }

  html, body {
    height: 100%;
  }

  ${({ theme }) => css`
    body {
      line-height: 1.5;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;

      font-family: ${theme.font.family};
      font-size: ${theme.font.sizes.medium};

      background: ${theme.colors.mainBg};
    }
  `}


  img, picture, video, canvas, svg {
    display: block;
    max-width: 100%;
  }

  input, button, textarea, select {
    font: inherit;
  }

  button {
    cursor: pointer;
  }

  p, h1, h2, h3, h4, h5, h6 {
    overflow-wrap: break-word;
  }
`
