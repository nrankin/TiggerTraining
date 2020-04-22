import React from 'react'
import styled from 'styled-components/native'
import theme from '../theme'
import {View, Text} from '../base'

const HeaderView = styled(View)({backgroundColor: theme.colors.lightGrey})

const StyledText = styled(Text)({
  color: theme.colors.black,
  fontSize: theme.fontSizes['6'],
  textAlign: 'center',
  paddingTop: 10,
  paddingBottom: 15,
})

export interface HeaderProps {
  text: string
}

export function Header(props: HeaderProps): React.ReactElement {
  const {text} = props
  return (
    <HeaderView>
      <StyledText>{text || 'Welcome Tigger'}</StyledText>
    </HeaderView>
  )
}
