import React from 'react'
import styled from 'styled-components/native'
import theme from './theme'
import {Text, View} from './base'

const Behaviors = (props) => (
  <Container>
    <Name>Independence</Name>
    <Name>Heeling</Name>
    <Name>Greeting</Name>
    <Name>Recall</Name>
    <Name>Hugs</Name>
  </Container>
)

export default Behaviors

const Container = styled(View)({})

const Name = styled(Text)({
  color: theme.colors.navy,
  fontSize: theme.fontSizes['2'],
  fontWeight: 600,
  marginLeft: 40,
  padding: 5,
})
