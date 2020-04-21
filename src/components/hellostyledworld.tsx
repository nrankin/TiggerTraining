import React from 'react'
import styled from 'styled-components/native'
import theme from '../theme'
import {View, Text} from '../base'

const StyledView = styled(View)({backgroundColor: theme.colors.lightGrey})

const StyledText = styled(Text)({
  color: theme.colors.black,
  fontSize: theme.fontSizes['6'],
  textAlign: 'center',
})

export function Header(): React.ReactElement {
  return (
    <StyledView padding={40} marginY={40} marginTop={40}>
      <StyledText>Haere mai e Tigger!</StyledText>
    </StyledView>
  )
}
