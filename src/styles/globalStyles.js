import { createGlobalStyle } from 'styled-components'
import color from 'color'

export const GlobalStyle = createGlobalStyle`
  html,
  body {
    min-height: 100vh;
    width: 100%;
    margin: 0;
    padding: 0;
  }

  html {
    font-size: 100%;
  }

  body {
    background: ${({ theme: { colors } }) => colors.white};
    font-family: ${({ theme: { fonts } }) => fonts.default};
  }

  a {
    color: ${({ theme: { colors } }) => colors.primary};
    transition: all 0.5s ease-in-out;

    &:hover,
    &:active {
      color: ${({ theme: { colors } }) =>
        color(colors.primary)
          .darken(1)
          .string()};
      text-decoration: none;
    }

    &:focus,
    &:focus:active {
      color: ${({ theme: { colors } }) =>
        color(colors.defaultTextColor)
          .darken(1)
          .string()};
    }
  }

  img,
  svg {
    max-width: 100%;
    height: auto;
  }

  /* Fonts */
  body,
  button,
  input,
  select,
  textarea {
    font-size: 18px;
    color: ${({ theme: { colors } }) => colors.defaultTextColor};
    font-family: ${({ theme: { fonts } }) => fonts.default};
    font-feature-settings: 'pnum';
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    font-style: normal;
    font-variant-numeric: proportional-nums;
    font-weight: normal;
    line-height: 2rem;
    text-rendering: optimizeLegibility;
  }

  h1,
  h2,
  h3 {
    font-family: ${({ theme: { fonts } }) => fonts.primary};
    font-weight: 500;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    color: ${({ theme: { colors } }) => colors.defaultTextColor};
    margin: 0 0 8px 0;
    padding: 0;
  }

  h1 {
    font-size: 44px;
  }

  h2 {
    font-size: 32px;
  }

  h3 {
    font-size: 28px;
  }

  h4 {
    font-size: 24px;
  }

  p {
    margin-bottom: 16px;

    &:last-child {
      margin-bottom: 0;
    }
  }

  p,
  li {
    line-height: 32px;
  }
`
