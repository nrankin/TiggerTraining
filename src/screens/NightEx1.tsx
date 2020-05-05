import React from 'react'

import {ThemeProvider} from 'styled-components/native'
import theme from '../theme'
import {Header} from '../components/hellostyledworld'
import ExerciseInstructions from '../components/ExerciseInstructions'

import {RouteProp} from '@react-navigation/native'
import {StackNavigationProp} from '@react-navigation/stack'
import {NightParamList} from './NightTimeIndependence'

type NightEx1NavigationProp = StackNavigationProp<NightParamList, 'NightEx1'>
type NightEx1RouteProp = RouteProp<NightParamList, 'NightEx1'>
type Props = {
  route: NightEx1RouteProp
  navigation: NightEx1NavigationProp
}

const EXERCISE_STEPS = [
  {id: '1', title: 'ensure she is tired'},
  {id: '2', title: 'put her in her crate'},
  {id: '3', title: 'reward her when she is quiet'},
  {id: '4', title: 'veeerrry slowly increase the time you leave her in there'},
]
export default function NightEx1({route, navigation}: Props) {
  // const dogName: string = route.params.dogName
  const {dogName} = route.params
  const header = 'Crate Training for ' + dogName
  return (
    <ThemeProvider theme={theme}>
      <Header text={header} />
      <ExerciseInstructions
        description="For quiet during the night, actually train her during the day initially."
        steps={EXERCISE_STEPS}
      />
    </ThemeProvider>
  )
}
