import React from 'react'
import {View, Text} from '../base'
import {FlatList} from 'react-native'

interface ExerciseInstructionsProps {
  description: string
  steps: {id: string; title: string}[]
}

export default function ExerciseInstructions(
  props: ExerciseInstructionsProps,
): React.ReactElement {
  const {description, steps} = props

  return (
    <View marginLeft={4} marginRight={4} flex={2} backgroundColor="white">
      <View marginX={4} paddingBottom={4}>
        <Text fontWeight="bold" paddingY={2} fontSize={0}>
          Description:
        </Text>
        <Text>{description}</Text>
        <Text paddingBottom={2}>Steps:</Text>
        <FlatList
          data={steps}
          renderItem={({item}) => <Step id={item.id} title={item.title} />}
          keyExtractor={(item) => item.id}
          style={{paddingBottom: 100}}
        />
      </View>
    </View>
  )
}

interface StepProps {
  id: string
  title: string
}

function Step(props: StepProps): React.ReactElement {
  const {id, title} = props
  return (
    <Text padding={2}>
      {id}: {title}
    </Text>
  )
}
