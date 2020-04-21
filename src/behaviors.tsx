import React from 'react'
import styled from 'styled-components/native'
import theme from './theme'

const Behaviors = (props) => (
  <Container>
    <Name>Heeling</Name>
    <Name>Selective Chewing</Name>
    <Name>Greeting</Name>
    <Name>Recall</Name>
  </Container>
)

export default Behaviors

const Container = styled.View``

const Name = styled.Text`
  color: ${theme.colors.navy};
  font-size: ${theme.fontSizes['2']};
  font-weight: 600;
  margin-left: 40px;
  padding: 5px;
`
