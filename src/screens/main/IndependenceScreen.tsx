import React from 'react'

import {ThemeProvider} from 'styled-components/native'
import theme from '../../theme'
import {Text} from '../../base'
import {LargeHeader} from '../../components/header'

import NightTimeIndependence from '../NightTimeIndependence'
import DayTimeIndependence from '../DayTimeIndependence'
// import {createStackNavigator} from '@react-navigation/stack'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'

type IndependenceParamList = {
  Night: {dogName: string} | undefined
  Day: undefined
}
const IndependenceBottomTab = createBottomTabNavigator<IndependenceParamList>()

export default function IndependenceScreen({route}) {
  const dogName: string = route.params.dogName
  const header = 'Independence Training for ' + dogName
  return (
    <ThemeProvider theme={theme}>
      <LargeHeader text={header} />
      <IndependenceBottomTab.Navigator>
        <IndependenceBottomTab.Screen
          name="Night"
          component={NightTimeIndependence}
          options={{title: 'Night Time'}}
          initialParams={{dogName: dogName}}
        />
        <IndependenceBottomTab.Screen
          name="Day"
          component={DayTimeIndependence}
          options={{title: 'Day Time'}}
        />
      </IndependenceBottomTab.Navigator>
    </ThemeProvider>
  )
}
