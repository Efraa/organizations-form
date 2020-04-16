import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      black: string
      blackOdd: string
      white: string
      blue: string
      gray: string
      primary: string
      secondary: string
      defaultTextColor: string
    },
    breakpoints: {
      sm: string
      md: string
      lg: string
      xl: string
    },
    fonts: {
      primary: string
      poppins: string
    },
    media: {
      up: (props: {
        size: string,
        styles: string,
      }) => string

      down: (props: {
        size: string,
        styles: string,
      }) => string

      mobile: (styles: string) => string
      tablet: (styles: string) => string
      desktop: (styles: string) => string
      desktopFull: (styles: string) => string
    }
  }
}
