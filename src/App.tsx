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

import HomeScreen from './screens/HomeScreen'
import IndependenceScreen from './screens/IndependenceScreen'
import Greeting from './screens/GreetingScreen'

type RootStackParamList = {
  Home: undefined
  Independence: undefined
  Greeting: undefined
  // other examples:
  // Profile: { userId: string };
  // Feed: { sort: 'latest' | 'top' } | undefined;
}

const RootStack = createStackNavigator<RootStackParamList>()

const App = () => {
  return (
    <NavigationContainer>
      {
        <RootStack.Navigator>
          <RootStack.Screen name="Home" component={HomeScreen} />
          <RootStack.Screen
            name="Independence"
            component={IndependenceScreen}
          />
          <RootStack.Screen name="Greeting" component={Greeting} />
        </RootStack.Navigator>
      }
    </NavigationContainer>
  )
}

export default App
