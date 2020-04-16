import styled, { keyframes } from 'styled-components'

const animation = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`

export const Wrapper = styled.div`
  align-items: center;
  background: ${({ theme: { colors } }) => colors.blackOdd};
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;
  z-index: 10;
  animation: ${animation} 0.3s;
`

const loading = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`

export const Container = styled.div`
  width: 90px;
  height: 90px;
  border: 4px solid ${({ theme: { colors } }) => colors.gray};
  border-top: 4px solid ${({ theme: { colors } }) => colors.primary};
  border-radius: 50%;
  animation: ${loading} 0.9s linear infinite;
  transition: all 0.3s ease-in-out;

  ${({ theme: { media } }) => media.mobile`
    width: 60px;
    height: 60px;
  `}
`
