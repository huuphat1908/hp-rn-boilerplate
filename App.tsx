import '@/i18n'

import { NativeBaseProvider } from 'native-base'
import React from 'react'
import { Provider as StoreProvider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'

import { theme } from '@/configs'
import MainNavigator from '@/navigations/MainNavigator'
import { persistor, store } from '@/store'

const App = () => {
  return (
    <StoreProvider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NativeBaseProvider theme={theme}>
          <MainNavigator />
        </NativeBaseProvider>
      </PersistGate>
    </StoreProvider>
  )
}

export default App
