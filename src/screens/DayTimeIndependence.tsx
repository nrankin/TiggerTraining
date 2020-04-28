import React from 'react'

import {ThemeProvider} from 'styled-components/native'
import theme from '../theme'
import {View, Text, Button, Image} from '../base'
import {Header} from '../components/hellostyledworld'

export default function IndependenceScreen({navigation}) {
  return (
    <ThemeProvider theme={theme}>
      <Header text="Day Time Independence" />
      <View flex={3} backgroundColor="lightGrey">
        <Text fontSize={36} paddingY={20} paddingX={20}>
          Training:
        </Text>
        <Text>- exercises:</Text>
      </View>
    </ThemeProvider>
  )
}
