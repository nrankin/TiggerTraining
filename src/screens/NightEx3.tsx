import React from 'react'

import {ThemeProvider} from 'styled-components/native'
import theme from '../theme'

import ExerciseInstructions from '../components/ExerciseInstructions'
import {SmallHeader} from '../components/header'

const EXERCISE_STEPS = [
  {
    id: '1',
    title:
      'make sure her crate is only big enough for her to stand up and turn around',
  },
  {
    id: '2',
    title:
      'make her crate like a den with snuggly blankeys covering the whole floor',
  },
  {id: '3', title: 'pop her in her crate overnight'},
]
export default function NightEx3({navigation}) {
  return (
    <ThemeProvider theme={theme}>
      <SmallHeader text="Toilet Training" />
      <ExerciseInstructions
        description="For a clean home. Dogs won't soil their den. Make her crate like a den and she will be unlikely to soil in there. This is one of the biggest advantages of crate training."
        steps={EXERCISE_STEPS}
      />
    </ThemeProvider>
  )
}
