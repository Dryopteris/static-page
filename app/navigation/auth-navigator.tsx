/**
 * This is the navigator you will modify to display the auth screens of your app.
 */
import React from "react"

import { createNativeStackNavigator } from "react-native-screens/native-stack"
import { LoginScreen } from "../screens"

export type PrimaryParamList = {
  login: undefined
}

// Documentation: https://github.com/software-mansion/react-native-screens/tree/master/native-stack
const Stack = createNativeStackNavigator<PrimaryParamList>()

export function AuthNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        gestureEnabled: true,
      }}
    >
      <Stack.Screen name="login" component={LoginScreen} />
    </Stack.Navigator>
  )
}

const exitRoutes = ["login"]
export const canExit = (routeName: string) => exitRoutes.includes(routeName)
