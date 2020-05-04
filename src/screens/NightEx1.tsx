import React from 'react'

import {ThemeProvider} from 'styled-components/native'
import theme from '../theme'
import {Header} from '../components/hellostyledworld'
import ExerciseInstructions from '../components/ExerciseInstructions'

const EXERCISE_STEPS = [
  {id: '1', title: 'ensure she is tired'},
  {id: '2', title: 'put her in her crate'},
  {id: '3', title: 'reward her when she is quiet'},
  {id: '4', title: 'veeerrry slowly increase the time you leave her in there'},
]
export default function NightEx1({navigation}) {
  return (
    <ThemeProvider theme={theme}>
      <Header text="Crate Training" />
      <ExerciseInstructions
        description="For quiet during the night, actually train her during the day initially."
        steps={EXERCISE_STEPS}
      />
    </ThemeProvider>
  )
}
