import styled from 'styled-components'
import color from 'color'

export const FieldTextarea = styled.textarea`
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  box-sizing: border-box;
  padding: 16px 18px;
  width: 100%;
  background: ${({ theme: { colors } }) => colors.blackOdd};
  border-radius: 6px;
  border: 2px solid transparent;
  color: ${({ theme: { colors } }) => colors.white};
  transition: all 0.2s ease-in-out;
  margin: 0;
  line-height: normal;
  height: 115px;
  resize: none;

  &::placeholder {
    color: ${({ theme: { colors } }) => colors.gray};
  }

  &:hover {
    border: 2px solid ${({ theme: { colors } }) => colors.gray};
  }

  &:focus {
    outline: none;
    border-color: ${({ theme: { colors } }) => colors.primary};
    box-shadow: 0 0 0 4px
      ${({ theme: { colors } }) =>
        color(colors.primary)
          .alpha(0.1)
          .string()};
  }

  ${({ theme: { media } }) => media.mobile`
    height: 90px;
    padding: 12px 16px;
  `}
`
