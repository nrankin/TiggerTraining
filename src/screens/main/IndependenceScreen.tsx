import React from 'react'

import {ThemeProvider} from 'styled-components/native'
import theme from '../../theme'
import {View, Text, Button, Image} from '../../base'
import {Header} from '../../components/hellostyledworld'

import NightTimeIndependence from '../NightTimeIndependence'
import DayTimeIndependence from '../DayTimeIndependence'
// import {createStackNavigator} from '@react-navigation/stack'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'

// const IndependenceStack = createStackNavigator()
const IndependenceStack = createBottomTabNavigator()

export default function IndependenceScreen({navigation}) {
  return (
    <ThemeProvider theme={theme}>
      <Header text="Independence Training" />
      <IndependenceStack.Navigator>
        <IndependenceStack.Screen
          name="Night"
          component={NightTimeIndependence}
          options={{title: 'Night Time'}}
        />
        <IndependenceStack.Screen
          name="Day Time"
          component={DayTimeIndependence}
        />
      </IndependenceStack.Navigator>
    </ThemeProvider>
  )
}
