import React from 'react'

import {ThemeProvider} from 'styled-components/native'
import theme from '../theme'
import {View, Text, Button, Image} from '../base'
import {Header} from '../components/hellostyledworld'
import {Alert} from 'react-native'

export default function GreetingScreen({navigation}) {
  return (
    <ThemeProvider theme={theme}>
      <Header text="Greetings" />
      <View flex={3} backgroundColor="lightGrey">
        <Text fontSize={36} paddingY={20} paddingX={20}>
          Training:
        </Text>
        <Text>- Dog to Dog greeting nicely</Text>
        <Text>- Dog to person greeting nicely</Text>
      </View>
      <View flex={0.5} marginY={20}>
        <Button
          title="Ko wai he kuri pai?"
          onPress={() => Alert.alert('Ko koe e Tigger!')}
        />
      </View>
    </ThemeProvider>
  )
}
