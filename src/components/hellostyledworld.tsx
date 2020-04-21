import React from 'react'
import styled from 'styled-components/native'
import theme from '../theme'

const StyledView = styled.View`
  background-color: ${theme.colors.lightGrey};
`

const StyledText = styled.Text`
  color: ${theme.colors.black};
  font-size: ${theme.fontSizes['6']};
`

export function Header(): React.ReactElement {
  return (
    <StyledView padding={40} marginY={40} marginTop={40}>
      <StyledText align="center">Haere mai e Tigger!</StyledText>
    </StyledView>
  )
}
