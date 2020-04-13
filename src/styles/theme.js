import React from 'react'
import { ThemeProvider } from 'styled-components'

const colors = {
  black: '#000000',
  blackOdd: '#222222',
  white: '#ffffff',
  gray: '#A7ABAE',
  required: '#B00020',
}

const breakpoints = {
  sm: '576px',
  md: '768px',
  lg: '991.98px',
  xl: '1200px',
}

const fonts = {
  poppins: "'Poppins', sans-serif",
}

const themeOpts = {
  colors: {
    ...colors,
    primary: colors.pink,
    secondary: colors.white,
    defaultTextColor: colors.blackOdd,
  },
  fonts: {
    ...fonts,
    primary: fonts.poppins,
  },
  breakpoints,
}

const up = ({ size, styles }) =>
  `@media only screen and (min-width: ${size}) {
    ${styles}
  }`

const down = ({ size, styles }) =>
  `@media only screen and (max-width: ${size}) {
    ${styles}
  }`

const media = {
  up,
  down,
  mobile: styles =>
    down({
      size: breakpoints.sm,
      styles,
    }),

  tablet: styles =>
    down({
      size: breakpoints.lg,
      styles,
    }),

  desktop: styles =>
    up({
      size: breakpoints.lg,
      styles,
    }),

  desktopFull: styles =>
    up({
      size: breakpoints.xl,
      styles,
    }),
}

export const Theme = ({ children }) => (
  <ThemeProvider theme={{ ...themeOpts, media }}>{children}</ThemeProvider>
)
