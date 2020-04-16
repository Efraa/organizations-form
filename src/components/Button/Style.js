import styled from 'styled-components'
import color from 'color'

export const ButtonElement = styled.button`
  background-color: ${({ theme: { colors } }) => colors.blue};
  color: ${({ theme: { colors } }) => colors.white};
  padding: 12px 24px;
  font-size: 14px;
  font-weight: 500;
  border-radius: 100px;
  outline: none;
  cursor: pointer;
  border-color: transparent;
  text-decoration: none;
  letter-spacing: 0.5px;
  transition: all 0.2s ease-in-out;
  border: solid 3px ${({ theme: { colors } }) => colors.blackOdd};

  &:hover {
    background-color: ${({ theme: { colors } }) =>
      color(colors.primary)
        .darken(0.2)
        .string()};
    outline: none;
  }

  &:focus,
  &:focus:active {
    outline: none;
    background-color: ${({ theme: { colors } }) =>
      color(colors.primary)
        .darken(0.1)
        .string()};
    box-shadow: 0 0 0 4px
      ${({ theme: { colors } }) =>
        color(colors.primary)
          .alpha(0.4)
          .string()};
  }

  &:active,
  &:not(:disabled):not(.disabled):active {
    background-color: ${({ theme: { colors } }) =>
      color(colors.primary)
        .darken(0.3)
        .string()};
    outline: none;
  }

  ${({ secondary, theme: { colors } }) =>
    secondary &&
    `
      background-color: ${colors.white};
      color: ${colors.black};

      &:active,
      &:hover,
      &:not(:disabled):not(.disabled).active,
      &:not(:disabled):not(.disabled):active {
        background-color: ${colors.white};
      }

      &:focus,
      &:focus:active {
        outline: none;
        background-color: ${colors.white};
      }
    `}

  ${({ disabled }) =>
    disabled &&
    `
    &,
    &:disabled {
      user-select: none;
      pointer-events: none;
      cursor: not-allowed;
      opacity: 0.5;
    }
  `}

  ${({ theme: { media } }) => media.mobile`
    padding: 8px 20px;

    svg {
      width: 16px;
    }
  `}
`
