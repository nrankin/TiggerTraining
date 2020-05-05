import React from 'react'

import {ThemeProvider} from 'styled-components/native'
import theme from '../theme'
import {View} from '../base'
import {SmallHeader} from '../components/header'

import ExerciseInstructions from '../components/ExerciseInstructions'

const EXERCISE_STEPS = [
  {id: '1', title: 'ensure she is tired'},
  {id: '2', title: 'put her favourite blanky on the couch'},
  {id: '3', title: 'ask her to come up'},
  {id: '4', title: 'snuuuugggggles'},
]
export default function NightEx2({route}) {
  return (
    <ThemeProvider theme={theme}>
      <SmallHeader text="Snuggle Training" />
      <ExerciseInstructions
        description="For a lovely life"
        steps={EXERCISE_STEPS}
      />
    </ThemeProvider>
  )
}
