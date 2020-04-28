import React from 'react'

import {ThemeProvider} from 'styled-components/native'
import theme from '../../theme'
import {View, Text, Button, Image} from '../../base'
import {Header} from '../../components/hellostyledworld'
import {Alert} from 'react-native'
import NightTimeIndependence from '../NightTimeIndependence'
import DayTimeIndependence from '../DayTimeIndependence'
// import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import {NavigationContainer} from '@react-navigation/native'

export default function IndependenceScreen({navigation}) {
  // const Tab = createBottomTabNavigator()
  return (
    <ThemeProvider theme={theme}>
      <Header text="Independence" />
      <View flex={3} backgroundColor="lightGrey">
        <Text fontSize={36} paddingY={20} paddingX={20}>
          Training:
        </Text>
        <Text>- no whining at night</Text>
        <Text>- no whining when I'm not in the same room as her</Text>
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
