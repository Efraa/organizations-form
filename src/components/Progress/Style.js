import styled from 'styled-components'

export const ProgressContainer = styled.div`
  background: ${({ theme: { colors } }) => colors.black};
  width: 100%;
  height: 8px;

  ${({ theme: { media } }) => media.mobile`
    height: 4px;
  `}
`

export const ProgressBar = styled.div`
  background: ${({ theme: { colors } }) => colors.primary};
  height: 8px;
  width: ${({ progress }) => `${progress}%`};
  transition: width 0.5s ease-in-out;

  ${({ theme: { media } }) => media.mobile`
    height: 4px;
  `}
`

export const ProgressCircle = styled.svg`
  transform: rotate(-90deg);
  width: 50px;
  height: 50px;
`

export const CircleMeter = styled.circle`
  fill: transparent;
  stroke: ${({ theme: { colors } }) => colors.black};
`

export const CircleValue = styled.circle`
  fill: transparent;
  stroke: ${({ theme: { colors } }) => colors.primary};
  stroke-linecap: round;
  stroke-dasharray: ${({ r }) => Math.PI * (r * 2)};
  stroke-dashoffset: ${({ progress }) => progress};
  transition: stroke-dashoffset 0.5s linear;
`

export const CircleWrapper = styled.div`
  position: absolute;
  top: 14px;
  left: 24px;

  ${({ theme: { media } }) => media.mobile`
    display: none;
  `}
`
