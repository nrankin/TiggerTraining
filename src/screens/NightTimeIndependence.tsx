import React from 'react'

import {ThemeProvider} from 'styled-components/native'
import theme from '../theme'
import {View, Text, Button, Image} from '../base'
import {Alert} from 'react-native'
import {createStackNavigator} from '@react-navigation/stack'
import NightEx1 from './NightEx1'
import NightEx2 from './NightEx2'
import NightEx3 from './NightEx3'

const NightStack = createStackNavigator()

export default function IndependenceScreen({navigation}) {
  return (
    <ThemeProvider theme={theme}>
      <View backgroundColor="lightGrey">
        <Text fontSize={4} paddingY={20} paddingX={20}>
          Expected Outcomes:
        </Text>
        <Text>- no whining while in the crate</Text>
      </View>

      <NightStack.Navigator>
        <NightStack.Screen
          name="NightEx1"
          component={NightEx1}
          options={{title: 'Night'}}
        />
        <NightStack.Screen name="NightEx2" component={NightEx2} />
        <NightStack.Screen name="NightEx3" component={NightEx3} />
      </NightStack.Navigator>
      <View>
        <Button
          color="black"
          title="Night Exercise 1"
          onPress={() => navigation.navigate('NightEx1')}
        />
        <Button
          color="black"
          title="Night Exercise 2"
          onPress={() => navigation.navigate('NightEx2')}
        />
        <Button
          color="black"
          title="Night Exercise 3"
          onPress={() => navigation.navigate('NightEx3')}
        />
      </View>
      <View marginY={3}>
        <Button
          title="Ko wai he kuri pai?"
          onPress={() => Alert.alert('Ko koe e Tigger!')}
        />
      </View>
    </ThemeProvider>
  )
}
