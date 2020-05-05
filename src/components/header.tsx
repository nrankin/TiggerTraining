import React from 'react'
import styled from 'styled-components/native'
import theme from '../theme'
import {View, Text} from '../base'

// const HeaderView = styled(View)({backgroundColor: theme.colors.lightGrey})

const StyledText = styled(Text)({
  color: theme.colors.black,
  textAlign: 'center',
  paddingTop: 10,
  paddingBottom: 15,
})

export interface HeaderProps {
  text: string
}

export function LargeHeader(props: HeaderProps): React.ReactElement {
  const {text} = props
  return (
    <View backgroundColor="lightGrey">
      <StyledText fontSize={5}>{text || 'Welcome Tigger'}</StyledText>
    </View>
  )
}

export function MediumHeader(props: HeaderProps): React.ReactElement {
  const {text} = props
  return (
    <View backgroundColor="teal">
      <StyledText fontSize={3}>{text}</StyledText>
    </View>
  )
}

export function SmallHeader(props: HeaderProps): React.ReactElement {
  const {text} = props
  return (
    <View padding={2}>
      <StyledText fontSize={3}>{text}</StyledText>
    </View>
  )
}
