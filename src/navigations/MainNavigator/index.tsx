import React, { useCallback } from 'react'
import RNBootSplash from 'react-native-bootsplash'

import { NavigationContainer } from '@react-navigation/native'

import AppNavigator from '../AppNavigator'
import AuthNavigator from '../AuthNavigator'

const MainNavigator = () => {
  const isLoggedIn = false

  const hideSplashScreen = useCallback(() => {
    RNBootSplash.hide()
  }, [])

  return (
    <NavigationContainer onReady={hideSplashScreen}>
      {isLoggedIn ? <AppNavigator /> : <AuthNavigator />}
    </NavigationContainer>
  )
}

export default MainNavigator
