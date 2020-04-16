import styled from 'styled-components'
import ReactSelect from 'react-select'

export const SelectElement = styled(ReactSelect)`
  .css-1okebmr-indicatorSeparator {
    display: none;
  }
`

export const IndicatorsContainer = styled.div`
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translate3d(0, -50%, 0);
  z-index: 1;

  svg {
    color: ${({ theme: { colors } }) => colors.primary};
  }
`
