/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react'

import {ThemeProvider} from 'styled-components/native'
import theme from './theme'
import {View, Text, Button, Image} from './base'
import {Header} from './components/hellostyledworld'
import Behaviors from './behaviors'
import {Alert} from 'react-native'

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <Image
        flex={3}
        source={require('./images/tigga-headshot-main.jpg')}
        // eslint-disable-next-line react-native/no-inline-styles
        style={{height: 500, width: 420}}
      />
      <View flex={2.5} backgroundColor="red">
        <Text fontSize={36} paddingY={20} paddingX={20}>
          Training:
        </Text>
        <Behaviors />
      </View>
      <View flex={1} marginY={60}>
        <Button
          title="Ko wai he kuri pai?"
          onPress={() => Alert.alert('Ko koe e Tigger!')}
        />
      </View>
    </ThemeProvider>
  )
}

export default App
