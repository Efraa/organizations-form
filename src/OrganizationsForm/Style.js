import styled from 'styled-components'
import { Row, Container, Col } from 'reactstrap'

export const Wrapper = styled(Row)`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const FormWrapper = styled(Col)`
  min-height: 250px;
  max-height: calc(100vh - 350px);
  overflow: hidden;
  overflow-y: auto;

  ${({ theme: { media } }) => media.mobile`
    max-height: calc(100vh - 225px);
    min-height: 150px;
  `}

  &::-webkit-scrollbar {
    width: 6px;
    border-radius: 8px;

    ${({ theme: { media } }) => media.mobile`
      width: 4px;
    `}
  }

  &::-webkit-scrollbar-track {
    background: ${({ theme: { colors } }) => colors.blackOdd};
    border-radius: 8px;
  }

  &::-webkit-scrollbar-thumb,
  &::-webkit-scrollbar-thumb:hover {
    background: ${({ theme: { colors } }) => colors.primary};
    border-radius: 8px;
  }
`

export const FormContainer = styled(Container)`
  overflow: hidden;
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

export const StepsWrapper = styled.div`
  position: relative;
  width: 100%;
  flex-grow: 1;
`

export const Title = styled.h1`
  font-size: 50px;
  line-height: 55px;
  color: ${({ theme: { colors } }) => colors.white};
  max-width: 450px;

  ${({ theme: { media } }) => media.mobile`
    font-size: 30px;
    margin-bottom: 16px;
    max-width: 300px;
    line-height: 35px;
  `}
`

export const StepName = styled.h3`
  font-size: 22px;
  color: ${({ theme: { colors } }) => colors.white};
  font-weight: 500;
  margin-top: 32px;
  margin-bottom: 20px;

  ${({ theme: { media } }) => media.mobile`
    font-size: 18px;
    margin-bottom: 16px;
    margin-top: 20px;
  `}
`
