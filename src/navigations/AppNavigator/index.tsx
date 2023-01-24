import React from 'react'

import { routes } from '@/constants'
import { Home, Profile } from '@/screens'
import { createDrawerNavigator } from '@react-navigation/drawer'

import { AppParamList } from './appParamList'

const Drawer = createDrawerNavigator<AppParamList>()

const AuthNavigator = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name={routes.HOME} component={Home} />
      <Drawer.Screen name={routes.PROFILE} component={Profile} />
    </Drawer.Navigator>
  )
}

export default AuthNavigator
