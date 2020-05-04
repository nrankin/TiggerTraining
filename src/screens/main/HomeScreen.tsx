import React from 'react'

import {ThemeProvider} from 'styled-components/native'
import theme from '../../theme'
import {View, Text, Button, Image} from '../../base'
import {Header} from '../../components/hellostyledworld'

export default function HomeScreen({navigation}) {
  return (
    <ThemeProvider theme={theme}>
      <Header text="Haere mai e Tigger" />
      <Image
        flex={4}
        source={require('../../images/tigga-headshot-main.jpg')}
        // eslint-disable-next-line react-native/no-inline-styles
        style={{height: 500, width: 420}}
      />
      <View flex={3} backgroundColor="lightGrey">
        <Text fontSize={36} paddingY={20} paddingX={20}>
          Training:
        </Text>

        <Button
          color="black"
          title="Independence Training"
          onPress={() => navigation.navigate('Independence')}
        />
        <Button
          color="black"
          title="Greeting"
          onPress={() => navigation.navigate('Greeting')}
        />
        {/* <Behaviors /> */}
      </View>
    </ThemeProvider>
  )
}
