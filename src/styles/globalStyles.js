import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    font-family: ${({ theme: { fonts } }) => fonts.primary};
  }

  html,
  body {
    min-height: 100vh;
    width: 100%;
    margin: 0;
    padding: 0;
    overflow: hidden;
  }

  html {
    font-size: 100%;
  }

  body {
    background: ${({ theme: { colors } }) => colors.black};
    padding: 50px 0;

    ${({ theme: { media } }) => media.tablet`
      padding: 20px 0;
    `}
  }

  /* Fonts */
  body,
  button,
  input,
  select,
  textarea {
    font-size: 14px;
    color: ${({ theme: { colors } }) => colors.defaultTextColor};
    font-feature-settings: 'pnum';
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    font-style: normal;
    font-variant-numeric: proportional-nums;
    font-weight: normal;
    line-height: 1.5;
    text-rendering: optimizeLegibility;
  }

  h1,
  h2,
  h3 {
    font-weight: bold;
  }

  h1,
  h2,
  h3,
  h5 {
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
