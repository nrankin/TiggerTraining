import React from 'react'

import {ThemeProvider} from 'styled-components/native'
import theme from '../theme'
import {View, Text, Button, Image} from '../base'
import {Header} from '../components/hellostyledworld'
import {Alert} from 'react-native'

export default function IndependenceScreen({navigation}) {
  return (
    <ThemeProvider theme={theme}>
      <Header text="Day Time" />
      <View flex={3} backgroundColor="lightGrey">
        <Text fontSize={4} paddingY={20} paddingX={20}>
          Expected Outcomes:
        </Text>
        <Text>- no whining when I'm not in the same room as her</Text>
        <Text fontSize={3} paddingY={20} paddingX={20}>
          Exercises:
        </Text>
        <View flex={0.5} marginY={20}>
          <Button
            title="Ko wai he kuri pai?"
            onPress={() => Alert.alert('Ko koe e Tigger!')}
          />
        </View>
      </View>
    </ThemeProvider>
  )
}
