import styled from 'styled-components'

export const RadioLabel = styled.label`
  align-items: center;
  box-sizing: border-box;
  color: ${({ theme: { colors } }) => colors.defaultTextColor};
  cursor: pointer;
  display: flex;
  height: 65px;
  margin: 0;
  padding: 0 18px;
  position: relative;
  transition: all 0.2s ease-in-out;
  width: auto;

  ${({ theme: { media } }) => media.mobile`
    margin-bottom: 16px;
    height: 50px;
    padding: 0 16px;
  `}

  &::placeholder {
    color: ${({ theme: { colors } }) => colors.secondary};
  }

  &:focus {
    outline: none;
  }

  &:first-child {
    margin-right: 16px;
  }

  &:hover .form-radio__check,
  &:hover .form-radio__check-bg {
    border-color: ${({ theme: { colors } }) => colors.gray};
  }
`
export const RadioInput = styled.input`
  display: none;
  height: 0;
  width: 0;

  &[type='radio']:checked
    ~ .form-radio__icon-wrapper
    .form-radio__check-active {
    opacity: 1;
  }

  &[type='radio']:checked ~ .form-radio__check-bg {
    border-color: ${({ theme: { colors } }) => colors.primary};
  }
`

export const RadioIconWrapper = styled.div`
  display: block;
  height: 24px;
  margin-right: 16px;
  position: relative;
  width: 24px;
`

export const RadioIconCheck = styled.div`
  border-radius: 50%;
  border: 2px solid ${({ theme: { colors } }) => colors.blackOdd};
  display: block;
  height: 24px;
  left: 0;
  position: absolute;
  top: 0;
  transition: all 0.2s ease-in-out;
  width: 24px;
  z-index: 1;
`

export const RadioIconCheckActive = styled.div`
  display: flex;
  height: 24px;
  left: 0;
  opacity: 0;
  position: absolute;
  top: 0;
  transition: all 0.2s ease-in-out;
  width: 24px;
  z-index: 2;
`

export const RadioLabelText = styled.span``

export const RadioIconCheckBg = styled.div`
  border-radius: 6px;
  border: solid 2px ${({ theme: { colors } }) => colors.blackOdd};
  content: '';
  height: 100%;
  left: 0;
  margin: 0;
  position: absolute;
  top: 0;
  transition: all 0.2s ease-in-out;
  width: 100%;
  z-index: 1;
`
