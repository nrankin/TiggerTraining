import React from 'react'

import {ThemeProvider} from 'styled-components/native'
import theme from '../theme'
import {View, Text, Button, Image} from '../base'
import {Alert} from 'react-native'
import {createStackNavigator} from '@react-navigation/stack'
import NightEx1 from './NightEx1'
import NightEx2 from './NightEx2'
import NightEx3 from './NightEx3'
import {SmallHeader, MediumHeader} from '../components/header'

export type NightParamList = {
  NightEx1: {dogName: string} | undefined
  NightEx2: {dogName: string} | undefined
  NightEx3: {dogName: string} | undefined
}

const NightStack = createStackNavigator<NightParamList>()

export default function IndependenceScreen({route, navigation}) {
  const {dogName} = route.params
  const header = 'Expected Outcomes for ' + dogName
  return (
    <ThemeProvider theme={theme}>
      <View backgroundColor="lightGrey">
        <MediumHeader text="Night Time" />
        <SmallHeader text={header} />

        <Text paddingBottom={2} alignSelf="center">
          * relaxed in their crate *
        </Text>
      </View>

      <NightStack.Navigator>
        <NightStack.Screen
          name="NightEx1"
          component={NightEx1}
          options={{title: 'Exercise 1'}}
          initialParams={{dogName: dogName}}
        />
        <NightStack.Screen
          name="NightEx2"
          component={NightEx2}
          options={{title: 'Exercise 2'}}
          initialParams={{dogName: dogName}}
        />
        <NightStack.Screen
          name="NightEx3"
          component={NightEx3}
          options={{title: 'Exercise 3'}}
          initialParams={{dogName: dogName}}
        />
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
