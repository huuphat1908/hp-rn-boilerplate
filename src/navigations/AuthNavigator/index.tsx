import React from 'react'

import { routes } from '@/constants'
import { Login, Register } from '@/screens'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { AuthParamList } from './authParamList'

const Stack = createNativeStackNavigator<AuthParamList>()

const AuthNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name={routes.LOGIN} component={Login} />
      <Stack.Screen name={routes.REGISTER} component={Register} />
    </Stack.Navigator>
  )
}

export default AuthNavigator
