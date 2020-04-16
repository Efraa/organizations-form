import styled from 'styled-components'

export const FieldLabel = styled.label`
  margin: 0 0 24px 0;
  padding: 0;
  width: ${({ widthAuto }) => (widthAuto ? 'auto' : '100%')};

  ${({ theme: { media } }) => media.mobile`
    width: 100%;
  `}

  .form-select__control {
    ${({ theme: { media } }) => media.mobile`
      height: 50px;
    `}
  }
`

export const FieldLabelText = styled.span`
  margin-bottom: 10px;
  font-size: 16px;
  display: block;

  ${({ theme: { media } }) => media.mobile`
    font-size: 14px;
    margin-bottom: 8px;
  `}
`
