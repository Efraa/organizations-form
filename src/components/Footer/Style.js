import styled from 'styled-components'

export const Container = styled.div`
  border-top: solid 1px ${({ theme: { colors } }) => colors.black};
  position: fixed;
  bottom: 0;
  width: 100%;
  background: ${({ theme: { colors } }) => colors.blackOdd};
  z-index: 1;
`

export const ButtonGroup = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  padding: 12px;

  ${({ theme: { media } }) => media.mobile`
    padding: 10px;
  `}

  button {
    margin: 0 12px;
    width: 100px;

    ${({ theme: { media } }) => media.mobile`
      width: calc(40% - 24px);
    `}
  }

  button:first-child {
    margin-left: 0;
  }

  button:last-child {
    margin-right: 0;
  }
`
