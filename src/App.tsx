/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react'

import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'

import HomeScreen from './screens/main/HomeScreen'
import IndependenceScreen from './screens/main/IndependenceScreen'
import Greeting from './screens/main/GreetingScreen'

export type RootStackParamList = {
  Home: undefined
  Independence: {dogName: string} | undefined
  Greeting: undefined
}

const RootStack = createStackNavigator<RootStackParamList>()

const App = () => {
  const dogName: string = 'Tigger'
  return (
    <NavigationContainer>
      {
        <RootStack.Navigator>
          <RootStack.Screen name="Home" component={HomeScreen} />
          <RootStack.Screen
            name="Independence"
            component={IndependenceScreen}
            initialParams={{dogName: dogName}}
          />
          <RootStack.Screen name="Greeting" component={Greeting} />
        </RootStack.Navigator>
      }
    </NavigationContainer>
  )
}

export default App
